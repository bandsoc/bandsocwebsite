import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from './api/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />

                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}