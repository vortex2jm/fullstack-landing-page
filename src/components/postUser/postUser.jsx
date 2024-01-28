import Image from "next/image";
import styles from "./postuser.module.css";

async function getData(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PostUser = async ({ userId }) => {
  const user = await getData(userId);

  return (
    <div className={styles.info}>
      <div className={styles.avatarContainer}>
        <Image
          src={"/avatar.jpg"}
          alt="avatar"
          className={styles.avatar}
          fill
        ></Image>
      </div>
      <div className={styles.author}>
        <p>Author</p>
        <span>{user.name}</span>
      </div>
      <div className={styles.published}>
        <p>Published</p>
        <span>01 Nov 2023</span>
      </div>
    </div>
  );
};

export default PostUser;
