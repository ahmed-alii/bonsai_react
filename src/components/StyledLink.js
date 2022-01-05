import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLinkel = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: #397FF5;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
`

export default function StyledLink({href, txt}) {

    return (
        <StyledLinkel to={href}>
            {txt}
        </StyledLinkel>
    )
}
