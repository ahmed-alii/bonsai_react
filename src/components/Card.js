import styled from "styled-components";

const C = styled.div`
  background-color: white;
  border: 1px solid #A7A8A8;
  border-radius: 30px;
  padding: 20px;
  max-width: 512px;
  width: 100%;
  margin-bottom: 60px;
`

export default function StyledCard({children}) {
    return (
        <C>
            {children}
        </C>
    )
}
