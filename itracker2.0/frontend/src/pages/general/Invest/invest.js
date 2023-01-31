import React from "react";
import "../Invest/invest.css";
import txtfileconversion from "../../../logic/txtfileconversion";
import UpdateStrapi from "../../../logic/updateStrapi";
//import "../../../logic/txtfileconversion/TxtFileConversion.js"
//invest
//name, total amount, remarks, select date

//income
//name(dropdown), total amount, select date

//prfile and duration calcultion
//return_total amount-invest_total amount
//end date - start date

//final doc
//name, total amount, remarks, select date
//name(dropdown), total amount, select date
//profit, duration
const Invest = () => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("testing");
    console.log(formData.uname);
    txtfileconversion(formData, formData.uname);
    //strapiupdate:update data to
    // ... submit to API / txtfileconvert
  };

  const fetchdcndata = async (e) => {
    e.preventDefault();
     await UpdateStrapi('invest',formData.uname)
  };
  return (
    <div>
      <div>
        {/* NAVBAR */}
        <div>
          {/* className={styles.Navbar}*/}
          {/*<ANavbar BurgerColour={"whitesmoke"} /> */}
        </div>

        <div className="form">
          <form>
            <h1 className="logincss">Invest Data</h1>
            <div className="input-container">
              <label className="labeltxt">Title </label>
              <input
                type="text"
                name="uname"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container">
              <label>Date </label>
              <input
                type="text"
                name="idate"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Total Amount </label>
              <input
                type="text"
                name="iamount"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Remarks </label>
              <input
                type="text"
                name="iremarks"
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-container">
              <input onClick={handleSubmit} type="submit" />
            </div>
            <button className="custom-button" onClick={fetchdcndata}>
              Fetch Orginal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Invest; 
const initialFormData = Object.freeze({
  uname: "",
  idate: "",
  iamount: "",
  iremarks: "",
});
