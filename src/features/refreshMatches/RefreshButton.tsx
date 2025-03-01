import React from "react";
import styles from "./RefreshButton.module.scss";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const RefreshButton = ({
  children,
  onClick,
  type = "button",
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className)}
      type={type}
    >
      {children}
    </button>
  );
};
