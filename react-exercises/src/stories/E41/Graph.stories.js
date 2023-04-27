import Graph from '../../components/E41.js/Graph';

export default {
    title: 'Graph',
    component: Graph,
};

export const GraphTemplate = (args) => <Graph {...args} />

export const SimpleLineChart = GraphTemplate.bind({});

SimpleLineChart.args = {
    caption: "Simple data",
    data: [250, 600, -100, 300, -500],
    labels: ['April', 'May', 'June', 'July', 'August'],
};

export const FullPoints = GraphTemplate.bind({});

const randomData = Array.from({ length: 100 }, () => Math.floor((Math.random() - 0.5) * 2 * 500));
const label = randomData.map((_, index) => String(index + 1));

FullPoints.args = {
    caption: 'Full random data',
    data: randomData,
    labels: label,
};