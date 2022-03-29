import axios from "axios";
import React, { useState } from "react";

export default function ModityContent() {
  const [content, setContent] = useState("");
  const [filename, setFileName] = useState("");

  const modifyData = () => {
    axios
      .post("/files/createfile", {
        file_name: filename,
        content,
      })
      .then((res) => {
        alert(`${filename} content is modified`);
      })
      .catch((error) => alert("Error while loading data."));
  };

  const getData = (e) => {
    e.preventDefault();
    axios
      .get(`/files/read_file/${e.target.filename.value}`)
      .then((res) => {
        setContent(res.data);
      })
      .catch((error) => alert("Error while loading data."));
  };

  return (
    <div>
      <form className='form-container bg-light clearfix' onSubmit={getData}>
        <h1 className='text-center mb-4'> File Modification</h1>
        <div className='forum-group text-center'>
          <input
            type='text'
            name='filename'
            className='form-control'
            placeholder='File Name'
            value={filename}
            onChange={(e) => {
              setFileName(e.target.value);
            }}
          />
          <textarea
            name='content'
            className='form-control'
            placeholder='Content'
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <div>
            <button
              type='button'
              className='btn btn-success m-1'
              value='Modify'
              onClick={modifyData}>
              Modify
            </button>
            <input
              type='submit'
              className='btn btn-success m-1'
              value='Get Data'
            />
          </div>
        </div>
      </form>
    </div>
  );
}
