import SideMenu from "./SideMenu"

interface ContentProps {
    children?: any
}

export default function Content(props: ContentProps) {
    return (
    <>
        <div className={`flex flex-col mt-7 dark:text-gray-400`}>
            {props.children}
        </div>
    </>
    )
}