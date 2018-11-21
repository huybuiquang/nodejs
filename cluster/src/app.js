'use strict';
import cluster from 'cluster';
import express from 'express';
import crypto from 'crypto';
const numCPUs = require('os').cpus().length;

// console.log(cluster.isMaster);
// if(cluster.isMaster){
// // Fork workers.
// //   for (let i = 0; i < numCPUs; i++) {
// //     cluster.fork();
// //   }
//     cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
// }
// else{
    

    const app = express();

    function doWork(duration){
        const start = Date.now();
        while(Date.now() - start < duration){

        }
    }

    app.get('/',(req,res)=> {
        //doWork(5000);

        crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
            res.send('Hi There');
        })

        //res.send('hi there')
    });

    app.get('/fast',(req,res)=>{
        console.log('This was fast.');
    })

    app.listen(3000)
//}
