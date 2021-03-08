import style from "../styles/components/Question.module.css"
import {useContext, useState} from "react";
import {TriviaContext} from "../context/TriviaContext";
import PointsModule from "./Points";

export default function QuestionModule() {

    const {titleQuestion, isImg, questions, setAnswer, isTypeable} = useContext(TriviaContext)
    const [resposta, defineAnswer] = useState('')

    return (
        <div className={style.main}>
            <div className={style.container}>
                <p>{titleQuestion}</p>
                {isTypeable ? (
                        <>
                            <input onChange={(e) => defineAnswer(e.target.value)}
                                   type={`text`}
                                   placeholder={`Digite sua resposta`}
                                   className={style.input}
                            />
                            <button onClick={() => setAnswer(resposta)}>Responder</button>
                        </>
                    ) :
                    (
                        <>
                            {
                                isImg ?
                                    (
                                        <div className={style.gridContainer}>
                                            {questions.map((result) => (
                                                <img
                                                    width={`100%`}
                                                    alt={result}
                                                    src={result}
                                                    key={result}
                                                    onClick={() => setAnswer(result)}/>
                                            ))}
                                        </div>
                                    ) :
                                    (
                                        <>
                                            {questions.map((result) => (
                                                <button key={result} onClick={() => setAnswer(result)}>{result}</button>
                                            ))}
                                        </>
                                    )
                            }
                        </>
                    )
                }
            </div>
            <PointsModule/>
        </div>
    )
}
