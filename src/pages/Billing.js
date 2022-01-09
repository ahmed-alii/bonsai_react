import bg from "../assets/billingBG.png"
import styled from "styled-components";
import InputFieldsWithError from "../components/InputFieldsWithError";
import StyledLink from "../components/StyledLink";
import logo_green from "../assets/logo_green.png"
import {useState} from "react"
import Modal from 'react-modal';
import {useNavigate} from 'react-router-dom'
import StyledText from "../components/styledText";
import StyledCard from "../components/Card";
import PaymentMethod from "../components/PaymentMethod";
import PrimaryButton from "../components/PrimaryButton";
import ErrorMessage from "../components/ErrorMessage";

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
  max-width: 90%;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #A7A8A8;
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

export default function Billing() {
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

                <IllustrationCol className="col-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center flex-column">
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
                </IllustrationCol>


                <CreateBG className="col-md-8 col-lg-8 col-12 d-flex justify-content-center">
                    <FormWrapper>
                        <div className="row">
                            <div className="col-md-6 pe-md-4">
                                <div className="my-4">
                                    <h1 className={"fw-bold mb-0 poppins"}>Billing Details</h1>
                                </div>
                                <div className={"pt-3"}>
                                    <InputFieldsWithError id={"x"} type={"text"} label={"Full Name"}
                                                          placeholder={"Name on card"}/>
                                    <InputFieldsWithError id={"x"} type={"country"} label={"Country"}/>
                                    <InputFieldsWithError id={"x"} type={"text"} label={"Street Address"}
                                                          placeholder={"123 peacock lane"}/>
                                    <InputFieldsWithError id={"x"} type={"country"} label={"State"}/>
                                    <InputFieldsWithError id={"x"} type={"text"} label={"Postcode/zip"}
                                                          placeholder={"postcode/zip code"}/>
                                </div>
                            </div>
                            <div className="col-md-6 ps-md-4">
                                <div
                                    className={"d-flex justify-content-between align-items-center poppins fw-bold border-bottom py-2"}>
                                    <span>BUSINESS PLAN</span>
                                    <span>TOTAL</span>
                                </div>
                                <div
                                    className={"d-flex justify-content-between align-items-center poppins fw-bold border-bottom py-2"}>
                                    <span className={"text-muted fw-light"}>Total after trial</span>
                                    <span className={"text-muted fw-light"}>$49.99/mo</span>
                                </div>
                                <div
                                    className={"d-flex justify-content-between align-items-center poppins border-bottom py-2"}>
                                    <span className={""}>TOTAL NOW</span>
                                    <span className={""}>$0</span>
                                </div>

                                <div className={"my-3"}>
                                    <span className={""}>PAYMENT METHOD</span>
                                </div>
                                <div>
                                    <PaymentMethod/>
                                </div>
                                <div className={"d-flex align-items-center"}>
                                    <input type="checkbox" name={"agreement"} value={"agree"} id={"agreement"}
                                           className={""}/>
                                    <label htmlFor={"agreement"} className={"px-2"}>I have read and agree to the terms
                                        and
                                        conditions.</label>
                                </div>
                                <div>
                                    <ErrorMessage err={"Invalid billing information. Try again."} size={"14px"}/>
                                </div>
                                <div className={"mt-4"}>
                                    <StyledText size={"12px"} weight={"bold"} color={"black"}>
                                        Your personal data will be used to process your order &
                                        support your experience. By clicking “Submit” you agree
                                        to Bonsai’s <StyledLink txt={"Terms of Service"} href={"#"}
                                                                size={"12px"}/> and <StyledLink txt={"Privacy Policy"}
                                                                                                href={"#"}
                                                                                                size={"12px"}/>.
                                    </StyledText>
                                </div>
                                <div>
                                    <PrimaryButton txt={"Submit"} onclick={()=>{

                                    }}/>
                                </div>

                                <div className={"text-end"}>
                                    <button className={"btn btn-float text-muted fw-bold h5 m-0"}>skip for now</button>
                                </div>
                            </div>
                        </div>


                    </FormWrapper>
                </CreateBG>


            </MainRow>
        </PageWrapper>
    )
}
