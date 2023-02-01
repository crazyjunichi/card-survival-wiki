# 椰子树  
> 可以从上面获取椰子，或者砍倒它获取木材。  
  
  椰子树  |   图片   
 ----  |  ----:   
   |  <img decoding="async" src="Sprite/PalmTree.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬树<br>  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身：**<br>使用次数  -1<br><br>** 获得： **<br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：1<br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：2<br>** [Success] **<br>  [椰子树4(事件)](Event_PalmTree4.md)(+1)<br>基础权重：8<li>[攀爬(技能)](Skill_Climbing.md)为0～100时权重+0～+20</li><li>[降水值](RainValue.md)为1～5时权重-4～-15</li>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍倒<br>  |  1小时  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>→ [原木](Log.md)<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Coconuts and Leaves] **<br>  [青椰子](CoconutHusked.md)(+1～+2)<br>  [棕榈叶](PalmFronds.md)(+6)<br>基础权重：1  |  [体重](Weight.md)-8<br>[手掌损伤](HandDamage.md)+80  
[铜斧](AxeCopper.md)  |  砍倒<br>  |  45分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 自身: **<br>→ [原木](Log.md)<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Coconuts and Leaves] **<br>  [青椰子](CoconutHusked.md)(+1～+2)<br>  [棕榈叶](PalmFronds.md)(+6)<br>基础权重：1  |  [体重](Weight.md)-8<br>[手掌损伤](HandDamage.md)+60  
## 状态触发  
名称  |  条件  |  变化  
----  |  ----  |  ----  
摘完的  |  [阻止抽到棕榈树](PalmTreeKiller.md): 1-1  |  → [摘完的椰子树](PalmTreeCleared.md)  


<script>document.title="椰子树 - 卡牌生存百科 Card Survival Wiki";</script>