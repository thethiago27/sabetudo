import {createContext, FormEvent, ReactNode, useState} from "react";
import perguntas from "../../perguntas.json";

interface TriviaProviderProps {
    children: ReactNode;
}

interface TriviaInterface {
    userSettings: UserSettings;
    question: QuestionInterface;
    points: PointsInterface;
    isInGame: boolean;
    isEndGame: boolean;
    error: string;
    gameConfigure: (e) => void;
    _setUsername: (e) => void;
    setAnswer: (e) => void;
    restartGame: () => void;
}

interface UserSettings {
    username: string;
    avatarUrl: string;
}

interface QuestionInterface {
    type: string;
    options: any;
    title: string;
    correctAnswer: string;
}

interface PointsInterface {
    wrong: number;
    correct: number;

}

export const TriviaContext = createContext({} as TriviaInterface)

export function TriviaProvider({children}: TriviaProviderProps) {

    /*
        DEFAULT USER SETTINGS
     */
    const [userSettings, setUserSettings] = useState<UserSettings>({
        username: '',
        avatarUrl: ''
    })
    const [username, setUsername] = useState('')

    /*
        GAME SETTINGS
     */
    const [question, setQuestion] = useState<QuestionInterface>({
        type: "select",
        options: [],
        title: '',
        correctAnswer: ''
    })

    const [points, setPoints] = useState<PointsInterface>({
        wrong: 0,
        correct: 0
    })
    /*
        GENERICS ERROR
     */
    const [error, setError] = useState('')

    /*
        GAMEPLAY SETTINGS
     */
    const [isInGame, setInGame] = useState(false)
    const [isEndGame, setIsEndGame] = useState(false)

    function _setUsername(username: string) {
        setUsername(username)
    }

    function getQuestion() {

        if(points.wrong >= 3) {
            resetGame()
            setIsEndGame(true)
        }

        const randomQuestion = Math.floor(Math.random() * perguntas.length + 1)
        const question = perguntas[randomQuestion]

        let typeOptions;
        if(question.options === null) {
            typeOptions = null
        } else {
            typeOptions = question.type === 'img' ? question.img_src : question.options
        }


        setQuestion({
            type: question.type,
            options: typeOptions,
            correctAnswer: question.correct,
            title: question.description
        })
    }

    function restartGame() {
        /* RESTART GAME AFTER GAME OVER*/
        setIsEndGame(false)
        getQuestion()
    }

    async function gameConfigure(e: FormEvent) {
        e.preventDefault()

        if (!username) {
            setError('O nome de usuário não ser vazio.')
            return
        }

        const response = await fetch(`https://api.github.com/users/${username}`)
        const {avatar_url} = await response.json()

        setUserSettings({
            username: username,
            avatarUrl: avatar_url
        })
        setInGame(true)
        getQuestion()
    }

    function setAnswer(e) {
        if (e === question.correctAnswer) {
            addPoints('correct')
        } else {
            addPoints('wrong')
        }
        getQuestion()

    }

    function addPoints(action: 'correct' | 'wrong') {
        switch (action) {
            case "correct":
                const current = points.correct
                let sum = current + 1
                setPoints({
                    correct: sum,
                    wrong: points.wrong
                })
                break;
            case "wrong":
                const wrongCurrent = points.wrong
                let sumd = wrongCurrent + 1
                setPoints({
                    correct: points.correct,
                    wrong: sumd
                })
                break;
        }
    }

    function resetGame() {
        setQuestion({
            title: '',
            correctAnswer: '',
            options: [],
            type: ''
        })
        setPoints({
            wrong: 0,
            correct: 0
        })
    }

    return (
        <TriviaContext.Provider value={{
            userSettings,
            question,
            points,
            isInGame,
            isEndGame,
            error,
            restartGame,
            gameConfigure,
            setAnswer,
            _setUsername
        }}>
            {children}
        </TriviaContext.Provider>
    )

}