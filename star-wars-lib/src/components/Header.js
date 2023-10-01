import Logo from "./Logo"
import Navigation from "./Navigation"
import RegisterLogNav from "./RegisterLogNav"

//import "../App.css"
import "./Header.module.css"


export default function Header() {
    return (
        <div className="App-header">
            <Logo />
            <Navigation />
            <RegisterLogNav />
        </div>

    )
}