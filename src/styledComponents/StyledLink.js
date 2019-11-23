import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import style from './style';

const SafellyWrappedLink = ({ hoverless, paddingless, ...rest }) => <Link {...rest} />;

const StyledLink = styled(SafellyWrappedLink)`
  color: ${props => props.hoverless ? '' : style.colors.secondary};
  text-decoration: none;
  padding: ${props => props.paddingless ? '0' : '0.5rem'};

  &:hover {
    color: ${props => props.hoverless ? '' : style.colors.light};
    background-color: ${props => props.hoverless ? '' : style.colors.secondary};
    border-radius: ${props => props.hoverless ? '' : '0.5rem'};
  }
`;

export default StyledLink;
