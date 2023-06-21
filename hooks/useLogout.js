import { AuthContext } from "@/context/AuthContext"
import { useAuthContext } from "./useAuthContext"
import { setCookie, parseCookies, destroyCookie } from 'nookies'

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        destroyCookie(null, 'auth-token', {
            path: '/',
            sameSite: 'strict',
            maxAge: 0,
        })

        // dispatch logout action

        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}