import React from "react";
import { FiXCircle, FiSave } from "react-icons/fi";
import "./style.scss";

interface IModalProps {
  visible: boolean;
  //   dispatch: ({}) => void;
  dispatch: any;
}

export const Modal: React.FunctionComponent<IModalProps> = ({
  visible,
  dispatch,
}) => {
  if (!visible) return null;
  return (
    <div className="container">
      <div className="content">
        <FiXCircle
          className="cliclable-btn"
          size={32}
          color="red"
          onClick={() => dispatch({ type: "TOGLE_MODAL" })}
        />
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          onChange={(e) =>
            dispatch({ type: "SET_SUBTITLE", payload: e.target.value })
          }
        />
        <textarea
          name="textarea"
          id="textatea"
          cols={30}
          rows={10}
          onChange={(e) =>
            dispatch({ type: "SET_TEXT", payload: e.target.value })
          }
        />
        <FiSave
          className="cliclable-btn"
          size={32}
          color="blue"
          onClick={() => {
            console.log("click");
            dispatch({ type: "SAVE" });
          }}
        />
      </div>
    </div>
  );
};
