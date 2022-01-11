import styled from "styled-components";

const Button = styled.button`
  max-width: 360px;
  height: 50px;
  border-radius: 10px;
  background-color: #94C16F;
  border: none;
  color: white;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  padding: 4px 40px;

  :hover {
    background-color: rgba(148, 193, 111, 0.6);
  }

`
export default function SuccessButton({txt, onclick}) {

   return(
       <div className={"text-white my-4"}>
           <Button onClick={onclick}>{txt}</Button>
       </div>

   )
}
