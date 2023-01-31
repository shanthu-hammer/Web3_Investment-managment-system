const UploadFile = async (uploadFileName) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("","");
  // myHeaders.append("Content-Type", "application/json");
  //   console.log("uploaded file file name " + uploadFileName);
  //   var raw = "";
  var url = "http://localhost:7000/uploadfile/" + uploadFileName + ".txt";
  //

  let requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  console.log(uploadFileName);
  let cid = await fetch(url, requestOptions).then((x) => x.text());
  console.log("cid final test " + cid);
  return cid;
};

export default UploadFile;
