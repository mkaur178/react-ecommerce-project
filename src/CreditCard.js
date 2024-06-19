import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";





const CreditCard = () => {

  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const myNavigate=useNavigate();

  const donePayment=()=>{
    myNavigate("/PaymentDone")
  }





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };
  return (
    <div style={{marginTop:"50px"}}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <div className="mt-3">
        <form>
          <div className="mb-3">
            <input
              type="text"
              name="number"
              className="form-control"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              style={{padding:"10px 200px 10px 10px", marginLeft:"82px"}}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              style={{padding:"10px 200px 10px 10px" , marginLeft:"82px"}}
            />
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                type="text"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
                style={{padding:"10px 200px 10px 10px" , marginLeft:"82px"}}
              />
            </div>
            <div className="col-6 mb-3">
              <input
                type="text"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
                style={{padding:"10px 200px 10px 10px" , marginLeft:"82px"}}
              />
            </div>
          </div>
          <div className="d-grid">
            <button className="btnn" onClick={donePayment}>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreditCard;