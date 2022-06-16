import { Notification } from 'components/notification';

import { Theme } from 'styles/theme';

import { RPage } from 'types/react';

export const NotificationPage: RPage = () => (
  <Theme.GapColumn>
    <Notification message="Test message" type="error" />
    <Notification message="Test message" type="warning" />
    <Notification message="Test message" type="inform" />
    <Notification message="Test message" type="success" />

    <Notification
      message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      type="success"
    />
  </Theme.GapColumn>
);
