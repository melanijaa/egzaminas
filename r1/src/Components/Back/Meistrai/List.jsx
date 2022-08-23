
import Ex from "./Ex";

function List({ exes, setDeleteData, setModalData }) {
  return (
    <div className="card-list">
      <div className="card-body-list">
        <ul className="list-group">
        <h2>Meistrų sąrašas</h2>
          {exes
            ? exes.map((ex) => (
                <Ex
                  key={ex.id}
                  ex={ex}
                  setDeleteData={setDeleteData}
                  setModalData={setModalData}
                ></Ex>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default List;
