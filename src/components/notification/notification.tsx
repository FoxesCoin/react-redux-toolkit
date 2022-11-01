import { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Picture } from '../picture';

import { COLORS } from 'styles/color';
import {
  NotificationColorsStyling,
  NotificationType,
  NOTIFICATION_PARAMETERS,
} from './notification.constants';

import { RElement } from 'types/react';

import { Theme } from 'styles/theme';

interface Props {
  message: string;
  type: NotificationType;
}

const Title = styled(Theme.Text)`
  font-weight: bold;
`;

const PERCENT_BAR = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;

const HIDE = keyframes`
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const Wrapper = styled.div<NotificationColorsStyling>(
  (props) => css`
    position: relative;
    background-color: ${COLORS[props.background]};
    padding: 0.75rem;
    border-radius: 0.25rem;
    color: ${COLORS[props.color]};
    min-width: 300px;
    width: max-content;
    max-width: 600px;

    display: grid;
    grid-template-columns: max-content max-content 1fr;
    column-gap: 0.5rem;
    align-items: center;

    animation-name: ${HIDE};
    animation-duration: 1s;
    animation-delay: 5s;

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
      background-color: ${COLORS[props.timerBackground]};
      border-radius: 0 0 0.25rem 0.25rem;
      width: 100%;
    }

    &::after {
      background-color: ${COLORS[props.timerColor]};
      border-bottom-left-radius: 0.25rem;
      animation-name: ${PERCENT_BAR};
      animation-duration: 5s;
    }
  `
);

export const Notification: RElement<Props> = memo((props) => {
  const { className, message, type } = props;

  const { title, icon, ...colors } = NOTIFICATION_PARAMETERS[type];

  return (
    <Wrapper className={className} {...colors}>
      <Picture src={icon} size={24} />
      <Title fontSize="h4">{title}:</Title>
      <Theme.Text>{message}</Theme.Text>
    </Wrapper>
  );
});
