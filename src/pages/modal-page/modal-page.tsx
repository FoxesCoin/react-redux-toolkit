import { Button } from 'components/button';

import { useShowState } from 'hooks/show-state';

import { RPage } from 'types/react';
import { ConfirmModal } from './components';

const ModalPage: RPage = () => {
  const { isShow, show, hide } = useShowState(false);

  return (
    <>
      <Button styling="white" onClick={show}>
        Open modal
      </Button>
      <ConfirmModal isShow={isShow} onClose={hide} />
    </>
  );
};

export default ModalPage;
