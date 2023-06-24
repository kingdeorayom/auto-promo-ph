import { useState } from "react";
import { useListingContext } from "./useListingContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const useAllVehicles = () => {

    const [isAllVehiclesLoading, setIsAllVehiclesLoading] = useState(null)

    const { dispatch } = useListingContext()

    const getAllVehicles = async () => {

        setIsAllVehiclesLoading(true)

        const response = await fetch(`${API_URL}/vehicles`);
        const vehicles = await response.json();

        if (!response.ok) {
            setIsAllVehiclesLoading(false)
        }

        if (response.ok) {
            dispatch({ type: 'GET_ALL_VEHICLES', payload: vehicles })
            setIsAllVehiclesLoading(false)
        }

    }

    return { getAllVehicles, isAllVehiclesLoading }

}