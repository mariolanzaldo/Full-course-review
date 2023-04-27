import "jest-canvas-mock";
import { render } from '@testing-library/react';
import Graph from "../../components/E41.js/Graph";
import { expectSaga } from "redux-saga-test-plan";
import rootSaga from "../../redux/rootSaga";
import dataReducer from '../../redux/slices/dataSlice';

describe("Line chart tests", () => {
    test("Line graph", () => {

        const data = [1, 2, 3, 4];
        const labels = ["April", "May", "June", "July"];
        const canvasMock = jest.spyOn(window.HTMLCanvasElement.prototype, "getContext")
            .mockReturnValue({
                beginPath: jest.fn(),
                arc: jest.fn(),
                moveTo: jest.fn(),
                lineTo: jest.fn(),
                rect: jest.fn(),
                closePath: jest.fn(),
            });

        const { getByRole } = render(<Graph data={data} caption="Caption" labels={labels} />);

        expect(canvasMock).toHaveBeenCalled();
        expect(getByRole('img')).toBeInTheDocument();
    });
});

describe("Checking the sagas", () => {
    test("Checking init state", () => {
        return expectSaga(rootSaga)
            .withReducer(dataReducer)
            .run()
            .then((result) => {
                expect(result.storeState).toEqual({
                    '1': {
                        label: [],
                        y: []
                    }
                });
            });
    });
});