import React from "react";
import { FiTrash, FiEdit, FiPlusCircle } from "react-icons/fi";
import "./App.scss";

type note = {
  title: string;
  subtitle: string;
  note: string;
};

const notes: note[] = [
  {
    title: "Notes Title",
    subtitle: "some subtitle",
    note: "note text was here",
  },
  {
    title: "Notes Title",
    subtitle: "some subtitle",
    note: "note text was here",
  },
  {
    title: "Notes Title",
    subtitle: "some subtitle",
    note: "note text was here",
  },
  {
    title: "Notes Title",
    subtitle: "some subtitle",
    note: "note text was here",
  },
  {
    title: "Notes Title",
    subtitle: "some subtitle",
    note: "note text was here",
  },
];

function App() {
  localStorage.setItem("notes", JSON.stringify(notes));

  //@ts-ignore
  const handleDelete = (e) => {
    console.log(e);
  };
  return (
    <div className="container">
      {notes.map((e, i) => {
        return (
          <div key={i} className="note">
            <div className="title">
              <h2>{e.title}</h2>
              <h3>{e.subtitle}</h3>
            </div>
            <div>
              <FiEdit
                size={28}
                className="hide-btn"
                color="#999"
                onClick={handleDelete}
              />
              <FiTrash
                size={28}
                className="hide-btn"
                color="red"
                onClick={handleDelete}
              />
            </div>
          </div>
        );
      })}
      <div className="plus-circle">
        <FiPlusCircle color="blue" size={40} />
      </div>
    </div>
  );
}

export default App;
