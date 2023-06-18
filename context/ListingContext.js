import { createContext, useReducer } from "react";

export const ListingContext = createContext()

export const listingReducer = (state, action) => {

    switch (action.type) {
        case 'GET_FEATURED_VEHICLES':
            return { ...state, featuredVehicles: action.payload }
        default:
            return state
    }

}

export const ListingContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(listingReducer, {
        featuredVehicles: []
    })

    // console.log('ListingContext state:', state)

    return (
        <ListingContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ListingContext.Provider>
    )

}