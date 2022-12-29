import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import User from "../../model/User";
import { useRouter } from "next/router"

interface AuthContextProps {
    user?: User
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function userNormalized(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0]?.providerId,
        imageUrl: userFirebase.photoURL
    }
}

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User>()
    const router = useRouter()

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        if (resp.user?.email) {
            const user = await userNormalized(resp.user)
            setUser(user)
            router.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext