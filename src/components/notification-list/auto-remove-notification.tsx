import { useEffect } from 'react';

import { Notification } from 'components/notification';

import {
  PopUpNotificationParams,
  useNotificationApi,
} from './notification-list.context';

import { RElement } from 'typings/react';

export const AutoRemoveNotification: RElement<PopUpNotificationParams> = (
  props
) => {
  const { className, id, message, type } = props;

  const { removeNotification } = useNotificationApi();

  useEffect(() => {
    const removeTimer = setTimeout(() => removeNotification(id), 6000);

    return () => clearTimeout(removeTimer);
  }, []);

  return <Notification className={className} message={message} type={type} />;
};
