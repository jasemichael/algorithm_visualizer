import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactElement | ReactElement[],
    header: string
}

const Menu = ({children, header}: Props) => {
    const H1 = styled.h1`
    text-align: center;
`;

    const MenuItems = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 2em;
        width: 90%;
        margin: auto;
    `;
    return (
        <>
            <H1>{header}</H1>
            <MenuItems>
                {children}
            </MenuItems>
        </>
    );
}

export default Menu;