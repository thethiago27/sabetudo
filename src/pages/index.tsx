import QuestionModule from "../components/Question";
import StartPage from "../components/StartPage";
import EndGamePage from "../components/EndGamePage";
import {useTriviaContext} from "../hooks";

export default function Home() {

    const {isInGame, isEndGame, question } = useTriviaContext()
    const { type } = question

    if(isEndGame) return <EndGamePage/>

    if(isInGame) {
        return <QuestionModule/>
    } else {
        return <StartPage/>
    }

}
