"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const g6_1 = require("@antv/g6");
const data = {
    // 点集
    nodes: [
        {
            id: 'node1',
            x: 100,
            y: 200,
        },
        {
            id: 'node2',
            x: 300,
            y: 200,
        },
    ],
    // 边集
    edges: [
        {
            source: 'node1',
            target: 'node2',
        },
    ],
};
const graph = new g6_1.default.Graph({
    container: 'mountNode',
    width: 800,
    height: 500,
});
graph.data(data); // 读取 Step 2 中的数据源到图上
graph.render(); // 渲染图
//# sourceMappingURL=demo.js.map