import styled from 'styled-components'

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