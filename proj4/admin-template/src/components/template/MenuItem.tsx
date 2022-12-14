import Link from 'next/link';

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderLink() {
        return (
            <>
                {props.icon}
                <span className={`text-xs font-light`}>
                    {props.text}
                </span>
            </>
        )
    }
    return (
        <li onClick={props.onClick} className={`hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer`}>
            {props.url? (
                <Link 
                    href={props.url}
                    className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 dark:text-gray-400 ${props.className}`}
                >
                    {renderLink()}
                </Link>
            ) : (
                <div 
                    className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 dark:text-gray-400 ${props.className}`}
                >
                    {renderLink()}
                </div>
            )}
        </li>
    )
}