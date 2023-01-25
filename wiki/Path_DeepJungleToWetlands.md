# 湿地  
> 前往丛林湿地。<br><br><b>（只有手牌可以带走）</b>  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[丛林深处](DeepJungle.md)<br><br>** 只允许存在一个 **  |  ![](Sprite/Wetlands.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[前往丛林深处(湿地丛林)](Path_WetlandsToDeepJungle.md)  |  前往  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往<br>[腿部动作](LegAction.md)<br>[TravelAction](TravelAction.md)  |  15分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  → [丛林(环境)](Env_Jungle.md)<br><br>[湿地(环境)](Env_Wetlands.md)(+1)<br>[前往丛林深处(湿地丛林)](Path_WetlandsToDeepJungle.md)(+1)<br>基础权重：1<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-6  
