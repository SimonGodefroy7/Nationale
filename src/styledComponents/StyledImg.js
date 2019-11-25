import styled from 'styled-components';

const StyledImg = styled.img`
  height: ${(props) => props.imageHeight || 'auto'};
  width: ${(props) => props.imageWidth || 'auto'};
`

export default StyledImg;
