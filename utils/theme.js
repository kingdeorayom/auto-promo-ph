import { createTheme, colors } from "@mui/material";
import { useRubik } from "./fonts";

const theme = createTheme({
    typography: {
        fontFamily: useRubik.style.fontFamily
    },
    palette: {
        secondary: {
            main: '#808080'
        }
    }
})

export default theme