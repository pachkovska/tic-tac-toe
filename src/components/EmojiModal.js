import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function EmojiModal (props) {
    const {
        className
    } = props;

    const [createTaskModal, setCreateTaskModal] = useState(false);
    const [task, setTask] = useState({});

    const toggleModal = () => {
        setCreateTaskModal(!createTaskModal);
        setTask({});
    }

    return (
        <div>
            <div className={"createNewTaskButton"} onClick={toggleModal}><i className="fa fa-plus fa-lg create-icon"></i>Create Task</div>
            <Modal isOpen={createTaskModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                   toggle={toggleModal} className={className}>
                <ModalHeader toggle={toggleModal}>Select your player's icon</ModalHeader>
                <ModalBody>
                    <div className={"emoji-list"}>
                        <div>&#x1F469;</div>
                        <div>&#x1F64E;</div>
                        <div>&#x1F441;</div>
                        <div>&#x1F4A3;</div>
                        <div>&#x2764;</div>
                        <div>&#x1F499;</div>
                        <div>&#x1F648;</div>
                        <div>&#x1F638;</div>
                        <div>&#x1F916;</div>
                        <div>&#x1F4A9;</div>
                        <div>&#x1F608;</div>
                        <div>&#x1F913;</div>
                        <div>&#x1F920;</div>
                        <div>&#x1F604;</div>
                        <div>&#x1F47B;</div>
                        <div>&#x1F47D;</div>
                        <div>&#x1F9E0;</div>
                        <div>&#x1F9DA;</div>
                        <div>&#x1F9DC;</div>
                        <div>&#x1F483;</div>
                        <div>&#x1F46F;</div>
                    </div>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EmojiModal;

