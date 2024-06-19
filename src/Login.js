import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import "./Style.css";

const Login=()=>{
    return(
        <>

<hr style={{color:"gray"}}/>
        <div className='main2'>

        <div className="wrapper">
            <form action="">
                <h2>login</h2>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <PersonIcon className='i' />


                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <LockIcon className='i'/>


                </div>

                <div className="forgot">
                    <label style={{position:"relative" , top:"5px"}}><input type="checkbox" />Remember Me</label>
                    <a href="#" style={{position:"relative" , top:"5px", left:"170px" , color:"white"}} >Forgot Password</a>

                </div>
                <button type="submit" className="bttn">Login</button>
                <div className="register">
                    <p style={{position:"relative" , top:"100px", left:"80px" , color:"white"}}>Dont have an account? <a href="#" style={{color:"white"}}>Register</a></p>
              </div>
           </form>

        </div>

        </div>


        
        
        
        
        
        
        
        
        </>
    )



}

export default Login; 