//input page for fetching the 2 files from the user 
import { Button, Alert, AlertTitle } from "@mui/material";
import React, { Component, useState } from "react";
import "../manipulation/manipulation.css";
import DropDown from "./dropdown";
//import differenceGenerator from "../../../logic/differgenerator";
//import ReactFileReader from "react-file-reader";
class Manipulation extends Component {
  
  constructor(props) {
    super(props);
    this.file1 = "";
    this.file2 = "";
   
  }
 
//file name and cid from user
state={
  value:'',
  fname:'',
  fcid:''
}
getValue=(eve)=>{
  console.log('Event: ',eve.target.value)

  const fname = this.fname.value;
  const fcid = this.fcid.value
  this.setState({fname:fname, fcid:fcid});
}

  //file from user
  showFile = async (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      //console.log(text);
      this.file1 = text;
      alert(text);
    };
    reader.readAsText(e.target.files[0]);
  };
 
// fetchbuttontest=()=>{
//   e.preventDefault();
//   const value=this.state.value
//   console.log(value+"")
// }

  //file from web3
  fetchdcndata = async (e) => {
    const fcid=this.state.fcid;
    const fname=this.state.fname;
    console.log(fcid,fname)
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      var url="http://localhost:7000/filedata/"+fcid+"/"+fname;
      // let dcnfile = await fetch(
      //   "http://localhost:7000/filedata/bafybeiacs6qaawbgrwq26zzno2lpoor3nzzmjyo5b4f2ejbjfdp5n2of74/file3.json",
      //   requestOptions
      // )
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.log("error", error));
      // bafybeiacs6qaawbgrwq26zzno2lpoor3nzzmjyo5b4f2ejbjfdp5n2of74.ipfs.w3s
      //   .link / file3.json;
      //oldurl    "http://localhost:7000/filedata/bafybeiacs6qaawbgrwq26zzno2lpoor3nzzmjyo5b4f2ejbjfdp5n2of74/file3.json"
      let dcnfile = await fetch(url
       ,
        requestOptions
      ).then((x) => x.text());

      // console.log(dcnfile);
      this.file2 = dcnfile;
      alert(dcnfile);
      return await dcnfile;
    } catch (error) {
      console.log(error);
    }
  };
  //Calling the Difference generator
  differenceGen = () => {
    console.log(this.file1);
    console.log(this.file2);
    let differResult = differenceGenerator(this.file1, this.file2);
    alert(differResult);
  };
  render = () => {
    return (
      <div>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Click here to fetch the file from decentralised storage{" "}
        </Alert>
        <br />
        <br />
        <input type="file" onChange={(e) => this.showFile(e)} />
       
        <div className="input-container">
              <label>CID </label>
              <input
                type="text"
                //name="iremarks"
                onChange={this.getValue} ref={(input)=>this.fcid=input}
                required
              />
            </div>
       
            <div className="input-container">
              <label>File Name  </label>
              <input
                type="text"
              //  name="iremarks"
                onChange={this.getValue} ref={(input)=>this.fname=input}
                required
              />
            </div>

        <button
          className="custom-button"
          onClick={(e) => {
            this.fetchdcndata(e);
          }}
        >
          Fetch Orginal
        </button>
        

        <br />
        <br />

        {/*  Call difference generator */}
        <div
          className="button-container"
          onClick={(e) => {
            this.differenceGen(e);
          }}
        >
          <input type="submit" />
        </div>
      </div>
    );
  };
}

export default Manipulation;
const differenceGenerator = (file_str1, file_str2) => {
  var result = "no files selected";
  
  if (file_str1 == file_str2) {
    result = "File Validated successfully ";
  } else {
    result = "File has been manipulated";
  }

  return result;
};