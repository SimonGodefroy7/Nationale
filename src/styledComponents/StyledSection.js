import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${props => props.color};
`

export default StyledSection;
