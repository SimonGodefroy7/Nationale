import styled from 'styled-components';

const StyledImg = styled.img`
  height: ${(props) => props.imageHeight || 'auto'};
  width: ${(props) => props.imageWidth || 'auto'};
  max-width: ${(props) => props.maxWidth || 'none'};
  max-height: ${(props) => props.maxHeight || 'none'};
`

export default StyledImg;
