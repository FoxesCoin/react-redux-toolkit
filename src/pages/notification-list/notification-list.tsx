import styled from 'styled-components';

import { AutoRemoveNotification } from './auto-remove-notification';

import { useNotificationState } from './notification-list.context';

import { Z_INDEX } from 'styles/z-index';

const List = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: grid;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  z-index: ${Z_INDEX.NOTIFICATION};
`;

export const NotificationList = () => {
  const notifications = useNotificationState();

  return (
    <List>
      {notifications.map(({ id, message, type }) => (
        <AutoRemoveNotification
          message={message}
          type={type}
          key={id + ''}
          id={id}
        />
      ))}
    </List>
  );
};
