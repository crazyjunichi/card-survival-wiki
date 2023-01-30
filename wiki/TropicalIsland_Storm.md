# 暴风雨  
> 我应当远离海岸，并找个躲雨处。  
<br>  
> 了解岛上的天气对生存至关重要。<br>晴天有较高的<b>气温和日照强度</b>，而阴天则相反。<br><br><b>雨水</b>是饮用水的主要来源，所以每当下雨时都应该尽可能多收集雨水。<b>椰子壳</b>和其他<b>容器</b>都应该装满至最大容量。<br><br>岛上有3种<b>季节</b>，每种持续30天左右。第一种是<b>均衡季</b>，有雨天和晴天。第二种是<b>雨季</b>，有持续的降雨和危险的<b>暴风雨</b>，可能对沿海地区造成破坏。第三个是<b>旱季</b>，温度较高且几乎没有降雨。再之后循环往复。  
  
  暴风雨  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**标签：**	[“天气”](tag_Weather.md)<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+20<br>[阳光强度](SunStrength.md)<br>[降水值](RainValue.md)+5<br>[雨水计数器](RainCounter.md)加成-16～-8<br>[光亮](Light.md)-10<br>[蚊虫数量](BugPopulation.md)-3<br>[沙滩风暴](Storm_Beach.md)加成+1<br>[海湾风暴](Storm_Bay.md)加成+1<br>[红树林风暴](Storm_Mangroves.md)加成+1<br>[岩滩风暴](Storm_Rocks.md)加成+1<br>[丛林边缘风暴](Storm_Outskirts.md)加成+1<br>[荒芜沙滩风暴](Storm_DesolateBeach.md)加成+1<br>[暴风雨次数](StormCounter.md)加成+2  |  <img decoding="async" src="Sprite/WeatherStorm_0.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[前有风暴](OpenSea_StormFront.md)  |    
[大雨](TropicalIsland_HeavyRain.md)  |  转化  
[暴风雨](TropicalIsland_Storm.md)  |  转化  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：24<br>最大：24  |  每15分钟-1<br>最多需要：6小时  |  ** 到达0时： **<br>** [Partially Cloudy] **<br>  [多云](TropicalIsland_PartiallyCloudy.md)(+1)<br>基础权重：200<br>- [雨水计数器](RainCounter.md)为0～700时权重0～-200<br>- [季节](Seasons.md)为2881～5760时权重-100<br>- [季节](Seasons.md)为5761～8640时权重+100<br><br>** [Light Rain] **<br>  [小雨](TropicalIsland_LightRain.md)(+1)<br>基础权重：300<br>- [雨水计数器](RainCounter.md)为0～700时权重0～+200<br>- [季节](Seasons.md)为2881～5760时权重+100<br>- [季节](Seasons.md)为5761～8640时权重-100<br>- [阻止抽到雨天](RainKiller.md)为+1时权重-9999<br><br>** [Heavy Rain] **<br>  [暴风雨](TropicalIsland_Storm.md)(+1)<br>基础权重：10<br>- [雨水计数器](RainCounter.md)为0～700时权重0～+300<br>- [季节](Seasons.md)为2881～5760时权重+150<br>- [季节](Seasons.md)为5761～8640时权重-150<br>- [阻止抽到雨天](RainKiller.md)为+1时权重-9999<br><br>** [Clear] **<br>  [晴朗](TropicalIsland_Clear.md)(+1)<br>基础权重：300<br>- [雨水计数器](RainCounter.md)为0～700时权重0～-300<br>- [季节](Seasons.md)为2881～5760时权重-150<br>- [季节](Seasons.md)为5761～8640时权重+150<br><br>→ [前有风暴](OpenSea_StormFront.md)  
## 状态触发  
名称  |  条件  |  变化  
----  |  ----  |  ----  
  |  [航行](Sailed.md): 1-1  |  → [前有风暴](OpenSea_StormFront.md)  
  |  [航行](Sailed.md): 1-1  |  → [前有风暴](OpenSea_StormFront.md)  
