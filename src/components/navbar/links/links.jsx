import React from "react";
import Link from "next/link";

const Links = () => {
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
  return (
    <div>
      {link.map((item) => {
        return (
          <Link href={item.link} key={item.title}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
