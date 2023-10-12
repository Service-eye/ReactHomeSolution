import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { isAuthenticated } from "../auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
const Users = () => {
    const { token } = isAuthenticated();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {

            await axios.get(`${API_URL}/userlist`)
                .then((response) => {
                    if (response.status === 200) {
                        // Handle successful response
                        console.log(response.data);
                        setUsers(response.data)
                    } else {
                        // Handle error response
                        console.error('Request failed with status:', response.status);
                    }
                })
                .catch((error) => {
                    // Handle network or other errors
                    console.log('Request failed:', error);
                });


        }

        fetchUsers()

    }, []);
    console.log('this is users in admin: ', users)

    // delete category:
    const deleteUser = (id) => {
        const confirmed = window.confirm(
            "Are you sure want to delete this user?"
        );
        if (confirmed) {
            axios
                .delete(`${API_URL}/deleteuser/${id}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    toast.success("Product deleted successfully.");
                    setProduct(users.filter((u) => u._id !== id));
                })
                .catch((err) => {
                    toast.error("Failed to delete the user.");
                    toast.error(err.res.data.error);
                });
        }
    };

    return (
        <>
            <ToastContainer theme="colored" position="top-center" autoClose="1200" />
            <div className="container">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 shadow">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col"> Name</th>
                                    <th scope="col"> Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Contact No.</th>
                                    <th scope="col">Verified</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users && users.length > 0 ?
                                    users.map((u, i) => (
                                        <tr key={i}>
                                            <td>{u.name}</td>
                                            <td>{u.userName}</td>
                                            <td>
                                            <Link to={`mailto:${u.email}`} className="text-decoration-none">{u.email}</Link>
                                            </td>
                                            <td>
                                                {u.role && u.role === "admin" ?
                                                    <span className="text-danger">{u.role}</span> :
                                                    <span className="text-black">{u.role}</span>
                                                }
                                            </td>
                                            <td>
                                            <Link to={`tel:${u.contactNumber}`} className="text-decoration-none">{u.contactNumber}</Link>

                                            </td>
                                            <td>
                                                {u.isVerified ? (
                                                    <span className="text-success">Verified</span>
                                                ) : (
                                                    <span className="text-danger">Not Verified</span>
                                                )}
                                            </td>
                                            <td>
                                                {/* <Link to={`/admin/updateuser/${u._id}`} className="btn btn-success">
                          <FaEdit />
                        </Link> */}
                                                <br />
                                                <br />
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteUser(u._id)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    )) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
