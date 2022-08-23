import { useEffect, useState, useRef } from "react";
import getBase64 from "../../../Functions/getBase64";

function Edit({
  modalData,
  setModalData,
  setEditData,
  setDeletePhoto,
  setModalProduct,
}) {
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

  const handleDeletePhoto = () => {
    setDeletePhoto({ id: modalData.id });
    setModalProduct((p) => ({ ...p, photo: null }));
  };

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setFirstName(modalData.firstName);
    setLastName(modalData.lastName);
    setjobTitle(modalData.jobTitle);
    setJobPlace(modalData.jobPlace);
    setCity(modalData.city);
    setPhotoPrint(modalData.photo);
  }, [modalData]);

  const handleEdit = () => {
    const data = {
      firstName,
      lastName,
      jobTitle,
      jobPlace,
      city,
      photoPrint,
    };
    setEditData(data);
    setModalData(null);
  };

  if (null === modalData) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Koreguoti</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalData(null)}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Pridėti meistrą</label>
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
            <div className="form-group">
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
              <label>Photo</label>
              <input
                ref={fileInput}
                type="file"
                className="form-control"
                onChange={doPhoto}
              />
              <small className="form-text text-muted">Upload Photo.</small>
            </div>
            {photoPrint ? (
              <div className="photo-bin">
                <img src={photoPrint} alt="nice" />
              </div>
            ) : null}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setModalProduct(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleEdit}
            >
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleDeletePhoto}
            >
              Remove Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
