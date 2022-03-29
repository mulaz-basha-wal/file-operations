import axios from "axios";
import React from "react";

export default function CreateFolder() {
  const createFolder = (e) => {
    e.preventDefault();
    axios
      .post("/files/createfolder", {
        folder_name: e.target.foldername.value,
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
        onSubmit={createFolder}>
        <h1 className='text-center mb-4'> New Folder</h1>
        <div className='forum-group text-center'>
          <input
            type='text'
            name='foldername'
            className='form-control'
            placeholder='File Name'
          />
          <input type='submit' className='btn btn-success m-1' value='Create' />
        </div>
      </form>
    </div>
  );
}
