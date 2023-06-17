import { createTheme } from "@mui/material";
import { useDMSans } from "./fonts";

const theme = createTheme({
    typography: {
        fontFamily: useDMSans.style.fontFamily
    },
    palette: {
        secondary: {
            main: '#808080'
        }
    }
})

export default theme