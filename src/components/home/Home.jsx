import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getData, createData } from '../../store/api/api';
import { createUserData, getUserData, removeUserData, updateUserData } from '../../store/slices/RegisterSlice';
import Navbar from '../../navbar/Navbar';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await getData();
        if (isMounted) {
          console.log("Fetched data:", res);

          res.map((item) => {
            dispatch(getUserData(item));
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  const { createDataAll, AllData } = useSelector((state) => state.Users);
  console.log("alldata",AllData)

  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedName, setUpdatedName] = useState('');

  const handleRemove = (userId) => {
    dispatch(removeUserData(userId));
    console.log(userId);
  };

  const handleUpdate = (userId) => {
    setEditingUserId(userId);
    const userToEdit = AllData.find((user) => user.id === userId);
    setUpdatedName(userToEdit.first_name);
  };

  const handleSave = () => {
    dispatch(updateUserData({ id: editingUserId, updatedName }));
    setEditingUserId(null);
    setUpdatedName('');
  };

  return (
    <>
    
    <div>
    <Navbar />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {AllData.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>
                {editingUserId === item.id ? (
                  <input
                    type="text"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                ) : (
                  item.first_name
                )}
              </td>
              <td>{item.email}</td>
              <td>
                {editingUserId === item.id ? (
                  <Button variant="success" className="me-3" onClick={handleSave}>
                    Save
                  </Button>
                ) : (
                  <Button variant="primary" className="me-3" onClick={() => handleUpdate(item.id)}>
                    Edit
                  </Button>
                )}
                <Button variant="danger" onClick={() => handleRemove(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default Home;
