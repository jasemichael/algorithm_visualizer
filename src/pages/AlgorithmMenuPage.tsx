import {MenuItem, Page, Menu} from '../components';
import { sortingImage, bstImage, graphImage } from '../assets';

const AlgorithmMenuPage = () => {

    return (
        <Page title="Algorithms">
            <Menu header="Algorithm Categories">
                <MenuItem title="Sorting" imageSrc={sortingImage} imageAlt="Sorting algorithms" redirectTo="/sorting"/>
                <MenuItem title="Binary Search Tree" imageSrc={bstImage} imageAlt="BST algorithms" redirectTo="/bst"/>
                <MenuItem title="Graphs" imageSrc={graphImage} imageAlt="Graph algorithms" redirectTo="/graph"/>
            </Menu>
        </Page>
    );
}

export default AlgorithmMenuPage;