import styled from 'styled-components';

import { Button } from 'components/button';
import { OverlayModal } from 'components/overlay-modal';
import { Picture } from 'components/picture';

import { useShowState } from 'hooks/show-state';

import { COLORS } from 'styles/color';

import { Theme } from 'styles/theme';

import { RPage } from 'types/react';

const Modal = styled(OverlayModal)`
  color: ${COLORS.black};

  width: 700px;
  height: 400px;
`;

export const ModalPage: RPage = () => {
  const { isShow, onShow, onClose } = useShowState(false);

  return (
    <>
      <Button styling="white" onClick={onShow}>
        Open modal
      </Button>
      <Modal isShow={isShow}>
        <div onClick={onClose}>
          <Picture src="cancel" size={16} />
        </div>
        <Theme.Title>Modal Title</Theme.Title>
        <Theme.Paragraph>Paragraph</Theme.Paragraph>
        <Theme.Paragraph>Paragraph</Theme.Paragraph>
        <Theme.Paragraph>Paragraph</Theme.Paragraph>
      </Modal>
    </>
  );
};
