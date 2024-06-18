import { ChevronDown } from "lucide-react";
import React from "react";
import styles from "./styles.module.css";

function ScrollDown({targetId}:{targetId:string}) {
  return (
    <span className={`absolute left-[50%] bottom-[5%] ${styles.bounce}`}>
      <a href={`#${targetId}`}>
        <ChevronDown size={64} className="text-primary-300" />
      </a>
    </span>
  );
}

export default ScrollDown;
