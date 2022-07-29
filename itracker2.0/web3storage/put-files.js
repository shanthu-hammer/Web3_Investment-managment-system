import process from "process";//import process module from node js,  to access cmd augument
import minimist from "minimist";//easily pass cmd augument into js object 
import { Web3Storage, getFilesFromPath } from "web3.storage";//js lib for web3 storage

async function main() {
  const args = minimist(process.argv.slice(2));
  const token = args.token;//extracting the api token 

  if (!token) {//doing few checks 
    return console.error(
      "A token is needed. You can create one on https://web3.storage"
    );
  }

  if (args._.length < 1) {
    return console.error("Please supply the path to a file or directory");
  }

  const storage = new Web3Storage({ token });//initiate the connection for web3 api 
  const files = [];//array of files that we gonna upload ot IPFS 

  for (const path of args._) {
    const pathFiles = await getFilesFromPath(path);
    files.push(...pathFiles);
  }

  console.log(`Uploading ${files.length} files`);
  const cid = await storage.put(files);//storage.put stores our files into IPFS 
  console.log("Content added with CID:", cid);
}

main();
