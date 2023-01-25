# 丛林边缘  
> 前往丛林外围。<br><br><b>（只有手牌可以带走）</b>  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[沙滩](Beach.md)<br><br>** 只允许存在一个 **  |  ![](Sprite/JunglePatch.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)丛林边缘](Event_OutskirtsFoundFromBeach.md)  |  继续  
[前往沙滩(丛林边缘)](Path_OutskirtsToBeach.md)  |  前往  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往<br>[腿部动作](LegAction.md)<br>[SlipperyAction](SlipperyAction.md)<br>[TravelAction](TravelAction.md)  |  -  |    |  → [丛林(环境)](Env_Jungle.md)<br><br>[丛林边缘(环境)](Env_Outskirts.md)(+1)<br>[前往沙滩(丛林边缘)](Path_OutskirtsToBeach.md)(+1)<br>基础权重：1<br>  |  [足部损伤](FootDamage.md)+10<br>[耐力](Stamina.md)-2<br>[压力](Stress.md)-10  
