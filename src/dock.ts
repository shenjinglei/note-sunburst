/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { enhancedGraph } from "./graph";
import { i18n, plugin, rawGraph, setEChart } from "./utils";
import { adaptHotkey, fetchSyncPost } from "siyuan";

import "./index.scss";
import { tailGraph } from "./tail-graph";
import { sunburstGraph } from "./sunburst-graph";
const DOCK_TYPE = "dock_tab";
let diffuseGraphType: "source" | "sink" | "tail" = "source";

function draw() {
    switch (diffuseGraphType) {
        case "tail":
            tailGraph.draw();
            break;
        default:
            sunburstGraph.diffuseGraphType = diffuseGraphType;
            sunburstGraph.draw();
    }
}

export function initDock() {
    const dockHtml = `<div class="fn__flex-1 fn__flex-column">
    <div class="block__icons">
        <div class="block__logo">
            <svg><use xlink:href="#iconPluginSunburst"></use></svg>
            ${i18n.pluginName}
        </div>
        <span class="fn__flex-1 fn__space"></span>
        <span id="sunburst_tail" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="${i18n.dockBtnTail}"><svg><use xlink:href="#iconAttr"></use></svg></span>
        <span id="sunburst_source" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="${i18n.dockBtnSource}"><svg><use xlink:href="#iconLight"></use></svg></span>
        <span id="sunburst_sink" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="${i18n.dockBtnSink}"><svg><use xlink:href="#iconDark"></use></svg></span>
        <span id="sunburst_refresh" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="${i18n.dockBtnRefresh}"><svg><use xlink:href="#iconRefresh"></use></svg></span>
        <span data-type="min" class="block__icon b3-tooltips b3-tooltips__sw" aria-label="Min ${adaptHotkey("⌘W")}"><svg><use xlink:href="#iconMin"></use></svg></span>
    </div>
    <div class="fn__flex-1 plugin-sample__custom-dock">
    <div id="sunburst_container" style="position:absolute;width:100%;height:100%;" ></div>
    </div>
    </div>`;

    plugin.addDock({
        config: {
            position: "RightBottom",
            size: { width: 300, height: 500 },
            icon: "iconPluginSunburst",
            title: i18n.pluginName,
        },
        data: {
            text: "sunburst-hello-world"
        },
        type: DOCK_TYPE,
        init() {
            this.element.innerHTML = dockHtml;

            document.getElementById("sunburst_refresh")!.onclick = async () => {
                await refreashGraph();

                draw();
            };

            document.getElementById("sunburst_source")!.onclick = async () => {
                if (!rawGraph) {
                    await refreashGraph();
                }

                diffuseGraphType = "source";
                draw();
            };

            document.getElementById("sunburst_sink")!.onclick = async () => {
                if (!rawGraph) {
                    await refreashGraph();
                }

                diffuseGraphType = "sink";
                draw();
            };

            document.getElementById("sunburst_tail")!.onclick = async () => {
                if (!rawGraph) {
                    await refreashGraph();
                }

                diffuseGraphType = "tail";
                draw();
            };

            setEChart();
        },
        resize() {
            const container = document.getElementById("sunburst_container")!;
            enhancedGraph.resize({
                width: container.offsetWidth,
                height: container.offsetHeight
            });
        }
    });
}


function refreashGraph() {
    return new Promise<void>((resolve) => {
        fetchSyncPost("api/graph/getGraph", {
            "conf": {
                "dailyNote": true,
                "minRefs": 0,
                "type": {
                    "blockquote": false,
                    "code": false,
                    "heading": false,
                    "list": false,
                    "listItem": false,
                    "math": false,
                    "paragraph": false,
                    "super": false,
                    "table": false,
                    "tag": false
                }
            },
            "k": ""
        }).then(
            result => {
                enhancedGraph.initRawGraph(result.data.nodes, result.data.links);
                resolve();
            }
        );
    });

}