import styled from "styled-components";

const T = styled.p`
  color: ${props => (props.color ? props.color : "black")};
  size: ${props => (props.size ? props.size : "20px")};
  font-weight: ${props => (props.weight ? props.weight : "400")};
  margin-bottom: ${props => (props.mb0 === true && 0)};
  font-family: 'Poppins', sans-serif;
  
`

export default function StyledText({color, size, weight, children, mb0}) {
    return (
        <T color={color} size={size} weight={weight} mb0={mb0}>
            {children}
        </T>
    )
}
