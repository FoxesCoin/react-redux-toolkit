import { Notification } from 'components/notification';
import { Theme } from 'styles/theme';

import { RPage } from 'types/react';

export const NotificationPage: RPage = () => (
  <Theme.GapColumn>
    <Notification percent={10} message="Test message" type="error" />
    <Notification percent={20} message="Test message" type="warning" />
    <Notification percent={30} message="Test message" type="inform" />
    <Notification percent={40} message="Test message" type="success" />

    <Notification
      percent={50}
      message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      type="success"
    />
  </Theme.GapColumn>
);
