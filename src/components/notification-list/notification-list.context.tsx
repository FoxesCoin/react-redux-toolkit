import { ReactNode, useCallback, useMemo, useState } from 'react';

import { useContextHandler } from 'hooks/context';
import { generateContext } from 'services/react';

import { NotificationType } from 'components/notification/notification.constants';
import { removeItemInObjectArray } from 'services/array';

interface AddNotificationParams {
  message: string;
  type: NotificationType;
}
export interface PopUpNotificationParams extends AddNotificationParams {
  id: bigint;
}
interface NotificationApi {
  addNotification: (notification: AddNotificationParams) => void;
  removeNotification: (id: bigint) => void;
}

const State = generateContext<PopUpNotificationParams[]>(
  'NotificationStateContext'
);
const Api = generateContext<NotificationApi>('NotificationApiContext');

export const useNotificationState = () =>
  useContextHandler(State, 'NotificationState');
export const useNotificationApi = () =>
  useContextHandler(Api, 'NotificationApi');

interface Props {
  children: ReactNode;
}

let notificationId = 0n;

export const NotificationContext = (props: Props) => {
  const { children } = props;

  const [notifications, setNotifications] = useState<PopUpNotificationParams[]>(
    []
  );

  const state = useMemo(() => notifications, [notifications]);
  const addNotification = useCallback((notification: AddNotificationParams) => {
    const ID = notificationId++;
    setNotifications((current) => [
      { ...notification, percent: 100, id: ID },
      ...current,
    ]);
  }, []);
  const removeNotification = useCallback((id: bigint) => {
    setNotifications((current) => removeItemInObjectArray(current, { id }));
  }, []);

  return (
    <Api.Provider value={{ addNotification, removeNotification }}>
      <State.Provider value={state}>{children}</State.Provider>
    </Api.Provider>
  );
};
