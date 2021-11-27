import { Page, SortingGraph } from "../components";
import styled from 'styled-components';
import { selectionSort } from "../logic";

const InsertionSortPage = () => {
    const H1 = styled.h1`
        text-align: center;
    `;
    return (
        <Page title="Selection Sort">
            <H1>Selection Sort</H1>
            <SortingGraph numElements={100} sortAlgorithm={selectionSort}/>
        </Page>
    );
}

export default InsertionSortPage;