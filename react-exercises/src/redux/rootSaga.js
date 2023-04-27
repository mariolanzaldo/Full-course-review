import { call, put, select, take } from "redux-saga/effects";
import { initData, setData } from "./slices/dataSlice";
import subscriber from "../components/E41.js/utils/subscriber";

export default function* rootSaga() {
    const dataSet = "1";
    let counter = 1;

    const channel = yield call(subscriber);

    yield put(initData({ dataSet }));

    while (true) {
        const incomingData = yield take(channel);
        let newLabel;

        newLabel = `${counter}`;

        const oldData = yield select((state) => state.data[dataSet]);

        let newData = { label: [...oldData.label, newLabel], y: [...oldData.y, incomingData] };

        if (oldData.label.length >= 100) {
            newData = {
                label: [...oldData.label.slice(1), newLabel],
                y: [...oldData.y.slice(1), incomingData],
            };
        }

        counter++;

        yield put(setData({ dataSet, data: newData }));
    }
}