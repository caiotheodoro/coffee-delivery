import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  width: 16rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 1rem;


  img {
    position: absolute;
    top: -20px
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-top: 0.875rem;

    span {
        color: ${({ theme }) => theme['yellow-dark']};
        background-color: ${({ theme }) => theme['yellow-light']};
        padding: 4px 8px;
        font-size: 0.625rem;
        border-radius: 100px;
        font-weight: bold;
    }
  }


  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;

    h1 {
        font-family: "Baloo 2";
        font-weight: 700;
        font-size: 1.25rem;
    }
    p {
        color: ${({ theme }) => theme['base-label']};
        font-size: 0.875rem;
       text-align: center;
    }
  }


  .price {

    h1 {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 1rem;
        color: ${({ theme }) => theme['base-text']};
        span {
            font-family: "Baloo 2";
            font-weight: 700;
            font-size: 1.75rem;
        }
    }
    display: flex;
    position: absolute;
    bottom: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

`

const BaseButton = styled.button`
        border: 0;
        border-radius: 6px;
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        font-size: 0.875;
        font-weight: 500;
        cursor: pointer;
        height: 2.375rem;
        gap: 4px;
`

export const CounterButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['base-button']};
  
  svg {
    color: ${({ theme }) => theme['purple']};

    
    :hover {
        color: ${({ theme }) => theme['purple-dark']};
    }
}

  `

export const CartButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['purple-dark']};
  svg {
    color: ${({ theme }) => theme['white']};
  }
  :hover {
    background-color: ${({ theme }) => theme['purple']};
  }


  

`
