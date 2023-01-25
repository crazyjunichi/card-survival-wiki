# 沙滩  
> 它将引我前往沙滩。<br><br><b>（只有手牌可以带走）</b>  
  
  沙滩  |   图片   
 ----  |  ----:   
 **环境：**[丛林边缘](Outskirts.md)<br><br>** 区域唯一 **  |  ![](Sprite/PathOutskirtToBeach.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)沙滩](Event_BeachFoundFromOutskirts.md)  |  继续  
[前往丛林边缘(沙滩)](Path_BeachToOutskirts.md)  |  前往  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往<br>[腿部动作](LegAction.md)<br>[SlipperyAction](SlipperyAction.md)<br>[TravelAction](TravelAction.md)  |  -  |    |  [沙滩(环境)](Env_Beach.md)(+1)<br>[前往丛林边缘(沙滩)](Path_BeachToOutskirts.md)(+1)<br>基础权重：1<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-4<br>[压力](Stress.md)-10  
