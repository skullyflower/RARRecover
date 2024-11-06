import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const ReadyToLetGo = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay>
        <ModalContent
          bgColor="green.900"
          color="blue.300">
          <ModalHeader
            fontSize="lg"
            fontWeight="bold"
            border="1px solid">
            Congratulations! Nice work.
          </ModalHeader>
          <ModalBody>
            <Text>
              Now you might want to talk what you've discovered over with a trusted friend. It might
              help you find a way to improve the situation.
            </Text>
          </ModalBody>
          <ModalFooter>
            <ModalCloseButton>Close</ModalCloseButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
export default ReadyToLetGo;
