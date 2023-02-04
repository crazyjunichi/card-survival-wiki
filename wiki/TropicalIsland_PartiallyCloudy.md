# 多云  
> 天上开始有云。运气好的话，可能会下雨。  
<br>  
> 了解岛上的天气对生存至关重要。<br>晴天有较高的<b>气温和日照强度</b>，而阴天则相反。<br><br><b>雨水</b>是饮用水的主要来源，所以每当下雨时都应该尽可能多收集雨水。<b>椰子壳</b>和其他<b>容器</b>都应该装满至最大容量。<br><br>岛上有3种<b>季节</b>，每种持续30天左右。第一种是<b>均衡季</b>，有雨天和晴天。第二种是<b>雨季</b>，有持续的降雨和危险的<b>暴风雨</b>，可能对沿海地区造成破坏。第三个是<b>旱季</b>，温度较高且几乎没有降雨。再之后循环往复。  
  
  多云  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**标签：**	[“天气”](tag_Weather.md)<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+32<br>[阳光强度](SunStrength.md)+4<br>[光亮](Light.md)-5  |  <img decoding="async" src="Sprite/WeatherPartiallyCloudy_0.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[风向有利](OpenSea_Favourable.md)  |    
[风向不利](OpenSea_UnFavourable.md)  |    
[晴朗](TropicalIsland_Clear.md)  |  转化  
[阴天](TropicalIsland_Cloudy.md)  |  转化  
[大雨](TropicalIsland_HeavyRain.md)  |  转化  
[小雨](TropicalIsland_LightRainStart.md)  |  转化  
[多云](TropicalIsland_PartiallyCloudy.md)  |  转化  
[暴风雨](TropicalIsland_Storm.md)  |  转化  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：16  |  每15分钟-1<br>最多需要：4小时  |  ** 到达0时： **<br>** [Clear]  **<br>  [晴朗](TropicalIsland_Clear.md)(+1)<br>基础权重：550<br>** [Partially Cloudy]  **<br>  [多云](TropicalIsland_PartiallyCloudy.md)(+1)<br>基础权重：500<li>[雨水计数器](RainCounter.md)为0～700时权重+0～+200</li><li>[季节](Seasons.md)为2881～5760时权重+400</li><li>[季节](Seasons.md)为5761～8640时权重-600</li><br>** [Cloudy]  **<br>  [阴天](TropicalIsland_Cloudy.md)(+1)<br>基础权重：100<li>[雨水计数器](RainCounter.md)为500～700时权重+0～+300</li><li>[季节](Seasons.md)为2881～5760时权重+600</li><li>[季节](Seasons.md)为5761～8640时权重-350</li>  
## 状态触发  
名称  |  条件  |  变化  
----  |  ----  |  ----  
  |  [航行](Sailed.md): 1-1  |  → [风向有利](OpenSea_Favourable.md)  


<script>document.title="多云 - 卡牌生存百科 Card Survival Wiki";</script>