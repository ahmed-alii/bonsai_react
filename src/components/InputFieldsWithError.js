import styled from "styled-components";
import warning from "../assets/baseline-warning-24px.png"
import hide from "../assets/eye-stroked.png"
import show from "../assets/outline-remove_red_eye-24px.png"
import info from "../assets/info-icon.png"
import {useState} from "react"
import ReactTooltip from 'react-tooltip';

const ErrMsg = styled.span`
  color: #ED5F74;
  font-size: 20px;
  font-weight: bold;
  padding-left: 8px;
`

const Warning = styled.img`
  height: 24px;
  width: 24px;
`

const Input = styled.input`
  width: calc(100% - 40px);
  height: 100%;
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #D2D8E0;
    font-size: 20px;
    font-weight: bold;
  }

  :-ms-input-placeholder {
    color: #D2D8E0;
    font-size: 20px;
    font-weight: bold;
  }

  :focus {
    outline: none;
    border: none;
    box-shadow: none;
    background: transparent;
  }
`

const InputWrapper = styled.div`
  border: 3px solid #D2D8E0;
  border-radius: 10px;
  height: 60px;
  padding: 6px 10px;
  max-width: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const Button = styled.button`
  height: 40px;
  width: 40px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`

const CountryCode = styled.select`
  position: relative;
  background: white;
  appearance: none;
  width: 37px;
  height: 100%;
  border: none;
  border-right: 2px solid #D2D8E0;
  font-size: 20px;
  color: #D2D8E0;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  
  :focus-visible{
    outline-color: transparent;
  }

`


export default function InputFieldsWithError({type, id, label, err, placeholder}) {
    const [visible, setVisible] = useState(false)


    return (
        <div className={"mb-4"}>
            <label htmlFor={id} className={"text-black fw-bold h6 poppins"}>{label}</label>

            <InputWrapper>

                {/*If phone*/}
                {type === "phone" &&
                <CountryCode name="code">
                    <option value="#">+1</option>
                    <option value="#">+2</option>
                    <option value="#">+3</option>
                    <option value="#">+4</option>
                </CountryCode>
                }


                <Input type={type === "password" && visible ? "text" : type} className={"form-control"} id={id}
                       placeholder={placeholder}/>


                {/* If Password, show password*/}
                {type === "password" &&
                <Button onClick={() => {
                    setVisible(p => !p)
                }}>
                    <img src={visible ? hide : show} alt=""/>
                </Button>
                }

                {type === "phone" &&
                <Button data-tip="Please note message and <br/> data rates may apply."
                        data-type={"light"}
                        data-multiline={true}
                        data-class={"phone-tooltip"}
                        data-text-color={"#85939D"}>
                    <img src={info} alt=""/>
                </Button>
                }


            </InputWrapper>

            {!err ? "" :
                <div className={"d-flex align-items-center mt-2"}>
                    <Warning src={warning} alt=""/>
                    <ErrMsg>{err}</ErrMsg>
                </div>
            }

            <ReactTooltip/>
        </div>
    )
}
