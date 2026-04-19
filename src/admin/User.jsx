import axios from "axios";
import { useState } from "react";

const User = () => {



    const [userData, setUserData] = useState([])

    const handleGetAllUserList = async () => {

        try {
            const userList = await axios.get("http://localhost:8000/users")
            setUserData(userList.data)

        } catch (error) {
            console.log(error)
        }




    }

    console.log("userData===", userData);




    return (
        <div className="user-container">

            <h2>User Management</h2>

            <button onClick={() => handleGetAllUserList()} >api</button>

            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((val, index) => {

                        return(
                        <tr >
                            <td>{val.id}</td>
                            <td>{val.firstName}</td>
                            <td>{val.lastName}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>
                                {/* <span className={`role ${user.role.toLowerCase()}`}>
                                    {user.role}
                                </span> */}
                            </td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
};

export default User;