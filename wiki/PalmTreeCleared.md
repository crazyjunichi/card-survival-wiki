# 摘完的椰子树  
> 这颗树上已经没有椰子了，不过之后还会再长出来。  
  
  摘完的椰子树  |   图片   
 ----  |  ----:   
   |  ![](Sprite/PalmTree.png)   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
练习攀爬<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[ModifierClimb_GameName](ModifierClimb.md): 0-2  |  使用次数  -1<br>[(事件)坠落！](Event_FallAbrasion.md)(+1)<br>基础权重：1<br><br>[(事件)坠落！](Event_FallBruise.md)(+1)<br>基础权重：1<br><br>基础权重：8<br>- [攀爬(技能)](Skill_Climbing.md)为0～150时权重0～+150<br>- [降水值](RainValue.md)为1～5时权重-4～-25<br>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[IGNOREKEY](OnNotAxeAdv.md): 0-0  |  ** 自身: **<br>椰子成长<img decoding="async" src="Sprite/AlarmClock.png" style="width:20px;">  -750<br>砍伐进度  -10<br>** 使用物: **<br>可用次数  -3  |  [耐力](Stamina.md)-8<br>[手掌损伤](HandDamage.md)+80<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[“斧状的”](tag_AxeAdv.md)  |  砍倒  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>椰子成长<img decoding="async" src="Sprite/AlarmClock.png" style="width:20px;">  -1500<br>砍伐进度  -25<br>** 使用物: **<br>可用次数  -1  |  [耐力](Stamina.md)-6<br>[手掌损伤](HandDamage.md)+60<br>[木工(技能)](Skill_Woodworking.md)+0.5  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
椰子成长<img decoding="async" src="Sprite/AlarmClock.png" style="width:30px;">  |  初始：0<br>最大：2880  |  每15分钟+1<br>最多需要：30天  |  ** 到达上限时： **<br>→ [椰子树](PalmTreeNew.md)  
砍伐进度  |  初始：50<br>最大：50  |  -  |  ** 到达0时： **<br>[棕榈叶](PalmFronds.md)+8～+16 <br>→ [倒下的棕榈树](PalmTreeFelled.md)  
