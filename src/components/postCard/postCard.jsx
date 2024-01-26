import styles from "./postcard.module.css"
import Link from "next/link"
import Image from "next/image"

const PostCard = () => {

    return (
        <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.imgContainer}>
                        <Image src={"/blog.jpg"} alt="card image" fill className={styles.img}></Image>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h2>
                        Title
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis porro nisi deserunt 
                        provident libero cumque quia neque quas voluptatibus. 
                    </p>
                    <Link href={"/blog"} className={styles.link}>READ MORE</Link>
                </div>          
        </div>
    )
}

export default PostCard
