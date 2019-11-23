import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledH1 from './StyledH1';
import StyledH1Short from './StyledH1Short';
import style from './style';

const StyledMenuBackground = styled(StyledFlexBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${StyledH1} {
    color: ${style.colors.primary};
  }
  ${StyledH1Short} {
    color: ${style.colors.primary};
  }
`;

export default StyledMenuBackground;
