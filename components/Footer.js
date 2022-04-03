import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>Twitter: <a href="https://twitter.com/casualuva">https://twitter.com/casualuva</a></p>
        <p>Email: <a href="mailto:casualuva@gmail.com">casualuva@gmail.com</a></p>
      </footer>
    </>
  )
}
