import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email Address"></input>
        <input type="text" placeholder="Phone Number (optional)"></input>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Message"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
