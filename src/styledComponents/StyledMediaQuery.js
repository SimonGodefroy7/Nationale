import styled from 'styled-components';

const StyledMediaQuery = styled('div')`
  display: ${props => props.largeScreenFirst ? 'none' : 'contents'};

  @media (min-width: ${props => props.breakpoint}) {
    display: ${props => props.largeScreenFirst ? 'contents' : 'none'};
  }
`;

export default StyledMediaQuery;
