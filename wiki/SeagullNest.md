# 海鸥巢  
> 你刚找到了一个鸟巢。你可以试着爬上去。或许你可以在里面找到一些蛋。  
  
  海鸥巢  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  ![](Sprite/SeagullNest.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[鸟岩岛](BirdRock.md)  |  探索  
[岩滩](Rocks.md)  |  探索  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
攀爬<br>[攀爬动作](ClimbAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[ModifierClimb_GameName](ModifierClimb.md): 0-2  |  使用次数  -1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>基础权重：1<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>基础权重：2<br><br>[(事件)你做到了！](Event_SeagullNest.md)(+1)<br>基础权重：2<br>- [攀爬(技能)](Skill_Climbing.md)为0～100时权重0～+20<br>- [降水值](RainValue.md)为1～5时权重-4～-15<br>- [湿度](Wetness.md)为1～100时权重-2～-10<br>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
