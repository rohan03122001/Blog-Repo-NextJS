"use client";

import React from "react";
import Link from "next/link";
import NavLink from "./navLink/navLink";

import styles from "./links.module.css";

const link = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = React.useState(false);

  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {link.map((item) => {
          return <NavLink item={item} key={item.title} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", link: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", link: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        menu
        {open && (
          <div className={styles.mobileLinks}>
            {link.map((item) => {
              return <NavLink item={item} key={item.title} />;
            })}
          </div>
        )}
      </button>
    </div>
  );
};

export default Links;
