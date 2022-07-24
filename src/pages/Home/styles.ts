import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 10rem;
  
  
    .cover {
        background: url('src/assets/Background.png') no-repeat center center; 
        background-size: cover;
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;
        display: block;
        height: 34rem;
        margin: auto;
        filter: blur(40px);
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 3.5rem;
        line-height: 1.3;

        

    }

`
