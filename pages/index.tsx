import {TriviaContext} from '../context/TriviaContext'
import {useContext, useEffect} from "react";
import style from "../styles/Home.module.css"
import QuestionModule from "../components/Question";

export default function Home() {

    const {isInGame, gameConfigure, setUsName, error} = useContext(TriviaContext)


    return (
        <>
            {isInGame ?
                (
                    <QuestionModule/>
                ) :
                (
                    <div className={style.container}>
                        <h1>Sabbe Tudo | The Quiz Game</h1>
                        <span>{error}</span>
                        <form onSubmit={gameConfigure}>
                            <input placeholder={`Seu nome de usuario do GitHub`}
                                   onChange={(e) => setUsName(e.target.value)}
                            />
                            <button type={`submit`} className={style.button}>Vamos começar?</button>
                        </form>
                    </div>
                )}
        </>
    )
}
