import Document, {Head, Html, Main, NextScript} from "next/document"

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <title>Sabbe Tudo | @thethiago27</title>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
                          rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
