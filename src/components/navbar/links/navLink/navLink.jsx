"use client";

import Link from "next/link";
import React from "react";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

function NavLink({ item }) {
  const pathName = usePathname();

  return (
    <Link
      href={item.link}
      className={`${styles.container} ${
        pathName === item.link && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
