import style from "../../../styles/Home.module.css";
import {useContext} from "react";
import {TriviaContextOld} from "../../context/TriviaContextOld";
import {DynamicHeader} from "../DynamicHeader";
import {useTriviaContext} from "../../hooks";

export default function EndGamePage() {
    const { restartGame } = useTriviaContext()
    return (
        <>
            <DynamicHeader title="Fim de Jogo"/>
            <div className={style.container}>
                <h1>Você perdeu!</h1>
                <h3>Você errou 4 perguntas seguidas!</h3>
                <button onClick={() => restartGame()} className={style.resetBtn}>Recomeçar!</button>
            </div>
        </>
    )
}
