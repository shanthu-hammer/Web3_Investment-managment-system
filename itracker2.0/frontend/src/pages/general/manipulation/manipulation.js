//input page for fetching the 2 files from the user 

import React, { Component } from "react";

//import ReactFileReader from "react-file-reader";
class Manipulation extends Component {
  constructor(props) {
    super(props);
  }
  fetchdcndata = async (e) => {
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
  };

  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      alert(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  render = () => {
    return (
      <div>
        <input type="file" onChange={(e) => this.showFile(e)} />

        <input type="file" onChange={(e) => this.showFile(e)} />
        <div className="button-container">
          <input onClick={(e) => this.fetchdcndata(e)} type="submit" />
        </div>
      </div>
    );
  };
}

export default Manipulation;
