import CreditCard from "./CreditCard";
import "./Style.css";
import { useState } from "react";
import Upi from "./Upi";
import Cod from "./Cod";




const BuyNow=()=>{
    var myans="";
    const[pmethod , setPmethod] = useState("");

    const myPaymentMethod=(e)=>{
        let myval= e.target.value;
        setPmethod(myval);
        
    }

    switch(pmethod)
    {
        case "card":
            myans=<CreditCard/>
            break;
            case "upi":
            myans=<Upi/>
            break;
            case "cod":
            myans=<Cod/>
            break;  
            default:
            myans=<><h2 style={{position:"relative", top:"45px", left:"30px"}}>Choose payment option</h2>  
            <img src="./images/paynow.png" height="400px" style={{position:"relative", top:"50px"}} />    
</>
    }

    return(
        <>
        <hr style={{color:"gray"}}/>
        <div className="contact">
            <div>
                <h3>Shipping Address</h3>
                <p>First Name</p>
                <input type="text" />
                <p>Last Name</p>
                <input type="text" />
                <p>Shipping Address</p>
                <input type="text" />
                <p>Phone Number</p>
                <input type="text" />
                <p>Email</p>
                <input type="text" />
                <p>City</p>
                <input type="text" /><br/>
                <p>State</p>
                <input type="text" /><br/>
                </div>

            <div className="paymentMethod">

                <h2>Select Your Payment Method</h2>
                <div style={{marginTop:"20px"}}>
                <div>
                <input type="radio" name="r1" value="card" onClick={myPaymentMethod} />
                 Credit/Debit card

                 </div>
                 <div >
                 <input type="radio" name="r1" value="upi" onClick={myPaymentMethod}/>
                 Upi

                 </div>
                 <div>

                 <input type="radio" name="r1" value="cod" onClick={myPaymentMethod}/>
                 Cash on delivery
                 </div>
                 </div>

                 

                {myans}
            </div>
        </div>
        </>
    )

}
export default BuyNow;