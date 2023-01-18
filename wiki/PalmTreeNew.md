[返回首页](index.md)   |  [查看所有建筑](building.md)
# 椰子树  
> 爬上去可以摘到椰子，虽然有点冒险。  
  
  属性  |   图片   
 ----  |  ----:   
 **可使用次数：**4  |  ![](Sprite/PalmTree.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[海湾](Bay.md)  |  随便逛逛  
[沙滩](Beach.md)  |  随便逛逛  
[丛林边缘](Outskirts.md)  |  探索  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬树  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  可用次数  -1<br><br>[(事件)坠落！](Event_FallFracture.md)(1)<br>[(事件)坠落！](Event_FallSprains.md)(1)<br>[(事件)坠落！](Event_FallAbrasion.md)(1)<br>[(事件)坠落！](Event_FallBruise.md)(1)<br>[(事件)椰子树](Event_PalmTree.md)(1)<br>[青椰子](CoconutHusked.md)(1)<br>[(事件)椰子树](Event_PalmTree.md)(1)<br>[青椰子](CoconutHusked.md)(2)<br>[(事件)椰子树](Event_PalmTree.md)(1)<br>[青椰子](CoconutHusked.md)(3)<br>[(事件)椰子树](Event_PalmTree.md)(1)<br>[青椰子](CoconutHusked.md)(4)  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
练习攀爬  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  可用次数  -1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(1)<br>[(事件)坠落！](Event_FallBruise.md)(1)  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[IGNOREKEY](OnNotAxeAdv.md):0-0  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br>燃料  -750<br>能量  -10<br><br>使用物:<br>可用次数  -3<br><br>  |  [耐力](Stamina.md)-8<br>[手掌损伤](HandDamage.md)+80<br>[阻止抽到棕榈树](PalmTreeKiller.md)+4<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[“锤状的”](tag_AxeAdv.md)  |  砍倒  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br>燃料  -1500<br>能量  -25<br><br>使用物:<br>可用次数  -3<br><br>  |  [耐力](Stamina.md)-6<br>[手掌损伤](HandDamage.md)+60<br>[阻止抽到棕榈树](PalmTreeKiller.md)+4<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[石头](Stone.md)  |  扔石头  |  15分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br><br>使用物:<br>可用次数  -3<br><br>获得:<br>[青椰子](CoconutHusked.md)(1)<br>  |  [耐力](Stamina.md)-3<br>[投石(技能)](Skill_RockThrowing.md)+0.5  
[猕猴朋友](MacaqueFriend.md)  |  派出猕猴  |  15分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br><br>使用物:<br>可用次数  -3<br><br>获得:<br>[青椰子](CoconutHusked.md)(1)<br>  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
椰子<img decoding="async" src="Sprite/SaturationCoconuts.png" style="height:30px;">  |  初始：4<br>最大：4  |  -  |  → [摘完的椰子树](PalmTreeCleared.md)  
椰子长成<img decoding="async" src="Sprite/AlarmClock.png" style="height:30px;">  |  初始：0<br>最大：2880  |  每天+1<br>最多需要：30天  |  → [椰子树](PalmTreeNew.md)  
进度  |  初始：50<br>最大：50  |  -  |  [青椰子](CoconutHusked.md)4 <br><br>[棕榈叶](PalmFronds.md)8~16 <br><br>→ [倒下的棕榈树](PalmTreeFelled.md)  
