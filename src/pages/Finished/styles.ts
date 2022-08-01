import styled from "styled-components";

export const CheckoutContainer = styled.main`
   
    padding-top: 5rem;
    flex: 1;
    display: flex;
    gap: 2.5rem;
    flex-direction: column;
  
    margin: 2.5rem 10rem;

    h1 {
            margin-bottom: 0.25rem;
            font-size: 2rem;
            color: ${({ theme }) => theme["yellow-dark"]};
            font-family: "Baloo 2";

        }

        p {
            font-size: 1.25rem;
        }
        
  
    > div {
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        h1 {
            margin-bottom: 0.25rem;
            font-size: 2rem;
            color: ${({ theme }) => theme["yellow-dark"]};
            font-family: "Baloo 2";

        }

        p {
            font-size: 1.25rem;
        }

    }

    img {
        width: 30rem;
        height: 22.5rem;
    }
`

export const GradientBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    width: 50%;
    height: fit-content;

    border:  1px transparent;
    border-radius: 20px;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #DBAC2C 2.61%, #8047F8 98.76%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-radius: 6px 36px !important;
`

export const BoxInfo = styled.div`
    padding: 32px;
    border-radius: 6px 36px !important;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;



> div {
    flex-direction: row;
    display: flex;
}

`


const ITEM_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple',
} as const

interface ItemProps {
    itemColor: keyof typeof ITEM_COLORS
}




export const Item = styled.div<ItemProps>`

    > span {
        display: inline-flex;
        padding: 8px;
        border-radius: 999px;
        background-color: ${({ theme, itemColor }) => theme[ITEM_COLORS[itemColor]]};
        color: ${({ theme }) => theme['white']};
        box-sizing: initial;
    }
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    line-height: 1.6;

    div > h2 {
        font-size: 1rem;
        font-weight: 400;
    }

    div > h2 > span {
        font-weight: 700;
    }
    div > p > span {
        font-weight: 700;
    }

    div > p {
        font-size: 1rem;
    }



`


