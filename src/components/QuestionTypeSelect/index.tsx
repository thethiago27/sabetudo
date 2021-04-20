import {QuestionLayout} from "../QuestionLayout";
import {useTriviaContext} from "../../hooks";

export function QuestionTypeSelect() {

    const { question, setAnswer } = useTriviaContext()
    const { title , options } = question

    return (
        <QuestionLayout title={title}>
            {options.map((result) => (
                <button key={result}
                        onClick={() => setAnswer(result)}>{result}</button>
            ))}
        </QuestionLayout>
    )
}