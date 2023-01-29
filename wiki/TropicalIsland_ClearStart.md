# 晴朗  
> 晴空万里。  
<br>  
> 了解岛上的天气对生存至关重要。<br>晴天有较高的<b>气温和日照强度</b>，而阴天则相反。<br><br><b>雨水</b>是饮用水的主要来源，所以每当下雨时都应该尽可能多收集雨水。<b>椰子壳</b>和其他<b>容器</b>都应该装满至最大容量。<br><br>岛上有3种<b>季节</b>，每种持续30天左右。第一种是<b>均衡季</b>，有雨天和晴天。第二种是<b>雨季</b>，有持续的降雨和危险的<b>暴风雨</b>，可能对沿海地区造成破坏。第三个是<b>旱季</b>，温度较高且几乎没有降雨。再之后循环往复。  
  
  晴朗  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**标签：**	[“天气”](tag_Weather.md), [“开阔的天空”](tag_OpenSky.md)<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+35<br>[阳光强度](SunStrength.md)+6<br>[降水值](RainValue.md)  |  <img decoding="async" src="Sprite/WeatherClear_0.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[大雨](TropicalIsland_HeavyRainLong.md)  |  转化  
[大雨](TropicalIsland_HeavyRainStart.md)  |  转化  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：48  |  每15分钟-1<br>最多需要：12小时  |  ** 到达0时： **<br>** [Cloudy] **<br>  [阴天](TropicalIsland_CloudyStart.md)(+1)<br>基础权重：1<br><br>→ [平静](OpenSea_Calm.md)  
## 触发器  
名称  |  条件  |  变化  
----  |  ----  |  ----  
  |  [航行](Sailed.md): 1-1  |  → [平静](OpenSea_Calm.md)  
