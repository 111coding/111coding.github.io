import clsx from "clsx";
import styles from "./styles.module.css";
import { HTMLAttributeAnchorTarget } from "react";

type HomeButtonProps = {
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
};

function HomeBotton({ text, href, target }: HomeButtonProps) {
  return (
    <div>
      <a href={href} className={clsx(styles.homeButton)} target={target}>
        {text}
      </a>
    </div>
  );
}

export default function HomeBottonGroup() {
  return (
    <>
      <div className={clsx(styles.homeButtonContrainer)}>
        <HomeBotton text="AboutMe" href="/docs/aboutme" />
        <div className={clsx(styles.buttonSpacer)} />
        <HomeBotton text="Blog" href="/blog" />
        <div className={clsx(styles.buttonSpacer)} />
        <HomeBotton
          text="GitHub"
          href="https://github.com/111coding"
          target="blank"
        />
        <div className={clsx(styles.buttonSpacer)} />
        <HomeBotton
          text="LinkedIn"
          href="http://linkedin.com/in/jiwon-lee-mark"
          target="blank"
        />
      </div>
    </>
  );
}
