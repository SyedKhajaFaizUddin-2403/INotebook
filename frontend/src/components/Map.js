import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useParams } from 'react-router-dom';
import NoteItems from './NoteItems';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


function Map() {
  const [filter, setFilter] = useState("All");
  const { id } = useParams()
    const Navigate=useNavigate()
        const [data, setData] = useState([]);
const [var1,setVar]=useState("")
    useEffect(() => {
        axios
          .post("https://back-0tta.onrender.com/getnotes", {
            filter:filter,
            user: id,
          })
          .then((res) => {
            console.log(res.data); // correctly received
            setData(res.data); // error
            console.log(data); // nothing appears
          })
          .catch((err) => console.log("er" + err));
          }, [filter]);
        function handleSubmit(e){
          setFilter(e.target.id);
        }

  return (
    <>
    <div>
      <Navbar/>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item id="All" onClick={handleSubmit}>All</Dropdown.Item>
        <Dropdown.Item id="Todo" onClick={handleSubmit}>Todo</Dropdown.Item>
        <Dropdown.Item id="Important" onClick={handleSubmit}>Important</Dropdown.Item>
        <Dropdown.Item id="Academic" onClick={handleSubmit}>Academic</Dropdown.Item>
        <Dropdown.Item id="Personal"onClick={handleSubmit}>Personal</Dropdown.Item>
        <Dropdown.Item id="Others" onClick={handleSubmit}>Others</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown><h3>current Filter Value:<b>{filter}</b></h3>
      {data.length === 0 && (
        <div>
          {" "}
          <h1 className='text-base'>No notes to display</h1>
          <button
            className="rounded-lg"
            onClick={() => {
              Navigate(`/addnote/${id}`);
            }}
          >
            {" "}
            Add Note
          </button>
        </div>
      )}

      {data.map(
        (item) => (
          (
            <NoteItems
              title={item.title}
              description={item.description}
              tag={item.tag}
              createddate={item.createddate}
              updateddate={item.updateddate}
              id={item.user}
            />
          )
        )
      )}
    </div>
    </>
  );
}

export default Map