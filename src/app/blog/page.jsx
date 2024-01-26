import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <PostCard className={styles.card} />
      <PostCard className={styles.card} />
      <PostCard className={styles.card} />
      <PostCard className={styles.card} />
      <PostCard className={styles.card} />
    </div>
  );
};

export default Blog;
