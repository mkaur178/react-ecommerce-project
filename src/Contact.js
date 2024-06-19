



const Contact=()=>{
    return(
        <>
        <hr style={{color:"gray"}}/>
        <div className="contact">
            <div>
                <h3>Inquiry Form</h3>
                <p>First Name</p>
                <input type="text" />
                <p>Last Name</p>
                <input type="text" />
                <p>Phone Number</p>
                <input type="text" />
                <p>Email</p>
                <input type="text" />
                <p>Description</p>
                <input type="text" /><br/>
                   <button className="btn1">SUBMIT</button>
                </div>

            <div className="con2">

                <h2>Contact Info</h2>
                <p>Phone - +91-124 4675447</p>
                <p>care@homelyheaven.com</p>
                <p>Address - Ankush Square, Block D, Sector 44,
                 Gurugram, Haryana - 122010</p>
            </div>
        </div>
        
        
        </>
    )
}

export default Contact;