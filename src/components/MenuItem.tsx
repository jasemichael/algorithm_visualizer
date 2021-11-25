import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
    title: string,
    imageSrc: string, 
    imageAlt: string,
    redirectTo: string
}

const MenuItem = ({title, imageSrc, imageAlt, redirectTo}: Props) => {

    const StyledLink = styled(Link)`
        color: black;
        text-decoration: none;
        border: black solid 2px;
        border-radius: 8px;
        &:hover {
            transform: scale(1.05, 1.05);
            transition: 0.25s ease-in-out;
        }
    `;
    const H2 = styled.h2`
        text-align: center;
    `;

    const Img = styled.img`
        margin: auto;
        width: 20rem;
        display: block;
    `;

    return (
        <StyledLink to={redirectTo}>
            <div>
                <H2>{title}</H2>
                <Img src={imageSrc} alt={imageAlt} />
            </div>
        </StyledLink>
    );
}

export default MenuItem;