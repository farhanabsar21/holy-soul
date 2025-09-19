import TokenManager from "@/services/tokenManager";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("TokenManager", () => {
  beforeEach(() => {
    mockedAxios.post.mockReset();
    // Reset the singleton by deleting the cached instance
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    TokenManager.instance = undefined;
  });

  it("fetches a new token", async () => {
    mockedAxios.post.mockResolvedValue({
      data: { access_token: "test-token", expires_in: 3600 },
    });

    const tm = TokenManager.getInstance();
    const token = await tm.getToken("id", "secret", "url");

    expect(token).toBe("test-token");
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });

  it("returns cached token if not expired", async () => {
    mockedAxios.post.mockResolvedValue({
      data: { access_token: "cached-token", expires_in: 3600 },
    });

    const tm = TokenManager.getInstance();

    // First call -> fetch from API
    const firstToken = await tm.getToken("id", "secret", "url");
    expect(firstToken).toBe("cached-token");

    // Second call -> return cached token, no extra API hit
    const secondToken = await tm.getToken("id", "secret", "url");
    expect(secondToken).toBe("cached-token");
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });
});
