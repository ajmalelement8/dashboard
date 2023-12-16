import { useState, useEffect } from "react"
import style from "./sidebar.module.css"
import { useLocation } from "react-router-dom";

export default function SideMenubarItem({ item }) {
    const location = useLocation();
    const pathname = location.pathname
    console.log(pathname)
    const [open, setOpen] = useState(false);
    const hasChildren = item.submenus && item.submenus?.length > 0;
    const isParentActive = hasChildren && item.submenus?.some((child) => pathname && child.route_name && pathname.startsWith(`/${child.route_name}`));
    useEffect(() => {
        // Set the parent item as open if it is active
        if (isParentActive !== undefined) {
            setOpen(isParentActive);
        }
    }, [pathname]);

    const toggleSubMenu = () => {
        // Toggle the submenu's visibility for this specific item
        setOpen(!open);
    };
    const isActive = pathname?.slice(1) === item.route_name || isParentActive;
    // console.log(isActive,pathname,item.route_name)

    // Provide a default value of "#" if item.path is undefined
    const linkPath = item.route_name || "#";
    const iconClass = item.icon || '';
    return (
        <li className={`sidebar_item ${isActive ? "active" : ""}`}>
            {hasChildren ? (
                <div className={`sidebar_title ${open ? "open" : ""}`} onClick={toggleSubMenu}>
                    <span className={`${style.menu_icon} menu_icon`}>
                        <span className={iconClass}></span>
                    </span>
                    <span className="menu_title">{item.title}</span>
                    <span className="toggle_btn">
                        <span className="icon-drop_arrow"></span>
                    </span>
                </div>
            ) : (

                <a href={"/" + linkPath} className="sidebar_link">
                    <span className={`${style.menu_icon} menu_icon`}>
                        <span className={iconClass}></span>
                    </span>
                    <span className="menu_title">{item.title}</span>
                </a>
            )}
            {hasChildren && open && (
                <ul className="sidebar_content">
                    {item.submenus?.map((child, index) => (
                        <SideMenubarItem key={index} item={child} />
                    ))}
                </ul>
            )}
        </li>
    )
}