import bg from "../assets/create-acc-cont.png"
import styled from "styled-components";
import InputFieldsWithError from "../components/InputFieldsWithError";
import StyledLink from "../components/StyledLink";
import PrimaryButton from "../components/PrimaryButton";
import logo_green from "../assets/logo_green.png"
import {useState} from "react"
import Modal from 'react-modal';
import {useNavigate} from 'react-router-dom'
import cross from "../assets/cross.png"
import greencheck from "../assets/phone-confirm-check.png"


import g_btn from "../assets/googleMark.png"
import f_btn from "../assets/fbMark.png"
import s_btn from "../assets/Slack_Mark.png"
import StyledText from "../components/styledText";
import StyledCard from "../components/Card";

const PageWrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
`
const MainRow = styled.div`

`
const IllustrationCol = styled.div`
  min-height: 100vh;
  z-index: 1;
  padding-top: 150px;
  background-color: #EAF6F7;
  @media only screen and (max-width: 991px) {
    padding-left: 10px;
  }
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

const ButtonSocial = styled.button`
  border: 3px solid #D2D8E0;
  border-radius: 10px;
  max-width: 196px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  margin: 0 2px;
  font-family: 'Poppins', sans-serif;
`

const CreateBG = styled.div`
  background-image: url("${bg}");
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

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: " 800px",
        borderRadius: "30px",
        background: "#fff",
        border: "1px solid #707070",
        width: "100%"
    },
    overlay: {
        zIndex: 2,
        backgroundColor: "rgba(0,0,0,0.6)"
    }
};

Modal.setAppElement('#root');

export default function CreateAccountDetails() {
    const [navOpen, setNavOpen] = useState(true)
    const navigate = useNavigate()
    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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

            <MainRow className="row" id={"main-row"}>
                <CreateBG className="order-1 order-md-0 col-md-7 col-lg-7 col-12 d-flex justify-content-center">
                    <FormWrapper>
                        <div className="text-center">
                            <h2 className={"fw-bold mb-0 poppins"}>Create account</h2>
                            <StyledText size={"17px"} color={"#B6BEC4"} weight={"bold"}>Let’s get started with a few
                                simple steps</StyledText>
                        </div>

                        <div className={"d-flex justify-content-around my-5"}>
                            <ButtonSocial>
                                <img src={g_btn} alt=""/>
                            </ButtonSocial>

                            <ButtonSocial>
                                <img src={s_btn} alt=""/>
                            </ButtonSocial>

                            <ButtonSocial>
                                <img src={f_btn} alt=""/>
                            </ButtonSocial>
                        </div>

                        <div>
                            <InputFieldsWithError id={"f"} type={"text"} label={"Full Name"}
                                                  placeholder={"first and last name"}/>
                            <InputFieldsWithError id={"f"} type={"text"} label={"Company Name"}
                                                  placeholder={"company name"}/>
                            <InputFieldsWithError id={"f"} type={"email"} label={"Email"}
                                                  placeholder={"username@email.com"}/>
                            <InputFieldsWithError id={"f"} type={"password"} label={"Password"}
                                                  placeholder={"password"}/>
                            <InputFieldsWithError id={"f"} type={"password"} label={"Confirm Password"}
                                                  placeholder={"confirm password"}/>
                            <InputFieldsWithError id={"f"} type={"phone"} label={"Phone Number"}
                                                  placeholder={"phone number"}/>
                        </div>

                        <div>
                            <PrimaryButton txt={"Continue"} onclick={() => {
                                //show modal
                                openModal()
                            }}/>
                        </div>

                        <div className={"text-center"}>
                            <StyledText size={"17px"} weight={"bold"}>By clicking “Continue” you agree to
                                Bonsai’s <StyledLink txt={"Terms of Service"} href={"#"} size={"17px"}/> and <StyledLink
                                    txt={"Privacy Policy"} href={""} size={"17px"}/>.</StyledText>
                        </div>
                    </FormWrapper>
                </CreateBG>

                <IllustrationCol className="order-0 order-md-1 col-12 col-md-5 col-lg-5 d-flex align-items-center flex-column">

                    <StyledCard>
                        <StyledText size={"18px"} weight={"bold"} color={"#F4486D"} mb0>BUSINESS</StyledText>
                        <h4 className={"fw-bold mt-0 poppins mb-4"}>14 day free trial</h4>

                        <div className={"mb-3"}>
                            <StyledText size={"18px"} color={"black"} weight={"bold"} mb0>ACCESS</StyledText>
                            <StyledText size={"18px"} color={"#85939D"} weight={"bold"}>1 account access</StyledText>
                        </div>

                        <div className={"mb-3"}>
                            <StyledText size={"18px"} color={"black"} weight={"bold"} mb0>MESSAGING</StyledText>
                            <StyledText size={"18px"} color={"#85939D"} weight={"bold"}>Unlimited
                                conversations</StyledText>
                        </div>

                        <div className={"mb-3"}>
                            <StyledText size={"18px"} color={"black"} weight={"bold"} mb0>AUTOMATIONS</StyledText>
                            <StyledText size={"18px"} color={"#85939D"} weight={"bold"}>250 conversation/mo</StyledText>
                        </div>

                        <hr className={"my-5 bg-black opacity-75"}/>

                        <div className={"d-flex justify-content-between align-items-center"}>
                            <StyledText size={"18px"} color={"#85939D"} weight={"bold"}>Total after trial</StyledText>
                            <StyledText size={"18px"} color={"#85939D"} weight={"bold"}>$49.99/mo</StyledText>
                        </div>
                        <div className={"d-flex justify-content-between align-items-center"}>
                            <StyledText size={"18px"} weight={"bold"}>Due today</StyledText>
                            <StyledText size={"18px"} weight={"bold"}>$0</StyledText>
                        </div>

                        <br/>
                        <StyledText size={"14px"} color={"#B6BEC4"} weight={"bold"}>
                            All prices USD. Your total may also include usage charges
                            and taxes, if applicable.
                        </StyledText>
                    </StyledCard>
                    <StyledCard>
                        <StyledText size={"18px"} weight={"bold"} color={"#F4486D"} mb0>ENTERPRISE</StyledText>
                        <h4 className={"fw-bold mt-0 poppins mb-4"}>Need more power?</h4>

                        <div className={"mb-3"}>
                            <StyledText size={"18px"} color={"#85939D"} weight={"bold"}>
                                Fill out your information and a team
                                member will be in contact shortly.
                            </StyledText>
                        </div>

                        <PrimaryButton txt={"Schedule a Demo"} onclick={() => navigate("/schedule-demo")}/>

                    </StyledCard>
                </IllustrationCol>
            </MainRow>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={true}
                preventScroll={false}

            >
                <div className="position-relative p-3">
                    <div className="position-absolute" style={{right:0,top:0}}>
                        <button onClick={closeModal} className={"btn btn-float"}>
                            <img src={cross} alt=""/>
                        </button>
                    </div>
                    <div className="text-center">
                        <img src={greencheck} alt="" className={"img-fluid mb-4"}/>
                        <h2 className={"fw-bold text-black mb-4"}>Confirm Your Phone Number</h2>
                        <StyledText size={"20px"} weight={"bold"} color={"#495D6D"}>Please confirm your number by entering <br/> the authentication code sent to the provided number.</StyledText>
                    </div>

                    <div className={"d-flex justify-content-center"}>
                        <InputFieldsWithError placeholder={"authentication code"} type={"text"} id={"code"}/>
                    </div>
                    <div className="row align-items-center">
                        <div className={"col-12 col-md-8"}>
                            <StyledText weight={"bold"} color={"#B6BEC4"} size={"20px"} mb0>
                                It may take a minute to receive the code. <br/>
                                Haven’t received it? <StyledLink href={"#"} txt={"Resend a new code."} size={"20px"}/>
                            </StyledText>
                        </div>
                        <div className={"col-12 col-md-4"}>
                            <PrimaryButton txt={"Submit"}/>
                        </div>
                    </div>
                </div>


            </Modal>


        </PageWrapper>
    )
}
