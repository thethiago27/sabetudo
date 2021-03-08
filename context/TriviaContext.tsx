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
    isEndGame: boolean;
    isTypeable: boolean;
    isImg: boolean;
    correctAnswer: string;
    setUsName: (e) => void;
    gameConfigure: (e) => void;
    setAnswer: (e) => void;
    restartGame: () => void;
}

interface TriviaProviderProps {
    children: ReactNode;
}

export const TriviaContext = createContext({} as TriviaInterface)

export function TriviaProvider({children}: TriviaProviderProps) {

    /* USER SETTINGS */
    const [username, setUsername] = useState(null)
    const [avatar, setAvatar] = useState(null)

    /* CONTROL POINTS */
    const [correctPoint, setCorrectPoint] = useState(0)
    const [wrongPoint, setWrongPoint] = useState(0)
    const [experience, setExperience] = useState(0)

    /* GAME POINTS & QUESTIONS SETTINGS*/
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [questions, setQuestions] = useState([])
    const [titleQuestion, setTitleQuestion] = useState(null)

    /* VERIFY PLAYER IS IN GAME OVER */
    const [isInGame, setInGame] = useState(false)
    const [isEndGame, setEndGame] = useState(false)

    /* GAMES TYPES */
    const [isTypeable, setTypeable] = useState(false)
    const [isImg, setIsImg] = useState(false)

    const [error, setError] = useState(null) /* GENERICS ERRORS */

    function setUsName(e) {
        /* DEFINE USER NAME */
        setUsername(e)
    }

    function addExperience() {
        /* ADD EXPERIENCE */

        setExperience(experience + 1)
    }

    function addWrongPoint() {
        setWrongPoint(wrongPoint + 1)
    }

    function addCorrectPoint() {
        setCorrectPoint(correctPoint + 1)
    }

    function resetGame() {
        /* RESET GAME CONFIGS */
        setExperience(0)
        setWrongPoint(0)
        setCorrectPoint(0)
        setTitleQuestion('')
        setQuestions([])
        setCorrectAnswer('')
    }

    function restartGame() {
        /* RESTART GAME AFTER GAME OVER*/
        setEndGame(false)
        getAnswer()
    }

    function getAnswer() {
        setCorrectAnswer(null)

        if (wrongPoint >= 3) {
            /*
                Checks whether the player has missed 4 questions
             */
            setEndGame(true)
            resetGame()
            return
        }

        /*
            Here the game takes a random question
            from {perguntas.json}
            and sets it up for the player to answer
         */

        const randomQuestion = Math.floor(Math.random() * perguntas.length + 1)
        const question = perguntas[randomQuestion]

        setInGame(true)
        setTitleQuestion(question.description)
        setCorrectAnswer(question.correct)


        if (question.type === "input") {
            setTypeable(true)
            return
        } else if (question.type === "img") {
            setTypeable(false)
            setIsImg(true)
            setQuestions(Array.from(question.img_src))
            return
        }
        setTypeable(false)
        setIsImg(false)
        setQuestions(Array.from(question.options))
    }

    async function gameConfigure(e) {
        e.preventDefault()
        if (!username) {
            setError('O nome de usuário não ser vazio.')
            return;
        }
        /*
            Get user img from GitHub and define
         */
        const data = await fetch(`https://api.github.com/users/${username}`)
        const response = await data.json()

        setAvatar(response.avatar_url)
        getAnswer()
    }

    function setAnswer(e) {
        if (e === correctAnswer) {
            console.log(`Pergunta correta!`)

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
            isImg,
            username,
            avatar,
            error,
            isEndGame,
            titleQuestion,
            correctAnswer,
            isTypeable,
            setUsName,
            gameConfigure,
            setAnswer,
            restartGame
        }}>
            {children}
        </TriviaContext.Provider>
    )
}
