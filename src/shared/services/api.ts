import axios from "axios";
import type { Match, ApiResponse } from "@/shared/lib/types/matchTypes";

const API_URL = "https://app.ftoyd.com/fronttemp-service";

export const fetchMatches = async (): Promise<Match[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${API_URL}/fronttemp`);

    if (!response.data.ok || !response.data.data?.matches) {
      throw new Error("Некорректный ответ от сервера");
    }

    return response.data.data.matches;
  } catch (error) {
    console.error("Ошибка при загрузке матчей:", error);
    return [];
  }
};
