import { defineStyle, defineStyleConfig } from "@chakra-ui/react"


const brandBase = {
    background: 'brand.200',
    color: 'black',
    fontWeight: 'semibold',
    borderRadius: '2xl',
    transition: 'transform 0.15s ease-out',
    _hover: {
        transform: "scale(1.05, 1.05)",
    }
}

const brandThinVariant = defineStyle({
    ...brandBase,
    paddingY: '4',
    paddingX: '6',
})

const brandThickVariant = defineStyle({
    ...brandBase,
    padding: '6'
})

const linkVariant = defineStyle({
    color: 'black',
    transition: 'color 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        color: 'brand.200'
    }
})


export const buttonTheme = defineStyleConfig({
    variants: {
        brandThin: brandThinVariant,
        brandThick: brandThickVariant,
        link: linkVariant
    }
})