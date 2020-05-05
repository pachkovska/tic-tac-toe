import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EmojiModal (props) {
    const {
        className
    } = props;

    const [emojiModal, setEmojiModal] = useState(false);
    const [task, setTask] = useState({});

    const toggleModal = () => {
        setEmojiModal(!emojiModal);
    }

    return (
        <div>
            {/*<div className={"createNewTaskButton"} onClick={toggleModal}><i className="fa fa-plus fa-lg create-icon"></i>Create Task</div>*/}
            <Modal isOpen={emojiModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                   toggle={toggleModal} className={className}>
                 <ModalHeader toggle={toggleModal}>Select your player's icon</ModalHeader>
                <ModalBody>
                    <div className={"emoji-list"}>
                        <span role={"img"} aria-label={""}>&#x1F469;</span>
                        <span role={"img"} aria-label={""}>&#x1F64E;</span>
                        <span role={"img"} aria-label={""}>&#x1F441;</span>
                        <span role={"img"} aria-label={""}>&#x1F4A3;</span>
                        <span role={"img"} aria-label={""}>&#x2764;</span>
                        <span role={"img"} aria-label={""}>&#x1F499;</span>
                        <span role={"img"} aria-label={""}>&#x1F648;</span>
                        <span role={"img"} aria-label={""}>&#x1F638;</span>
                        <span role={"img"} aria-label={""}>&#x1F916;</span>
                        <span role={"img"} aria-label={""}>&#x1F4A9;</span>
                        <span role={"img"} aria-label={""}>&#x1F608;</span>
                        <span role={"img"} aria-label={""}>&#x1F913;</span>
                        <span role={"img"} aria-label={""}>&#x1F920;</span>
                        <span role={"img"} aria-label={""}>&#x1F604;</span>
                        <span role={"img"} aria-label={""}>&#x1F47B;</span>
                        <span role={"img"} aria-label={""}>&#x1F47D;</span>
                        <span role={"img"} aria-label={""}>&#x1F9E0;</span>
                        <span role={"img"} aria-label={""}>&#x1F9DA;</span>
                        <span role={"img"} aria-label={""}>&#x1F9DC;</span>
                        <span role={"img"} aria-label={""}>&#x1F483;</span>
                        <span role={"img"} aria-label={""}>&#x1F46F;</span>
                    </div>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EmojiModal;

