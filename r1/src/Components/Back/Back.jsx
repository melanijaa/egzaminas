import { useEffect, useState } from "react";
import Create from "./Meistrai/Create";
import List from "./Meistrai/List";
import { create, edit, read, remove } from "../../Functions/localStorage";
import Edit from "./Meistrai/Edit";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [exes, setExes] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  //Read
  useEffect(() => {
    setExes(read());
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7 col-ml-12">
            <Create setCreateData={setCreateData}></Create>
            <List
              exes={exes}
              setDeleteData={setDeleteData}
              setModalData={setModalData}
            ></List>
            <Edit
              setEditData={setEditData}
              modalData={modalData}
              setModalData={setModalData}
            ></Edit>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;