# 椰子树  
> 可以从上面获取椰子，或者砍倒它获取木材。  
  
  属性  |   图片   
 ----  |  ----:   
   |  ![](Sprite/PalmTree.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬树<br>  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  使用次数  -1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>基础权重：1<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>基础权重：2<br><br>[(事件)椰子树](Event_PalmTree4.md)(+1)<br>基础权重：8<br>- [攀爬(技能)](Skill_Climbing.md)为0～100时权重0～+20<br>- [降水值](RainValue.md)为1～5时权重-4～-15<br>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒  |  1小时  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [原木](Log.md)<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[青椰子](CoconutHusked.md)(+1～+2)<br>[棕榈叶](PalmFronds.md)(+6)<br>基础权重：1<br><br>  |  [体重](Weight.md)-8<br>[手掌损伤](HandDamage.md)+80  
[铜斧](AxeCopper.md)  |  砍倒  |  45分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [原木](Log.md)<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[青椰子](CoconutHusked.md)(+1～+2)<br>[棕榈叶](PalmFronds.md)(+6)<br>基础权重：1<br><br>  |  [体重](Weight.md)-8<br>[手掌损伤](HandDamage.md)+60  
