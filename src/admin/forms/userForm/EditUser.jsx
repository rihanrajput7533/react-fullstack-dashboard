import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const EditUser = (props) => {



    return (
        <>

            <Modal show={props.openEditUserForm} onHide={() => props.setOpenEditUserFrom(false)} centered> 
                <Modal.Header closeButton> 
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setOpenEditUserFrom(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}; export default memo(EditUser);