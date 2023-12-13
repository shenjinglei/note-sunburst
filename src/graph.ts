import { aEChart, rawGraph, setRawGraph } from "./utils";

import { getSetting } from "./settings";
import { CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core";
import {
    GraphChart,
    SunburstChart,
} from "echarts/charts";

import * as dagre from "@dagrejs/dagre";
import { DagreNodeValue } from "./types";
import { sunburstGraph } from "./sunburst-graph";

echarts.use([
    GraphChart,
    SunburstChart,
    CanvasRenderer
]);

interface EChartNode {
    id: string;
    label: string;
}

interface EChartEdge {
    from: string;
    to: string;
}

interface Palette {
    [key: string]: string;
}

class EnhancedGraph {
    processedGraph: dagre.graphlib.Graph<DagreNodeValue>;
    sourceNodeId = "0";
    focusGraphType: "global" | "ancestor" | "brother" | "cross" | "neighbor" = "ancestor";
    diffuseGraphType: "source" | "sink" | "tail" = "source";
    palette: Palette = {};

    resize(param: { width: number, height: number }) {
        aEChart.resize(param);
    }

    initRawGraph(nodes: EChartNode[], edges: EChartEdge[]) {
        setRawGraph(new dagre.graphlib.Graph());

        nodes.forEach((x) => rawGraph.setNode(x.id, { label: x.label, color: "normal", width: 200, height: 30, state: 0, branch: 0 }));
        edges.forEach((x) => rawGraph.setEdge(x.from, x.to));

        if (getSetting("dailynoteExcluded") === "true") {
            nodes.filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x.label))
                .forEach(x => rawGraph.removeNode(x.id));
        } else {
            nodes.filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x.label))
                .forEach(x => rawGraph.node(x.id).dailynote = true);
        }

        sunburstGraph.sourceNodes = nodes.filter(x => /^ge-moc$/.test(x.label)).flatMap(x => rawGraph.inEdges(x.id) ?? []).map(x => x.v);
        sunburstGraph.sinkNodes = nodes.filter(x => /^ge-tag$/.test(x.label)).flatMap(x => rawGraph.inEdges(x.id) ?? []).map(x => x.v);

        const nodesExclusionSetting = getSetting("nodesExclusion").split("\n");
        nodesExclusionSetting.push("^ge-moc$|^ge-tag$");

        for (const item of nodesExclusionSetting) {
            if (/^\s*$/.test(item)) continue;

            nodes.filter(x => RegExp(item).test(x.label))
                .forEach(x => rawGraph.removeNode(x.id));
        }

        sunburstGraph.sourceGraphData = undefined;
        sunburstGraph.sinkGraphData = undefined;
    }


}

export const enhancedGraph: EnhancedGraph = new EnhancedGraph();