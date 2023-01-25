# 海湾  
> 它将引我前往海湾。<br><br><b>（只有手牌可以带走）</b>  
  
  属性  |   图片   
 ----  |  ----:   
 ** 只允许存在一个 **  |  ![](Sprite/MangrovesToBeach.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)沙滩](Event_BeachFoundFromMangroves.md)  |  继续  
[前往红树林](Path_BayToMangroves.md)  |  前往  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往<br>[腿部动作](LegAction.md)<br>[SlipperyAction](SlipperyAction.md)<br>[TravelAction](TravelAction.md)  |  30分  |    |  [海湾(环境)](Env_Bay.md)(+1)<br>[前往红树林](Path_BayToMangroves.md)(+1)<br>基础权重：1<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-12  
