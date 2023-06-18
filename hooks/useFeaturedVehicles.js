import { useState } from "react";
import { useListingContext } from "./useListingContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const useFeaturedVehicles = () => {

    const [isFeaturedVehiclesLoading, setIsFeaturedVehiclesLoading] = useState(null)

    const { dispatch } = useListingContext()

    const getFeaturedVehicles = async () => {

        setIsFeaturedVehiclesLoading(true)

        const response = await fetch(`${API_URL}/vehicles/featured`);
        const vehicles = await response.json();

        if (!response.ok) {
            setIsFeaturedVehiclesLoading(false)
        }

        if (response.ok) {
            dispatch({ type: 'GET_FEATURED_VEHICLES', payload: vehicles })
            setIsFeaturedVehiclesLoading(false)
        }

    }

    return { getFeaturedVehicles, isFeaturedVehiclesLoading }

}