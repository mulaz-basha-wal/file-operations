import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ModityContent from "./ModifyContent";
import CreateFolder from "./CreateFolder";
import FolderContents from "./FolderContents";
import NewFile from "./NewFile";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='menu'>
          <Link className='link btn' to='/'>
            New File
          </Link>
          <Link className='link btn' to='/createfolder'>
            New Folder
          </Link>
          <Link className='link btn' to='/modifycontent'>
            Modify Content
          </Link>
          <Link className='link btn' to='/foldercontents'>
            Folder Content
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<NewFile />} />
          <Route path='/createfolder' element={<CreateFolder />} />
          <Route path='/modifycontent' element={<ModityContent />} />
          <Route path='/foldercontents' element={<FolderContents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
