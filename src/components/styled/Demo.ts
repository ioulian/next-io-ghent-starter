import styled from "styled-components";

export const StyledPage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMain = styled.main`
  > .logo {
    margin-bottom: 2rem;
    width: 128px;
    height: 128px;
    margin-inline: auto;
    border-radius: 10px;
    overflow: hidden;
  }

  h1 {
    margin-bottom: 3rem;
  }

  nav {
    margin-bottom: 2rem;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;

    > li {
      margin-inline: 0.5rem;
    }
  }
`;
