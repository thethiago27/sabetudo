import {createContext, ReactNode, useState} from "react";
import perguntas from "../perguntas.json"

interface TriviaInterface {
    correctPoint: number;
    wrongPoint: number;
    experience: number;
    questions: any;
    error: string;
    username: string;
    avatar: string;
    titleQuestion: string;
    isInGame: boolean;
    correctAnswer: string;
    setUsName: (e) => void;
    gameConfigure: (e) => void;
    setAnswer: (e) => void;
}

interface TriviaProviderProps {
    children: ReactNode;
}

export const TriviaContext = createContext({} as TriviaInterface)

export function TriviaProvider({children}: TriviaProviderProps) {

    const [username, setUsername] = useState(null)
    const [avatar, setAvatar] = useState(null)

    const [correctPoint, setCorrectPoint] = useState(0)
    const [wrongPoint, setWrongPoint] = useState(0)
    const [experience, setExperience] = useState(0)

    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [questions, setQuestions] = useState([])
    const [titleQuestion, setTitleQuestion] = useState(null)

    const [isInGame, setInGame] = useState(false)

    const [error, setError] = useState(null)

    function setUsName(e) {
        setUsername(e)
    }


    function addExperience() {
        setExperience(experience + 1)
    }

    function addWrongPoint() {
        setWrongPoint(wrongPoint + 1)
    }

    function addCorrectPoint() {
        setCorrectPoint(correctPoint + 1)
    }

    function getAnswer() {
        const randomQuestion = Math.floor(Math.random() * perguntas.length)
        const question = perguntas[randomQuestion]

        setInGame(true)
        setTitleQuestion(question.description)
        setQuestions(Array.from(question.options))
        setCorrectAnswer(question.correct)
    }

    async function gameConfigure(e) {
        e.preventDefault()
        if(!username) {
            setError('O nome de usuário não ser vazio.')
            return;
        }

        const data = await fetch(`https://api.github.com/users/${username}`)
        const response = await data.json()

        setAvatar(response.avatar_url)
        getAnswer()
    }

    function setAnswer(e) {
        if (e === correctAnswer) {
            console.log(`Pergunta correta!`)
            setCorrectPoint(correctPoint + 1)

            addCorrectPoint()
            addExperience()
            getAnswer()

        } else {
            console.log(`Pergunta errada.`)
            addWrongPoint()
            getAnswer()
        }
    }

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${username}`)
    //         .then(res => res.json())
    //         .then(res => setAvatar(res.avatar_url))
    // }, [username])

    return (
        <TriviaContext.Provider value={{
            correctPoint,
            wrongPoint,
            experience,
            questions,
            isInGame,
            username,
            avatar,
            error,
            titleQuestion,
            correctAnswer,
            setUsName,
            gameConfigure,
            setAnswer,
        }}>
            {children}
        </TriviaContext.Provider>
    )
}
