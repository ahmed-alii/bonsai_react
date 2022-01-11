import StyledText from "./styledText";
import styled from "styled-components";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {githubGist} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copyIcon from "../assets/copyIcon.png";
import SuccessButton from "./SuccessButton";
import StyledLink from "./StyledLink";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import Modal from 'react-modal';
import cross from "../assets/cross.png";
import support from "../assets/supportIcon.png";
import InputFieldsWithError from "./InputFieldsWithError";
import PrimaryButton from "./PrimaryButton";
import {useState} from "react";
Modal.setAppElement('#root');


const SelectTech = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  background-color: #F7F5F7;
  border-radius: 3px;
  height: 40px;
  width: 150px;
  border: none;
  padding: 0 10px;

  select {
    background-color: transparent;
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #0C273C;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`

const CopyCode = styled.button`
  height: 30px;
  width: 105px;
  background-color: #334AF9;
  color: white;
  font-weight: bold;
  font-size: 12px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;

  img {
    height: 16px;
    width: 16px;
    margin-right: 6px;
  }
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

export default function Step2() {

    const codeString = "<script>\n" +
        "    window.bonsaiSettings = {\n" +
        "       app_id: “abc123”\n" +
        "    };\n" +
        "</script>\n" +
        "\n" +
        "<script>\n" +
        "// App ID has been pre-filled\n" +
        "(function()) var w=window;var ic=w.Bonsai;if(type of ic===“function”) {ic(‘reattach_Bonsai_id;id==”718282\n" +
        "</script>";



    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className={"row"}>
            <div className="col-md-12">
                <StyledText color={"#495D6D"} size={"16px"} weight={"bold"}>
                    Setting up the Messenger for visitors lets you chat with people when they’re on your website.
                </StyledText>

                <SelectTech>
                    <select>
                        <option>Javascript</option>
                    </select>
                </SelectTech>

                <StyledText color={"#495D6D"} size={"16px"} weight={"bold"}>
                    Copy and paste the following code snippet before the &lt;/body&gt; tag on every page you want the
                    Messenger to appear.
                </StyledText>

                <div className={"position-relative mb-4"}
                     style={{width: "94%", backgroundColor: "rgba(241,241,240,0.51)", padding: "6px"}}>
                    <SyntaxHighlighter
                        language="xml"
                        style={githubGist}
                        showLineNumbers
                    >
                        {codeString}
                    </SyntaxHighlighter>

                    <CopyCode onClick={() => {
                        navigator.clipboard.writeText(codeString)
                    }}>
                        <img src={copyIcon} alt=""/>
                        Copy Code
                    </CopyCode>
                </div>

                <StyledText color={"#495D6D"} size={"16px"} weight={"bold"}>
                    Check if the connection between your Messenger and Bonsai is setup correctly.
                </StyledText>
                <div className={"row"}>
                    <div className="col-md-4">
                        <SuccessButton txt={"Check"}/>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        {/*<ErrorMessage size={"16px"} err={"Connection failed. Try again."}/>*/}
                        <SuccessMessage size={"16px"} err={"Success! Bonsai has been setup on your website."}/>
                    </div>

                </div>
                <div className={"ps-5"}>
                    <StyledText color={"#495D6D"} size={"16px"} weight={"bold"}>Need Help? <StyledLink
                        txt={"Request Support"} href={"#"} size={"16px"} onClick={()=> {
                        openModal()
                    }}/></StyledText>
                </div>
            </div>








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
                        <img src={support} alt="" className={"img-fluid mb-4"}/>
                        <h2 className={"fw-bold text-black mb-4"}>Thanks for requesting support</h2>
                        <StyledText size={"20px"} weight={"bold"} color={"#495D6D"}>
                            A member of our team will be in touch with <br/>
                            you in 24 hours.
                        </StyledText>
                    </div>
                </div>


            </Modal>

        </div>
    )
}