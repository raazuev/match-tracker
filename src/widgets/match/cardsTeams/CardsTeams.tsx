import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "@/shared/services/api";
import { TeamCard } from "../teamCard/TeamCard";
import { MatchResult } from "../matchResult/MatchResult";
import styles from "./CardsTeams.module.scss";

export const CardsTeams = () => {
  const [openResult, setOpenResult] = useState<number | null>(null);

  const {
    data: matches,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error)
    return (
      <p className={styles.error}>Ошибка: не удалось загрузить информацию</p>
    );

  return (
    <div className={styles.inner}>
      {matches?.map((match, index) => (
        <div key={index} className={styles.cards__teams}>
          <TeamCard
            match={match}
            isOpen={openResult === index}
            toggleOpen={() =>
              setOpenResult(openResult === index ? null : index)
            }
          />
          {openResult === index && <MatchResult match={match} />}
        </div>
      ))}
    </div>
  );
};
