import { useState } from "react";
import { useListingContext } from "./useListingContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const useVehiclesSuggestions = () => {

    const [isVehiclesSuggestionsLoading, setIsVehiclesSuggestionsLoading] = useState(null)

    const { dispatch } = useListingContext()

    const getVehiclesSuggestions = async (brand_slug) => {

        setIsVehiclesSuggestionsLoading(true)

        const response = await fetch(`${API_URL}/vehicles/suggested/${brand_slug}`);
        const vehicles = await response.json();

        if (!response.ok) {
            setIsVehiclesSuggestionsLoading(false)
        }

        if (response.ok) {
            dispatch({ type: 'GET_VEHICLES_SUGGESTIONS', payload: vehicles })
            setIsVehiclesSuggestionsLoading(false)
        }

    }

    return { getVehiclesSuggestions, isVehiclesSuggestionsLoading }

}