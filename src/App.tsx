import React, { useReducer } from "react";
import { FiEdit, FiPlusCircle, FiTrash } from "react-icons/fi";
import "./App.scss";
import reducer, { INITIAL_STATE } from "./reducer";
import { Modal } from "./components/Modal";

type note = {
  title: string;
  subtitle: string;
  note: string;
};

const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  let storeged: note[] = [];

  if (!localStorage.getItem("notes")) {
    localStorage.setItem("notes", "[]");
    if (state.modalIsVisible) {
      return <Modal visible={state.modalIsVisible} dispatch={dispatch} />;
    }
    return (
      <div className="container">
        <div className="plus-circle">
          <FiPlusCircle
            color="blue"
            size={40}
            //@ts-ignore
            onClick={() => dispatch({ type: "TOGLE_MODAL" })}
          />
        </div>
      </div>
    );
  } else {
    storeged = JSON.parse(localStorage.getItem("notes") || "");
  }

  const handleEdit = (e: any) => {
    console.log(e);
  };
  const handleDelete = (e: any) => {
    console.log(e);
  };
  if (state.modalIsVisible)
    return <Modal visible={state.modalIsVisible} dispatch={dispatch} />;

  return (
    <div className="container">
      {storeged.map((e, i) => {
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
                onClick={handleEdit}
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
        <FiPlusCircle
          color="blue"
          size={40}
          //@ts-ignore
          onClick={() => dispatch({ type: "TOGLE_MODAL" })}
        />
      </div>
    </div>
  );
};

export default App;
