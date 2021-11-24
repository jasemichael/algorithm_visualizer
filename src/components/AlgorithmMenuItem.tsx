interface Props {
    title: string,
    imageSrc: string, 
    imageAlt: string
}

const AlgorithmMenuItem = ({title, imageSrc, imageAlt}: Props) => {
    return (
        <div>
            <p>{title}</p>
            <img src={imageSrc} alt={imageAlt} />
        </div>
    );
}

export default AlgorithmMenuItem;