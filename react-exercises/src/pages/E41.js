import { Suspense } from "react";
import Data from "../components/E41.js/Data";

const E41 = () => {

    return (
        <>
            <Suspense fallback="loading">
                <Data dataSet="1" caption={"Data set 1"} />
            </Suspense>
        </>
    );
};

export default E41;