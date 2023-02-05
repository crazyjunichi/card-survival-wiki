<!-- [gimmick:theme](flatly) -->

# 卡牌生存百科

[游戏]()

-   [游戏更新公告](news_update.md)
-   [成就](ach.md)

[角色]()

-   [可选角色](character_preset.md)
-   [角色特质](pk.md)

[物体]()

-   [普通物品](object.md)
-   [不可携带](unportable.md)
-   [区域物体](building.md)
-   [标签](tag.md)

[地点]()

-   [区域](area.md)

[蓝图](blueprint.md)

[机制]()

-   [状态](stat.md)
-   [事件](event.md)
-   [触发器](trigger_list.md)

[其他]()

-   [天气](weather.md)
-   [液体](liquid.md)
-   [伤口](wound.md)
-   [休息](time_skip.md)

<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.1/themes/smoothness/jquery-ui.css" />
<link rel="stylesheet" href="./bootstrap.min.css" />
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>

<script>
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "./custom.js";
    document.body.appendChild(script);
</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RE3Z6GM8B9"></script>
<script>
  if (window.location.href.indexOf("localhost")<0){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-RE3Z6GM8B9',{'page_path': location.pathname + location.hash });
  }
</script>

<style>
  .utterances {
    margin-left:0;
    margin-top:50px;
    margin-bottom:50px;
  }
</style>
