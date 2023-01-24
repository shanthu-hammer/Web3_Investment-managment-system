import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

     let fetchdcndata = async()=> {
    try {
      let dcnfile = await fetch(
        "https://bafybeiacs6qaawbgrwq26zzno2lpoor3nzzmjyo5b4f2ejbjfdp5n2of74.ipfs.w3s.link/file3.json"
      ).then((x) => x.text());

      console.log(dcnfile);
      alert(dcnfile);
      return await dcnfile;
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>welcome to home page </h1>
      <div className="button-container">
              <input onClick= {fetchdcndata
              } type="submit" />
            </div>
    </div>
  );
};
 export default Home;


