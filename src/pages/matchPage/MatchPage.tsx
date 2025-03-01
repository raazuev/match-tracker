import { CardsTeams } from "@/widgets/match/cardsTeams/CardsTeams";
import styles from "./MatchPage.module.scss";

export const MatchPage = () => {
  return (
    <div className={styles.match_page}>
      <CardsTeams />
    </div>
  );
};
