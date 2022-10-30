//input page for fetching the 2 files from the user 

import React, { Component } from "react";

//import ReactFileReader from "react-file-reader";
class Manipulation extends Component {
  constructor(props) {
    super(props);
  }

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

      </div>
    );
  };
}

export default Manipulation;
