import style from "../../../styles/Home.module.css";
import {DynamicHeader} from "../DynamicHeader";
import {useTriviaContext} from "../../hooks";

export default function StartPage() {
    const {gameConfigure, _setUsername, error} = useTriviaContext()

    return (
        <>
            <DynamicHeader title="Início"/>
            <div className={style.container}>
                <h1>Sabe Tudo | The Trivia Game</h1>
                <span>{error}</span>
                <form onSubmit={gameConfigure}>
                    <input
                        type={'text'}
                        placeholder={'Digite seu usuário do GitHub'}
                        onChange={(e) => _setUsername(e.target.value)}
                    />
                    <button className={style.button}>Vamos Jogar?</button>
                </form>
                <hr/>
            </div>
        </>
    )
}
