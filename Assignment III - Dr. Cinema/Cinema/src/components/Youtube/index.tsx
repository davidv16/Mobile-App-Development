import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from '../Modal';
import {Dimensions} from 'react-native'
const win = Dimensions.get('window');
interface Props {
  youTubeId: string;
  isOpen: boolean;
  closeModal: () => void;
}
const Youtube = ({ youTubeId, isOpen, closeModal }: Props) => (
  
  <Modal
    title="Trailer"
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <YoutubePlayer
      height={200}
      width={win.width-10}
      play
      videoId={youTubeId}
    />
  </Modal>
);

export default Youtube;
