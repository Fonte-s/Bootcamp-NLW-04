import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { ChallengesContext } from "./ChallengesContexts";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    Isactive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;


}

interface CountdownProviderProps {

    children: ReactNode;

}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [Isactive, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setActive(true);


    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setActive(false);
        setHasFinished(false);
        setTime(25 * 60);


    }

    useEffect(() => {
        if (Isactive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
        else if (Isactive && time === 0) {

            setHasFinished(true);
            setActive(false);
            startNewChallenge();
        }

    }, [Isactive, time])



    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            Isactive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}