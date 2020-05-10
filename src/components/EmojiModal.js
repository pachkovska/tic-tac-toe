import React, {useEffect, useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { handleEmoji } from "../actions";

function EmojiModal (props) {
    const {
        className,
        nameSaved,
        setNameSaved,
    } = props;

    const [emojiModal, setEmojiModal] = useState(false);

    const toggleModal = () => {
        setEmojiModal(!emojiModal);
    }

    const handleEmoji = (emojiUniCode) => {
        props.handleEmoji(emojiUniCode)
        setEmojiModal(false);
    }

    useEffect(() => {
        if (nameSaved) {
            toggleModal();
            setNameSaved(false);
        }
    }, [nameSaved, setNameSaved, toggleModal])

    return (
        <div>

            <Modal size={"lg"} isOpen={emojiModal} modalTransition={{ timeout: 200 }} backdropTransition={{ timeout: 500 }}
                   toggle={toggleModal} className={className}>
                 <ModalHeader toggle={toggleModal}>Select your player's icon</ModalHeader>
                <ModalBody>
                    <div className={"emoji-list"}>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F469')}>&#x1F469;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F64E')}>&#x1F64E;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F441')}>&#x1F441;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F4A3')}>&#x1F4A3;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F49A')}>&#x1F49A;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F499')}>&#x1F499;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F648')}>&#x1F648;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F638')}>&#x1F638;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F916')}>&#x1F916;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F4A9')}>&#x1F4A9;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F608')}>&#x1F608;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F913')}>&#x1F913;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F920')}>&#x1F920;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F604')}>&#x1F604;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F47B')}>&#x1F47B;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F47D')}>&#x1F47D;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F9E0')}>&#x1F9E0;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F9DA')}>&#x1F9DA;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F9DC')}>&#x1F9DC;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F483')}>&#x1F483;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F46F')}>&#x1F46F;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F496')}>&#x1F496;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F64B')}>&#x1F64B;</span>
                        <span role={"img"} aria-label={""} onClick={() => handleEmoji('1F9DE')}>&#x1F9DE;</span>
                    </div>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    handleEmoji: (emojiUniCode) => dispatch(handleEmoji(emojiUniCode))
})

export default connect(null, mapDispatchToProps)(EmojiModal);

