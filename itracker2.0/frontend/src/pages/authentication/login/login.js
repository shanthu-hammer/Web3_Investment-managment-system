import React from "react";
import "../login/login.css"

const Login = () => {
  return (
    <div>
      


    {/* NAVBAR */}
    <div >{/* className={styles.Navbar}*/}
    {/*<ANavbar BurgerColour={"whitesmoke"} /> */}
  </div>
   


  
     <div className="form">
       <form>
           <h1 className='logincss'>Login</h1>
         <div className="input-container">
           <label className='labeltxt'>Username </label>
           <input type="text" name="uname" required />

         </div>
         <div className="input-container">
           <label>Password </label>
           <input type="password" name="pass" required />

         </div>
         <div className="button-container">
           <input type="submit" />
         </div>
       </form>
     </div>
     </div>

  );
};
 export default Login;