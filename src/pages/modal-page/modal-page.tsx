import { Button } from 'components/button';

import { useShowState } from 'hooks/show-state';

import { RPage } from 'types/react';
import { ConfirmModal } from './components';

export const ModalPage: RPage = () => {
  const { isShow, onShow, onClose } = useShowState(false);

  return (
    <>
      <Button styling="white" onClick={onShow}>
        Open modal
      </Button>
      <ConfirmModal isShow={isShow} onClose={onClose} />
    </>
  );
};
