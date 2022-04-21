import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>Petition: <a href="https://nocasualisationuva.petities.nl">https://nocasualisationuva.petities.nl/?</a></p>
        <p>Twitter: <a href="https://twitter.com/casualuva">https://twitter.com/casualuva</a></p>
        <p>Email: <a href="mailto:casualuva@gmail.com">casualuva@gmail.com</a></p>
        <p>Casual Academy: <a href="https://casualacademy.nl/">https://casualacademy.nl/</a></p>
      </footer>
    </>
  )
}
