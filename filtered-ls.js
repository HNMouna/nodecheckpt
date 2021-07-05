var fs=require('fs');
const directory=process.argv[2];
const extension= process.argv[3];
fs.readdir(directory,(err,list)=>{ 
    if (err) throw err
    list.map(el=>el.split('.')[1]=== extension ? console.log(el) :null  ) 
})