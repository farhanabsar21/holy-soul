import axios from "axios";
import TokenManager from "./tokenManager";
import logger from "@/lib/logger";

export function createQuranService(
  clientId: string,
  clientSecret: string,
  apiBaseUrl: string,
  tokenUrl: string
) {
  const tokenManager = TokenManager.getInstance();

  return {
    getChapters: async () => {
      const token = await tokenManager.getToken(
        clientId,
        clientSecret,
        tokenUrl
      );
      const res = await axios.get(`${apiBaseUrl}/chapters`, {
        headers: { "x-auth-token": token, "x-client-id": clientId },
      });
      logger.info("Quran data", res.data);
      return res.data;
    },
  };
}
