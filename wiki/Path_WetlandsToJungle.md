[返回首页](index.md)   |  [查看所有建筑](building.md)
# 丛林小径  
> 它将引我前往丛林。<br><br><b>（只有手牌可以带走）</b>  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[湿地丛林](Wetlands.md)  |  ![](Sprite/JunglePath.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)丛林](Event_JungleFound.md)  |  继续  
[(事件)丛林边缘](Event_JungleFoundFromWetlands.md)  |  继续  
[前往湿地(丛林)](Path_JungleToWetlands.md)  |  前往  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往  |  15分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  → [丛林(环境)](Env_Jungle.md)<br><br>[丛林(环境)](Env_Jungle.md)(1)<br>[前往湿地(丛林)](Path_JungleToWetlands.md)(1)  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-6  
