import { ChevronDown } from "lucide-react";
import React from "react";
import styles from "./styles.module.css";

function ScrollDown() {
  return (
    <span className={`absolute left-[50%] bottom-[5%] ${styles.bounce}`}>
      <a href="#story">
        <ChevronDown size={64} className="text-primary-300" />
      </a>
    </span>
  );
}

export default ScrollDown;
