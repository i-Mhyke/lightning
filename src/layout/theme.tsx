const tailwindConfig = require('../../tailwind.config');

const theme = {
  colors: tailwindConfig.theme.extend.colors,

  breakPoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '540px',
    tablet: '770px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
};
export default theme;
