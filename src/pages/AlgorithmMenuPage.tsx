import AlgorithmMenuItem from "../components/AlgorithmMenuItem";
import sortingImage from "../assets/sorting_algorithm.jpg";

const AlgorithmMenuPage = () => {
    
    return (
        <div>
            <AlgorithmMenuItem title="Sorting" imageSrc={sortingImage} imageAlt="Sorting algorithm"/>
        </div>
    );
}

export default AlgorithmMenuPage;