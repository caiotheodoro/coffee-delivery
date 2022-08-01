import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 10rem;
  
  
  @media (max-width: 1400px) {
        font-size: 0.800rem;
 
    }

    .cover {
        background: url('/assets/Background.png') no-repeat center center; 
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
        align-items: center;

        

    }

`

export const IntroContainer = styled.div`
    display: flex;
    height: 34rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 4.125rem;
    .cover {
        background: url('/assets/Background.png') no-repeat center center; 
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

    img {
        width: 30rem;
        height: 100%;
    }

`


export const TitleContainer = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            
              


            h1 {
                font-family: 'Baloo 2';
                font-weight: 800;
                font-size: 3rem;
                color: ${({ theme }) => theme['base-title']};

                @media (max-width: 1400px) {
                    font-size: 2rem;
                 }
            }

            p {
                font-weight: 500;
                font-size: 1.25rem;
            }
`


export const ItemsContainer = styled.div`
    margin-top: 4.125rem;

    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;


`


const ITEM_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    baseText: 'base-text',
    purple: 'purple',
} as const

interface ItemProps {
    itemColor: keyof typeof ITEM_COLORS
}




export const Item = styled.div<ItemProps>`
    span {
        display: inline-flex;
        padding: 8px;
        border-radius: 999px;
        background-color: ${({ theme, itemColor }) => theme[ITEM_COLORS[itemColor]]};
        color: ${({ theme }) => theme['white']};
        box-sizing: initial;
    }
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    min-width: 231px;


`



export const CoffeeListContainer = styled.div`
   
 h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    color: ${({ theme }) => theme['base-subtitle']};
 }

`


export const CoffeesList = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
   gap: 2rem;
   margin-top: 3.375rem;
   margin-bottom: 10rem;
   grid-row-gap: 2.5rem;

  
  

`