import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${props => props.color};
  width: calc(100% - 2rem);
  margin: 0 auto;
  max-width: 60rem;
`

export default StyledSection;
