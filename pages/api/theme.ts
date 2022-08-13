import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
import config from "next/config";

const theme = extendTheme({
    config,
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
        white: 'rgba(255, 255, 255, 0.92)',
        black: 'rgba(0, 0, 0, 0.92)'
    },
    styles: {
        global: (props: Dict<any> | ThemeConfig) => ({
            body: {
                bg: mode('rgba(255, 255, 255, 0.92)', 'rgba(255, 255, 255, 0.92)')(props),
            }
        })
    },
})

export default theme;