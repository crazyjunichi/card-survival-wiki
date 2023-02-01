# 树液收集处  
> 可以从这儿提取树液来制糖或酿酒。  
  
  树液收集处  |   图片   
 ----  |  ----:   
 ** 不可堆叠 **<br><br>**槽位：**3  |  <img decoding="async" src="Sprite/SapStation.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬树<br>[攀爬动作](ClimbAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  ** 自身：**<br>使用次数  -1<br><br>** 获得： **<br>** [Fall - Fracture] **<br>  [坠落！(事件)](Event_FallFracture.md)(+1)<br>基础权重：1<li>[攀爬(技能)](Skill_Climbing.md)为100～150时权重-1</li><br>** [Fall - Sprain] **<br>  [坠落！(事件)](Event_FallSprains.md)(+1)<br>基础权重：2<li>[攀爬(技能)](Skill_Climbing.md)为100～150时权重-2</li><br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：3<br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：4<br>** [Success] **<br>基础权重：8<li>[攀爬(技能)](Skill_Climbing.md)为0～100时权重+0～+100</li><li>[降水值](RainValue.md)为1～5时权重-4～-25</li><li>[绳子](Rope.md)存在于*手中*，权重+6</li>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
练习攀爬<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  ** 自身：**<br>使用次数  -1<br><br>** 获得： **<br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：1<br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：1<br>** [Success] **<br>基础权重：8<li>[攀爬(技能)](Skill_Climbing.md)为0～150时权重+0～+150</li><li>[降水值](RainValue.md)为1～5时权重-4～-25</li><li>[绳子](Rope.md)存在于*手中*，权重+6</li>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒<br>[手部动作](HandAction.md)  |  1小时  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Coconuts and Leaves] **<br>  [棕榈叶](PalmFronds.md)(+3～+6)<br>  [细线](CordFiber.md)(+3)<br>  [布](Cloth.md)(+3)<br>  [绳子](Rope.md)(+2)<br>基础权重：1  |  [耐力](Stamina.md)-8<br>[手掌损伤](HandDamage.md)+80  
[“锤”](tag_Axe.md)  |  砍倒<br>[手部动作](HandAction.md)  |  45分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>→ [倒下的棕榈树](PalmTreeFelled.md)<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Coconuts and Leaves] **<br>  [棕榈叶](PalmFronds.md)(+3～+6)<br>  [细线](CordFiber.md)(+3)<br>  [布](Cloth.md)(+3)<br>  [绳子](Rope.md)(+2)<br>基础权重：1  |  [耐力](Stamina.md)-6<br>[手掌损伤](HandDamage.md)+60  
## 转化  
放入  |  动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[陶罐](ClayVase.md)  |  水椰树汁  |  1天  |    |    |    
  |  剩余  |  15分  |    |    |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时： **<br><br>→ [树液补给点(空)](PalmTreeSapStationEmpty.md)  


<script>document.title="树液收集处 - 卡牌生存百科 Card Survival Wiki";</script>