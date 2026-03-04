![GitHub release](https://img.shields.io/github/v/release/shenjinglei/note-sunburst)
![GitHub Release Date](https://img.shields.io/github/release-date/shenjinglei/note-sunburst)
![License](https://img.shields.io/badge/license-AGPL--3.0-blue)
![Last commit](https://img.shields.io/github/last-commit/shenjinglei/note-sunburst)
![Repo size](https://img.shields.io/github/repo-size/shenjinglei/note-sunburst)
![Downloads](https://img.shields.io/github/downloads/shenjinglei/note-sunburst/total)

[中文](https://github.com/shenjinglei/note-sunburst/blob/main/README_zh_CN.md)

# Note Sunburst

An enhanced visualization plugin for SiYuan notes that provides sunburst charts and tail graphs to help users better understand document relationships.

## 🚀 Quick Start

After enabling this plugin, a sidebar button will be added in the bottom right corner of SiYuan. Open the sidebar and click the function buttons at the top to draw corresponding visualization charts.

## 📋 Features

### 🌅 Source/Sink Graph

The source/sink graph draws sunburst charts starting from source nodes (documents not referenced by other notes) or sink nodes (documents that don't reference other notes), helping you quickly understand the knowledge structure of your documents.

#### How It Works

Assume the source graph is as shown below, indicating that there are two starting notes `A` and `B`, where `A` has sub-notes `a1`, `a2`, and each has sub-notes `a11`, `a21` respectively:

![](https://z1.ax1x.com/2023/10/27/pieiS2R.png)

#### Smart Aggregation

- Blocks with less than three levels are automatically merged into an "Other" block to maintain chart clarity
- Adjust thresholds through settings to control chart density
- Increasing thresholds reduces the number of displayed blocks, making the chart more concise

#### 🎯 Manual Mode

Add `ge-moc` references in notes to specify content to be displayed in the source graph:

![](https://s11.ax1x.com/2023/12/13/pifoLwj.png)

![](https://s11.ax1x.com/2023/12/13/pifoOTs.png)

The result is shown below, where the source graph only displays documents starting from "请从这里开始" and "数据安全":

![](https://s11.ax1x.com/2023/12/13/pifovYq.png)

Similarly, add `ge-tag` references in notes to specify content to be displayed in the sink graph.

### 🌊 Tail Graph

- Specifically displays nodes with fewer connections, discovering notes scattered in corners
- Filter displayed content by setting connection count thresholds
- Support setting upper and lower limits for connection counts for flexible display control

## ⚙️ Configuration Options

The plugin provides rich configuration options:

- **Daily Note Exclusion**: Choose whether to display daily notes in charts
- **Source/Sink Thresholds**: Control the number of nodes displayed in charts
- **Tail Graph Thresholds**: Set upper and lower limits for connection counts
- **Node Exclusion Rules**: Support custom exclusion rules using regular expressions

## 📝 Changelog

- **v0.1.2** - Documentation enhancement

For detailed changelog, see [CHANGELOG](https://github.com/shenjinglei/note-sunburst/blob/main/CHANGELOG.md)

## 🤝 Feedback & Suggestions

If you encounter issues or have improvement suggestions, feel free to provide feedback through:

- [GitHub Issues](https://github.com/shenjinglei/note-sunburst/issues)

## 💖 Sponsorship

If you find this plugin helpful, welcome to sponsor and support project development:

[胖头鱼](https://afdian.com/a/shenjinglei)

## 🙏 Acknowledgments

- This project uses [Apache ECharts](https://echarts.apache.org/en/index.html) for chart rendering
- This project is a [SiYuan](https://github.com/siyuan-note/siyuan) plugin, available in SiYuan Marketplace
- Thanks to all contributors and users for their support and feedback
