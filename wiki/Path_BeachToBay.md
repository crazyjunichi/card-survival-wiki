# 海湾  
> 沙滩的尽头连接着海湾。<br><br><b>（只有手牌可以带走）</b>  
  
  海湾  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/Bay.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)红树林](Event_MangrovesFoundFromBeach.md)  |  继续  
[前往沙滩(海湾)](Path_BayToBeach.md)  |  前往  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往<br>[腿部动作](LegAction.md)<br>[旅行动作](TravelAction.md)  |  15分  |    |  [海湾(环境)](Env_Bay.md)(+1)<br>[前往沙滩(海湾)](Path_BayToBeach.md)(+1)<br>基础权重：1<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-12  