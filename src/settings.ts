import { i18n, plugin, STORAGE_NAME } from "./utils";
import { Setting, showMessage } from "siyuan";

export function getSetting(settingName: string): string {
    return plugin.data[STORAGE_NAME][settingName];
}

export function settingInit() {
    plugin.setting = new Setting({
        confirmCallback: () => {
            if (!/^[0-9]+$/.test(sourceThresholdElement.value)) {
                showMessage(
                    i18n.checkSourceThresholdErrorMsg,
                    3000,
                    "error"
                );
                return;
            }
            if (!/^[0-9]+$/.test(sinkThresholdElement.value)) {
                showMessage(
                    i18n.checkSinkThresholdErrorMsg,
                    3000,
                    "error"
                );
                return;
            }
            plugin.saveData(STORAGE_NAME,
                {
                    dailynoteExcluded: dailynoteExcludedElement.value,
                    sourceThreshold: sourceThresholdElement.value,
                    sinkThreshold: sinkThresholdElement.value,
                    nodesExclusion: nodesExclusionElement.value,
                    tailThreshold: tailThresholdElement.value
                });

        }
    });



    const dailynoteExcludedElement = document.createElement("select");
    dailynoteExcludedElement.id = "dailynoteExcluded";
    dailynoteExcludedElement.add(new Option(i18n.yes, "true"));
    dailynoteExcludedElement.add(new Option(i18n.no, "false"));
    plugin.setting.addItem({
        title: i18n.settingDailynoteExcluded,
        createActionElement: () => {
            dailynoteExcludedElement.value = plugin.data[STORAGE_NAME].dailynoteExcluded;
            return dailynoteExcludedElement;
        },
    });



    const sourceThresholdElement = document.createElement("input");
    sourceThresholdElement.id = "sourceThreshold";
    sourceThresholdElement.placeholder = i18n.pleaseInputNumber;
    sourceThresholdElement.className = "b3-text-field";
    plugin.setting.addItem({
        title: i18n.settingSourceThreshold,
        createActionElement: () => {
            sourceThresholdElement.value = plugin.data[STORAGE_NAME].sourceThreshold;
            return sourceThresholdElement;
        },
    });

    const sinkThresholdElement = document.createElement("input");
    sinkThresholdElement.id = "sinkThreshold";
    sinkThresholdElement.placeholder = i18n.pleaseInputNumber;
    sinkThresholdElement.className = "b3-text-field";
    plugin.setting.addItem({
        title: i18n.settingSinkThreshold,
        createActionElement: () => {
            sinkThresholdElement.value = plugin.data[STORAGE_NAME].sinkThreshold;
            return sinkThresholdElement;
        },
    });

    const tailThresholdElement = document.createElement("input");
    tailThresholdElement.id = "tailThreshold";
    tailThresholdElement.placeholder = i18n.pleaseInput;
    tailThresholdElement.className = "b3-text-field";
    plugin.setting.addItem({
        title: i18n.tailThresholdTitle,
        description: i18n.tailThresholdDescription,
        createActionElement: () => {
            tailThresholdElement.value = plugin.data[STORAGE_NAME].tailThreshold;
            return tailThresholdElement;
        },
    });


    const nodesExclusionElement = document.createElement("textarea");
    nodesExclusionElement.id = "nodesExclusion";
    nodesExclusionElement.placeholder = i18n.pleaseInput;
    nodesExclusionElement.className = "b3-text-field fn__block";
    plugin.setting.addItem({
        title: i18n.nodesExclusionTitle,
        description: i18n.nodesExclusionDescription,
        createActionElement: () => {
            nodesExclusionElement.value = plugin.data[STORAGE_NAME].nodesExclusion;
            return nodesExclusionElement;
        },
    });
}
