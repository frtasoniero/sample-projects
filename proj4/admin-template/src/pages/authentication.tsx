import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Authentication() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    return (
        <>
            <div>
                <h1>Authentication</h1>
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
                    value={confirm}
                    type='password'
                    changeValue={setConfirm}
                    required
                    notRenderWhen //or notRenderWhen={false} to render the confirmation
                ></AuthInput>
            </div>
        </>
    )
}