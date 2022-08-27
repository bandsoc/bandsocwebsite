import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";



const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}
const theme = extendTheme({ config })

export default theme;
