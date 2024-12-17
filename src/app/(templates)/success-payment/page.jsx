import styles from './Success.module.css';

function Success() {
  return (
    <div className={styles.main}>
      <div className={styles.messageBlock}>
        <div className={styles.tickMark}>&#10003;</div>
        <h1 className={styles.h1}>Your payment has been submitted</h1>
        <p className={styles.p}>Your payment has been processed successfully. Thank you!</p>
        {/* <a href="#" className={styles.button}>
          Go to Dashboard
        </a> */}
      </div>
    </div>
  )
}

export default Success