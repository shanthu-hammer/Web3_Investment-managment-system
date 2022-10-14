import React from "react";
import "../Invest/invest.css";
import "../manipulation/manipulation.css";
import '../../../logic/differgenerator'

//accept file from users
//send files to comparision class
const Manipulation = () => {
  const Handlecheck = (e) => {
    
    // e.preventDefault();
    //console.log(formData);
    // console.log(formData.iamount);
    // ... submit to API or something
  };
  return (
    <div>
      {/* NAVBAR */}
      <div>
        {/* className={styles.Navbar}*/}
        {/*<ANavbar BurgerColour={"whitesmoke"} /> */}
      </div>

      <div className="form">
        <form>
          <h1 className="logincss">Difference Generator </h1>
          <div className="input-container">
            <label className="labeltxt">Username </label>
            <input type="text" name="uname" required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input onClick={Handlecheck} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
 export default Manipulation;