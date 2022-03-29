var express = require("express");
const fs = require("fs");
const path = require("path");
var router = express.Router();
var basePath = path.join(__dirname, "../", "files");

const checkDirectory = () => {
  if (fs.existsSync(basePath)) return true;
  else return false;
};

const isFile = (path) => {
  if (fs.lstatSync(path).isFile()) return true;
  else return false;
};

router.post("/createfile", (req, res) => {
  if (!checkDirectory()) fs.mkdirSync(basePath);
  fs.writeFile(
    `${basePath}/${req.body.file_name}`,
    req.body.content,
    (error) => {
      if (error) res.json(error);
      else res.json({ status: 1, message: "File created" });
    }
  );
});

router.post("/createfolder", (req, res) => {
  if (!checkDirectory()) {
    console.log("no files section");
    fs.mkdirSync(basePath);
  }
  const temp = `${basePath}/${req.body.folder_name}`;
  if (!fs.existsSync(temp)) {
    fs.mkdirSync(temp);
    res.json({ status: 1, message: "Folder created" });
  } else res.json({ status: 0, message: "Folder already existed" });
});

router.get("/read_directory", (req, res) => {
  fs.readdir(basePath, (error, files) => {
    if (error) res.json(error);
    else res.json(files);
  });
});

router.get("/read_file/:name", (req, res) => {
  console.log("triggered readfile");
  const data = fs.readFileSync(`${basePath}/${req.params.name}`);
  res.send(data.toString());
});

router.delete("/:file", (req, res) => {
  const dir = `${basePath}/${req.params.file}`;
  if (isFile(dir)) {
    console.log("file");
    fs.unlink(dir, (error) => {
      if (error) res.json(error);
      else res.json(`file ${req.params.file} is removed susseccfully`);
    });
  } else {
    console.log("folder", dir);
    fs.rm(dir, { recursive: true }, (err) => {
      if (err) res.json(err);
      else res.json(`folder ${req.params.file} is removed susseccfully`);
    });
  }
});
module.exports = router;
