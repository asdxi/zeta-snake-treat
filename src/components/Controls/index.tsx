import { useState } from "react";

import "./Controls.css";

export default function Controls(props: any) {

    const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("top");

    return (
        <div className="controlBar">
            <button id="top" onClick={() => setDirection("top")}>{"^"}</button>
            <button id="bottom" onClick={() => setDirection("bottom")}>{"^"}</button>
            <button id="left" onClick={() => setDirection("left")}>{"<"}</button>
            <button id="right" onClick={() => setDirection("right")}>{">"}</button>
        </div>
    );
}