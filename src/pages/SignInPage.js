import TopNavigation from "../components/TopNavigation";
import illustration from "../assets/casual-life-3d-reading.png"
import styled from "styled-components";
import InputFieldsWithError from "../components/InputFieldsWithError";
import StyledLink from "../components/StyledLink";
import PrimaryButton from "../components/PrimaryButton";
import ReCAPTCHA from "react-google-recaptcha";


import {Route, Routes, useNavigate} from 'react-router-dom'


import g_btn from "../assets/googleMark.png"
import f_btn from "../assets/fbMark.png"
import s_btn from "../assets/Slack_Mark.png"


const IllustrationImg = styled.img`
  max-width: 975px;
  margin-left: -50%;
  margin-top: -100px;
  @media only screen and (min-width: 991px) {
    margin-right: -100%;
    max-width: 750px;
  }
  @media only screen and (min-width: 1280px) {
    margin-right: -50%;
    max-width: 950px;
  }
  @media only screen and (min-width: 1600px) {
    margin-right: 0;
    max-width: 970px;
  }
`
const IllustrationBG = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #93D4E0;
  padding-top: 100px;
`
const PageWrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
`
const MainRow = styled.div`
`
const FormCol = styled.div`
  padding-top: 160px;
  padding-left: 100px;
  z-index: 1;
  @media only screen and (max-width: 991px) {
    padding-left: 10px;
  }
`

const SpanMuted = styled.span`
  color: #B6BEC4;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`

const FormWrapper = styled.div`
  max-width: 600px;
  @media only screen and (max-width: 991px) {
    margin: auto;
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
export default function SignInPage() {
    const navigate = useNavigate()
    return (
        <PageWrapper className={"container-fluid"}>
            <TopNavigation/>

            <MainRow className="row">
                <FormCol className="col-md-12 col-lg-8 col-12">
                    <Routes>
                        <Route
                            index={true}
                            element={
                                <FormWrapper>
                                    <h2 className={"fw-bold mb-3 poppins"}>Welcome back</h2>

                                    <InputFieldsWithError id={"email"} type={"email"} label={"Email"}
                                                          placeholder={"username@email.com"}/>

                                    <InputFieldsWithError id={"pass"} type={"password"} label={"Password"} err={""}
                                                          placeholder={"password"}/>

                                    <StyledLink href={"/forgot-password"} txt={"Forgot Password"}/>

                                    <PrimaryButton txt={"Sign In"}/>

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
                                                Don’t have an account yet? <StyledLink txt={"Sign up for free"}
                                                                                       href={"sign-up"}/>
                                            </SpanMuted>
                                        </div>
                                    </div>
                                </FormWrapper>
                            }>
                        </Route>

                        <Route path={"/forgot-password"} element={
                            <FormWrapper>
                                <h2 className={"fw-bold mb-3 poppins"}>Reset your password</h2>
                                <p className={"h6 fw-bold my-4"}>Enter the email address associated with your account
                                    and
                                    we’ll send you a link to reset your password.</p>

                                <InputFieldsWithError id={"email"} type={"email"} label={"Email"}
                                                      placeholder={"username@email.com"}/>

                                <ReCAPTCHA
                                    sitekey="6Ld4s-0dAAAAAPCkdo2gGkpEcGIq-ldW79-zR1Ls"
                                    onChange={() => console.log("Hello")}
                                />

                                <PrimaryButton txt={"Continue"} onclick={() => navigate("/sent-pass-reset")}/>

                                <div className="text-center my-4">
                                    <SpanMuted className={"text-black"}>
                                        Don’t have an account yet? <StyledLink txt={"Sign up for free"}
                                                                               href={"sign-up"}/>
                                    </SpanMuted>
                                </div>
                            </FormWrapper>
                        }/>

                        <Route path={"/sent-pass-reset"} element={
                            <FormWrapper>
                                <h2 className={"fw-bold mb-3 poppins"}>Instructions sent!</h2>
                                <p className={"h5 fw-bold my-4 text-muted"}>
                                    Instructions for resetting your password have been sent if there is
                                    an account associated with the email provided.
                                    <br/>
                                    <br/>
                                    You’ll receive this email within 5 minutes. Be sure to check your
                                    spam folder, too.
                                    <br/>
                                    <br/>
                                </p>

                                <PrimaryButton txt={"Back to sign in"} onclick={()=>navigate("/forgot-password")}/>

                                <div className="text-center my-4">
                                    <SpanMuted className={"text-black"}>
                                        Don’t have an account yet? <StyledLink txt={"Sign up for free"}
                                                                               href={"sign-up"}/>
                                    </SpanMuted>
                                </div>
                            </FormWrapper>
                        }/>

                    </Routes>

                </FormCol>


                <IllustrationBG className="col-lg-4 d-none d-lg-flex align-items-center justify-content-end">
                    <IllustrationImg src={illustration} alt="" className={"img-fluid"}/>
                </IllustrationBG>
            </MainRow>
        </PageWrapper>
    )
}
