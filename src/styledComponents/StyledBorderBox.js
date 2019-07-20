import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledH3 from './StyledH3';

const StyledBorderBox = styled(StyledFlexBox)`
  border-style: solid;
  border-radius: 1rem;
  border-color: green;
  padding: 1rem;
  margin: 1rem;

  ${StyledH3} {
    margin: 0;
    margin-bottom: 1rem;
  }
`

export default StyledBorderBox;
