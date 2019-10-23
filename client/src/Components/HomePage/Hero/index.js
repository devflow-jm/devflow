import React from "react";
import styles from "./hero.module.scss";
import "../../../scss/style.scss";
import cn from "classnames";

const Hero = () => {
  return (
    <div>
      <h2 className={cn([styles.test], "test")}>Hero</h2>
    </div>
  );
};

export default Hero;
