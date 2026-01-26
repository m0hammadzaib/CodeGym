const fs = require("fs");
const path = require("path");

// SOURCE FOLDER
const sourceDir = "Z:\\CodeGym\\Backend\\exercise1";

// Read all files
fs.readdirSync(sourceDir).forEach(e => {
    const ext = path.extname(e).toLowerCase(); // lowercase to handle .JPG etc
    const oldPath = path.join(sourceDir, e);

    if (ext === ".txt") {
        const textFolder = path.join(sourceDir, "Text");
        if (!fs.existsSync(textFolder)) fs.mkdirSync(textFolder);
        const newPath = path.join(textFolder, e);
        fs.renameSync(oldPath, newPath);
    }
    else if (ext === ".pdf") {
        const pdfFolder = path.join(sourceDir, "PDF");
        if (!fs.existsSync(pdfFolder)) fs.mkdirSync(pdfFolder);
        const newPath = path.join(pdfFolder, e);
        fs.renameSync(oldPath, newPath);
    }
    else if (ext === ".png" || ext === ".jpg") {
        const photoFolder = path.join(sourceDir, "Photos");
        if (!fs.existsSync(photoFolder)) fs.mkdirSync(photoFolder);
        const newPath = path.join(photoFolder, e);
        fs.renameSync(oldPath, newPath);
    }
});

console.log("Files moved successfully ✅");




