# 海鸥巢  
> 你刚找到了一个鸟巢。你可以试着爬上去。或许你可以在里面找到一些蛋。  
<br>  
>   
  
  海鸥巢  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  <img decoding="async" src="Sprite/SeagullNest.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[鸟岩岛(区域)](BirdRock.md)  |  探索  
[岩滩(区域)](Rocks.md)  |  探索  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
攀爬<br>[攀爬动作](ClimbAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  ** 自身：**<br>使用次数  -1<br><br>** 获得： **<br>** [Fall - Abrasion] **<br>  [坠落！(事件)](Event_FallAbrasion.md)(+1)<br>基础权重：1<br>** [Fall - Bruises] **<br>  [坠落！(事件)](Event_FallBruise.md)(+1)<br>基础权重：2<br>** [Success] **<br>  [你做到了！(事件)](Event_SeagullNest.md)(+1)<br>基础权重：2<li>[攀爬(技能)](Skill_Climbing.md)为0～100时权重+0～+20</li><li>[降水值](RainValue.md)为1～5时权重-4～-15</li><li>[湿度](Wetness.md)为1～100时权重-2～-10</li>  |  [耐力](Stamina.md)-6<br>[足部损伤](FootDamage.md)+8<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
## 状态触发  
名称  |  条件  |  变化  
----  |  ----  |  ----  
已被掏过  |  [阻止抽到海鸥巢](SeagullNestKiller.md): 1-1  |  消失  


<script>document.title="海鸥巢 - 卡牌生存百科 Card Survival Wiki";</script>