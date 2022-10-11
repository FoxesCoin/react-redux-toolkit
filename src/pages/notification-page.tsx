import { Notification } from 'components/notification';

import { RPage } from 'types/react';

const NotificationPage: RPage = () => (
  <>
    <Notification message="Test message" type="error" />
    <Notification message="Test message" type="warning" />
    <Notification message="Test message" type="inform" />
    <Notification message="Test message" type="success" />

    <Notification
      message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      type="success"
    />
  </>
);

export default NotificationPage;
