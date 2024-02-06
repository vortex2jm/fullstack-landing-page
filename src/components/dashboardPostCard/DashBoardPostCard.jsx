import styles from "./postcard.module.css"

const DashBoardPostCard = ({ props }) => {
  return (
    <div className={styles.container}>
      {props.title}
    </div>
  )
}

export default DashBoardPostCard
