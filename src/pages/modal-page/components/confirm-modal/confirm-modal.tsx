import { memo } from 'react';

import { Button } from 'components/button';
import { Picture } from 'components/picture';

import { useNotificationApi } from 'components/notification-list/notification-list.context';

import { RElement } from 'typings/react';

import { Theme } from 'styles/theme';
import { ConfirmModalStyled as Styled } from './confirm-modal.styled';

interface Props {
  isShow: boolean;
  onClose: () => void;
}

export const ConfirmModal: RElement<Props> = memo((props) => {
  const { className, isShow, onClose } = props;
  const { addNotification } = useNotificationApi();

  const handleConfirm = () => {
    addNotification({ message: 'Confirm', type: 'success' });
    onClose();
  };
  const handleCancel = () => {
    addNotification({ message: 'Cancel', type: 'error' });
    onClose();
  };

  return (
    <Styled.Wrapper className={className} isShow={isShow}>
      <Styled.Title>
        <Theme.Text fontSize="h4">Confirm modal</Theme.Text>

        <Theme.FlexCenter onClick={onClose}>
          <Picture src="cancel" size={16} />
        </Theme.FlexCenter>
      </Styled.Title>
      <Styled.Content>
        <Theme.Paragraph>Paragraph</Theme.Paragraph>
        <Theme.Paragraph>Paragraph</Theme.Paragraph>
        <Theme.Paragraph>Paragraph</Theme.Paragraph>
      </Styled.Content>
      <Styled.ButtonPanel>
        <Button onClick={handleConfirm} styling="green">
          Confirm
        </Button>
        <Button onClick={handleCancel} styling="red">
          Cancel
        </Button>
      </Styled.ButtonPanel>
    </Styled.Wrapper>
  );
});
