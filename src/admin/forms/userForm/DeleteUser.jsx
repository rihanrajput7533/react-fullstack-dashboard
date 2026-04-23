import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const DeleteUser = (props) => {



    return (
        <>

            <Modal show={props.openDeleteUserForm} onHide={() => props.setOpenDeleteUserFrom(false)} centered> 
                <Modal.Header closeButton> 
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setOpenDeleteUserFrom(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}; export default memo(DeleteUser);