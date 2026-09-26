![GitHub release](https://img.shields.io/github/v/release/shenjinglei/note-sunburst)
![GitHub Release Date](https://img.shields.io/github/release-date/shenjinglei/note-sunburst)
![License](https://img.shields.io/badge/license-AGPL--3.0-blue)
![Last commit](https://img.shields.io/github/last-commit/shenjinglei/note-sunburst)
![Repo size](https://img.shields.io/github/repo-size/shenjinglei/note-sunburst)
![Downloads](https://img.shields.io/github/downloads/shenjinglei/note-sunburst/total)

[English](https://github.com/shenjinglei/note-sunburst/blob/main/README.md)

# 文档旭日图

一款为思源笔记提供增强图形可视化功能的插件，通过旭日图和长尾图帮助用户更好地理解文档间的关联关系。

## 🚀 快速开始

启用本插件后，会在思源笔记右下角添加一个侧边栏按钮。打开侧边栏后，点击上方的功能按钮即可在侧边栏中绘制相应的可视化图表。

## 📋 功能特性

### 🌅 起点/终点图

起点/终点图从起点（没有被其他笔记引用的文档）或终点（没有引用其他笔记的文档）开始绘制旭日图，帮助您快速了解文档的知识结构。

#### 工作原理

假设起点图如下图所示，说明起始笔记有`A`和`B`两篇，其中`A`有子笔记`a1`、`a2`，其下分别还有子笔记`a11`、`a21`：

![](https://z1.ax1x.com/2023/10/27/pieiS2R.png)

#### 智能聚合

- 不足三层的块会被自动合并入"其他"块中，保持图表的清晰性
- 可通过设置调整阈值来控制图表的密集程度
- 调高阈值可以减少显示的块数量，让图表更加简洁

#### 🎯 手动模式

在笔记中添加`ge-moc`引用，可以指定需要呈现在起点图中的内容：

![](https://s11.ax1x.com/2023/12/13/pifoLwj.png)

![](https://s11.ax1x.com/2023/12/13/pifoOTs.png)

绘制结果如下图，起点图将只显示从`请从这里开始`、`数据安全`开始的文档：

![](https://s11.ax1x.com/2023/12/13/pifovYq.png)

同样地，在笔记中添加`ge-tag`引用，可以指定需要呈现在终点图中的内容。

### 🌊 长尾图

- 专门展示那些链接数较少的节点，发现散落在角落里的笔记
- 可通过设置连接数阈值来过滤显示内容
- 支持设置链接数的上限和下限，灵活控制显示范围

## ⚙️ 配置选项

插件提供丰富的配置选项：

- **日常笔记排除**：可选择是否在图表中显示日常笔记
- **起点/终点阈值**：控制图表中显示的节点数量
- **长尾图阈值**：设置连接数的上下限范围
- **节点排除规则**：支持正则表达式自定义排除规则

## 📝 更新日志

- **v0.1.2** - 更新文档

详细更新日志请查看[CHANGELOG](https://github.com/shenjinglei/note-sunburst/blob/main/CHANGELOG.md)

## 🤝 反馈与建议

如果您遇到问题或有改进建议，欢迎通过以下方式反馈：

- [GitHub Issues](https://github.com/shenjinglei/note-sunburst/issues)

## 💖 赞助支持

如果您觉得这个插件对您有帮助，欢迎赞助支持项目开发：

[胖头鱼](https://afdian.com/a/shenjinglei)

## 🙏 致谢

- 本项目使用了 [Apache ECharts](https://echarts.apache.org/zh/index.html) 进行图形绘制
- 本项目为 [思源笔记](https://github.com/siyuan-note/siyuan) 插件，已在思源集市上架
- 感谢所有贡献者和用户的支持与反馈
