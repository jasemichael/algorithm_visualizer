import { Page, Menu, MenuItem } from '../components';
import { 
    bubbleSortImage, 
    insertionSortImage, 
    selectionSortImage, 
    mergeSortImage,
    shellSortImage,
    quickSortImage
} from '../assets';
const SortingAlgorithmsPage = () => {
    return (
        <Page title='Sorting Algorithms'>
            <Menu header="Sorting Algorithms">
                <MenuItem title="Bubble Sort" imageSrc={bubbleSortImage} imageAlt="Bubble Sort" redirectTo="bubble" />
                <MenuItem title="Insertion Sort" imageSrc={insertionSortImage} imageAlt="Insertion Sort" redirectTo="insertion" />
                <MenuItem title="Selection Sort" imageSrc={selectionSortImage} imageAlt="Selection Sort" redirectTo="selection" />
                <MenuItem title="Merge Sort" imageSrc={mergeSortImage} imageAlt="Merge Sort" redirectTo="merge" />
                <MenuItem title="Shell Sort" imageSrc={shellSortImage} imageAlt="Shell Sort" redirectTo="shell" />
                <MenuItem title="Quick Sort" imageSrc={quickSortImage} imageAlt="Quick Sort" redirectTo="quick" />
            </Menu>
        </Page>
    )
}

export default SortingAlgorithmsPage;