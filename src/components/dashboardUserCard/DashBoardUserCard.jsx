import styles from "./usercard.module.css"
import Image from "next/image"
import { FaTrashAlt } from "react-icons/fa";

const DashBoardUserCard = ({ props }) => {
  return(
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/avatar.jpg"} alt="avatar" className={styles.avatar} fill/>
      </div>
      <div className={styles.info}>
        <span>{props.name}</span>
        <p>johndoe@gmail.com</p>
      </div>
      <FaTrashAlt color="palevioletred" className={styles.trash}/>
    </div>
  )
}

export default DashBoardUserCard
