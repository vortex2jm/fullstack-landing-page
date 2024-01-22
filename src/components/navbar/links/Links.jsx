"use client"

import { useState } from "react";
import styles from "./links.module.css";
import Navlink from "./navlink/Navlink";

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
		path: "/posts",
	},
];

const Links = () => {

	const [open, setOpen] = useState(false)

  const session = false;
  const isAdmin = true;

	const handleButtonState = () => {
		setOpen((prev) => !prev);
	}

  return (	
		<div className={styles.container}>
    	<div className={styles.links}>
    	  {links.map((link) => (
    	    <Navlink item={link} key={link.title} />
    	  ))}
    	  {session ? (
    	    <>
    	      {isAdmin && <Navlink item={{ title: "admin", path: "/admin" }} />}
    	      <button className={styles.logout}>Logout</button>
    	    </>
    	  ) : (
    	    <Navlink item={{ title: "login", path: "/login" }} />
    	  )}
    	</div>

			<button className={styles.mbt} onClick={handleButtonState}>Menu</button>
			
			{open && 
				<div className={styles.mobileLinks}>
					{links.map((link) => (
    	    <Navlink item={link} key={link.title} />
    	  ))}
				</div>
			}

		</div>

  );
};

export default Links;
