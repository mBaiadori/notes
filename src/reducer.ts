type State = {
  modalIsVisible: boolean;
  title: string;
  subtitle: string;
  text: string;
};

enum ActionKind {
  TOGLE_MODAL = "TOGLE_MODAL",
  SET_TITLE = "SET_TITLE",
  SET_SUBTITLE = "SET_SUBTITLE",
  SET_TEXT = "SET_TEXT",
  SAVE = "SAVE",
}

type Action = {
  type: ActionKind;
  payload: any;
};

export const INITIAL_STATE: State = {
  modalIsVisible: false,
  title: "",
  subtitle: "",
  text: "",
};

export default function reducer(state: State, action: Action) {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case ActionKind.TOGLE_MODAL:
      return {
        ...state,
        modalIsVisible: !state.modalIsVisible,
      };
    case ActionKind.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case ActionKind.SET_SUBTITLE:
      return {
        ...state,
        subtitle: action.payload,
      };
    case ActionKind.SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case ActionKind.SAVE:
      let notes = JSON.parse(localStorage.getItem("notes") || "");
      const note = {
        title: state.title,
        subtitle: state.subtitle,
        text: state.text,
      };
      notes.push(note);
      localStorage.setItem("notes", JSON.stringify(notes));
      alert("Note Saved");
      return {
        ...state,
        modalIsVisible: !state.modalIsVisible,
      };

    default:
      return state;
  }
}
