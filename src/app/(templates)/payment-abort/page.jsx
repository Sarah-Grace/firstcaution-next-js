'use client'
import { useEffect } from 'react';
import styles from './Abort.module.css';

function Success() {
  useEffect(() => {
    // Notify parent about the URL change
    const notifyParent = () => {
      const currentPath = window.location.pathname;

      let status = 'success';
      // Post the message to the parent
      window.parent.postMessage({ status, path: currentPath }, '*');
    };

    // Detect URL changes (SPA or regular navigation)
    window.addEventListener('popstate', notifyParent); // Back/forward navigation
    notifyParent('abort')
  }, [])
  return (
    <div className={styles.main}>
      <div className={styles.messageBlock}>
        <div className={styles.xMark}>X</div>
        <h1 className={styles.h1}>Your payment has been aborted</h1>
        <p className={styles.p}>Payment aborted. Please retry or verify your payment details.</p>
      </div>
    </div>
  )
}

export default Success