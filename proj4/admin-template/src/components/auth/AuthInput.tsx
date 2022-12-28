interface AuthInputProps {
    label: string
    value: any
    required?: boolean
    type?: 'text' | 'email' | 'password'
    changeValue: (newValue: any) => void
    notRenderWhen?: boolean
}

export default function AuthInput(props: AuthInputProps) {
    return props.notRenderWhen ? null : (
        <>
            <div className={`flex flex-col`}>
                <label>{props.label}</label>
                <input
                    type={props.type ?? 'text'}
                    value={props.value}
                    onChange={e => props.changeValue?.(e.target.value)}
                    required={props.required}
                />
            </div>
        </>
    )
}