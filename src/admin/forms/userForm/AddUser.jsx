import axios from 'axios';
import { memo, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const AddUser = (props) => {

    const [inputValue , setInputValue] = useState({firstname: "" , lastname: "" , email: "" , password: ""})

    const handleOnChangeValue = (e) => {
        const {name , value} = e.target;
        setInputValue({ ...inputValue ,[name]: value })
    }

const handleOnSubmit = async (e) => {
   try {
     e.preventDefault();
     const saveUserInfo = await axios.post("http://localhost:8000/users", inputValue);
     console.log("saveUserInfo===", saveUserInfo);
   } catch (error) {
     console.log("error", error);
   }
}


    return (
        <>

            <Modal show={props.openAddUserForm} onHide={() => props.setOpenAddUserFrom(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e) =>handleOnSubmit(e)}>
                    <Modal.Body>
                        
                        <div>
                            <label>Firstname</label>
                            <input type="text" name='firstname' value={inputValue?.firstname} onChange={(e) => handleOnChangeValue(e)}/>
                        </div>
                        <div>
                            <label>Lastname</label>
                            <input type="text" name='lastname' value={inputValue?.lastname} onChange={(e) => handleOnChangeValue(e)}/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name='email' value={inputValue?.email} onChange={(e) => handleOnChangeValue(e)}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" name='password' value={inputValue?.password} onChange={(e) => handleOnChangeValue(e)}/>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type='reset' onClick={() => props.setOpenAddUserFrom(false)}>cancel</Button>
                        <Button variant="primary" type='submit'>Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}; export default memo(AddUser);