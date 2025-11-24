import styled from 'styled-components';

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
    gap: 15px;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  flex: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const MemojiImage = styled.img`
  display: none; /* Hidden by default on desktop */

  /* Only show on mobile */
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    object-fit: contain;
    width: 100px;
    max-width: 100px;
    min-width: 80px;
    height: auto;
    align-self: center;
    flex-shrink: 0;
  }
`;
