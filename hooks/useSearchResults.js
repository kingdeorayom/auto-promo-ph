import { useState } from "react";
import { useListingContext } from "./useListingContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const useSearchResults = () => {

    const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(null)

    const { dispatch } = useListingContext()

    const getSearchResults = async (query) => {

        setIsSearchResultsLoading(true)

        const response = await fetch(`${API_URL}/search/${query}`);
        const vehicles = await response.json();

        if (!response.ok) {
            setIsSearchResultsLoading(false)
        }

        if (response.ok) {
            dispatch({ type: 'GET_SEARCH_RESULTS', payload: vehicles })
            setIsSearchResultsLoading(false)
        }

    }

    return { getSearchResults, isSearchResultsLoading }

}