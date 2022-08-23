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
          <span className="con">{ex.id}</span>
          <span className="con">{ex.name}</span>
          <span className="con">{ex.time}</span>
          <span className="con">{ex.km}km</span>
          <span className="con">
            {ex.isBusy ? (
              <div className="uzimtas">Busy</div>
            ) : (
              <div className="laisvas">Available</div>
            )}
          </span>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-outline-success ml-2 edit"
            onClick={handleEdit}
          >
          </button>
          <button
            type="button"
            className="btn btn-outline-danger ml-2 delete"
            onClick={handleDelete}
          >
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ex;
