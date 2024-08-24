import clsx from "clsx";
import { HTMLAttributeAnchorTarget } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type HomeButtonProps = {
  text: string;
  to: string;
  target?: HTMLAttributeAnchorTarget;
};

function HomeBotton({ text, to: href, target }: HomeButtonProps) {
  return (
    <div>
      <Link to={href} className={clsx(styles.homeButton)} target={target}>
        {text}
      </Link>
    </div>
  );
}

export default function HomeBottonGroup() {
  return (
    <>
      <div className={clsx(styles.homeButtonContrainer)}>
        <HomeBotton text="AboutMe" to="/docs/AboutMe" />
        <div className={clsx(styles.buttonSpacer)} />
        <HomeBotton text="Blog" to="/blog" />
        <div className={clsx(styles.buttonSpacer)} />
        <HomeBotton
          text="GitHub"
          to="https://github.com/111coding"
          target="blank"
        />
        <div className={clsx(styles.buttonSpacer)} />
        <HomeBotton
          text="LinkedIn"
          to="http://linkedin.com/in/jiwon-lee-mark"
          target="blank"
        />
      </div>
    </>
  );
}
