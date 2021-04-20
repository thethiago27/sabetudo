import styles from './style.module.scss'
import {QuestionLayout} from "../QuestionLayout";
import {useTriviaContext} from "../../hooks";

export function QuestionTypeImage() {

    const { question, setAnswer } = useTriviaContext()

    const { options, title } = question

    return (
        <QuestionLayout title={title}>
            <div className={styles.gridContainer}>
                {options.map((result) => (
                    <img
                        width={`100%`}
                        alt={result}
                        src={result}
                        key={result}
                        onClick={() => setAnswer(result)}/>
                ))}
            </div>
        </QuestionLayout>
    )
}