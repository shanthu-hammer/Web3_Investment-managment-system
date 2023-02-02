import React from "react";
import UploadFile from "./uploadfile";

/*
Function is use
-Update the strapi 
-call decentralizedAPI(Post end point)
-
 */
const UpdateStrapi = async (updateType, updateFileName) => {
  //console.log(updateType)

  let updateCid = await UploadFile(updateFileName); //web3 api call here
  let updateCidEdited = updateCid+ ".txt";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    data: {
      fileID: "itracker",
      cid: updateCid ,
      name: updateFileName+".txt",
      type: updateType,
    },
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  console.log("from updatestrapi");
  console.log(raw);

  let resultt = await fetch(
    "http://localhost:1337/api/fileinfos",
    requestOptions
  )
    .then((x) => x.json())
    .catch(console.log(Error));
  console.log(resultt);
};

export default UpdateStrapi;

/*{ working post method 
    "data": {        
         
            "fileID": "fourth file ID ",
            "cid": "bafybeiacs6qaawbgrwq26zzno2lpoor3nzzmjyo5b4f2ejbjfdp5n2of74",
            "name": "file3.json",
            "type": "invest"
          
        
    }
    
} */
