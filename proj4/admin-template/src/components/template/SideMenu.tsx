import { DataIcon, HomeIcon, SettingsIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function SideMenu() {
    return (
        <aside>
            <ul>
                <MenuItem url="/" text="Home" icon={HomeIcon}></MenuItem>
                <MenuItem url="/settings" text="Settings" icon={SettingsIcon}></MenuItem>
                <MenuItem url="/data" text="Data" icon={DataIcon}></MenuItem>
            </ul>
        </aside>
    )
}