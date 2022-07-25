import styled from "styled-components";


const ITEM_COLORS = {
    yellowDark: 'yellow-dark',
    purple: 'purple',
} as const

interface iconColor {
    iconColor: keyof typeof ITEM_COLORS
}

export const HeadContainer = styled.div<iconColor>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
    font-family: "Roboto";

    h1 {
        font-size: 1rem;
        font-family: "Roboto";
        display: flex;
        font-weight: 500;
        align-items: center;
        margin-bottom: 0.5rem;

    }

    p {
        font-size: 0.875rem;
    }

    svg {
        color: ${({ theme, iconColor }) => theme[ITEM_COLORS[iconColor]]};
    }

`
