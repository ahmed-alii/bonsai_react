import styled from "styled-components";
import cc from "../assets/cc.png"
import pp from "../assets/pp.png"
import {useState} from "react"

const W = styled.label`
  display: block;
  border: 1px solid #D2D2D2;
  margin-bottom: 20px;
`

const Input = styled.input`
  background-color: transparent;
  border: none;
  height: 38px;
  padding: 0 6px;
  display: block;

  :focus {
    box-shadow: none;
    border: none;
    outline: none;
  }

`
export default function PaymentMethod({}) {
    const [selected, setSelected] = useState(null)

    // useEffect(function (){
    //
    // },[selected])
    return (
        <div>
            <W style={{
                borderColor: selected === "CC" && "#3B88FC"
            }}>
                <div className={"d-flex justify-content-between align-items-center mb-3"} style={{
                    padding: "10px"
                }}>
                    <div className={"d-flex align-items-center"}>
                        <input type="radio" name="paymentMethod" value={"CC"}
                               onChange={(v) => setSelected(v.target.value)}/>
                        <span className={"px-2"} style={{fontSize: "16px"}}>Credit Card</span>
                    </div>
                    <div>
                        <img src={cc} alt="" className={"img-fluid"}/>
                    </div>
                </div>

                <div style={{
                    padding: "10px 20px"
                }}>
                    <div className={"d-flex"} style={{
                        background: "#F7F7F7",
                        border: "1px solid #D2D2D2"
                    }}>
                        <Input type="text" placeholder={"Card Number"}
                               style={{width: "60%", borderRight: "1px solid #D2D2D2"}}/>
                        <Input type="text" placeholder={"MM/YY"} style={{width: "20%", textAlign: "center"}}/>
                        <Input type="text" placeholder={"CVV"} style={{width: "20%", textAlign: "center"}}/>
                    </div>
                </div>

            </W>

            <W style={{
                borderColor: selected === "PP" && "#3B88FC"
            }}>
                <div className={"d-flex justify-content-between align-items-center mb-3"} style={{
                    padding: "10px"
                }}>
                    <div className={"d-flex align-items-center"}>
                        <input type="radio" name="paymentMethod" value={"PP"}
                               onChange={(v) => setSelected(v.target.value)}/>
                        <span className={"px-2"} style={{fontSize: "16px"}}>Paypal</span>
                    </div>
                    <div>
                        <img src={pp} alt="" className={"img-fluid"}/>
                    </div>
                </div>

                <div className={"d-flex"} style={{
                    background: "#F7F7F7",
                    padding: "10px 20px"
                }}>
                    <span style={{
                        fontSize: "12px",
                        color: "#989A9E"
                    }}>You can pay with your credit card if you don’t have a <br/> PayPal account.</span>
                </div>
            </W>
        </div>

    )
}
