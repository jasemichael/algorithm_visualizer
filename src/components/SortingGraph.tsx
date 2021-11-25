import { useState } from "react";
import styled from "styled-components";
import { SortingBar } from ".";
import { createArrayFromNum, randomize } from "../logic";

interface Props {
    numElements: number,
    sortAlgorithm: (array: {number: number, active: boolean}[], setArray: React.Dispatch<React.SetStateAction<{number: number, active: boolean}[]>>) => {number: number, active: boolean}[]
}

const Graph = styled.div`
    display: flex;
    align-items: end;
    width: 100%;
    margin: auto;
    justify-content: space-between;
`;

const CenteredButtons = styled.div`
    text-align: center;
`;

const SortingGraph = ({numElements, sortAlgorithm}: Props) => {
    const [array, setArray] = useState(randomize(createArrayFromNum(numElements)));
    const barWeight = numElements*0.009;

    return (
        <div>
            <Graph>
                {array.map(a => 
                    <SortingBar key={a.number} height={a.number} weight={barWeight} active={a.active}/>
                )}
            </Graph>
            <CenteredButtons>
                <button onClick={() => sortAlgorithm(array, setArray)}>Sort</button>
                <button onClick={() => setArray(randomize([...array]))}>Randomize</button>
            </CenteredButtons>
        </div>
    );
}

export default SortingGraph;