import process from "process";
import minimist from "minimist";
import { Web3Storage, getFilesFromPath } from "web3.storage";

// async function main() {
//   const args = minimist(process.argv.slice(2));
//   console.log(args)// _: [ 'file1.json' ],
//   /*{
//   _: [ 'file1.json' ],
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAyZUIwMjcwNmY0ODkwMDE2Y0Y3QTdlYjJFNTVCMDMyQ0JBQkU5YWIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQxNDgzNjc2MDUsIm5hbWUiOiJpdHJhY2tlciJ9.30RezVKRuBJWtNkohhnEwPA4lapTWvHxnVhasg54CAY'
// }*/
//   const token = args.token;
//   console.log(token)
//   console.log(_)
//   if (!token) {
//     return console.error(
//       "A token is needed. You can create one on https://web3.storage"
//     );
//   }

//   if (args._.length < 1) {
//     return console.error("Please supply the path to a file or directory");
//   }

//   const storage = new Web3Storage({ token });
//   const files = [];

//   for (const path of args._) {
//     const pathFiles = await getFilesFromPath(path);
//     files.push(...pathFiles);
//   }

//   console.log(`Uploading ${files.length} files`);
//   const cid = await storage.put(files);
//   console.log("Content added with CID:", cid);
// }

// main();

// itracker version
async function putFilesmain(tester) {
const args =minimist(tester.slice(2));
  console.log(args)
  /*{
  _: [ 'file1.json' ],
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAyZUIwMjcwNmY0ODkwMDE2Y0Y3QTdlYjJFNTVCMDMyQ0JBQkU5YWIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQxNDgzNjc2MDUsIm5hbWUiOiJpdHJhY2tlciJ9.30RezVKRuBJWtNkohhnEwPA4lapTWvHxnVhasg54CAY'
}*/
  const token = args.token;
  console.log('reached token'+ token)

  if (!token) {
    return console.error(
      "A token is needed. You can create one on https://web3.storage"
    );
  }

  if (args._.length < 1) {
    return console.error("Please supply the path to a file or directory");
  }

  const storage = new Web3Storage({ token });
  const files = [];

  for (const path of args._) {
    const pathFiles = await getFilesFromPath(path);
    files.push(...pathFiles);
  }

  console.log(`Uploading ${files.length} files`);
  const cid = await storage.put(files);
  console.log("Content added with CID:", cid);
}

putFilesmain("--token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAyZUIwMjcwNmY0ODkwMDE2Y0Y3QTdlYjJFNTVCMDMyQ0JBQkU5YWIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQxNDgzNjc2MDUsIm5hbWUiOiJpdHJhY2tlciJ9.30RezVKRuBJWtNkohhnEwPA4lapTWvHxnVhasg54CAY file2.json");


