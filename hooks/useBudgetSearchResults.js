import { useState } from "react";
import { useListingContext } from "./useListingContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const useBudgetSearchResults = () => {

    const [isBudgetSearchResultsLoading, setIsBudgetSearchResultsLoading] = useState(null)

    const { dispatch } = useListingContext()

    const getBudgetSearchResults = async (query) => {

        setIsBudgetSearchResultsLoading(true)

        const response = await fetch(`${API_URL}/search/budget/${query}`);
        const vehicles = await response.json();

        if (!response.ok) {
            setIsBudgetSearchResultsLoading(false)
        }

        if (response.ok) {
            dispatch({ type: 'GET_BUDGET_SEARCH_RESULTS', payload: vehicles })
            setIsBudgetSearchResultsLoading(false)
        }

    }

    return { getBudgetSearchResults, isBudgetSearchResultsLoading }

}