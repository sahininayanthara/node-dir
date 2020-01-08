const fs = require('fs');
fs.mkdir ('tute', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('folder successfully created');
    }
})