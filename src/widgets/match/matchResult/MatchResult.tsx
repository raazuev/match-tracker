import { Match, Team } from "@/shared/services/api";
import styles from "./MatchResult.module.scss";

interface MatchResultProps {
  match: Match;
}

export const MatchResult = ({ match }: MatchResultProps) => {
  return (
    <div className={styles.cards__result}>
      {[match.homeTeam, match.awayTeam].map((team, index) => (
        <section key={index} className={styles.cards__result__item}>
          <h3 className={styles.teamName}>{team.name}</h3>

          <div className={styles.players}>
            {team.players.map((player, playerIndex) => (
              <div key={playerIndex} className={styles.player}>
                <span className={styles.playerName}>{player.username}</span>
                <span className={styles.kills}>
                  <strong>Убийств:</strong> {player.kills}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.teamStats}>
            <div>
              <p>Очки:</p>
              <span>{team.points}</span>
            </div>
            <div>
              <p>Место:</p>
              <span>{team.place}</span>
            </div>
            <div>
              <p>Всего убийств:</p>
              <span>{team.total_kills}</span>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
