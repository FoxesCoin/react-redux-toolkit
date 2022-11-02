import styled from 'styled-components';

import { useAutoHeightAnimation } from 'hooks/animate';
import { useAccordionState } from '../accordion.context';

import { RWrapper } from 'typings/react';

const Wrapper = styled.div<{ height: number }>`
  overflow: hidden;
  transition: 0.5s all;
  height: ${(props) => props.height}px;
`;

// NOTES:
// Height 0 ignore padding and margin and its will still show.
// If add padding or margin for children it will work

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
