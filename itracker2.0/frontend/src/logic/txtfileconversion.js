import React from "react";
//const blob = new Blob([fileData], { type: "text/plain" });
//const url = URL.createObjectURL(blob);
//let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// let UserInfo = {
//   uname: "",
//   idate: "",
//   iamount: "",
//   iremarks: "",
// };

const txtFileConversion = (userInfo) => {
  const fileData = JSON.stringify(userInfo);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "obj.txt";
  link.href = url;
  //location.href = '';
  link.click();
};
export default txtFileConversion;
//export default TxtFileConversion;

//https://spin.atomicobject.com/2022/03/09/create-export-react-frontend/

// class TxtFileConversion extends React.Component {
//   downloadTxtFile = () => {
//     const element = document.createElement("a");
//     const file = new Blob([document.getElementById("input").value], {
//       type: "text/plain;charset=utf-8",
//     });
//     //element.href = URL.createObjectURL(file);
//     element.href = URL.createObjectURL(file);
//     location.href= 'C:\KTlearning\react-app\7\gradprj\itracker2.0\frontend\src\logic'
//     element.download = "myFile.txt";//random generted name
//     document.body.appendChild(element);
//     element.click();
//   };
//   render() {
//     return (
//       <div>
//         <input id="input" />
//         <button onClick={this.downloadTxtFile}>Download</button>
//       </div>
//     );
//   }
// }

