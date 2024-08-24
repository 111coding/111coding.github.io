import clsx from "clsx";

import HomeBottonGroup from "../HomeButton";
import HomeLogoText from "../HomeLogoText";
import styles from "./index.module.css";

export default function HomeLogoWithButtons(): JSX.Element {
  return (
    <div className={clsx(styles.outerContainer)}>
      <div className={clsx(styles.innerContainer)}>
        <HomeLogoText />
        <div className={clsx(styles.space)} />
        <HomeBottonGroup />
        <div className={clsx(styles.spaceBottom)} />
      </div>
    </div>
  );
}
