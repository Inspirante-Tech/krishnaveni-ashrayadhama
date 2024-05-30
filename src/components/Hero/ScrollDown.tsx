import { ChevronDown } from 'lucide-react'
import React from 'react'
import style from "./styles.module.css"

function ScrollDown() {
    return (
        <span className={`absolute left-[50%] bottom-[5%] -translate-x-0.5 -translate-y-0.5 z-10 ${style.bounce}`}>
            <a href="#section05"><ChevronDown size={64}/></a>
        </span>
    )
}

export default ScrollDown