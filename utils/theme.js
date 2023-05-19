import { createTheme, colors } from "@mui/material";
import { useRubik } from "./fonts";

const theme = createTheme({
    typography: {
        fontFamily: useRubik.style.fontFamily
    }
})

export default theme