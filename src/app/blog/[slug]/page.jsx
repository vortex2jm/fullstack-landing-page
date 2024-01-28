import PostUser from "@/components/postUser/postUser";
import styles from "./singlepost.module.css";
import Image from "next/image";
import { Suspense } from "react";

async function getData(slug) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={"/blog.jpg"} alt="post image" fill></Image>
        </div>
      </div>
      <div className={styles.right}>
        <h2>{post.title}</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId} />
        </Suspense>
        <p className={styles.desc}>{post.body}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
