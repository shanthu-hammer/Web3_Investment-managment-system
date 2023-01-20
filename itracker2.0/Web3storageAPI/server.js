import express from "express";
import { Web3Storage } from "web3.storage";
import fetch from "node-fetch";
console.log("serverjs");
/*list of end points

http://localhost:7000/getone/bafybeieibxjdvuc7pddmu6qjbl4pmpdtgycvnagdi6yhby2rpkypcpbukm
http://localhost:7000/filedata/bafybeieibxjdvuc7pddmu6qjbl4pmpdtgycvnagdi6yhby2rpkypcpbukm
*/
//const Web3Storage = require("web3.storage");
//let data;

const myport = 7000;
const app = express();

app.use(express.json());
app.listen(myport, () => {
  console.log(`Server Started at ${myport}`);
});

//get File content endpoint
app.get("/filedata/:id/:fname", async (req, res) => {
  console.dir("The cid sent is " + req.params.id);
  let fileData = await fetchFileData(req.params.id, req.params.fname);

  res.send(fileData);
});

//Get End point
app.get("/getone/:id", async (req, res) => {
  // res.send("you have requested for one ");
  console.dir("The cid sent is " + req.params.id);
  //console.dir(id);
  let retrieveData = await retrieve(req.params.id);
  res.send(retrieveData);
});

//Post End point
app.post("", (req, res) => {
  res.send("request to post ");
  storeFiles();
});

//Functions for Token part
function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  console.log("ypu have reached GetAccessToken");
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgyNUZBNzM2QTYwNDA1MzU4ZmE1MjIyQzAxMDZDODZCN2ZhMTBEMzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzIwMTU5NjYzNTAsIm5hbWUiOiJpdHJhY2tlciJ9.9pH2uNEfRRil7JDDs917dVj0Jml9PMfg7tmck8Dp0w8";

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  // return process.env.WEB3STORAGE_TOKEN;
}
function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

//retrieve file
//https://web3.storage/docs/how-tos/retrieve/#using-the-client-libraries
//https://web3.storage/docs/how-tos/store/
async function retrieve(cid) {
  const client = makeStorageClient();
  console.log("reached retrieve");
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
    console.log(res.Error);
  }
  // unpack File objects from the response
  const files = await res.files();
  for (const file of files) {
    console.log(`${file.cid} -- ${file.path} -- ${file.size}`);
    console.log(file);
    // data = file;

    return file;
  }
  // request succeeded! do something with the response object here...
}

async function fetchFileData(cid, filename) {
  console.log("triggered fetchFileData cid received is " + cid);
  //url manipulation
  /*

"https://"+ cid +".ipfs.w3s.link/"+check.js
"https://"+ cid +".ipfs.w3s.link/"+filename


  */
  let url = "https://" + cid + ".ipfs.w3s.link/" + filename;
  //let url =    "https://bafybeiae2kagsijzksff3mllklvtrlsid2nfg4lwfnvb7dvc4h6jvuk4te.ipfs.w3s.link/check.js";
  try {
    let res = await fetch(url).then((x) => x.text());
    return await res;
    //return await res.json();
  } catch (error) {
    console.log(error);
  }
}
