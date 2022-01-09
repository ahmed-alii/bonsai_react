import StyledText from "./styledText";
import chevron from "../assets/chevron.png";
import styled from "styled-components";


const Accordion = styled.div`
  padding: 20px;
`
const AccordionItem = styled.div`
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  :hover {
    border-radius: 10px;
    border: 1px solid #71AD40;
  }
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  :hover{
    * {
      color: #71AD40 !important;
      border-color: #71AD40 !important;
    }
  }
`
const Number = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid #707070;
  color: #0C273C;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 8px;
`

const Content = styled.div`
    padding: 20px;
    
`

export default function AccordionBlock() {


    return (
        <Accordion>
            <AccordionItem>
                <Title>
                    <div className={"d-flex align-items-center"}>
                        <Number>1</Number>
                        <StyledText weight={"bold"} color={"#0C273C"} size={"20px"} mb0>Customize the
                            Messenger</StyledText>
                    </div>
                    <div className={"d-flex align-items-center justify-content-center"}>
                        <img src={chevron} alt=""/>
                    </div>
                </Title>

                <Content>
                    asdasd
                </Content>
            </AccordionItem>

            <AccordionItem>
                <Title>
                    <div className={"d-flex align-items-center"}>
                        <Number>2</Number>
                        <StyledText weight={"bold"} color={"#0C273C"} size={"20px"} mb0>Add the Messenger to Your
                            Website</StyledText>
                    </div>
                    <div className={"d-flex align-items-center justify-content-center"}>
                        <img src={chevron} alt=""/>
                    </div>
                </Title>
            </AccordionItem>

            <AccordionItem>
                <Title>
                    <div className={"d-flex align-items-center"}>
                        <Number>3</Number>
                        <StyledText weight={"bold"} color={"#0C273C"} size={"20px"} mb0>Upload to the Knowledge
                            Base</StyledText>
                    </div>
                    <div className={"d-flex align-items-center justify-content-center"}>
                        <img src={chevron} alt=""/>
                    </div>
                </Title>
            </AccordionItem>
        </Accordion>
    )
}
