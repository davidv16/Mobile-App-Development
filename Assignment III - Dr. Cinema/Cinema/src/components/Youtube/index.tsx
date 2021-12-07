import React from 'react';
import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from '../Modal';

interface Props {
  youTubeId: string;
  isOpen: boolean;
  closeModal: (x: boolean) => void | any;
}
const Youtube = ({ youTubeId, isOpen, closeModal }: Props) => {
  return (
    <Modal
      title={`Trailer`}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <YoutubePlayer
        height={250}
        width={250}
        play={true}
        videoId={youTubeId}
      />
    </Modal>
  );
};

export default Youtube;