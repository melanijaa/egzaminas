import { useState} from "react";

function Create({ setCreateData }) {
  const [name, setName] = useState();

  const handleCreate = () => {
    const data = { name };
    setCreateData(data);
    setName();
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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Pavardė</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Specializacija</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Nuotrauka</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Serviso pavadinimas</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Miestas</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
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