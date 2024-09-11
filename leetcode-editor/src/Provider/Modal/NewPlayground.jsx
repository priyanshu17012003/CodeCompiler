import { useContext } from "react";
import "./modal.scss";
import { ModalContext } from "../ProviderModal";
import { PlaygroundContext } from "../PlaygroundProvider";
const CreatePlaygroundModal = ({ id }) => {
  const playGroundFeature = useContext(PlaygroundContext);
  const modalFeature = useContext(ModalContext);

  const formSubmit = (e) => {
    e.preventDefault();
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;
    playGroundFeature.newPlayground({ fileName, language, id });
    closePlayground();
  };

  const closePlayground = () => {
    modalFeature.closeModal();
  };

  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={formSubmit}>
        <span className="material-icons close" onClick={closePlayground}>
          close
        </span>
        <div className="item">
          <h1>Create New Playground</h1>
        </div>
        <div className="item">
          <p>Enter File Name</p>
          <input type="text" name="fileName" required />
        </div>
        <div className="item">
          <select name="language" required>
            <option value="cpp">cpp</option>
            <option value="javascript">javascript</option>
            <option value="java">java</option>
            <option value="python">python</option>
          </select>
          <button type="submit">Create Playground</button>
        </div>
      </form>
    </div>
  );
};
export default CreatePlaygroundModal;