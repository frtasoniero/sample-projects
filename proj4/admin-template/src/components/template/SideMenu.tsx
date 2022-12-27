import { DataIcon, HomeIcon, SettingsIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function SideMenu() {
    return (
        <aside>
            <ul>
                <MenuItem url="/" text="Home" icon={HomeIcon}></MenuItem>
                <MenuItem url="/settings" text="Home" icon={SettingsIcon}></MenuItem>
                <MenuItem url="/data" text="Home" icon={DataIcon}></MenuItem>
            </ul>
        </aside>
    )
}