import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { axiosClient as axios } from "@/lib/utils";

async function getData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store"})
    return res.json()
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

const Blog = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard className={styles.card} key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default Blog;
