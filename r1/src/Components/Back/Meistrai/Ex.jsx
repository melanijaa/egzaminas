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
          <div>{ex.firstName}</div>
          </div>
      <div className="item">
        <div className="content">
          <div>{ex.lastName}</div>
          </div>
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
