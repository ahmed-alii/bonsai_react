import logo_green from "../assets/logo_green.png"
import styled from "styled-components"

const LogoImg = styled.img` 
  max-width: 220px
`

function TopNavigation({}) {
    return (
        <nav className="navbar navbar-light py-3 fixed-top ps-lg-5">
            <a className="navbar-brand" href="/">
                <LogoImg src={logo_green} alt=""/>
            </a>
        </nav>
    )
}

export default TopNavigation;
