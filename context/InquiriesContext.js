import { createContext, useReducer } from "react";

export const InquiriesContext = createContext()

export const inquiriesReducer = (state, action) => {

    switch (action.type) {
        case 'GET_INQUIRIES':
            return { ...state, inquiries: action.payload }
        default:
            return state
    }

}

export const InquiriesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(inquiriesReducer, {
        inquiries: [],
    })

    // console.log('InquiriesContext state:', state)

    return (
        <InquiriesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </InquiriesContext.Provider>
    )

}