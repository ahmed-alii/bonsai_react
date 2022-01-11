import StyledText from "./styledText";
import styled from "styled-components";
import UploadLogo from "../assets/uploadIcon.png"
import TxtLogo from "../assets/txtIcons.png"
import TopIcon from "../assets/arrowTopIcon.png"
import ErrorMessage from "./ErrorMessage";
import {useState} from "react";
import SuccessButton from "./SuccessButton";

const UploadInput = styled.label`
  height: 42px;
  width: 146px;
  appearance: none;
  display: flex;
  align-items: center;
  background-color: #F7F5F7;
  justify-content: center;
  border-radius: 3px;
  margin-bottom: 8px;

  input[type=file] {
    appearance: none;
    background: #B6BEC4;
    display: none;
  }

  span {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #8E8D8F;
  }

  img {
    height: 30px;
    width: 30px;
    margin-right: 8px;
  }
`

const ColorInput = styled.label`
  height: 42px;
  width: 146px;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-bottom: 8px;
  border: 1px solid #8E8D8F;

  input {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  div {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #652DBB;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: #0C273C;
    margin-right: 8px;
  }
`

const Messenger = styled.div`
  border-radius: 9px;
  border: 1px solid black;
  max-width: 380px;
  height: 400px;
  padding: 20px 0;
  border-color: ${props => props.color};
  button{
    height: 34px;
    width: 34px;
    background-color: ${props => props.color};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    
    img{
      height: 22px;
    }
  }
`
export default function Step1() {
    const [color, setColor] = useState("#652DBB")

    return (
        <div className={"row"}>
            <div className="col-md-7">
                <StyledText color={"#495D6D"} size={"16px"} weight={"bold"}>
                    Personalize your customer engagement experience by creating
                    a one-of-a-kind design for your customers to use to communicate
                    with your business.
                    <br/><br/>
                    In the following steps, you’ll customize your Messenger for
                    your company.
                </StyledText>
                <div className={"pt-3"}>
                    <StyledText color={"black"} size={"18px"} weight={"bold"}>Upload Your Company Logo</StyledText>

                    <div className="row">
                        <div className="col-md-4">
                            <UploadInput>
                                <img src={UploadLogo} alt=""/>
                                <span>Upload</span>
                                <input type={"file"} name={"company_logo"}/>
                            </UploadInput>
                        </div>
                        <div className="col-md-8">
                            <ErrorMessage size={"13px"} err={"Upload failed. Try again."}/>
                        </div>
                    </div>
                    <StyledText color={"#495D6D"} size={"12px"} weight={"bold"} mb0>We recommend a 312x32 px PNG or
                        JPG.</StyledText>


                    <div className="mt-4">
                        <StyledText color={"black"} size={"18px"} weight={"bold"}>Change the messenger
                            color</StyledText>

                        <div className="row">
                            <div className="col-md-4">
                                <ColorInput>
                                    <input type="color" defaultValue={color}
                                           onInput={(event) => {
                                               setColor(event.target.value)
                                           }}/>
                                    <span>{color}</span>
                                    <div style={{backgroundColor: color}}/>
                                </ColorInput>
                            </div>
                            <div className="col-md-8">
                                <ErrorMessage size={"13px"} err={"Upload failed. Try again."}/>
                            </div>
                        </div>
                    </div>
                    <div className={"pt-3"}>
                        <SuccessButton txt={"Continue"}/>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <Messenger color={color}>
                    <div className={"text-center d-flex flex-column justify-content-between h-100"}>
                        <div>
                            <StyledText color={color} size={"22px"} mb0 weight={"bold"}>Steve Holmes</StyledText>
                            <StyledText color={color} size={"14px"} weight={"bold"}>Active 9:35 AM, Mon, Oct 4,
                                2021</StyledText>
                        </div>
                        <div>
                            <hr className={"mb-4"}/>
                            <hr/>
                            <div className={"w-100 d-flex justify-content-between align-items-center px-2"}>
                                <img src={TxtLogo} alt=""/>
                                <button><img src={TopIcon} alt=""/></button>
                            </div>
                        </div>
                    </div>
                </Messenger>
            </div>

        </div>
    )
}