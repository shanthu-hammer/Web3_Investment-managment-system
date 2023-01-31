import React from "react";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Tabledata from './table';
import UpdateStrapi from "../../../logic/updateStrapi";
import UploadFile from "../../../logic/uploadfile";
const Home = () => {
  // const [data, setData] = useState([]);

  // const fetchData = () => {
  //   fetch(`http://localhost:1337/api/fileinfos`)
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       console.log(actualData.data);
  //       setData(actualData.data);//setData(actualData.data.data);
  //      // console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const handleSubmit = () => {
    alert("clicked ");
  };
  const handleclick = async () => {
    //let val = await UploadFile("obj");
    UpdateStrapi("investment", "rental16");
   // console.log("you have clicken me " + val);
     console.log('testing from home ');
  };
  return (
    <div className="App">
      <tbody>
        <br /> <button onClick={handleclick}>click me to check </button>
        <br />
        <br />
        <div className="button-container">
          <input onClick={handleSubmit} type="submit" />
        </div>
        {/* {data.map((item, index) => ( */}
        <tr>
          {/* {console.log(item.attributes)} */}
          {/* <td>{item.attributes.fileID}</td>
            <td>{item.attributes.cid}</td>
           
            <td>{item.attributes.name}</td>
            <td>{item.attributes.type}</td> */}
        </tr>
        {/* ))} */}
      </tbody>
    </div>
  );
};

const Home1 = () => {
  let mydata = [
    {
        "id": 1,
        "attributes": {
            "fileID": "first file ID ",
            "cid": "bafybeiacs6qaawbgrwq26zzno2lpoor3nzzmjyo5b4f2ejbjfdp5n2of74",
            "name": "file3.json",
            "type": "invest",
            "createdAt": "2023-01-26T15:10:02.581Z",
            "updatedAt": "2023-01-26T15:10:08.693Z",
            "publishedAt": "2023-01-26T15:10:08.691Z"
        }
    },
    

]

  //const [fileinfo, setFileinfo] = useState([]);
  const [data, setData] = useState([]);
  const[loading,setLoading]= useState(false)
  const[display,setDisplay]= useState(false)
  //const navigate = useNavigate();
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    
  };


 
  const fetchData = async () => {
    setLoading(true);
    await fetch(`http://localhost:1337/api/fileinfos`)//http://localhost:1337/api/fileinfos//https://dummyjson.com/products
      .then(response => response.json() )
      .then((actualData) => {
       // console.log(actualData);
        setData(actualData);
        // while (data.data[0].attributes.type===undefined) {              }
        setLoading(false)
       
     // console.log(data);
       // alert(data.fileID.text())
      //  console.log(data?.data[0]?.attributes?.fileID)
        console.log(data.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  let onclickbutton=()=>{
setDisplay(true)

  }

  useEffect(() => {
    fetchData();
    
  }, []);
  //-----------------------
  //gives object 
  let fetchdcndata = async () => {
    try {
      let dcnfile = await fetch(
        "http://localhost:1337/api/fileinfos",
        requestOptions
      ).then((x) => x.json());

     // console.log(dcnfile.data);
      //alert(dcnfile.data[0].attributes);
      return await dcnfile;
    } catch (error) {
      console.log(error);
    }
  };
 
  //if (loading) return null
  return (
    <div>
      {/* <h1>welcome to home page </h1>
      <div className="button-container">
        <input onclick= {fetchData} type="submit" />
      </div>
      <tbody>
        <tr>
          <th>fileID</th>
          <th>CID</th>
          <th>name</th>
          <th>type</th>
        </tr> */}
        {/* {console.log(data?.data[0]?.attributes?.fileID)} 
        {console.log(data.length)} */}
        <button onClick={onclickbutton()}>  trigger button </button>
        { display ? <div> {console.log( data?.data[0]?.attributes)}</div>: <div>Still loading </div>  }

        {/* { loading ? <Loading/> : <div>Working </div>  } */}
        {/* <button type="submit">{loading ? <Loading/>:  */}
        <div>
          <tbody>
        <tr>
          <th>fileID</th>
          <th>CID</th>
          <th>name</th>
          <th>typee</th>

        </tr>
        <tr>
        <td>data.data[0].attributes</td>    
        {/* {console.log( data?.data[0]?.attributes)}        */}
          
          {/* <td>{data.data[0].attributes.cid}</td> 
          <td>{data.data[0].attributes.name}</td> <td>{data.data[0].attributes.type}</td>  */}

        </tr>
          </tbody>
          
          {/* </div></button> */}
       {/* { data.data.map((item,index) => (
           <tr key={index}>            */}
           {/* {console.log( data.data[0].attributes)} */}
         <tr>
             {/* <td>{item.attributes?.fileID}</td>  */}
         {/* <td>{data.data[0].attributes.fileID}</td> */}
           {/* <td>{data.data[0].attributes.cid}</td>           
          
          <td>{data.data[0].attributes.type}</td>  */}
          </tr> 
             {/* ))} */}
      {/* </tbody> */}
    </div> </div> 
  );
};
 export default Home;


