import "./Navbar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import NavLinks from "./NavLinks"

export default function Navbar() {

    return (
        <nav className="navbar--">
            <Link to="/"><img src="../logo.png" alt="" className="navbar--logo" /></Link>
            <ul className="navbar--ul">
                {NavLinks.map(link => {
                    return <CustomeLinks key={link.title} to={link.url} >{link.title}</CustomeLinks>
                })}
            </ul>
        </nav>
    )
}

function CustomeLinks({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    return (
        (<li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>)
    )
}