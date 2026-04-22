import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import AddUser from "./forms/userForm/AddUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditUser from "./forms/userForm/EditUser";
import DeleteUser from "./forms/userForm/DeleteUser";

const User = () => {



    const [openAddUserForm, setOpenAddUserFrom] = useState(false);
    const [openEditUserForm, setOpenEditUserFrom] = useState(false);
    const [openDeleteUserForm, setOpenDeleteUserFrom] = useState(false);
    const [userData, setUserData] = useState([])

    const handleGetAllUserList = async () => {

        try {
            const userList = await axios.get("http://localhost:8000/users")
            setUserData(userList.data)

        } catch (error) {
            console.log(error)
        }




    }

    useEffect(() => {
        handleGetAllUserList()
    }, [])

    const handleAddUserModel = useCallback( () => {

        setOpenAddUserFrom(true)
    }, [])

    const handleEditUserModel = useCallback( () => {

        setOpenEditUserFrom(true)
    }, [])
    const handleDeleteUserModel = useCallback( () => {

        setOpenDeleteUserFrom(true)
    }, [])


    return (

        <>
            <div className="user-container">

                <h2>User Management</h2>
                <button onClick={() => handleAddUserModel()} > add user </button>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userData.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.firstName} {val.lastName}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>{val.role || "User"}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faEye} onClick={() => handleEditUserModel() }/>
                                        <FontAwesomeIcon icon={faEdit}/>
                                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteUserModel()}/>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>

            <AddUser openAddUserForm={openAddUserForm}  setOpenAddUserFrom = {setOpenAddUserFrom}/>
            <EditUser openEditUserForm={openEditUserForm} setOpenEditUserFrom ={setOpenEditUserFrom} />
            <DeleteUser openDeleteUserForm={openDeleteUserForm} setOpenDeleteUserFrom ={setOpenDeleteUserFrom} />
        </>
    );
};

export default User;