import '../styles/globals.css'
import {TriviaProvider} from "../context/TriviaContext";

function MyApp({Component, pageProps}) {
    return (
        <TriviaProvider>
            <Component {...pageProps} />
        </TriviaProvider>
    )

}

export default MyApp
