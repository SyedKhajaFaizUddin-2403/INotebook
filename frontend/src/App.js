import './App.css';
import { useState } from 'react';
import About from './components/About';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState'
import Alert from './components/Alert';
import SignUp from './components/Signup';
import Login from './components/Login';
import NoteItems from './components/NoteItems';
import Map from './components/Map';
import EditNote from './components/EditNote';
import Test from './components/Test';
import UpdateNote from './components/UpdateNote';
function App() {
  
  const [alert, setAlert]=useState(null);

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type,
    }) ;
    setTimeout(()=>{
      setAlert(null)
    }, 2500)
}

  return (
    <div className="app">
      <NoteState>
        <BrowserRouter>
         
          <Alert alert={alert} />
          <div className="container my-4 ">
            <Routes>
              <Route
                path="/notes/:id"
                element={<Notes showAlert={showAlert} />}
              />
              <Route
                path="/addnote/:id"
                element={<AddNote showAlert={showAlert} />}
              />
              <Route path="/about" element={<About showAlert={showAlert} />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/" element={<SignUp showAlert={showAlert} />} />
              <Route path="/test" element={<Test showAlert={showAlert} />} />
              <Route
                path="/noteitems"
                element={<NoteItems showAlert={showAlert} />}
              />
              <Route path="/map/:id" element={<Map showAlert={showAlert} />} />
              <Route
                path="/editnote"
                element={<EditNote showAlert={showAlert} />}
              />
              <Route
                path="/updatenote"
                element={<UpdateNote showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
