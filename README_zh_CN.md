[English](https://github.com/shenjinglei/siyuan-plugin-graph-enhance/blob/main/README.md)

# 文档旭日图

## 开始

启用本插件后，会在左上方添加一个侧边栏按钮，打开侧边栏后点击上方的功能按钮，会在侧边栏中绘制相应的旭日图。`思源笔记用户指南`的文档旭日图如预览所示。

## 更新日志

- v0.1.0
  - 从`关系图增强`插件中独立

详细更新日志请查看[CHANGELOG](./CHANGELOG.md)

## 功能说明

### 起点/终点图

起点/终点图会从起点（即没有被其他笔记引用）或终点（即没有引用其他笔记）开始绘制旭日图。

假设起点图如下图所示，说明起始笔记有`A`和`B`两篇，其中`A`有子笔记`a1`、`a2`，其下分别还有子笔记`a11`、`a21`

![](https://z1.ax1x.com/2023/10/27/pieiS2R.png)

- 不足三层的块会被合并入“其他”块中。
- 如果绘制后的图太密集或太稀疏，可以调整设置中的阈值。调高阈值可以减少显示的块数量。

#### 手动模式

在笔记中添加`ge-moc`的引用，可以指定需要呈现在起点图中的内容。

![](https://s11.ax1x.com/2023/12/13/pifoLwj.png)

![](https://s11.ax1x.com/2023/12/13/pifoOTs.png)

绘制结果如下图，起点图显示就只显示`请从这里开始`、`数据安全`开始的文档。

![](https://s11.ax1x.com/2023/12/13/pifovYq.png)

同样地，在笔记中添加`ge-tag`的引用，可以指定需要呈现在终点图中的内容。

### 长尾图

- 展示那些链接数少的节点，那些散落在角落里的笔记。
- 连接数阈值在设置中设置，链接数的上限和下限都可以设置。

## 反馈

如果有问题、建议等可通过[github issue](https://github.com/shenjinglei/plugin-sunburst/issues)反馈。

若无法访问也可以通过[gitee issue](https://github.com/shenjinglei/plugin-sunburst/issues)反馈。

## 赞助

[胖头鱼](https://afdian.net/a/shenjinglei)

## 感谢

- 本项目使用了[Apache ECharts](https://echarts.apache.org/en/index.html)绘制图形
- 本项目为[siyuan](https://github.com/siyuan-note/siyuan)插件，已在思源集市上架。
