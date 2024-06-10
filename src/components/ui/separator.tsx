import * as React from "react";

function Separator({ color = "primary" }: { color?: "primary" | "secondary" }) {
  return (
    <div
      className={`h-1 w-14 ${color === "primary" ? "bg-primary-800/80" : "bg-secondary-500"} rounded-full`}
    ></div>
  );
}

export { Separator };
