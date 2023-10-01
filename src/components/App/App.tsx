import React from "react";
import styles from "./App.module.scss";
import clsx from "clsx";
import { useShowPopup } from "@vkruglikov/react-telegram-web-app";

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {
  const showPopup = useShowPopup();

  const showPopupOnClick = async () => {
    const message =
      "Thanks for using react-mini-app! I hope it helps you to create awesome Telegram Mini apps!";
    await showPopup({ title: "Hey!", message: message });
  };

  return (
    <div className={clsx(styles.App, className)}>
      <div className={styles.container}>
        <a
          href="https://github.com/usernein/react-mini-app"
          target="_blank"
          className={styles.githubLink}
        >
          <h1 className={styles.title}>react-mini-app</h1>
        </a>

        <button onClick={showPopupOnClick} className={styles.clickMe}>
          Show popup!
        </button>
      </div>
    </div>
  );
};
