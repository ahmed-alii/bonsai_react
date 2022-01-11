import pdf from "../assets/pdfIcon.png"
import file from "../assets/fileIcon.png"
import dox from "../assets/docIcon.png"
import zip from "../assets/zipIcon.png"
import StyledText from "./styledText";
import uploadingIcon from "../assets/uploadingIcon.png"
import uploadFailedIcon from "../assets/uploadFailedIcon.png"
import uploadSuccessIcon from "../assets/uploadSuccessIcon.png"
import ProgressBar from "@ramonak/react-progress-bar";


export default function FileProgressUpload({filesList, editFiles}) {
    let a = []
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }


    filesList.forEach(files => {

        for (let i = 0; i < files.length; i++) {
            let file = files.item(i);
            let fileObj = {
                name: file.name,
                type: file.name.split('.').pop(),
                size: file.size,
            }
            a.push(fileObj)
        }
    })

    return (
        <>
            {a.map(f => {
                return (
                    <div className={"row mb-3"}>
                        <div className="col-2 text-center p-0">
                            <img src={f.type === "pdf" ? pdf : f.type === "docx" ? dox : f.type === "zip" ? zip : file}
                                 alt="" className={"img-fluid"}/>
                        </div>
                        <div className="col-10 p-0">
                            <div className="row">
                                <div className="col-11">
                                    <StyledText weight={"bold"} size={"12px"} color={"black"} mb0>
                                        {f.name}
                                    </StyledText>
                                    <StyledText weight={"light"} size={"7px"} color={"black"} mb0>
                                        {formatBytes(f.size, 1)}
                                    </StyledText>
                                    <ProgressBar height={"3px"}
                                                 isLabelVisible={false}
                                                 baseBgColor={"#F2F6FF"}
                                                 bgColor={"#3483E2"}
                                                 completed={60} />
                                </div>
                                <div className="col-1">
                                    <div>
                                        <button style={{
                                            border: "none",
                                            backgroundColor: "transparent",
                                            height: "20px",
                                            width: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                            <img src={uploadingIcon} alt=""/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}