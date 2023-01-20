[返回首页](index.md)   |  [查看所有建筑](building.md)
# 椰子树  
> 可以从上面获取椰子，或者砍倒它获取木材。  
  
  属性  |   图片   
 ----  |  ----:   
 **可使用次数：**3  |  ![](Sprite/PalmTree.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬树摘椰子  |  30分  |  [降水值](RainValue.md):1-3<br>[耐力](Stamina.md):11-32  |  可用次数  -1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>[青椰子](CoconutHusked.md)(+1～+3)  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒  |  2小时  |  [耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[青椰子](CoconutHusked.md)(+1～+3)<br>[棕榈叶](PalmFronds.md)(+3～+6)<br>  |  [体重](Weight.md)-8  
[铜斧](AxeCopper.md)  |  砍倒  |  2小时  |  [耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[青椰子](CoconutHusked.md)(+1～+3)<br>[棕榈叶](PalmFronds.md)(+3～+6)<br>  |  [体重](Weight.md)-8  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：3  |  -  |  → [摘完的椰子树](PalmTreeCleared.md)  
