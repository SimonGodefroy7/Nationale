import styled from 'styled-components';

const StyledAnchor = styled.a`
  text-decoration: none;
  color: green;
  text-align: ${props => props.textAlign};
  padding: 0.5rem;
  
  &:hover {
    color: white;
    background-color: green;
    border-radius: 0.5rem;
  }
`

export default StyledAnchor;
