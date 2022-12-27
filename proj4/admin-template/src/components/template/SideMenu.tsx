import { DataIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu() {
    return (
        <aside className={`
            flex flex-col
            bg-gray-100 text-gray-900
            dark:bg-gray-900 dark:text-gray-100
        `}>
            <div className={`
            h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800
            flex flex-col items-center justify-center
            `}>
                <Logo></Logo>
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" text="Home" icon={HomeIcon}></MenuItem>
                <MenuItem url="/settings" text="Settings" icon={SettingsIcon}></MenuItem>
                <MenuItem url="/data" text="Data" icon={DataIcon}></MenuItem>
            </ul>
            <ul className={``}>
                <MenuItem 
                    text="Logout" icon={LogoutIcon}
                    onClick={() => console.log("Logout...")}
                    className={`text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:text-white`}
                ></MenuItem>
            </ul>
        </aside>
    )
}