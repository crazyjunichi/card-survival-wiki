[返回首页](index.md)   |  [查看所有建筑](building.md)
# 树液补给点  
> 这棵西米树已经倒下了，应该把它伐开来取回我的东西。  
  
  属性  |   图片   
 ----  |  ----:   
 **槽位：**3<br><br>**过滤器：**  |  ![](Sprite/SapStation.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬树  |  15分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  可用次数  -1<br><br>[(事件)坠落！](Event_FallFracture.md)(+1)<br>[(事件)坠落！](Event_FallSprains.md)(+1)<br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>[(事件)坠落！](Event_FallBruise.md)(+1)  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
练习攀爬  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  可用次数  -1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>[(事件)坠落！](Event_FallBruise.md)(+1)  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒  |  1小时  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[棕榈叶](PalmFronds.md)(+3～+6)<br>[细线](CordFiber.md)(+3)<br>[布](Cloth.md)(+3)<br>[绳子](Rope.md)(+2)<br>  |  [耐力](Stamina.md)-8<br>[手掌损伤](HandDamage.md)+80  
[“锤”](tag_Axe.md)  |  砍倒  |  45分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[棕榈叶](PalmFronds.md)(+3～+6)<br>[细线](CordFiber.md)(+3)<br>[布](Cloth.md)(+3)<br>[绳子](Rope.md)(+2)<br>  |  [耐力](Stamina.md)-6<br>[手掌损伤](HandDamage.md)+60  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0  |  -  |    
