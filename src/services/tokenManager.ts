import axios from "axios";

class TokenManager {
  private static instance: TokenManager;
  private token: string | null = null;
  private expiry: number = 0;

  private constructor() {}

  static getInstance(): TokenManager {
    if (!TokenManager.instance) TokenManager.instance = new TokenManager();
    return TokenManager.instance;
  }

  async getToken(
    clientId: string,
    clientSecret: string,
    tokenUrl: string
  ): Promise<string> {
    const now = Date.now();
    if (this.token && now < this.expiry) return this.token;

    const resp = await axios.post(
      tokenUrl,
      "grant_type=client_credentials&scope=content",
      {
        auth: { username: clientId, password: clientSecret },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    this.token = resp.data.access_token;
    // expire with 1 min buffer
    this.expiry = now + resp.data.expires_in * 1000 - 60000;

    if (!this.token) {
      return "";
    }
    return this.token;
  }
}

export default TokenManager;
