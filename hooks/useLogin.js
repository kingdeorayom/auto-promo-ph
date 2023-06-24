import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { setCookie } from 'nookies'

export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const { dispatch } = useAuthContext()

    const login = async (email, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
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

            setCookie(null, 'auth_token', 'loggedIn', {
                path: '/',
                sameSite: 'strict',
                // maxAge: 3 * 24 * 60 * 60, // expires in 3 days
            })

            // update the auth context
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }

    }

    return { login, isLoading, error }

}