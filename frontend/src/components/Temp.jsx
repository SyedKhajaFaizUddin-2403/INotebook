import React from "react";
import jsPDF from "jspdf";
// import NoteContext from "../context/notes/noteContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NoteItems(props) {
  const navigate = useNavigate();

  const handleDelete = () => {
    // alert(props.id)
    axios
      .post("http://localhost:8000/delete", {
        user: props.id,
        tag: props.tag,
        description: props.description,
        title: props.title,
      })
      .then((res) => {
        alert("item deleted");
        navigate(`/map/${props.id}`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    navigate(`/map/${props.id}`);
  };

  const data = {
    title: props.title,
    description: props.description,
    tag: props.tag,
    id: props.id,
  };
  const updateNote = () => {
    navigate(`/updatenote`, { state: data });
  };

  let date1 = props.createddate;
  let date2 = props.updateddate;
  date1 = date1.slice(0, -14).split("-").reverse().join("-");
  date2 = date2.slice(0, -14).split("-").reverse().join("-");

  // console.log("date1" + date1);
  // console.log("date2" + date2);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Title: ${props.title}`, 10, 10);
    doc.text(`Description: ${props.description}`, 10, 20);
    doc.text(`Tag: ${props.tag}`, 10, 30);
    doc.text(`Created Date: ${date1}`, 10, 40);
    doc.text(`Updated Date: ${date2}`, 10, 50);
    doc.save(`${props.title}.pdf`);
  };
  return (
    <>
      <div className="container">
        <div className="column">
          <div className="col-md-12 my-2">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title">{props.title} </h5>
                  <p>
                    <i
                      className="fa-regular fa-trash-can mx-2"
                      onClick={handleDelete}
                    />
                    <i
                      className="fa-regular fa-pen-to-square mx-2"
                      onClick={updateNote}
                    />
                  </p>
                </div>
                <p>
                  <b>{props.tag}</b>
                </p>
                <p className="card-text">{props.description}</p>
                <p className="text-secondary small text-end ">
                  Created Data: <small>{date1} </small>
                  <br></br>
                  Updated Data: <small>{date2}</small>
                </p>
                <button
                  className="btn-primary"
                  onClick={downloadPDF}
                  href="none"
                >
                  Download Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteItems;
