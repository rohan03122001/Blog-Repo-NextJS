import React from "react";
import Link from "next/link";
import Links from "./links/links";

export default function Navbar() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
}
