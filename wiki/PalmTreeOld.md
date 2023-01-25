# 椰子树  
> 爬上去可以摘到椰子，虽然有点冒险。  
  
  属性  |   图片   
 ----  |  ----:   
 ** 只允许存在一个 **  |  ![](Sprite/PalmTree.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)坠落！](Event_FallAbrasion.md)  |  真他妈不错  
[(事件)坠落！](Event_FallBruise.md)  |  真他妈不错  
[(事件)坠落！](Event_MountainSlip.md)  |  真他妈棒  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬树<br>[ClimbAction](ClimbAction.md)  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  使用次数  -1<br><br>[(事件)坠落！](Event_FallFracture.md)(+1)<br>基础权重：1<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>[(事件)坠落！](Event_FallSprains.md)(+1)<br>基础权重：2<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>基础权重：3<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>基础权重：6<br><br>[(事件)椰子树](Event_PalmTree4.md)(+1)<br>基础权重：4<br>- [攀爬(技能)](Skill_Climbing.md)为0～150时权重0～+150<br>- [降水值](RainValue.md)为1～5时权重-4～-25<br>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
练习攀爬<br>[ClimbAction](ClimbAction.md)  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[ModifierClimb_GameName](ModifierClimb.md):0-2  |  使用次数  -1<br><br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>基础权重：1<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>基础权重：1<br><br>基础权重：8<br>- [攀爬(技能)](Skill_Climbing.md)为0～150时权重0～+150<br>- [降水值](RainValue.md)为1～5时权重-4～-25<br>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[IGNOREKEY](OnNotAxeAdv.md):0-0  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br>进度  -10<br><br>使用物:<br>可用次数  -3<br><br>  |  [耐力](Stamina.md)-8<br>[手掌损伤](HandDamage.md)+80<br>[阻止抽到棕榈树](PalmTreeKiller.md)+4<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[“锤状的”](tag_AxeAdv.md)  |  砍倒  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br>进度  -25<br><br>使用物:<br>可用次数  -3<br><br>  |  [耐力](Stamina.md)-6<br>[手掌损伤](HandDamage.md)+60<br>[阻止抽到棕榈树](PalmTreeKiller.md)+4<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[石头](Stone.md)  |  击中椰子  |  15分  |    |  获得:<br>基础权重：199<br><br>[(事件)成功了！](Event_CoconutHit.md)(+1)<br>基础权重：2<br>- [投石(技能)](Skill_RockThrowing.md)为0～150时权重0～+25<br><br>  |    
[石头](Stone.md)  |  派出猕猴  |  15分  |    |  获得:<br>[(事件)成功了！](Event_CoconutHit.md)(+1)<br>基础权重：2<br>- [投石(技能)](Skill_RockThrowing.md)为0～150时权重0～+25<br><br>  |    
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
进度  |  初始：50<br>最大：50  |  -  |  ** 到达0时： **<br>[青椰子](CoconutHusked.md)+4 <br>[棕榈叶](PalmFronds.md)+8～+16 <br>→ [倒下的棕榈树](PalmTreeFelled.md)  
