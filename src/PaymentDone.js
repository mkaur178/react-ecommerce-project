import { useEffect,useState } from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress'
import { cartempty } from "./ProductSlice";
import {useDispatch } from "react-redux";


const PaymentDone=()=>{
     const[isLoading, setIsLoading] = useState(true);
     const dispatch = useDispatch();

     useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
            dispatch(cartempty());

        }, 3000)
     },[]);

    return(
        <>
        <hr style={{color:"gray"}}/>
        <center>
        {isLoading?(  
            
            <div style={{height:"100vh" , width:"100%"  , display:"flex" , justifyContent:"space-around" ,position:"relative" , top:"250px"}}>

                <h1 style={{position:"relative", left:"100px"}}>Your payment is being processing</h1>
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" >
      <CircularProgress color="secondary" style={{position:"relative", right:"250px"}} />
    </Stack>

           </div>
             ):(

                <div style={{height:'300px' , paddingTop:"100px"}}>
                    <h1>
                        Thanks for Purchasing Our Products <br/>
                        we will provide your product within 5 to 7 Days



                    </h1>
                    
                    </div>
            )}
            
            
            </center>
        </>
    )
}

export default PaymentDone;