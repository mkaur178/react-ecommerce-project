import { useDispatch, useSelector } from "react-redux";
import { proQtyInc,proQtyDec,cartProductRemove,cartempty } from "./ProductSlice";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';




const Shop=()=>{

    const mycartData= useSelector((state)=>state.addtocart.cart);
    const proCount=mycartData.length; 

    var netAmount=0;
    var tex=0;
    var finalAmount=0;

    const cartitem=useSelector((state)=>state.addtocart.cart);
    const dispatch= useDispatch();
    const productQntInc=(myid)=>{
        dispatch(proQtyInc(myid));

    }
    const productQntDec=(myid)=>{
        dispatch(proQtyDec(myid));

    }

    const productRemove=((myid)=>{
        dispatch(cartProductRemove(myid));

    })


    const empty=()=>{
        dispatch(cartempty());
        
    }

    const productData=cartitem.map((key)=>{
        netAmount+=key.price*key.quantity;
        tex=parseInt(netAmount*18/100);
        finalAmount=tex+netAmount;


        return(
            <>
            <tr className="tabledata" align="center">

            <td> <img src={"images/"+key.image} style={{height:"150px" , marginRight:"140px"}}/></td>
            <td style={{position:"relative", right:"100px"}}>{key.name} <br/><br/> ₹ {key.price}</td>
            <td style={{position:"relative", right:"70px"}}>

            <IndeterminateCheckBoxIcon
                onClick={()=>{productQntDec(key.id)}}
                style={{cursor:"pointer"}}
                />
                
    
                <span style={{padding:"5px" , position:"relative", bottom:"5px"}}>
                    {key.quantity}
                </span>

                <AddBoxRoundedIcon
                onClick={()=>{productQntInc(key.id)}}
                style={{cursor:"pointer" }}
                />
              </td>

              <td style={{position:"relative", right:"30px"}}> ₹{key.price*key.quantity}</td>

              <td>
               <DeleteForeverIcon
               onClick={()=>{productRemove(key.id)}}
               style={{marginLeft:"5px", fontSize:"30px", cursor:"pointer"}}
               />
              </td>

              </tr>
              <tr>
               <td colSpan="7">
               <hr size="1"/>
                </td>
             </tr>
            </>
        )
    });

    if (proCount == 0)
    {

     return(
        <>
        <hr style={{color:"gray"}}/>
      <div className="empty">
      <h1>No Item In Your Cart <SentimentVeryDissatisfiedIcon style={{fontSize:"40px" ,marginTop:"5px"}}/></h1>
        </div>        

        </>
     )
            

    }
  
    




return(
        <>
        <hr style={{color:"gray"}}/>
        <div className="mainheading">
            <h1>My Cart ({proCount})</h1>
        </div>

        <div className="cartdiv"> 

        <table width="60%">
            <tr className="rowheading" align="center">
                <td style={{position:"relative" , right:"70px"}}>Product</td>
                <td style={{position:"relative" , right:"100px"}}>Name & Price</td>
                <td style={{position:"relative" , right:"70px"}}>Quantity</td>
                <td style={{position:"relative" , right:"30px"}}>Total</td>
                <td>Remove</td>

         </tr>

         <tr>
        <td colSpan="7">
            <hr size="1"/>
        </td>
        </tr>

        {productData}

        <div style={{marginTop:"40px"}}>
        
        
         <Link to="/products">
         <button style={{position:"relative" , left:"50px" , cursor:"pointer",padding:"5px 10px 5px 10px" ,color:"white", backgroundColor:"#C08261", border:"none" , borderRadius:"25px", fontSize:"15px"}} >Continue Shopping</button>
         </Link>
        

         <button onClick={empty} style={{position:"relative" , left:"550px" , padding:"5px 10px 5px 10px" ,cursor:"pointer", color:"white", backgroundColor:"#C08261", border:"none" , borderRadius:"25px", fontSize:"15px"}} >Empty Cart</button>

        </div>

        
        </table>


        



        <div className="netAmount">
    
            <h3 style={{position:"relative", top:"20px", left:"65px"}}>ORDER SUMMARY</h3>
            <hr size="1" style={{ position:"relative",  top:"40px"}}/>

            <p style={{position:"relative", top:"70px", left:"15px"}}>SUBTOTAL </p>  
            <div style={{position:"relative", top:"45px", left:"210px"}}>₹
            {netAmount}
            </div>

            <p style={{position:"relative", top:"70px", left:"15px"}}>TAX-18%</p>
            
            <div style={{position:"relative", top:"45px", left:"210px"}}>₹
             {tex}
             </div>

             

            <div className="net1">
                

                

            <div style={{position:"relative", top:"3px" , textDecoration:"bold"}}> Total Amount</div>   
            
            <div style={{position:"relative",  left:"210px" , bottom:"21px"}}>₹
              {finalAmount}
             </div>
              

             <Link to="/buynow"> 
            <button>CHECKOUT</button>
            </Link>
            </div>
        </div>

        </div>
        
        
        
        </>
    )
}


export default Shop;