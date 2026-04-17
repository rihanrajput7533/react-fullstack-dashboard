import { useState } from "react";

const User = () => {

    const [users] = useState([
        { id: 1, name: "Rihan Ali", email: "rihan@gmail.com", role: "Admin" },
        { id: 2, name: "Aman Khan", email: "aman@gmail.com", role: "User" },
        { id: 3, name: "Sara Khan", email: "sara@gmail.com", role: "Editor" },
    ]);

    

    return (
        <div className="user-container">

            <h2>User Management</h2>

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
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <span className={`role ${user.role.toLowerCase()}`}>
                                    {user.role}
                                </span>
                            </td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default User;