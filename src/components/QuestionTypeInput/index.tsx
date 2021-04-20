import styles from './style.module.scss'
import {QuestionLayout} from "../QuestionLayout";
import {useTriviaContext} from "../../hooks";
import {useState} from "react";

export function QuestionTypeInput() {

    const { question, setAnswer } = useTriviaContext()
    const { title } = question
    const [answer, defineAnswer] = useState('')

    return (
        <QuestionLayout title={title}>
            <input onChange={(e) => defineAnswer(e.target.value)}
                   type={`text`}
                   placeholder={`Digite sua resposta`}
                   className={styles.input}
            />
            <button onClick={() => setAnswer(answer)}>Responder</button>
        </QuestionLayout>
    )
}