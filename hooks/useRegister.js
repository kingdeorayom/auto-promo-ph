import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const { dispatch } = useAuthContext()

    const createAccount = async (email, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('http://192.168.1.3:3001/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }

    }

    return { createAccount, isLoading, error }

}