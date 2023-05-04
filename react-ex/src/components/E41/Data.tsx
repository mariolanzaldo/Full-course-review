import { useSelector } from "react-redux";
import Graph from "./Graph";

type DataProps = {
    dataSet: string,
    caption: string,
}

const Data = ({
    dataSet,
    caption
}: DataProps) => {
    const data = useSelector((state: any) => state.data[dataSet]);

    return (
        <>
            <Graph data={data.y} labels={data.label} caption={caption} />
        </>
    );
};

export default Data;