import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 8rem;
  padding: 2rem;

  nav {
    display: flex;
    gap: 0.75rem;
    

    a {
      text-decoration: none;
    }
    span {
      img {
        cursor: pointer;
        border: 0;
        
      }
    }

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
        gap: 4px;
`

export const LocationButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['purple-light']};
  
  color: ${({ theme }) => theme['purple-dark']};

  svg {
    color: ${({ theme }) => theme['purple']};
  }

  &:hover {
    opacity: 0.8;
  }

  :focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme['purple']};
    } 

`

export const CartButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['yellow-light']};
  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  &:hover {
    opacity: 0.8;
  }

  :focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow']};
    } 

`