import styled from 'styled-components';

import { useAccordionState } from '../accordion.context';
import { useAutoHeightAnimation } from 'services/hooks';

import { RWrapper } from 'types/react';

const Wrapper = styled.div<{ height: number }>`
  overflow: hidden;
  transition: 0.5s all;
  height: ${(props) => props.height}px;
`;

export const AccordionContent: RWrapper = (props) => {
  const { className, children } = props;

  const isOpen = useAccordionState();
  const [ref, height] = useAutoHeightAnimation<HTMLDivElement>(isOpen);

  return (
    <Wrapper className={className} ref={ref} height={height}>
      {children}
    </Wrapper>
  );
};
