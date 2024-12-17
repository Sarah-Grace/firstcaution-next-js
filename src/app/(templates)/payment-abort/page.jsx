import styles from './Abort.module.css';

function Success() {
  return (
    <div className={styles.main}>
      <div className={styles.messageBlock}>
        <div className={styles.xMark}>X</div>
        <h1 className={styles.h1}>Your payment has been aborted</h1>
        <p className={styles.p}>Payment aborted. Please retry or verify your payment details.</p>
        {/* <a href="#" className={styles.button}>
          Go to Dashboard
        </a> */}
      </div>
    </div>
  )
}

export default Success