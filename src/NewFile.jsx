import axios from "axios";
import React from "react";

export default function NewFile() {
  const createNewFile = (e) => {
    e.preventDefault();
    axios
      .post("/files/createfile", {
        file_name: e.target.filename.value,
        content: e.target.content.value,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <form
        className='form-container bg-light clearfix'
        onSubmit={createNewFile}>
        <h1 className='text-center mb-4'> New File</h1>
        <div className='forum-group text-center'>
          <input
            type='text'
            name='filename'
            className='form-control'
            placeholder='File Name'
          />
          <textarea
            name='content'
            className='form-control'
            placeholder='File Content'
          />
          <input type='submit' className='btn btn-success m-1' value='Create' />
        </div>
      </form>
    </div>
  );
}
