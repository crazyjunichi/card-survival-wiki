# 椰子树  
> 爬上去可以摘到椰子，虽然有点冒险。  
<br>  
>   
  
  椰子树  |   图片   
 ----  |  ----:   
 **可使用次数：**4  |  <img decoding="async" src="Sprite/PalmTree.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[海湾(区域)](Bay.md)  |  随便逛逛  
[沙滩(区域)](Beach.md)  |  随便逛逛  
[丛林边缘(区域)](Outskirts.md)  |  探索  
[幼年椰子树](PalmTreeYoung.md)  |  转化  
[摘完的椰子树](PalmTreeCleared.md)  |  转化  
[椰子树(新)](PalmTreeNew.md)  |  转化  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬树<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  ** 自身：**<br>椰子<img decoding="async" src="Sprite/SaturationCoconuts.png" href="a.md" style="max-width:20px;max-height:20px;">  -1(-25%)<br><br>** 获得： **<br>** [Fall - Fracture] **<br>  [坠落！(事件)](Event_FallFracture.md)(+1)<br>基础权重：1<li>[攀爬(技能)](Skill_Climbing.md)为100～150时权重-1</li><br>** [Fall - Sprain] **<br>  [坠落！(事件)](Event_FallSprains.md)(+1)<br>基础权重：2<li>[攀爬(技能)](Skill_Climbing.md)为100～150时权重-1</li><br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：3<br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：6<br>** [Success 1] **<br>  [椰子树(事件)](Event_PalmTree.md)(+1)<br>  [青椰子](CoconutHusked.md)(+1)<br>基础权重：4<li>[攀爬(技能)](Skill_Climbing.md)为0～150时权重+0～+150</li><li>[降水值](RainValue.md)为1～5时权重-4～-25</li><li>[绳子](Rope.md)存在于*手中*，权重+6</li><br>** [Success 2] **<br>  [椰子树(事件)](Event_PalmTree.md)(+1)<br>  [青椰子](CoconutHusked.md)(+2)<br>基础权重：4<li>[攀爬(技能)](Skill_Climbing.md)为0～150时权重+0～+150</li><li>[降水值](RainValue.md)为1～5时权重-4～-25</li><li>[绳子](Rope.md)存在于*手中*，权重+6</li><br>** [Success 3] **<br>  [椰子树(事件)](Event_PalmTree.md)(+1)<br>  [青椰子](CoconutHusked.md)(+3)<br>基础权重：4<li>[攀爬(技能)](Skill_Climbing.md)为0～150时权重+0～+150</li><li>[降水值](RainValue.md)为1～5时权重-4～-25</li><li>[绳子](Rope.md)存在于*手中*，权重+6</li><br>** [Success 4] **<br>  [椰子树(事件)](Event_PalmTree.md)(+1)<br>  [青椰子](CoconutHusked.md)(+4)<br>基础权重：4<li>[攀爬(技能)](Skill_Climbing.md)为0～150时权重+0～+150</li><li>[降水值](RainValue.md)为1～5时权重-4～-25</li><li>[绳子](Rope.md)存在于*手中*，权重+6</li>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
练习攀爬<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  ** 自身：**<br>椰子<img decoding="async" src="Sprite/SaturationCoconuts.png" href="a.md" style="max-width:20px;max-height:20px;">  -1(-25%)<br><br>** 获得： **<br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：1<br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：1<br>** [Success] **<br>基础权重：8<li>[攀爬(技能)](Skill_Climbing.md)为0～150时权重+0～+150</li><li>[降水值](RainValue.md)为1～5时权重-4～-25</li><li>[绳子](Rope.md)存在于*手中*，权重+6</li>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[IGNOREKEY](OnNotAxeAdv.md): 0-0  |  ** 自身: **<br>椰子长成<img decoding="async" src="Sprite/AlarmClock.png" href="a.md" style="max-width:20px;max-height:20px;">  -750(-26%)<br>进度  -10(-20%)<br><br>** 使用物: **<br>可用次数  -3  |  [耐力](Stamina.md)-8<br>[手掌损伤](HandDamage.md)+80<br>[阻止抽到棕榈树](PalmTreeKiller.md)+4<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[“高级斧”](tag_AxeAdv.md)  |  砍倒<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>椰子长成<img decoding="async" src="Sprite/AlarmClock.png" href="a.md" style="max-width:20px;max-height:20px;">  -1500(-52%)<br>进度  -25(-50%)<br><br>** 使用物: **<br>可用次数  -3  |  [耐力](Stamina.md)-6<br>[手掌损伤](HandDamage.md)+60<br>[阻止抽到棕榈树](PalmTreeKiller.md)+4<br>[木工(技能)](Skill_Woodworking.md)+0.5  
[石头](Stone.md)  |  扔石头<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  <br>** 使用物: **<br>可用次数  -3<br><br>** 获得: **<br>** [Success] **<br>  [青椰子](CoconutHusked.md)(+1)<br>基础权重：0<li>[投石(技能)](Skill_RockThrowing.md)为25～150时权重+1～+100</li><br>** [Failure] **<br>基础权重：75  |  [耐力](Stamina.md)-3<br>[投石(技能)](Skill_RockThrowing.md)+0.5  
[猕猴朋友](MacaqueFriend.md)  |  派出猕猴<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  <br>** 使用物: **<br>可用次数  -3<br><br>** 获得: **<br>** [Success] **<br>  [青椰子](CoconutHusked.md)(+1)<br><li>[投石(技能)](Skill_RockThrowing.md)为25～150时权重+1～+100</li>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
椰子<img decoding="async" src="Sprite/SaturationCoconuts.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：4<br>最大：4  |  -  |  ** 到达0时： **<br><br>自身→ [摘完的椰子树](PalmTreeCleared.md)  
椰子长成<img decoding="async" src="Sprite/AlarmClock.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：2880  |  每15分钟+1<br>最多需要：30天  |  ** 到达上限时： **<br><br>自身→ [椰子树(新)](PalmTreeNew.md)  
进度  |  初始：50<br>最大：50  |  -  |  ** 到达0时： **<br>** [Palm Tree] **<br>  [青椰子](CoconutHusked.md)(+4)<br>  [棕榈叶](PalmFronds.md)(+8～+16)<br><br>自身→ [倒下的棕榈树](PalmTreeFelled.md)  
## 状态触发  
名称  |  条件  |  变化  
----  |  ----  |  ----  
摘完的  |  [阻止抽到棕榈树](PalmTreeKiller.md): 0-0  |  → [摘完的椰子树](PalmTreeCleared.md)  


<script>document.title="椰子树 - 卡牌生存百科 Card Survival Wiki";</script>