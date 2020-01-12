import styled from 'styled-components';
import style from './style';

const StyledAnchor = styled.a`
  color: ${props => props.hoverless ? style.colors.dark : style.colors.secondary};
  text-decoration: none;
  padding: ${props => props.paddingless ? '0' : '0.5rem'};
  display: ${props => props.centerImg ? 'flex' : ''};
  justify-content: ${props => props.centerImg ? 'center' : ''};

  &:hover {
    color: ${props => props.hoverless ? style.colors.dark : style.colors.light};
    background-color: ${props => props.hoverless ? '' : style.colors.secondary};
    border-radius: ${props => props.hoverless ? '' : '0.5rem'};
  }
`

export default StyledAnchor;
