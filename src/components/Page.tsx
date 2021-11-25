import { ReactElement, useEffect } from "react";

interface Props {
    title: string,
    children: ReactElement | ReactElement[]
}

const Page = ({title, children}: Props) => {
    useEffect(() => {
        document.title = title;
    });

    return (
        <div>
            {children}
        </div>
    );
}

export default Page;