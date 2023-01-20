function makeFileObjects() {
  // You can create File objects from a Buffer of binary data
  // see: https://nodejs.org/api/buffer.html
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  const obj = { hello: "world" };
  const buffer = Buffer.from(JSON.stringify(obj));

  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([buffer], "hello.json"),
  ];
  return files;
}

//  returns CID
async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}
