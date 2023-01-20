console.log("you found me ");

const express = require("express");

const myport = 7000;

const app = express();

app.use(express.json());
app.listen(myport, () => {
  console.log(`Server Started at ${myport}`);
});
//Get End point
app.get("/getone/:id", (req, res) => {
  res.send("you have requested for one ");
  console.dir(req.params);
  retrieve(id);
});

//Post end point
app.post("", (req, res) => {
  res.send("request to post ");
});

//Functions for Token part
function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return process.env.WEB3STORAGE_TOKEN;
}
function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

//retrieve file
//https://web3.storage/docs/how-tos/retrieve/#using-the-client-libraries
//https://web3.storage/docs/how-tos/store/
async function retrieve(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }

  // request succeeded! do something with the response object here...
}
