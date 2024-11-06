import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config }, {
  colors: {
    "gray": {
      "50": "#EFF3F5",
      "100": "#D4DEE3",
      "200": "#B8C8D1",
      "300": "#9CB2BF",
      "400": "#809DAD",
      "500": "#64879B",
      "600": "#506C7C",
      "700": "#3C515D",
      "800": "#28363E",
      "900": "#141B1F"
    },
    "pink": {
      "50": "#F8EDF2",
      "100": "#EACDDC",
      "200": "#DCACC5",
      "300": "#CF8CAF",
      "400": "#C26B98",
      "500": "#B44B81",
      "600": "#903C67",
      "700": "#6C2D4E",
      "800": "#481E34",
      "900": "#240F1A"
    },
    "purple": {
      "50": "#F1EFF6",
      "100": "#D8D1E5",
      "200": "#BEB4D5",
      "300": "#A597C4",
      "400": "#8C79B4",
      "500": "#725CA3",
      "600": "#5B4983",
      "700": "#443762",
      "800": "#2E2541",
      "900": "#171221"
    },
    "blue": {
      "50": "#EDF2F8",
      "100": "#CCDCEA",
      "200": "#ACC5DD",
      "300": "#8BAECF",
      "400": "#6B97C2",
      "500": "#4A81B5",
      "600": "#3B6791",
      "700": "#2D4D6C",
      "800": "#1E3348",
      "900": "#0F1A24"
    },
    "cyan": {
      "50": "#EBF7F9",
      "100": "#C8E9EF",
      "200": "#A4DBE5",
      "300": "#80CDDB",
      "400": "#5CBFD0",
      "500": "#39B1C6",
      "600": "#2D8D9F",
      "700": "#226A77",
      "800": "#17474F",
      "900": "#0B2328"
    },
    "green": {
      "50": "#EFF6F2",
      "100": "#D1E5DB",
      "200": "#B4D5C4",
      "300": "#96C5AC",
      "400": "#79B495",
      "500": "#5BA47E",
      "600": "#498365",
      "700": "#37624C",
      "800": "#254132",
      "900": "#122119"
    },
    "yellow": {
      "50": "#F7F4ED",
      "100": "#EAE0CD",
      "200": "#DCCDAD",
      "300": "#CEB98D",
      "400": "#C0A56D",
      "500": "#B3914C",
      "600": "#8F743D",
      "700": "#6B572E",
      "800": "#473A1F",
      "900": "#241D0F"
    },
    "orange": {
      "50": "#F8F1EC",
      "100": "#EDD8CA",
      "200": "#E1BEA8",
      "300": "#D5A585",
      "400": "#CA8C63",
      "500": "#BE7341",
      "600": "#985C34",
      "700": "#724527",
      "800": "#4C2E1A",
      "900": "#26170D"
    },
    "red": {
      "50": "#F7EDED",
      "100": "#EACDCD",
      "200": "#DCADAD",
      "300": "#CE8C8C",
      "400": "#C16C6C",
      "500": "#B34C4C",
      "600": "#8F3D3D",
      "700": "#6B2E2E",
      "800": "#481E1E",
      "900": "#240F0F"
    }
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.900',
        color: 'gray.400',
      }
    }
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'purple.300'
      }
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        bg: 'gray.600',
        color: 'white'
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'purple.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'purple.600' : 'purple.500',
        }),
        sm: {
          bg: 'purple.600',
          fontSize: 'md',
        },
      },
      defaultProps: {
        size: 'md', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'purple', // default is gray
      },
    },
  },
})

export default theme