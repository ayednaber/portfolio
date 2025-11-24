import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  /* Desktop: Allow original animations to work normally, but prevent shrinking after animation completes */
  /* Ensure elements stay at scale(1) when animation is done to prevent the "shrinking back" issue */
  .vertical-timeline-element--in-view:not(.vertical-timeline-element--animate) .vertical-timeline-element-content,
  .vertical-timeline-element--in-view:not(.vertical-timeline-element--animate) .vertical-timeline-element-icon {
    transform: scale(1) !important;
  }

  /* Disable animations on mobile where they act funny */
  @media screen and (max-width: 768px) {
    .vertical-timeline-element {
      opacity: 1 !important;
      transform: scale(1) !important;
      animation: none !important;
    }

    .vertical-timeline-element--work {
      opacity: 1 !important;
      transform: scale(1) !important;
      animation: none !important;
    }

    .vertical-timeline-element-content {
      opacity: 1 !important;
      transform: scale(1) !important;
      animation: none !important;
    }

    .vertical-timeline-element-icon {
      opacity: 1 !important;
      transform: scale(1) !important;
      animation: none !important;
    }

    .vertical-timeline-element--animate,
    .vertical-timeline-element--animate .vertical-timeline-element-content,
    .vertical-timeline-element--animate .vertical-timeline-element-icon {
      opacity: 1 !important;
      transform: scale(1) !important;
      animation: none !important;
    }
  }

  /* Hero bitmoji image mobile styles */
  @media screen and (max-width: 768px) {
    .hero-memoji {
      width: 100% !important;
      max-width: 300px !important;
      margin: 20px auto 0 auto !important;
      display: block !important;
    }
  }

  @media screen and (max-width: 480px) {
    .hero-memoji {
      max-width: 250px !important;
      margin: 20px auto 0 auto !important;
    }
  }

`;

export default GlobalStyles;