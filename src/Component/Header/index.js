import Logo from "./logo"
import ButtonText from "../Button"
import NavBar from "../Navbar";
import "./header.css"

export default function Header() {
    const handleClickRegister = () => alert('Ini register');
    const handleClickLogin = () => alert('Ini Login');
  return (
    <header>
        < Logo />
        <NavBar/>
        <ButtonText nama='Register' tesClick={handleClickRegister} className="btn btn-register"/>
        <ButtonText nama='Login' tesClick={handleClickLogin} className="btn btn-login" />
    </header>
  )
}
