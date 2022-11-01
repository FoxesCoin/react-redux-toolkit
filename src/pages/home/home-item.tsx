import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Picture, PictureName } from 'components/picture';

import { Theme } from 'styles/theme';

import { RElement } from 'types/react';

export interface HomeItemProps {
  title: string;
  icon: PictureName;
  route: string;
}

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
`;

export const HomeItem: RElement<HomeItemProps> = memo((props) => {
  const { icon, route, title, className } = props;

  return (
    <Wrapper className={className} to={route}>
      <Picture src={icon} />
      <Theme.Title>{title}</Theme.Title>
    </Wrapper>
  );
});
