import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../style/components/Profile.module.css'

export function Profile () {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/fell-lucas.png" alt="Lucas Fell"/>
      <div>
        <strong>Lucas Alexandre Fell</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level { level }
        </p>
      </div>
    </div>
  )
}