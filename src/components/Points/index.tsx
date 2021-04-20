import style from '../../../styles/components/Points.module.css'
import {useContext} from "react";
import {useTriviaContext} from "../../hooks";

export default function PointsModule() {

    const { userSettings, points } = useTriviaContext()
    const { username, avatarUrl } = userSettings
    const { correct, wrong } = points

    return (
        <div className={style.container}>
            <img src={avatarUrl} alt={username}/>
            <span className={style.username}>{username}</span>
            <p>SCORE</p>
            <div className={style.scoreSession}>
                <div className={style.correctPoint}>
                    <span>{correct}</span>
                </div>
                <hr/>
                <div className={style.wrongPoint}>
                    <span>{wrong}</span>
                </div>
            </div>
        </div>
    )
}
