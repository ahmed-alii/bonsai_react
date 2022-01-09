import styled from "styled-components";
import warning from "../assets/baseline-warning-24px.png";

const ErrMsg = styled.span`
  color: #ED5F74;
  font-size: ${props => (props.size ? props.size : "20px")};
  font-weight: bold;
  padding-left: 8px;
`

const Warning = styled.img`
  height: ${props => (props.size ? props.size : "20px")};
  width: ${props => (props.size ? props.size : "20px")};
`


export default function ErrorMessage({err, size}){
    return(
        <div className={"d-flex align-items-center mt-2"}>
            <Warning src={warning} alt=""/>
            <ErrMsg size={size}>{err}</ErrMsg>
        </div>
    )
}
