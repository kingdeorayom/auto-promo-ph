import { createContext, useReducer } from "react";

export const ListingContext = createContext()

export const listingReducer = (state, action) => {

    switch (action.type) {
        case 'GET_FEATURED_VEHICLES':
            return { ...state, featuredVehicles: action.payload }
        case 'GET_SEARCH_SUGGESTIONS':
            return { ...state, searchSuggestions: action.payload }
        case 'GET_VEHICLES_SUGGESTIONS':
            return { ...state, vehiclesSuggestions: action.payload }
        case 'GET_SEARCH_RESULTS':
            return { ...state, searchResults: action.payload }
        case 'GET_BUDGET_SEARCH_RESULTS':
            return { ...state, budgetSearchResults: action.payload }
        case 'GET_ALL_VEHICLES':
            return { ...state, allVehicles: action.payload }
        default:
            return state
    }

}

export const ListingContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(listingReducer, {
        featuredVehicles: [],
        searchSuggestions: [],
        vehiclesSuggestions: [],
        searchResults: [],
        budgetSearchResults: [],
        allVehicles: []
    })

    // console.log('ListingContext state:', state)

    return (
        <ListingContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ListingContext.Provider>
    )

}