import style from "../styles/components/Question.module.css"
import {useContext} from "react";
import {TriviaContext} from "../context/TriviaContext";
import PointsModule from "./Points";

export default function QuestionModule() {

    const {titleQuestion, questions, setAnswer} = useContext(TriviaContext)

    return (
        <div className={style.main}>
            <div className={style.container}>
                <p>{titleQuestion}</p>
                {questions.map((result) => (
                    <button key={result} onClick={() => setAnswer(result)}>{result}</button>
                ))}
            </div>
            <PointsModule/>
        </div>
    )
}
