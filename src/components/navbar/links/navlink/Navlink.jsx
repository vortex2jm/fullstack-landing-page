"use client"

import Link from "next/link"
import styles from "./navlink.module.css"
import { usePathname } from "next/navigation"

const Navlink = ({item}) => {
    
    const pathName = usePathname();
    
    return (
        <Link href={item.path} className={`${styles.container} 
        ${item.path === pathName && styles.active}`}>{item.title}
        </Link>
    )
}

export default Navlink
