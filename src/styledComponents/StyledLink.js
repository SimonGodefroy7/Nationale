import styled from 'styled-components';
import { Link } from 'react-router-dom'; //eslint-disable-line no-unused-vars

const StyledLink = styled(Link)`
  color: green;
  text-decoration: none;
  padding: 0.5rem;

  &:hover {
    color: white;
    background-color: green;
    border-radius: 0.5rem;
  }
`

export default StyledLink;
