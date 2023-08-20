import React, { useContext, useState, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
function UpdateNote() {
//   const data = useParams();
//   const context = useContext(NoteContext);
//   const { addNote, getNote } = context;
  const location = useLocation();
  const props = location.state;
  const [note, setnote] = useState({ title: props.title, description: props.description, tag: props.tag });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const user = props.id;
  const [fontStyle, setFontStyle] = useState("default"); 
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
    
    // setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  };
  const onchangeFontStyle = (e) => {
    setFontStyle(e.target.value);
  };

  // const handleClick = () => {
//   const noteClick = () => {
//     navigate(`/map/${data.id}`);
//   };
  const handleClick = async (req, res) => {
    const { title, description, tag } = note;

    axios
      .post("https://inote-mern-back.onrender.com/update", {
        user: props.id,
        oldtitle: props.title,
        olddescription: props.description,
        oldtag: props.tag,
        title: title,
        description: description,
        tag: tag,
      })
      .then((res) => {  navigate(`/map/${props.id}`);})
      .catch((err) => {
        console.log("err" + err);
      });
  };
  // const handleClick = async (e) => {
  //     e.preventDefault();
  //     let jsonError = await addNote(note.title, note.description, note.tag)
  //     if (jsonError) {
  //         jsonError.errors.map((err) => {
  //             if (err.param === 'title') {
  //                 setErrors((prev) => ({ ...prev, title: err.msg }))
  //             } else {
  //                 setErrors((prev) => ({ ...prev, description: err.msg }))
  //             }
  //         })
  //     } else {
  //         setnote({ title: "", description: "", tag: "" })
  //         setErrors({})
  //         props.showAlert("Note added successfully", "success")
  //     }
  // }

  // useEffect(() => {
  //     if (localStorage.getItem('token')) {
  //         getNote()
  //     } else {
  //         navigate('/login')

  //     }
  //     // eslint-disable-next-line

  // }, [])

  return (
    <div className="form ">
      {/* <h1>asfjsbdfdkdb{props.id}</h1> */}
      <div className="mt-5 mb-4">
        <div className="text-center">
          <h3>✍🏻 Add A New Note:</h3>
        </div>
        <div className="mb-3 my-4">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="tag"
            defaultValue={props.tag}
            onChange={onchange}
            name="tag"
          >
            <option value="Todo">Todo</option>
            <option value="Important">Important</option>
            <option value="Academic">Academic</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-3 my-4">
          <label htmlFor="fontStyle" className="form-label">
            Font Style
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="fontStyle"
            value={fontStyle}
            onChange={onchangeFontStyle}
            name="fontStyle"
          >
            <option value="default">Default</option>
            <option value="times-new-roman">Times New Roman</option>
            <option value="italic">Italic</option>
            <option value="monospace">Monospace</option>
            <option value="courier-new">Courier New</option>
            <option value="roboto">Roboto</option>
            {/* Add more font style options as needed */}
          </select>
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            defaultValue={props.title}
            onChange={onchange}
            name="title"
            style={{
              fontFamily:
                fontStyle === "Italic"
                  ? "Italic"
                  : fontStyle === "times-new-roman"
                  ? "Times New Roman"
                  : fontStyle === "monospace"
                  ? "Monospace"
                  : fontStyle === "courier-new"
                  ? "Courier New"
                  : fontStyle === "roboto"
                  ? "Roboto"
                  : "inherit",
            }}
          ></input>
          {errors.title && (
            <span className="error">
              <i className="fa fa-info-circle"></i> {errors.title}
            </span>
          )}
        </div>
        <div className="mb-3 input-container">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            defaultValue={props.description}
            onChange={onchange}
            rows="3"
            style={{
              fontFamily:
                fontStyle === "Italic"
                  ? "Italic"
                  : fontStyle === "times-new-roman"
                  ? "Times New Roman"
                  : fontStyle === "monospace"
                  ? "Monospace"
                  : fontStyle === "courier-new"
                  ? "Courier New"
                  : fontStyle === "roboto"
                  ? "Roboto"
                  : "inherit",
            }}
          ></textarea>
          {errors.description && (
            <span className="error">
              <i className="fa fa-info-circle"></i> {errors.description}
            </span>
          )}
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleClick}>
            Update Note
          </button>
        </div>
      </div>

      {/* <button onClick={noteClick}>
        <p className="text-center">View your notes &gt;</p>
      </button> */}
    </div>
  );
}

export default UpdateNote;
