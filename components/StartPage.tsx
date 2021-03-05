import style from "../styles/Home.module.css";
import {useContext} from "react";
import {TriviaContext} from "../context/TriviaContext";

export default function StartPage() {
    const {error, setUsName, gameConfigure} = useContext(TriviaContext)

    return (
        <div className={style.container}>
            <h1>Sabe Tudo | The Trivia Game</h1>
            <span>{error}</span>
            <form onSubmit={gameConfigure}>
                <input
                    type={'text'}
                    placeholder={'Digite seu usuário do GitHub'}
                    onChange={(e) => setUsName(e.target.value)}
                />
                <button className={style.button}>Vamos Jogar?</button>
            </form>
        </div>
    )
}
