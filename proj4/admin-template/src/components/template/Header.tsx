import useAppData from "../../data/hook/useAppData"
import ThemeButton from "./ThemeButton"
import Title from "./Title"

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {
    const { theme, changeTheme } = useAppData()

    return (
    <>
        <div className={`flex flex-row`}>
            <Title title={props.title} subtitle={props.subtitle}></Title>
            <div className={`flex flex-grow justify-end`}>
                <ThemeButton theme={theme} changeTheme={changeTheme}></ThemeButton>
            </div>
        </div>
    </>
    )
}