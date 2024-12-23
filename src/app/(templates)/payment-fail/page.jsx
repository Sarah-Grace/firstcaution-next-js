'use client'
import { useEffect } from 'react';
import styles from './Fail.module.css';

function Success() {
  useEffect(() => {
    // Notify parent about the URL change
    const notifyParent = () => {
      const currentPath = window.location.pathname;

      let status = 'abort';
      // Post the message to the parent
      window.parent.postMessage({ status, path: currentPath }, '*');
    };

    // Detect URL changes (SPA or regular navigation)
    window.addEventListener('popstate', notifyParent); // Back/forward navigation
    notifyParent()
  }, [])
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