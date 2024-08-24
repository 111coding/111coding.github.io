import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomeLogoText() {
  return (
    <>
      <div className={clsx(styles.homeLogoWrapper)}>
        <div className={clsx(styles.homeLogo)} data-glitch="111CODING">
          111CODING
        </div>
        <span className={clsx(styles.cursor)}></span>
      </div>
    </>
  );
}
