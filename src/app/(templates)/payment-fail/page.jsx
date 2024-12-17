import styles from './Fail.module.css';

function Success() {
  return (
    <div className={styles.main}>
      <div className={styles.messageBlock}>
        <div className={styles.xMark}>X</div>
        <h1 className={styles.h1}>Your payment has been failed</h1>
        <p className={styles.p}>Your payment could not be processed. Please try again or check your payment details.</p>
        {/* <a href="#" className={styles.button}>
          Go to Dashboard
        </a> */}
      </div>
    </div>
  )
}

export default Success