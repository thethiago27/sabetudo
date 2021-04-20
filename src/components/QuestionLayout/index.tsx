import styles from './styles.module.scss'
import {ReactFragment} from "react";
import {DynamicHeader} from "../DynamicHeader";
import PointsModule from "../Points";

interface QuestionLayoutProps {
    title: string;
    children: ReactFragment;
}

export function QuestionLayout({title, children}) {
    return (
        <>
            <DynamicHeader title={title}/>
            <div className={styles.main}>
                <div className={styles.container}>
                    <p>{title}</p>
                    {children}
                </div>
                <PointsModule/>
            </div>
        </>
    )
}