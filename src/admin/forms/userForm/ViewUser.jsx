import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ViewUser = (props) => {



    return (
        <>

            <Modal show={props.openViewUserForm} onHide={() => props.setOpenViewUserFrom(false)} centered> 
                <Modal.Header closeButton> 
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setOpenViewUserFrom(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}; export default memo(ViewUser);