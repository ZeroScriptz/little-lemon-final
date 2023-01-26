import { defineStyleConfig } from "@chakra-ui/react"


const baseStyle = {
    _hover: {
        textDecoration: 'none',
        color: 'brand.200'
    }

}

export const linkTheme = defineStyleConfig({ baseStyle })