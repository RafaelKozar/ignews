import Document, { Html, Head, Main, NextScript } from 'next/document';

// este documento é executada apenas uma vez no início da aplicação
// este arquivo não pode ter css importado
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    
                </Head>
                <body>
                    {/* antigo div=root */}
                    <Main />
                    {/* NextScrpt fica todos os arquivos js que minha aplicação executa */}
                    <NextScript />
                </body>
            </Html>
        )
    }
}