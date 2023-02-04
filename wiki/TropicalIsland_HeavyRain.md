# 大雨  
> 雨下得很大。我得确保我有个遮雨的地方，并为接下来的几天存储一些水。  
<br>  
> 了解岛上的天气对生存至关重要。<br>晴天有较高的<b>气温和日照强度</b>，而阴天则相反。<br><br><b>雨水</b>是饮用水的主要来源，所以每当下雨时都应该尽可能多收集雨水。<b>椰子壳</b>和其他<b>容器</b>都应该装满至最大容量。<br><br>岛上有3种<b>季节</b>，每种持续30天左右。第一种是<b>均衡季</b>，有雨天和晴天。第二种是<b>雨季</b>，有持续的降雨和危险的<b>暴风雨</b>，可能对沿海地区造成破坏。第三个是<b>旱季</b>，温度较高且几乎没有降雨。再之后循环往复。  
  
  大雨  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**标签：**	[“天气”](tag_Weather.md)<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+26<br>[阳光强度](SunStrength.md)<br>[降水值](RainValue.md)+5<br>[雨水计数器](RainCounter.md)加成-12～-6<br>[光亮](Light.md)-10<br>[蚊虫数量](BugPopulation.md)-3  |  <img decoding="async" src="Sprite/WeatherHeavyRain_0.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[后有风暴](OpenSea_StormBehind.md)  |    
[阴天](TropicalIsland_Cloudy.md)  |  转化  
[大雨](TropicalIsland_HeavyRain.md)  |  转化  
[小雨](TropicalIsland_LightRain.md)  |  转化  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：16<br>最大：16  |  每15分钟-1<br>最多需要：4小时  |  ** 到达0时： **<br>** [Partially Cloudy]  **<br>  [多云](TropicalIsland_PartiallyCloudy.md)(+1)<br>基础权重：200<li>[雨水计数器](RainCounter.md)为0～700时权重+0～-200</li><li>[季节](Seasons.md)为2881～5760时权重-100</li><li>[季节](Seasons.md)为5761～8640时权重+100</li><br>** [Light Rain]  **<br>  [小雨](TropicalIsland_LightRain.md)(+1)<br>基础权重：10<li>[雨水计数器](RainCounter.md)为0～700时权重+0～+200</li><li>[季节](Seasons.md)为2881～5760时权重+75</li><li>[季节](Seasons.md)为5761～8640时权重-150</li><li>[阻止抽到雨天](RainKiller.md)为1时权重-9999</li><br>** [Heavy Rain]  **<br>  [大雨](TropicalIsland_HeavyRain.md)(+1)<br>基础权重：10<li>[雨水计数器](RainCounter.md)为0～700时权重+0～+300</li><li>[季节](Seasons.md)为2881～5760时权重+250</li><li>[季节](Seasons.md)为5761～8640时权重-250</li><li>[阻止抽到雨天](RainKiller.md)为1时权重-9999</li><br>** [Storm]  **<br>  [暴风雨](TropicalIsland_Storm.md)(+1)<br>基础权重：10<li>[雨水计数器](RainCounter.md)为0～700时权重+0～+300</li><li>[季节](Seasons.md)为2881～5760时权重+300</li><li>[季节](Seasons.md)为5761～8640时权重-275</li><li>[阻止抽到雨天](RainKiller.md)为1时权重-9999</li><li>[计数](Counter.md)为0～2880时权重-9999</li><br>** [Clear]  **<br>  [晴朗](TropicalIsland_Clear.md)(+1)<br>基础权重：300<li>[雨水计数器](RainCounter.md)为0～700时权重+0～-300</li><li>[季节](Seasons.md)为2881～5760时权重-150</li><li>[季节](Seasons.md)为5761～8640时权重+250</li><br>** 自身 **<br>→消失  
## 状态触发  
名称  |  条件  |  变化  
----  |  ----  |  ----  
  |  [航行](Sailed.md): 1-1  |  → [前有风暴](OpenSea_StormFront.md)  
  |  [航行](Sailed.md): 1-1  |  → [前有风暴](OpenSea_StormFront.md)  


<script>document.title="大雨 - 卡牌生存百科 Card Survival Wiki";</script>