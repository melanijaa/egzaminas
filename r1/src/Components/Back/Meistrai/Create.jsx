import { useState, useRef } from "react";
import getBase64 from "../../../Functions/getBase64";

function Create({ setCreateData }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [jobTitle, setjobTitle] = useState();
  const [jobPlace, setJobPlace] = useState();
  const [city, setCity] = useState();
  const fileInput = useRef();
  const [photoPrint, setPhotoPrint] = useState(null);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {
        // tylim
      });
  };

  const handleCreate = () => {
    const data = { firstName };
    setCreateData(data);
    setFirstName();
    setPhotoPrint(null);
    fileInput.current.value = null;
  };

  return (
    <div className="card">
      <div className="card-body">
        <label className="title">Pridėti meistrą</label>
        <div className="form-group">
          <label>Vardas</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="form-group">
          <label>Pavardė</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="form-group">
          <label>Specializacija</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setjobTitle(e.target.value)}
            value={jobTitle}
          />
        </div>
        <label>Serviso pavadinimas</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setJobPlace(e.target.value)}
          value={jobPlace}
        />
      </div>
      <div className="form-group">
      <label>Miestas</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
      </div>
      <div className="form-group">
        <label>Nuotrauka</label>
        <input
          ref={fileInput}
          type="file"
          className="form-control"
          onChange={doPhoto}
        />
        <small className="form-text text-muted">Įkelti Nuotrauka</small>
      </div>
      {photoPrint ? (
        <div className="photo-bin">
          <img src={photoPrint} alt="nice" />
        </div>
      ) : null}
      <div className="form-group">
        <button
          type="button"
          className="btn2 btn-outline-primary"
          onClick={handleCreate}
        >
          CREATE
        </button>
      </div>
    </div>
  );
}

export default Create;
