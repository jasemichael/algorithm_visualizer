import { Page, SortingGraph } from "../components";
import styled from 'styled-components';
import { bubbleSort } from "../logic";

const InsertionSortPage = () => {
    const H1 = styled.h1`
        text-align: center;
    `;
    return (
        <Page title="Insertion Sort">
            <H1>Bubble Sort</H1>
            <SortingGraph numElements={100} sortAlgorithm={bubbleSort}/>
        </Page>
    );
}

export default InsertionSortPage;