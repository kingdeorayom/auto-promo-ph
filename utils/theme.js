import { createTheme } from "@mui/material";
import { useInter } from "./fonts";

const theme = createTheme({
    typography: {
        fontFamily: useInter.style.fontFamily
    },
    palette: {
        secondary: {
            main: '#808080'
        }
    }
})

export default theme