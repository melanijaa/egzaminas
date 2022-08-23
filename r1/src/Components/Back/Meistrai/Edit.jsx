import { useEffect, useState } from "react";

function Edit({ modalData, setModalData, setEditData }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("1");
  const [newKm, setNewKm] = useState(0);
  const [isBusy, setIsBusy] = useState("0");

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setName(modalData.name);
    setTime(modalData.time);
    setNewKm(0);
    setIsBusy(modalData.isBusy);
  }, [modalData]);

  const handleEdit = () => {
    const data = {
      name,
      time,
      km: Number(modalData.km) + Number(newKm),
      newKm,
      isBusy: isBusy ? "true" : false,
      id: modalData.id,
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
            <h5 className="modal-title">Edit</h5>
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
              <label>Registration code:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-group">
              <label>Last time used:</label>
              <input
            type="date"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={time}
              />
            </div>
            <div className="form-group">
              <label>Edit kilometers:</label>
              <input
                type="number"
                className="form-row"
                onChange={(e) => setNewKm(e.target.value)}
                value={newKm}
              />
            </div>

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-modalC btn-outline-secondary"
              onClick={() => setModalData(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-modal btn-outline-primary"
              onClick={handleEdit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
