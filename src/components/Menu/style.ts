import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: var(--dark);
    color: var(--text-color);
    padding: 10px;
`

export const MenuGroup = styled.nav`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 20px 0;
    small {
        color: var(--text-gray);
    }

    div{
        display: flex;
        gap: 10px;
        padding: 10px 0;
        cursor: pointer; 
        &:hover {
            filter: brightness(0.5)
        }
    }
`