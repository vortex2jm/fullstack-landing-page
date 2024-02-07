"use client";
import { useEffect, useState } from "react";
import styles from "./links.module.css";
import Navlink from "./navlink/Navlink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { isAdminUser } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(false)

  const handleButtonState = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    async function getUserRole() {
      try {
        const isAdmin = await isAdminUser(session)
        setRole(isAdmin)
      } catch (error) {
        throw new Error(error)
      }
    }
    getUserRole()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {role && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button className={styles.mbt} onClick={handleButtonState}>
        <Image src={"/menu.svg"} alt="menu" width={50} height={50} />
      </button>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
