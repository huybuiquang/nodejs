import express from 'express';
import crypto from 'crypto';
import {Worker} from 'webworker-threads';

const app = express();

app.get('/',(req,res)=>{
    const worker = new Worker(function(){
        this.onmessage=function() {
            let counter = 0;
            while(counter<1e9){
                counter++;
            }
            postMessage(counter);
        }
    });

    worker.onmessage = (myCounter)=>{
        console.log(myCounter);
    }

    worker.postMessage();


});

//app.listen(3000);