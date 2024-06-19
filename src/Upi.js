import { useNavigate } from "react-router-dom";



const Upi=()=>{
    const myNavigate=useNavigate();

  const donePayment=()=>{
    myNavigate("/PaymentDone")
  }
    
    return(
        <>
        <div className="upi">
            <img src="/images/gpay.png"/>
            <img src="/images/pay.png"/>
            <img src="/images/paytm.png"/>



        </div>

        <p className="upi1">Enter your upi id</p> 

        <input type="text" className="input"  />

        <div className="d-grid" style={{marginTop:"200px"}}>
            <button className="btnn" onClick={donePayment}>Confirm</button>
          </div>
        
        
        
        
        
        
        
        </>
    )
}

export default Upi;