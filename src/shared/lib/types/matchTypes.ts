export interface Player {
  username: string;
  kills: number;
}

export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}

export interface Match {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: "Scheduled" | "Ongoing" | "Finished";
}

export interface ApiResponse {
  ok: boolean;
  data?: { matches: Match[] };
  error?: string;
}
