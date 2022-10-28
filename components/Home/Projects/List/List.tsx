import React from "react";
import Project from "./Project";

export default function List() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}
