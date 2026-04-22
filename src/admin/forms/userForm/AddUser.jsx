import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const AddUser = (props) => {



    return (
        <>

            <Modal show={props.openAddUserForm} onHide={() => props.setOpenAddUserFrom(false)}> 
                <Modal.Header closeButton> 
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setOpenAddUserFrom(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}; export default memo(AddUser);