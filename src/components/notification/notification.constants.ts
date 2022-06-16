import { PictureName } from 'components/picture';

import { Color } from 'styles/color';

export interface NotificationColorsStyling {
  background: Color;
  timerBackground: Color;
  timerColor: Color;
  color: Color;
}

interface NotificationParameters extends NotificationColorsStyling {
  title: string;
  icon: PictureName;
}

export type NotificationType = 'error' | 'inform' | 'warning' | 'success';

export const NOTIFICATION_PARAMETERS: Record<
  NotificationType,
  NotificationParameters
> = {
  error: {
    background: 'palePink',
    icon: 'errorNotification',
    timerBackground: 'lightCoral',
    color: 'red',
    timerColor: 'red',
    title: 'Error',
  },
  inform: {
    background: 'paleBlue',
    icon: 'informationNotification',
    timerBackground: 'lightBlue',
    color: 'blue',
    timerColor: 'blue',
    title: 'Inform',
  },
  success: {
    background: 'paleGreen',
    icon: 'successNotification',
    timerBackground: 'lightGreen',
    color: 'darkGreen',
    timerColor: 'darkGreen',
    title: 'Success',
  },
  warning: {
    background: 'paleYellow',
    icon: 'warningNotification',
    timerBackground: 'lightOrange',
    color: 'orange',
    timerColor: 'orange',
    title: 'Warning',
  },
};
