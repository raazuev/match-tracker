import { Match } from "@/shared/services/api";
import styles from "./TeamCard.module.scss";

interface TeamCardProps {
  match: Match;
  isOpen: boolean;
  toggleOpen: () => void;
}

export const TeamCard = ({ match, isOpen, toggleOpen }: TeamCardProps) => {
  const getStatusLabel = (status: Match["status"]) => {
    switch (status) {
      case "Scheduled":
        return "Запланирован";
      case "Ongoing":
        return "В процессе";
      case "Finished":
        return "Завершён";
      default:
        return "Неизвестно";
    }
  };

  return (
    <div
      className={`${styles.teamCard} ${isOpen ? styles.open : ""}`}
      onClick={toggleOpen}
    >
      <div className={styles.matchHeader}>
        <h3>{match.title}</h3>
        <span className={styles.matchTime}>
          {new Date(match.time).toLocaleString("ru-RU", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <div className={styles.teamInfo}>
        <div className={styles.team}>
          <span className={styles.teamName}>{match.homeTeam.name}</span>
          <span className={styles.teamScore}>{match.homeScore}</span>
        </div>

        <div className={styles.status}>
          <span
            className={`${styles.statusLabel} ${
              styles[match.status.toLowerCase()]
            }`}
          >
            {getStatusLabel(match.status)}
          </span>
          {match.status === "Ongoing"}
        </div>

        <div className={styles.team}>
          <span className={styles.teamScore}>{match.awayScore}</span>
          <span className={styles.teamName}>{match.awayTeam.name}</span>
        </div>
      </div>
    </div>
  );
};
