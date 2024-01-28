import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store"})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
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
