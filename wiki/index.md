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


<div id="gitalk-container"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
<script>
        let interval = setInterval(function () {
            if (typeof (Gitalk) != 'undefined') {
                  const gitalk = new Gitalk({
                  clientID: 'b53ea9bbde439121bb48',
                  clientSecret: '228aa9b976e9800ccc316f8b0ea275af1d9409cc',
                  repo: 'card-survival-wiki',      // The repository of store comments,
                  owner: 'crazyjunichi',
                  admin: ['crazyjunichi'],
                  id: 'test_index',      // Ensure uniqueness and length less than 50
                  distractionFreeMode: false  // Facebook-like distraction free mode
                })

                gitalk.render('gitalk-container')
                clearInterval(interval)
            }
        }, 100);
</script>
