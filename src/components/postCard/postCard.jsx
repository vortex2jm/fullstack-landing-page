import styles from "./postcard.module.css";
import Link from "next/link";
import Image from "next/image";

const PostCard = async ({post}) => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={"/blog.jpg"}
            alt="card image"
            fill
            className={styles.img}
          ></Image>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>{post.title}</h2>
        <p>
          {post.body}
        </p>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
