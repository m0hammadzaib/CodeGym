const fs = require("fs");
const path = require("path");

// SOURCE FOLDER (jahan files hain)
const sourceDir = "Z:\\CodeGym\\Backend\\exercise1";

fs.readdirSync(sourceDir).array.forEach(e => {
     const oldPath = path.join(sourceDir, e);
    if(!fs.existsSync(sourceDir)){
        if(path.extname(e)=== ".txt"){
            fs.mkdir(sourceDir,"Text")
            const newFolder = path.join(sourceDir,"Text")
             const newPath = path.join(newFolder, e);
             fs.rename(oldPath,newPath)
        }
        else if(path.extname(e)=== ".pdf"){
            fs.mkdir(sourceDir,"PDF");
            const newFolder2 = path.join(sourceDir,"PDF")
             const newPath = path.join(newFolder2, e);
             fs.rename(oldPath,newPath)
        }
        else if(path.extname(e)=== ".png" && ".jpg"){
            fs.mkdir(sourceDir,"Photos");
            const newFolder3 = path.join(sourceDir,"Photos")
             const newPath = path.join(newFolder3, e);
             fs.rename(oldPath,newPath)
        }
    }
    
});



