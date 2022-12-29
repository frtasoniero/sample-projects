import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { AttentionIcon } from "../components/icons";
import useAuthData from "../data/hook/useAuthData";

export default function Authentication() {
    const { user, loginGoogle } = useAuthData()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pageMode, setPageMode] = useState<'login' | 'signin'>('login')
    const [error, setError] = useState('')

    function displayError(msg: string, timeInSec=5) {
        setError(msg)
        setTimeout(() => setError(''), timeInSec * 1000)
    }

    function submit() {
        if (pageMode === 'login') 
        {
            console.log('login')
            displayError("An error has occured while login!")
        }
        else 
        {
            console.log('signin')
            displayError("An error has occured while signin!")
        }
    }

    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block md:w-1/2`}>
                <img 
                    src="https://source.unsplash.com/random" 
                    alt="Image from authentication page" 
                    className={`h-screen w-full object-cover`}
                />
            </div>
            <div className={`m-10 w-full md:w-1/2`}>
                <h1 className={`
                    text-xl font-bold mb-5
                `}>
                    {pageMode === 'login' ? 'Enter you account' : 'Create your account'}
                </h1>
                {error ? (
                    <div className={`
                        flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg
                    `}>
                        {AttentionIcon(6)}
                        <span className={`ml-3`}>{error}</span>
                    </div>
                ) : (
                    <div></div>
                )}
                <AuthInput
                    label="Email"
                    value={email}
                    type='email'
                    changeValue={setEmail}
                    required
                ></AuthInput>
                <AuthInput
                    label="Password"
                    value={password}
                    type='password'
                    changeValue={setPassword}
                    required
                ></AuthInput>
                <AuthInput
                    label="Confirm password"
                    value={confirmPassword}
                    type='password'
                    changeValue={setConfirmPassword}
                    required
                    notRenderWhen={pageMode === 'login'} //notRenderWhen={false} to render the confirmation
                ></AuthInput>
                
                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {pageMode === 'login' ? 'Login' : 'Create a new account'}
                </button>

                <hr className={`my-6 border-gray-300 w-full`}/>

                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3
                `}>
                    Enter with Google
                </button>

                {pageMode === 'login' ? (
                    <p className={`mt-8`}>
                        First access?
                        <a onClick={() => setPageMode('signin')} className={`
                            text-blue-500
                            hover:text-blue-700
                            font-semibold
                            cursor-pointer
                            ml-1
                        `}>
                            Create a new account.
                        </a>
                    </p>
                ) : (
                    <p className={`mt-8`}>
                        Already have an account?
                        <a onClick={() => setPageMode('login')} className={`
                            text-blue-500
                            hover:text-blue-700
                            font-semibold
                            cursor-pointer
                            ml-1
                        `}>
                            LogIn.
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}