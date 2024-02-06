import styles from "./postcard.module.css"
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image"

const DashBoardPostCard = ({ props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/blog.jpg"} alt="blog img" className={styles.image} fill/>
      </div>
      <div>
        <span className={styles.title}>{props.title}</span>
      </div>
        <FaTrashAlt color="palevioletred" className={styles.trash}/>
    </div>
  )
}

export default DashBoardPostCard
