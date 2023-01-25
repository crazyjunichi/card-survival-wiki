# 岩滩  
> 悬崖峭壁下的岩石地区。可以寻到<b>石头</b>和<b>螃蟹</b>。<br><br><b>（只有手牌可以带走）</b>  
  
  岩滩  |   图片   
 ----  |  ----:   
 **环境：**[沙滩](Beach.md)<br><br>** 区域唯一 **  |  ![](Sprite/RockyPath.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)岩滩](Event_RocksFound.md)  |  继续  
[前往沙滩(岩滩)](Path_RocksToBeach.md)  |  前往  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
前往<br>[腿部动作](LegAction.md)<br>[SlipperyAction](SlipperyAction.md)<br>[TravelAction](TravelAction.md)  |  15分  |    |  [岩滩(环境)](Env_Rocks.md)(+1)<br>[前往沙滩(岩滩)](Path_RocksToBeach.md)(+1)<br>基础权重：1<br>  |  [足部损伤](FootDamage.md)+20<br>[耐力](Stamina.md)-2<br>[压力](Stress.md)-10<br>[猎手接近](HuntersProximity.md)-6  
