import bg from "../assets/demo-bg.png"
import styled from "styled-components";
import InputFieldsWithError from "../components/InputFieldsWithError";
import StyledLink from "../components/StyledLink";
import PrimaryButton from "../components/PrimaryButton";
import logo_green from "../assets/logo_green.png"
import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import StyledText from "../components/styledText";

const PageWrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
`
const MainRow = styled.div`
  background-image: url("${bg}");
  background-color: #5359A6;
`
const SpanMuted = styled.span`
  color: #B6BEC4;
  font-size: 17px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;

  * {
    font-size: 17px;
  }
`

const FormWrapper = styled.div`
  max-width: 680px;
  background-color: white;
  border-radius: 30px;
  padding: 50px 80px;
  margin-bottom: 100px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    margin: auto;
  }
  @media only screen and (max-width: 680px) {
    padding: 20px 40px;
  }
`


const CreateBG = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding-top: 150px;
`

const LogoImg = styled.img`
  max-width: 200px
`
const Nav = styled.nav`
  border-bottom: 1px solid #707070;
`


export default function ScheduleDemo() {
    const [navOpen, setNavOpen] = useState(true)
    const navigate = useNavigate()
    return (
        <PageWrapper className={"container-fluid"}>
            <Nav className="navbar navbar-light fixed-top px-lg-5 bg-white navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <LogoImg src={logo_green} alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => {
                                setNavOpen(current => !current)
                            }}>
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className={navOpen ? "collapse navbar-collapse" : "collapse navbar-collapse show"}
                         id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <SpanMuted className={"text-black"}>
                                    Already have an account? <StyledLink txt={"Sign in"}
                                                                         href={"/"}/>
                                </SpanMuted>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>

            <MainRow className="row">
                <CreateBG className="col-12 col-md-6 offset-md-3 d-flex justify-content-center">
                    <FormWrapper>
                        <div className="text-center">
                            <h1 className={"fw-bolder mb-0 poppins"}>Schedule a Demo</h1>
                            <StyledText size={"17px"} color={"#B6BEC4"} weight={"bold"}>Fill out your information and a
                                team member will
                                be in contact shortly. </StyledText>
                        </div>

                        <div>
                            <InputFieldsWithError id={"f"} type={"text"} label={"Full Name"}
                                                  placeholder={"first and last name"}/>
                            <InputFieldsWithError id={"f"} type={"text"} label={"Company Name"}
                                                  placeholder={"company name"}/>
                            <InputFieldsWithError id={"f"} type={"email"} label={"Email"}
                                                  placeholder={"username@email.com"}/>
                            <InputFieldsWithError id={"f"} type={"phone"} label={"Phone Number"}
                                                  placeholder={"phone number"}/>
                            <InputFieldsWithError id={"f"} type={"text"} label={"Job Title"}
                                                  placeholder={"job title"}/>
                        </div>

                        <div className={"pt-4"}>
                            <PrimaryButton txt={"Submit"}/>
                        </div>

                        <div className={"text-center"}>
                            <StyledText size={"17px"} weight={"bold"}>By clicking “Continue” you agree to
                                Bonsai’s <StyledLink txt={"Terms of Service"} href={"#"} size={"17px"}/> and <StyledLink
                                    txt={"Privacy Policy"} href={""} size={"17px"}/>.</StyledText>
                        </div>
                    </FormWrapper>
                </CreateBG>
            </MainRow>

        </PageWrapper>
    )
}
