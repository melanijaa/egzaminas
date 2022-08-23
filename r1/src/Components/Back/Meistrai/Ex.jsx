function Ex({ ex, setDeleteData, setModalData }) {

  const handleDelete = () => {
    setDeleteData(ex);
  };

  const handleEdit = () => {
    setModalData(ex);
  };

  return (
    <div className="list-group-item">
      <div className="item">
        <div className="content">
          <div>Vardas: {ex.firstName}</div>
          <div>Pavardė: {ex.lastName}</div>
          <div>Specializacija: {ex.jobTitle}</div>
          <div>Serviso pavadinimas: {ex.jobPlace}</div>
          <div>Miestas: {ex.jobPlace}</div>
          <div>Meistro nuotrauka: {ex.photo ? (
            <div className="photo-bin">
              <img src={ex.photo} alt={ex.title} />
            </div>
          ) : null}</div>
    </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-outline-success ml-2 edit"
            onClick={handleEdit}
          >
            Koreguoti
          </button>
          <button
            type="button"
            className="btn btn-outline-danger ml-2 delete"
            onClick={handleDelete}
          >
            Ištrinti
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ex;
