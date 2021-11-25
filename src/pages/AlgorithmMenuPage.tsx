import {AlgorithmMenuItem} from '../components';
import sortingImage from "../assets/sorting_algorithm.jpg";
import bstImage from "../assets/bst_algorithm.png";
import graphImage from "../assets/graph_algorithm.png";
import styled from "styled-components";

const AlgorithmMenuPage = () => {
    const H1 = styled.h1`
        text-align: center;
    `;

    const Algorithms = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 2em;
        width: 90%;
        margin: auto;
    `;


    return (
        <div>
            <H1>Algorithms</H1>
            <Algorithms>
                <AlgorithmMenuItem title="Sorting" imageSrc={sortingImage} imageAlt="Sorting algorithms" redirectTo="/sorting"/>
                <AlgorithmMenuItem title="Binary Search Tree" imageSrc={bstImage} imageAlt="BST algorithms" redirectTo="/bst"/>
                <AlgorithmMenuItem title="Graphs" imageSrc={graphImage} imageAlt="Graph algorithms" redirectTo="/graph"/>
                <AlgorithmMenuItem title="Sorting" imageSrc={sortingImage} imageAlt="Sorting algorithms" redirectTo="/sorting"/>
                <AlgorithmMenuItem title="Binary Search Tree" imageSrc={bstImage} imageAlt="BST algorithms" redirectTo="/bst"/>
                <AlgorithmMenuItem title="Graphs" imageSrc={graphImage} imageAlt="Graph algorithms" redirectTo="/graph"/>
            </Algorithms>
        </div>
    );
}

export default AlgorithmMenuPage;