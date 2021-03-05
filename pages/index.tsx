import {TriviaContext} from '../context/TriviaContext'
import {useContext} from "react";
import QuestionModule from "../components/Question";
import style from "../styles/Home.module.css"
import StartPage from "../components/StartPage";
import EndGamePage from "../components/EndGamePage";

export default function Home() {

    const {isInGame, isEndGame} = useContext(TriviaContext)


    return (
        <>
            {
                isEndGame ? (<EndGamePage/>) :
                    (
                        <>
                            {isInGame ? (<QuestionModule/>) : (<StartPage/>)}
                        </>
                    )
            }
        </>
    )
}
