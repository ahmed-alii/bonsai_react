import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLinkel = styled(Link)`
  font-size: ${props => (props.size ? props.size : "20px")};
  font-weight: bold;
  color: #397FF5;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
`

export default function StyledLink({href, txt, size}) {

    return (
        <StyledLinkel to={href} size={size}>
            {txt}
        </StyledLinkel>
    )
}
