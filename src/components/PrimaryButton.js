import styled from "styled-components";

const Button = styled.button`
  max-width: 600px;
  height: 60px;
  border-radius: 10px;
  background-color: #2f1073;
  border: none;
  color: white;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;

  :hover {
    background-color: #472896;
  }

`
export default function PrimaryButton({txt, onclick}) {

   return(
       <div className={"text-white my-4"}>
           <Button onClick={onclick}>{txt}</Button>
       </div>

   )
}
