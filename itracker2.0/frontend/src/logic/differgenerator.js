import '../logic/samplefile/file1.txt';
import '../logic/samplefile/file2.txt';

const fs = require('fs');

const differenceGenerator =()=>{

    var str1 = fs.readFileSync('file1', 'utf-8');
    var str2 = fs.readFileSync('file2', 'utf-8');
    var difference = fileDiff.diffLines(str1, str2);
    console.log(difference);
    


    
}

export default differenceGenerator();


// async function example() {
//     const client = new ftp.Client();
//     client.ftp.verbose = true;

//     try {
//         await client.access({
//             host: config.ftpHost,
//             port: config.ftpPort,
//             user: config.ftpUser,
//             password: config.ftpPassword,
//             secure: config.ftpSecure,
//         });
//         await client.downloadTo(LocalSaveOld, ServerLog);

//         if (fs.existsSync(LocalSaveOld)) {
//             fs.readFile(LocalSaveOld, function (err, data1) {
//                 console.log(data1);
//                 fs.readFile(LocalSaveNew, function (err, data2) {
//                     console.log(data2);
//                     var difference = fileDiff.diffLines(data1, data2);
//                     console.log(difference);
//                 });
//             });

//             await fs.rename(LocalSaveOld, LocalSaveNew, function (err) {
//                 console.log("old was copied to new");
//                 if (err) console.log("ERROR: " + err);
//             });
//         }
//     } catch (error) {
//         console.log("FTP ERROR");
//         client.close();
//     }
// }