import StyledText from "./styledText";
import chevron from "../assets/chevron.png";
import styled from "styled-components";
import Step1 from "./Step1";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import Step2 from "./Step2";
import Step3 from "./Step3";
import check from "../assets/greencheckcompleted.png"


const Header = styled.div`
  padding: 10px 20px;
  margin-bottom: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.active ? "#71AD40 !important;" : "transparent")};
  border-radius: ${props => (props.active && "10px")};

  :hover {
    border: 1px solid #71AD40;
    border-radius: 10px;
  }
`

const Number = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid #707070;
  color: #0C273C;
  background-image: none;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 8px;


`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;


  ${Header} & * {
    border-color: ${props => (props.active && "#71AD40 !important;")};
  }

  ${Header}:hover & p {
    color: ${props => (props.completed ? "#71AD40 !important;" : "#71AD40 !important")};
    border-color: #71AD40 !important;
  }

  ${Header}:hover & ${Number} {
    color: ${props => (props.completed ? "#71AD40 !important;" : "#71AD40 !important")};
    border-color: #71AD40 !important;
  }

  p {
    color: ${props => (props.active && !props.completed ? "#71AD40 !important" :
            !props.active && props.completed ? "grey !important" : "#0C273C !important")};
  }

  ${Number} {
    border: ${props => (props.completed ? "none" : "1px solid #707070")};
    color: ${props => (
            props.active && props.completed ? "transparent" :
                    !props.active && props.completed ? "transparent" :
                            props.active && !props.completed ? "#71AD40" : "#0C273C"
    )};
    background-image: ${props => (props.completed ? `url(${check})` : "none")};
  }


`


const Content = styled(AccordionItemPanel)`
  padding: 20px;

`

export default function AccordionBlock() {

    function isCompleted(item) {
        if (item === 1) {
            return true
        }
        if (item === 2) {
            return 2
        }
    }

    return (
        <Accordion className={"p-4"}>
            <AccordionItem>
                <AccordionItemState>
                    {
                        (state) => {
                            return (
                                <Header active={state.expanded}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <Title active={state.expanded} completed={isCompleted(1)}>
                                                <div className={"d-flex align-items-center"}>
                                                    <Number>{!isCompleted(1) && 1}</Number>
                                                    <StyledText weight={"bold"} color={"#0C273C"} size={"20px"} mb0>Customize
                                                        the
                                                        Messenger</StyledText>
                                                </div>
                                                <div className={"d-flex align-items-center justify-content-center"}>
                                                    <img src={chevron} alt=""
                                                         style={{
                                                             transform: state.expanded ? "rotate(90deg)" : ""
                                                         }}/>
                                                </div>
                                            </Title>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <Content>
                                        <Step1/>
                                    </Content>
                                </Header>

                            )
                        }
                    }
                </AccordionItemState>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemState>
                    {
                        (state) => {
                            return (
                                <Header active={state.expanded}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <Title active={state.expanded} completed={isCompleted(2)}>
                                                <div className={"d-flex align-items-center"}>
                                                    <Number>{!isCompleted(2) && 2}</Number>
                                                    <StyledText weight={"bold"} color={"#0C273C"} size={"20px"} mb0>
                                                        Add the Messenger to Your Website
                                                    </StyledText>
                                                </div>
                                                <div className={"d-flex align-items-center justify-content-center"}>
                                                    <img src={chevron} alt=""
                                                         style={{
                                                             transform: state.expanded ? "rotate(90deg)" : ""
                                                         }}/>
                                                </div>
                                            </Title>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <Content>
                                        <Step2/>
                                    </Content>
                                </Header>

                            )
                        }
                    }
                </AccordionItemState>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemState>
                    {
                        (state) => {
                            return (
                                <Header active={state.expanded}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <Title active={state.expanded} completed={isCompleted(3)}>
                                                <div className={"d-flex align-items-center"}>
                                                    <Number>{!isCompleted(3) && 3}</Number>
                                                    <StyledText weight={"bold"} color={"#0C273C"} size={"20px"} mb0>
                                                        Upload to the Knowledge Base
                                                    </StyledText>
                                                </div>
                                                <div className={"d-flex align-items-center justify-content-center"}>
                                                    <img src={chevron} alt=""
                                                         style={{
                                                             transform: state.expanded ? "rotate(90deg)" : ""
                                                         }}/>
                                                </div>
                                            </Title>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <Content>
                                        <Step3/>
                                    </Content>
                                </Header>

                            )
                        }
                    }
                </AccordionItemState>
            </AccordionItem>

        </Accordion>

    )
}
