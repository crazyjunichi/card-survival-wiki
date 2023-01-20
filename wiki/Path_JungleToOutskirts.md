[返回首页](index.md)   |  [查看所有建筑](building.md)
# 丛林边缘  
> 前往丛林外围。<br><br><b>（只有手牌可以带走）</b>  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[丛林](Jungle.md)  |  ![](Sprite/JunglePath.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)丛林边缘](Event_OutskirtsFoundFromJungle.md)  |  继续  
[前往丛林小径](Path_OutskirtsToJungle.md)  |  前往  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  → [丛林(环境)](Env_Jungle.md)<br><br>[丛林边缘(环境)](Env_Outskirts.md)(+1)<br>[前往丛林小径](Path_OutskirtsToJungle.md)(+1)  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-12  
