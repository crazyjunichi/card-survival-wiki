# 卡牌生存百科

![](image/header_schinese.jpeg)

持续建设中，请随意浏览

** 警告：知道的越多，乐趣就越少 **

<br>

[Wiki 更新日志](wiki_update.md)

---

#### 常用数据查询

-   食物体脂查询：[胃](Stomach.md#可被以下操作改变)
-   容器容量查询：[储物容器](tag_Bag.md)， [储水容器](tag_WaterContainer.md)

<!-- <iframe name="nrd_studio_embed" frameborder="0" style="display:block;width:800px; height:600px;" src="https://nrdstudio.cn/view/embed/2ed0dffbd7a54f31526c65ca2b89088d"></iframe> -->


<div id="comment"></div>
<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
<script>
        let interval = setInterval(function () {
            if (typeof (Gitment) != 'undefined') {
                var gitment = new Gitment({
                    id: 'test_index', // 可选。默认为 location.href
                    owner: 'crazyjunichi',
                    repo: 'card-survival-wiki',
                    oauth: {
                      client_id: 'b53ea9bbde439121bb48',
                      client_secret: '228aa9b976e9800ccc316f8b0ea275af1d9409cc ',
                    },
                  });
                gitment.render('comment')
                clearInterval(interval)
            }
        }, 100);
</script>
