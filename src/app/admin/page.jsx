import styles from "./admin.module.css";
import DashBoardForm from "@/components/dashboardForm/DashboardForm";
import DashBoardPostCard from "@/components/dashboardPostCard/DashBoardPostCard";
import DashBoardUserCard from "@/components/dashboardUserCard/DashBoardUserCard";
import axios from "axios"

// Call Route Handlers endpoint
const getPosts = async () => {
	const posts = [
		{
			title: "jota"
		},
		{
			title: "jota"
		},
		{
			title: "jota"
		},
		{
			title: "jota"
		},
		{
			title: "jota"
		}
	]
	return posts 
}

//Users
const getUsers = async () => {
	const users = [
		{
			name: "Jao"
		},
		{
			name: "Jao"
		},
		{
			name: "Jao"
		},
		{
			name: "Jao"
		},
		{
			name: "Jao"
		},
		{
			name: "Jao"
		},
		{
			name: "Jao"
		}
	]
	return users
}


const AdminPage = async () => {
  
	const posts = await getPosts()
	const users = await getUsers()

	return(
      <div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.posts}>
						<h2>Blog posts</h2>
						<div className={styles.postBox}>
							{posts.map((post) => (
								<DashBoardPostCard props={post} key={post.title}/>
							))}
						</div>
					</div>
					<div className={styles.newPost}>
						<h2>Add new post</h2>
						<DashBoardForm />			
					</div>
				</div>
				<div className={styles.bottom}>
					<h2>Registered users</h2>
					<div className={styles.usersBox}>
						{users.map((user) => (
							<DashBoardUserCard props={user} key={user.name}/>
						))}
					</div>			
				</div>
			</div>
    ) 
};

export default AdminPage;
