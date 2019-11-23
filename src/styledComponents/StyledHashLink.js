import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import style from './style';

const StyledLink = styled(HashLink)`
  color: ${style.colors.dark};
  text-decoration: none;

`

export default StyledLink;
