import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const sizes = {
    default: defineStyle({
        maxW: '4xl',
        p: '4'
    })
}

const defaultProps = {
    size: 'default'
}

export const containerTheme = defineStyleConfig({ sizes, defaultProps })