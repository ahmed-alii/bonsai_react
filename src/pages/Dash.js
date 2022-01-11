import styled from "styled-components";
import logo from "../assets/logoSM.png"
import {Link} from "react-router-dom";
import userImage from "../assets/iconUser.png"
import folder from "../assets/iconFolder.png"
import mail from "../assets/iconMail.png"
import chat from "../assets/chatGreen.png"
import StyledText from "../components/styledText";
import chevron from "../assets/chevron.png"
import decor from "../assets/decor.png"
import AccordionBlock from "../components/AccordionBlock";


const PageWrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
`
const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  background-color: #E8E7E8;
  padding-bottom: 20px;
  z-index: 1;
  position: fixed;
  min-height: 100vh;

`

const Linkk = styled(Link)`
  max-width: 60px;

  img {
    height: 40px;
    width: 40px;
  }
`

const Main = styled.div`
  background-color: #F1F1F1;
  background-image: url("${decor}");
  background-repeat: no-repeat;
  background-size: 234px;
  background-position: 102% 102%;
`

const Wrap = styled.div`
  background-color: white;
  border: 1px solid #707070;
  border-radius: 9px;
  min-height: 200px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
`

const Head = styled.div`
  padding: 16px;
  border-bottom: 1px solid #707070;
`
export default function Dash() {
    return (
        <PageWrapper className={"d-flex"}>
            <SideNav>
                <div className={"w-100"}>
                    <div style={{background: "#F1F1F1", padding: "10px", textAlign: "center", marginBottom: "60px"}}>
                        <img src={logo} alt=""/>
                    </div>

                    <div className={"text-center"} style={{marginBottom: "40px"}}>
                        <Linkk to={"#"}>
                            <img src={mail} alt="" style={{width: '30px', height: '30px'}}/>
                        </Linkk>
                    </div>

                    <div className={"text-center"} style={{marginBottom: "40px"}}>
                        <Linkk to={"#"}>
                            <img src={folder} alt="" style={{width: '30px', height: '30px'}}/>
                        </Linkk>
                    </div>
                </div>

                <div>
                    <Linkk to={"#"}>
                        <img src={userImage} alt=""/>
                    </Linkk>
                </div>
            </SideNav>
            <Main className="container-fluid">
                <nav className="navbar navbar-light py-3">
                    <ul className="navbar-nav ms-auto me-5 mt-3">
                        <li className="nav-item">
                            <StyledText size={"20px"} color={"#233B4E"} weight={"bold"}>Welcome, John Smith</StyledText>
                        </li>
                    </ul>
                </nav>

                <div className="row mt-5">
                    <div className="col-md-8 offset-md-2">
                        <h2 className={"fw-bold mb-4"}>Let's Get Started</h2>
                        <Wrap>
                            <Head>
                                <div className={"d-flex justify-content-between align-items-center flex-wrap"}>
                                    <div className={"d-flex align-items-center"}>
                                        <img src={chat} alt=""
                                             style={{height: "40px", width: "40px", marginRight: "10px"}}/>
                                        <StyledText size={"20px"} color={"black"} weight={"bold"} mb0>
                                            Setup the chat experience with your customers
                                        </StyledText>
                                    </div>
                                    <div className={"d-flex align-items-center"}>
                                        <StyledText size={"20px"} color={"black"} weight={"bold"} mb0>3 steps
                                            left</StyledText>
                                        <StyledText size={"20px"} color={"#85939D"} weight={"bold"} mb0> &nbsp; - About
                                            10 min</StyledText>
                                    </div>
                                </div>
                            </Head>

                            <AccordionBlock/>

                        </Wrap>
                    </div>
                </div>
            </Main>
        </PageWrapper>
    )
}
