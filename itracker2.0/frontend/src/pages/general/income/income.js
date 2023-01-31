import React from "react";
//import "../income/income.css";
import txtfileconversion from '../../../logic/txtfileconversion'
import UpdateStrapi from '../../../logic/updateStrapi'
const Income = () => {
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
    console.log(formData.uname.toString);
    txtfileconversion(formData, formData.uname);
    //strapiupdate:update data to
    // ... submit to API / txtfileconvert
  };

  const fetchdcndata =async(e)=>{
    e.preventDefault();
    await UpdateStrapi('income',formData.uname)
  }

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
              <input onClick= {handleSubmit
              } type="submit" />
            </div>
            <button
          className="custom-button"
          onClick={fetchdcndata
          }
        >
          Fetch Orginal
        </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};
export default Income;

const initialFormData = Object.freeze({
  uname: "",
  idate: "",
  iamount: "",
  iremarks: "",
});






//https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs