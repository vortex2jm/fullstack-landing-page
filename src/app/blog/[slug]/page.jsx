import styles from "./singlepost.module.css"
import Image from "next/image"

const SinglePostPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={"/blog.jpg"} alt="post image" fill></Image>
                </div>
            </div>
            <div className={styles.right}>
                <h2>Title</h2>
                <div className={styles.info}>
                    <div className={styles.avatarContainer}>
                        <Image src={"/avatar.jpg"} alt="avatar" className={styles.avatar} fill></Image>
                    </div>
                    <div className={styles.author}>
                        <p>Author</p>
                        <span>Terry jheferson</span>
                    </div>
                    <div className={styles.published}>
                        <p>Published</p>
                        <span>01 Nov 2023</span>                        
                    </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Porro beatae minima ad dolor eaque nesciunt laudantium! 
                   Officiis autem fuga necessitatibus maxime eaque facilis, 
                   explicabo fugit consequatur exercitationem? Quos, quia fugit.
                </p>
            </div>
        </div>
    )
}

export default SinglePostPage
