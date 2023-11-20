import styles from './SignUp.module.css'

export default function SignUp() {
    return (
        <div className={styles.signUp}>
            <h1 className={styles.header}>Sign up and stay up to date with our newest releases and when our updates launch</h1>
            <form className={styles.form}>
                <label for="name" className={styles.label}>First name<p className={styles.red}>*</p></label>
                <input type='text' id="name" name="name" className={styles.input} />
                <label for="lastName" className={styles.label}>Last name<p className={styles.red}>*</p></label>
                <input type='text' id="lastName" name="lastName" className={styles.input} />
                <label for="email" className={styles.label}>Email<p className={styles.red}>*</p></label>
                <input type="email" id="email" name="email" className={styles.input} />
                <input type="submit" value="Sign Up" className={styles.button} />
            </form>
        </div>
    )
}