import style from "../styles/Home.module.css";
import {useContext} from "react";
import {TriviaContext} from "../context/TriviaContext";

export default function EndGamePage() {
    const {restartGame} = useContext(TriviaContext)
    return (
        <div className={style.container}>
            <h1>Você perdeu!</h1>
            <h3>Você errou 4 perguntas seguidas!</h3>
            <button onClick={() => restartGame()} className={style.resetBtn}>Recomeçar!</button>
        </div>
    )
}
