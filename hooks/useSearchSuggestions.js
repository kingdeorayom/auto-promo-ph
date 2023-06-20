import { useState } from "react";
import { useListingContext } from "./useListingContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const useSearchSuggestions = () => {

    const [isSearchSuggestionsLoading, setIsSearchSuggestionsLoading] = useState(null)

    const { dispatch } = useListingContext()

    const getSearchSuggestions = async () => {

        setIsSearchSuggestionsLoading(true)

        const response = await fetch(`${API_URL}/vehicles/featured`);
        const vehicles = await response.json();

        if (!response.ok) {
            setIsSearchSuggestionsLoading(false)
        }

        if (response.ok) {
            dispatch({ type: 'GET_SEARCH_SUGGESTIONS', payload: vehicles })
            setIsSearchSuggestionsLoading(false)
        }

    }

    return { getSearchSuggestions, isSearchSuggestionsLoading }

}