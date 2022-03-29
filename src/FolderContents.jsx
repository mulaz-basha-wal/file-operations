import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FolderContents() {
  const [list, setList] = useState([]);

  const loadList = () => {
    axios
      .get("/files/read_directory")
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    loadList();
  }, []);

  const deleteFile = (file) => {
    axios
      .delete(`/files/${file}`)
      .then((res) => {
        loadList();
      })
      .catch((error) => {
        alert(`Error while deleting ${file}`);
      });
  };

  return (
    <div>
      <h1 className='text-center text-light mb-4'>Folder Contents</h1>
      <div className='container'>
        <ul>
          {list.length > 0 ? (
            list.map((file) => {
              return (
                <li key={file} className='bg-light'>
                  <span>{file}</span>
                  <button
                    className='btn btn-danger'
                    onClick={() => {
                      deleteFile(file);
                    }}>
                    Delete
                  </button>
                </li>
              );
            })
          ) : (
            <h6 className='text-center text-light mb-4'>Empty Directory</h6>
          )}
        </ul>
      </div>
    </div>
  );
}
