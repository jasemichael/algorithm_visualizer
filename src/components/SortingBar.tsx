import styled from 'styled-components';

interface Props {
    height: number,
    weight: number,
    active: boolean
}

const SortingBar = ({height, weight, active}: Props) => {
    const Bar = styled.div`
        background-color: ${active?"red":"blue"};
        height: ${height}mm;
        width: ${weight}%;
    `;
    return (
        <Bar />
    );
}

export default SortingBar;