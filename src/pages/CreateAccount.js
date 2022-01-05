import TopNavigation from "../components/TopNavigation";
import illustration from "../assets/casual-life-3d-likes.png"
import bg from "../assets/create-account-bg.png"
import styled from "styled-components";
import InputFieldsWithError from "../components/InputFieldsWithError";
import StyledLink from "../components/StyledLink";
import PrimaryButton from "../components/PrimaryButton";


import {Route, Routes, useNavigate} from 'react-router-dom'


import g_btn from "../assets/googleMark.png"
import f_btn from "../assets/fbMark.png"
import s_btn from "../assets/Slack_Mark.png"

const PageWrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
`
const MainRow = styled.div`

`
const IllustrationCol = styled.div`
  min-height: 100vh;
  z-index: 1;
  padding-top: 100px;
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
  @media only screen and (max-width: 991px) {
    margin: auto;
  }
  @media only screen and (max-width: 680px){
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
  padding-top: 100px;
`

const FooterWrapper = styled.div`
  border: 1px solid #D2D8E0;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  padding: 0 20px;
  
  a{
    font-size: 16px;
    font-weight: bold;
    color: #B6BEC4;
    margin: 0 20px;
    text-decoration: none;
  }
  
  @media only screen and (max-width: 540px){
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    border: none;
    background-color: transparent;
    flex-direction: column;
  }
`

export default function CreateAccount() {
    const navigate = useNavigate()
    return (
        <PageWrapper className={"container-fluid"}>
            <TopNavigation/>

            <MainRow className="row">
                <IllustrationCol
                    className="d-none col-md-6 col-lg-6 d-md-flex justify-content-center align-items-center">
                    <img src={illustration} alt="" className={"img-fluid"}/>
                </IllustrationCol>

                <CreateBG className="col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center">
                    <FormWrapper>
                        <h2 className={"fw-bold mb-3 poppins"}>Welcome to Bonsai</h2>
                        <SpanMuted>Let’s get started with a few simple steps</SpanMuted>

                        <div className="my-4">
                            <InputFieldsWithError id={"email"} type={"email"} label={"Email"}
                                                  placeholder={"username@email.com"}/>

                            <PrimaryButton txt={"Continue"} onclick={()=>navigate("/account-continue")}/>
                        </div>

                        <div className="social-signin">
                            <div className="text-center my-4">
                                <SpanMuted>or continue with</SpanMuted>
                            </div>

                            <div className={"d-flex justify-content-around"}>
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

                            <div className="text-center my-4">
                                <SpanMuted className={"text-black"}>
                                    Already have an account? <StyledLink txt={"Sign in"}
                                                                         href={"/"}/>
                                </SpanMuted>
                                <br/>
                                <br/>
                                <SpanMuted className={"text-black"}>
                                    By clicking “Continue” you agree to Bonsai’s <StyledLink
                                    txt={"Terms of Service"}
                                    href={"/terms"}/> and <StyledLink txt={"Privacy Policy."}
                                                                      href={"/privacy"}/>

                                </SpanMuted>
                            </div>
                        </div>
                    </FormWrapper>
                </CreateBG>
            </MainRow>

            <FooterWrapper>
                <a href="#">© 2022 Bonsai, Inc.</a>
                <a href="#">English</a>
                <a href="#">Terms & Privacy</a>
            </FooterWrapper>
        </PageWrapper>
    )
}
