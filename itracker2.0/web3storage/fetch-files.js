import { Web3Storage } from "web3.storage";

function getAccessToken() {
  
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVkQTgzZTE3MTU2RTY1Njc5NTU4NzYzN0NmZDc4NTY1RTgxMzM5OTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI0NzE0Nzc1ODcsIm5hbWUiOiJpdHJhY2tlciJ9.lzOFfDA2V_BKQU_qlVa0ArU-fQf4SApLFscQPPO-syM";

}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}
async function retrieve(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }
  const files = await res.files();
  for (const file of files) {
    console.log(`${file.cid} -- ${file.name} -- ${file.size}`);
  }
  // request succeeded!
}

export default retrieve;

retrieve("bafybeihu74slw2gehkh34zj7vqnylfftfpkoeurhumossxbjg47vqov6re");
