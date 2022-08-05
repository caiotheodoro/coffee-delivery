import styled from 'styled-components'





export const ItemsContainer = styled.div`
    margin-top: 4.125rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: flex-start;

    div {
        margin-right: 1.25rem;
    }

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
        background-color: ${({ theme, itemColor }) =>theme[ITEM_COLORS[itemColor]]};
        color: ${({ theme }) =>theme['white']};
        box-sizing: initial;
    }
    display: flex;
    gap: 0.75rem;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    min-width: 231px;

    

`


