import { useState } from "react";
import { useInquiriesContext } from "./useInquiriesContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const useInquiries = () => {

    const [isInquiriesLoading, setIsInquiriesLoading] = useState(null)

    const { dispatch } = useInquiriesContext()

    const getInquiries = async () => {

        setIsInquiriesLoading(true)

        const response = await fetch(`${API_URL}/inquiries`);
        const inquiries = await response.json();

        if (!response.ok) {
            setIsInquiriesLoading(false)
        }

        if (response.ok) {
            dispatch({ type: 'GET_INQUIRIES', payload: inquiries })
            setIsInquiriesLoading(false)
        }

    }

    return { getInquiries, isInquiriesLoading }

}