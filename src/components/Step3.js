import StyledText from "./styledText";
import {FileDrop} from 'react-file-drop';
import fileDrop from "../assets/uploadArea.png"
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import FileProgressUpload from "./FileProgressUpload";
import SuccessButton from "./SuccessButton";

const FileDropStyled = styled(FileDrop)`
  background-color: #F7F7F6;
  border-radius: 20px;
  padding: 50px 100px;
  height: 326px;
  max-width: 550px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    max-width: 200px;
    margin-bottom: 30px;
  }
`
export default function Step3() {
    const [files, setFiles] = useState([])
    const fileInputRef = useRef(null);
    const [filesUploaded, setUploaded] = useState(false)

    const onFileInputChange = (event) => {
        const {files} = event.target;
        setFiles(current => current.concat(files))
    }
    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    return (
        <div className={"row"}>
            <div className="col-md-12">
                <StyledText color={"#495D6D"} size={"16px"} weight={"bold"}>
                    It’s time to add resources to your Knowledge Base. Bonsai leverages your Knowledge Base to craft
                    Suggested Answers and
                    help you create a more efficient workflow.
                    <br/>
                    <br/>
                    Add macros (Help Articles, FAQs, Blog Posts, and more) to your knowledge base for suggested answers.
                </StyledText>
            </div>

            <div className="row">
                <div className={files && files.length === 0 ? "col-md-12 d-flex justify-content-center align-items-center" : "col-md-7 d-flex justify-content-center align-items-center"}>
                    <FileDropStyled
                        onDrop={(files, event) => {
                            setFiles(current => current.concat(files))
                        }}
                        onTargetClick={onTargetClick}
                    >
                        <div className={"text-center"}>
                            <img src={fileDrop} alt=""/>
                            <br/>

                            <StyledText color={"#495D6D"} size={"16px"} weight={"bold"}>
                                Drop your files here to get started. <br/>
                                or <span style={{color: "#397DF2"}}>Browse</span>
                            </StyledText>
                        </div>

                        <input
                            onChange={onFileInputChange}
                            ref={fileInputRef}
                            type="file"
                            className="d-none"
                        />
                    </FileDropStyled>
                </div>

                <div className="col-md-5">
                    <FileProgressUpload filesList={files}/>
                </div>
            </div>

            {files && files.length === 0 ?
                <div className="row">
                    <div className="col-12 text-end">
                        <StyledText size={"16px"} color={"#85939D"} weight={"bold"}>skip now</StyledText>
                    </div>
                </div>
                :
                <div className={"mt-4"}>
                    <StyledText color={"#495D6D"} size={"16px"} weight={"bold"} mb0>
                        Check back later after Bonsai has had a chance to train its AI models based on your Document Base. You can test the Suggested
                        Answers and make any changes after the training completes.
                    </StyledText>

                    <div className="row">
                        <div className="col-md-6">
                            <SuccessButton txt={"Finish"}/>
                        </div>
                    </div>
                </div>
            }



        </div>
    )
}