import styles from "./form.module.css"

const DashBoardForm = () => {  
  return (
    <div className={styles.container}>
      <form className={styles.form}>
	    	<input type="text" name="title" placeholder="Title"></input>
	    	<textarea name="desc" cols={30} rows={10} placeholder="Description"></textarea>
	    	<input type="text" name="img" placeholder="Image link here"></input>
        <button>Send</button>
      </form>
    </div>
  )
}

export default DashBoardForm
