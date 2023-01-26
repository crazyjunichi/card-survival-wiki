# 湿地  
> 前往丛林湿地。<br><br><b>（只有手牌可以带走）</b>  
  
  湿地  |   图片   
 ----  |  ----:   
 **环境：**[丛林](Jungle.md)<br><br>** 区域唯一 **  |  ![](Sprite/Wetlands.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)湿地](Event_WetlandsFound.md)  |  继续  
[前往丛林小径(湿地丛林)](Path_WetlandsToJungle.md)  |  前往  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往<br>[腿部动作](LegAction.md)<br>[旅行动作](TravelAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  → [丛林(环境)](Env_Jungle.md)<br><br>[湿地(环境)](Env_Wetlands.md)(+1)<br>[前往丛林小径(湿地丛林)](Path_WetlandsToJungle.md)(+1)<br>基础权重：1<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-6  
