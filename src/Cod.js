import { useNavigate } from "react-router-dom";

const Cod=()=>{

    const myNavigate=useNavigate();

  const donePayment=()=>{
    myNavigate("/PaymentDone")
  }
    return(
        <>
        <img src="./images/cash.jpg" height="400px" style={{marginTop:"20px"}}/>
        
            <button className="btnn" onClick={donePayment}>Confirm</button>

        
        
        
        
        
        </>
    )
}

export default Cod;