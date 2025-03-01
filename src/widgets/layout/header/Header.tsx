import { useQueryClient } from "@tanstack/react-query";
import { RefreshButton } from "@/features/refreshMatches/RefreshButton";
import styles from "./Header.module.scss";

export const Header = () => {
  const queryClient = useQueryClient();

  const handleReload = () => {
    queryClient.invalidateQueries({ queryKey: ["matches"] });
  };

  return (
    <div className={styles.header}>
      <section>
        <h1 className={styles.header__title}>Match Tracker</h1>
      </section>
      <section>
        <RefreshButton onClick={handleReload}>Обновить</RefreshButton>
      </section>
    </div>
  );
};
