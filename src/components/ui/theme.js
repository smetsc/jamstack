import { grey } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const green = "#99B898"
const darkGreen = "#708670"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A363B"
const white = "#FFF"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green,
        },
        secondary: {
            main: darkGreen,
        },
        common: {
            tan,
            lightRed,
            red,
            offBlack,
        },
    },
    typography: {
        h1: {
            fontFamily: "Philosopher",
            fontSize: "4.5rem",
            fontStyle: "italic",
            fontWeight: 700,
            color: green,
        },
        h2: {
            fontFamily: "Montserrat",
            fontSize: "3rem",
            fontWeight: 500,
            color: white,
        },
        h3: {
            fontFamily: "Montserrat",
            fontSize: "2rem",
            fontWeight: 300,
            color: green,
        },
        h4: {
            fontFamily: "Philosopher",
            fontSize: "3rem",
            fontStyle: "italic",
            fontWeight: 700,
            color: white,
        },
        h5: {
            fontFamily: "Philosopher",
            fontSize: "2rem",
            fontStyle: "italic",
            fontWeight: 700,
            color: white,
        },
        body1: {
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            color: grey,
        },
        body2: {
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            color: "#fff",
        },
    },
    overrides: {
        "MuiChip": {
            root: {
                backgroundColor: darkGreen,
            },
            label: {
                fontFamily: "Montserrat",
                fontSize: "1.5rem",
                color: "#fff",
                fontWeight: 400,
            },
        },
    },
})

export default theme