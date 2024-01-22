import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

type TUserContext = {
    userId: string | undefined | null
    user: any
    logoutUser: () => void
}

export const UserContext = createContext<TUserContext>({
    userId: undefined,
    user: undefined,
    logoutUser: () => {}
})

export const UserContextProvider : React.FC<PropsWithChildren> = ({children}) => {
    
    const [userId, setUserIdState] = useState<string | undefined | null>(undefined);
    const [user, setUserState] = useState<any>({});

    const { token } = useContext(AuthContext);

    const setUserId = (id : string ) => {
        setUserIdState(id)
        localStorage.setItem('user.id', id)
    }

    const setUser = (user : any) => {
        setUserState(user)
        localStorage.setItem('user.obj', JSON.stringify(user))
    }

    const logoutUser = () => {
        setUserIdState(undefined)
        localStorage.removeItem('user.id')
        localStorage.removeItem('user.obj')
    }

    useEffect(() => {

        const localUserId = localStorage.getItem('user.id')
        const localUser = localStorage.getItem('user.obj')

        console.log(localUser)

        if (localUserId && localUser && token) {
            setUserIdState(localUserId)
            setUserState(JSON.parse(localUser))
            return
        }

        if (token) {
            console.log('reloading man')
            fetch('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then((response) => {
                return response.json()
            }).then((data : any) => {
                console.log(data)
                if (data?.id) {
                    setUserId(data.id)
                    setUser(data)
                }
            })
        }

    }, [token])

    return (
        <UserContext.Provider value={{ userId: userId, logoutUser: logoutUser, user: user }}>
            {children}
        </UserContext.Provider>
    )
} 

