import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";



const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    
    
    // colors: {
    //     white: 'rgba(255, 255, 255, 0.92)',
    //     black: 'rgba(0, 0, 0, 0.92)'
    // },
    // styles: {
    //     global: (props: any) => ({
    //         body: {
    //             bg: mode('rgba(255, 255, 255, 0.92)', 'rgba(0, 0, 0, 0.92)')(props),
    //         }
    //     })
    // },
}
const theme = extendTheme({ config })

export default theme;