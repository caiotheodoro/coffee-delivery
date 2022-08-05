import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 8rem;
  padding: 2rem;
  z-index: 1;
  
  width: 74rem;
  position: fixed;
  flex-direction: row;
  background-color: ${({ theme }) => theme['background']};
  

  /* on scroll, change background color
  */
  &.scrolled {
    background-color: ${({ theme }) => theme['white']};
  }

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
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  :focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow']};
    } 
    
    span {
      position: absolute;
      right: -8.35px;
      top: -8px;
      background-color: ${({ theme }) => theme['yellow-dark']};
      border-radius: 100%;
      width: 1.25rem;
      height: 1.25rem;
      align-items: center;
      display: flex;
      justify-content: center;
      color: ${({ theme }) => theme['white']};
      font-size: 0.75rem;
    }

`
