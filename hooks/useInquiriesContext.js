import { useContext } from "react";
import { InquiriesContext } from "@/context/InquiriesContext";

export const useInquiriesContext = () => {
    const context = useContext(InquiriesContext)

    if (!context) {
        throw Error('useInquiriesContext must be used inside a InquiriesContextProvider')
    }

    return context
}