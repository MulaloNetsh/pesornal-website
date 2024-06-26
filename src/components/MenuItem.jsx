import { NavLink } from "react-router-dom";
export default function MenuItem({linkName,linkUrl}){
    return (
        <li className="">
            <NavLink to={linkUrl} className={({ isActive, isPending }) =>
                isActive
                ? "active"
                : isPending
                ? "pending"
                : "" }>
                {linkName}
            </NavLink>
        </li>
    );
}