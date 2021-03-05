import style from "../styles/components/Question.module.css"
import {useContext, useState} from "react";
import {TriviaContext} from "../context/TriviaContext";
import PointsModule from "./Points";

export default function QuestionModule() {

    const {titleQuestion, questions, setAnswer, isTypeable} = useContext(TriviaContext)
    const [resposta, defineAnswer] = useState('')

    return (
        <div className={style.main}>
            <div className={style.container}>
                {isTypeable ? (
                        <>
                            <p>{titleQuestion}</p>
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
                            <p>{titleQuestion}</p>
                            {questions.map((result) => (
                                <button key={result} onClick={() => setAnswer(result)}>{result}</button>
                            ))}
                        </>
                    )
                }
            </div>
            <PointsModule/>
        </div>
    )
}
