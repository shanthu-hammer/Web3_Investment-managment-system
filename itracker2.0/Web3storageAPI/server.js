import express from "express";
import { Web3Storage } from "web3.storage";
import fetch from "node-fetch";
import { Blob } from "buffer";
import { getFilesFromPath } from "web3.storage";
import { File } from "web3.storage";
import { CarReader } from "@ipld/car";
//import "./temp/generatedfiles";
/*list of end points

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
//http://localhost:7000/filedata/bafybeiae2kagsijzksff3mllklvtrlsid2nfg4lwfnvb7dvc4h6jvuk4te/check.js

app.get("/filedata/:id/:fname", async (req, res) => {
  console.dir("The cid sent is " + req.params.id);
  let fileData = await fetchFileData(req.params.id, req.params.fname);

  res.send(fileData);
});

//Post End point
app.post("/uploadfile/:fpath", async (req, res) => {
  //storeFiles();
  let filepath = "./temp/generatedfiles/" + req.params.fpath;
  let file = await getFiles(filepath);
  let storefunction = await storeWithProgress(file);
  res.send(storefunction);
});

//Get End point
app.get("/getone/:id", async (req, res) => {
  // res.send("you have requested for one ");
  console.dir("The cid sent is " + req.params.id);
  //console.dir(id);
  let retrieveData = await retrieve(req.params.id);
  res.send(retrieveData);
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

//Fetching Files data Function
async function fetchFileData(cid, filename) {
  console.log("triggered fetchFileData cid received is " + cid);
  let url = "https://" + cid + ".ipfs.w3s.link/" + filename;
  //let url =    "https://bafybeiae2kagsijzksff3mllklvtrlsid2nfg4lwfnvb7dvc4h6jvuk4te.ipfs.w3s.link/check.js";
  //"https://bafybeiae2kagsijzksff3mllklvtrlsid2nfg4lwfnvb7dvc4h6jvuk4te.ipfs.w3s.link/check.js";
  try {
    let res = await fetch(url).then((x) => x.text());
    return await res;
    //return await res.json();
  } catch (error) {
    console.log(error);
  }
}

//Storing files Function
async function storeWithProgress(files) {
  // show the root cid as soon as it's ready
  const onRootCidReady = (cid) => {
    console.log("uploading files with cid:", cid);
  };

  // when each chunk is stored, update the percentage complete and display
  const totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0);
  let uploaded = 0;

  const onStoredChunk = (size) => {
    uploaded += size;
    const pct = 100 * (uploaded / totalSize);
    console.log(`Uploading... ${pct.toFixed(2)}% complete`);
  };

  // makeStorageClient returns an authorized web3.storage client instance
  const client = makeStorageClient();

  // client.put will invoke our callbacks during the upload
  // and return the root cid when the upload completes
  console.log("files from storewithprogress " + files);

  return client.put(files, { onRootCidReady, onStoredChunk });
}

//method 1 Generating a file
async function getFiles(path) {
  const files = await getFilesFromPath(path);
  console.log(`read ${files.length} file(s) from ${path}`);
  return files;
}

//method 2 Generating a file
function makeFileObjects() {
  // You can create File objects from a Buffer of binary data
  // see: https://nodejs.org/api/buffer.html
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  const obj = {
    _name: "sample.json",
    _lastModified: 1674147321609,
    cid: "bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku",
  };
  const buffer = Buffer.from(JSON.stringify(obj));

  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([buffer], "file3.json"),
  ];
  console.log("the content in files are " + files);
  return files;
}