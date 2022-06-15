import styled from 'styled-components';

import { Picture, PictureName } from './picture';

import { Color, COLORS } from 'styles/color';

import { RElement } from 'types/react';

import { Theme } from 'styles/theme';

interface NotificationColorsStyling {
  background: Color;
  timerBackground: Color;
  timerColor: Color;
  color: Color;
}

interface NotificationParameters extends NotificationColorsStyling {
  title: string;
  icon: PictureName;
}

interface NotificationStyling extends NotificationColorsStyling {
  percent: number;
}

type NotificationType = 'error' | 'inform' | 'warning' | 'success';

interface Props {
  message: string;
  type: NotificationType;
  percent: number;
}

const NOTIFICATION_PARAMETERS: Record<
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

const Title = styled(Theme.Text)`
  font-weight: bold;
`;

const Wrapper = styled.div<NotificationStyling>`
  position: relative;
  background-color: ${(props) => COLORS[props.background]};
  padding: 0.75rem;
  border-radius: 0.25rem;
  color: ${(props) => COLORS[props.color]};
  min-width: 300px;
  width: max-content;
  max-width: 600px;

  display: grid;
  grid-template-columns: max-content max-content 1fr;
  column-gap: 0.5rem;
  align-items: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
  }

  &::before {
    right: 0;
    background-color: ${(props) => COLORS[props.timerBackground]};
    border-radius: 0 0 0.25rem 0.25rem;
  }

  &::after {
    width: ${(props) => props.percent}%;
    background-color: ${(props) => COLORS[props.timerColor]};
    border-bottom-left-radius: 0.25rem;
  }
`;

export const Notification: RElement<Props> = (props) => {
  const { className, message, type, percent } = props;

  const { title, icon, ...colors } = NOTIFICATION_PARAMETERS[type];

  return (
    <Wrapper className={className} percent={percent} {...colors}>
      <Picture src={icon} size={24} />
      <Title fontSize="h4">{title}:</Title>
      <Theme.Text>{message}</Theme.Text>
    </Wrapper>
  );
};
