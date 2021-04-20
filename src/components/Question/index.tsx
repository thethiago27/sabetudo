import {useTriviaContext} from "../../hooks";
import {QuestionTypeInput} from "../QuestionTypeInput";
import {QuestionTypeImage} from "../QuestionTypeImage";
import {QuestionTypeSelect} from "../QuestionTypeSelect";

export default function QuestionModule() {

    const { question } = useTriviaContext()
    const { type } = question

    if(type === 'input') {
        return (
           <QuestionTypeInput/>
        )
    } else if(type === 'img') {
        return (
           <QuestionTypeImage/>
        )
    } else {
        return (
            <QuestionTypeSelect/>
        )
    }
}
