import { Page, SortingGraph } from "../components";
import styled from 'styled-components';
import { mergeSort } from "../logic";

const MergeSortPage = () => {
    const H1 = styled.h1`
        text-align: center;
    `;
    return (
        <Page title="Merge Sort">
            <H1>Merge Sort</H1>
            <SortingGraph numElements={100} sortAlgorithm={mergeSort}/>
        </Page>
    );
}

export default MergeSortPage;