# 丛林小径  
> 它将引我前往丛林。<br><br><b>（只有手牌可以带走）</b>  
<br>  
> 丛林位于岛屿中心。它连接着岛屿的西部和南部海岸，同时连接东部的草原。<br>丛林植被茂盛，在这里你可以找到多种有用的植物，例如<b>大叶仙茅、卡瓦胡椒、香蕉、参薯还有马勃菌</b><br><br>如果你考虑在此长期逗留并且怕被虫咬，请做好蚊虫防护。  
  
  丛林小径  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[湿地(环境)](Env_Wetlands.md)  |  <img decoding="async" src="Sprite/JunglePath.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[丛林(事件)](Event_JungleFound.md)  |  继续  
[丛林边缘(事件)](Event_JungleFoundFromWetlands.md)  |  继续  
[前往湿地(丛林)](Path_JungleToWetlands.md)  |  前往  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往<br>[腿部动作](LegAction.md)<br>[旅行动作](TravelAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 获得： **<br>** [Shore Path] **<br>  [丛林(环境)](Env_Jungle.md)(+1)<br>  [前往湿地(丛林)](Path_JungleToWetlands.md)(+1)<br>基础权重：1<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-6  
