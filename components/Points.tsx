import style from '../styles/components/Points.module.css'
import {useContext} from "react";
import {TriviaContext} from "../context/TriviaContext";

export default function PointsModule() {

    const {correctPoint, avatar, wrongPoint, experience, username} = useContext(TriviaContext)

    return (
        <div className={style.container}>
            <img src={avatar} alt={username}/>
            <span className={style.username}>{username}</span>
            <p>SCORE</p>
            <div className={style.scoreSession}>
                <div className={style.correctPoint}>
                    <span>{correctPoint}</span>
                </div>
                <hr/>
                <div className={style.wrongPoint}>
                    <span>{wrongPoint}</span>
                </div>
            </div>
        </div>
    )
}
