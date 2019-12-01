import { css } from 'styled-components';

const style = {
  fontSize: {
    big: '2rem',
    medium: '1.5rem',
    small: '1rem'
  },
  mediaSize: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  },
  colors: {
    primary: '#ef7d28',
    secondary: '#007300',
    dark: '#000000',
    light: '#ffffff',
  },
  collapseMarginMixin: css`
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  `,
};

export default style;
