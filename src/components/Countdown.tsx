import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown(){

  const { hasFinished,isActive,minutes,resetCountdown,seconds,startCountdown } = useContext(CountdownContext)

  const [minuteLeft, minuteRigh] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRigh] = String(seconds).padStart(2, '0').split('');

  

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigh}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRigh}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado</button>
      ):(
        <>
          {isActive ? (
            <button type='button' className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
              Abandonar ciclo</button>
            ):(
              <button type='button' className={styles.countdownButton} onClick={startCountdown}>
              Iniciar um ciclo</button>
          )}
        </>
      )}


      

      

    </div>
  )
}