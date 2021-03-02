import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompletedChalengesContainer.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallenges}>
            <span> Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}