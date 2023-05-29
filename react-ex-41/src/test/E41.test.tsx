import { render, screen } from '@testing-library/react';
import "../../setupTests"
import Graph from "../components/Graph";
import "jest-canvas-mock";
import { expectSaga } from "redux-saga-test-plan";
import rootSaga from "../redux/rootSaga";
import dataReducer from '../redux/slices/dataSlice';

describe("Line chart tests", () => {
    test("Line graph", () => {

        const data = [1, 2, 3, 4];
        const labels = ["April", "May", "June", "July"];
        const canvasMock = jest
        .spyOn(window.HTMLCanvasElement.prototype, "getContext")
        .mockReturnValue({
          beginPath: jest.fn(),
          moveTo: jest.fn(),
          lineTo: jest.fn(),
          stroke: jest.fn(),
        } as any);

        render(<Graph data={data} caption="Caption" labels={labels} />);
        

        expect(canvasMock).toHaveBeenCalled();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});

describe("Checking the sagas", () => {
    test("Checking init state", () => {
        return expectSaga(rootSaga)
            .withReducer(dataReducer)
            .run()
            .then((result) => {
                console.log(result.storeState);
                expect(result.storeState).toEqual({
                    '1': {
                        label: [],
                        y: []
                    }
                });
            });
    });
});