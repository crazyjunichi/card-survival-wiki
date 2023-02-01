# 海水  
> 可以去潜水或者抓些鱼。这似乎连通着大海。  
  
  海水  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[覆溺洞穴(环境)](Env_FloodedChamber.md)<br><br>**标签：**	[“浅水域”](tag_ShallowWater.md), [“海”](tag_Sea.md)  |  <img decoding="async" src="Sprite/FloodedChamber.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
饮用<br>  |  -  |  [肾脏](IfKidneys.md): 1-1  |  ** 自身：**<br>耐久  -250  |  [水分](Hydration.md)+40<br>[钠](Sodium.md)+250  
潜水<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 获得： **<br>** [Conch] **<br>  [海螺](Conch.md)(+1)<br>[海螺种群数量](Pop_Conch.md)-1000<br>基础权重：50<li>[海螺种群数量](Pop_Conch.md)为1000～30000时权重+1～+50</li><br>** [Urchin] **<br>  [海胆](Urchin.md)(+1)<br>[海胆种群数量](Pop_Urchin.md)-1000<br>基础权重：0<li>[海胆种群数量](Pop_Urchin.md)为1000～6000时权重+1～+20</li><br>** [Crab] **<br>  [螃蟹](Crab.md)(+1)<br>[海胆种群数量](Pop_Urchin.md)-1000<br>基础权重：0<li>[海胆种群数量](Pop_Urchin.md)为1000～6000时权重+1～+20</li><br>** [Stone] **<br>  [石头](Stone.md)(+1)<br>基础权重：30<br>** [Nothing] **<br>基础权重：225<li>[游泳(技能)](Skill_Swimming.md)为0～150时权重+0～-200</li><br>** [Exit] **<br>  [水下出口(覆溺洞穴)](UnderwaterExit.md)(+1)<br>可用次数：+1<br>基础权重：35<li>[游泳(技能)](Skill_Swimming.md)为0～150时权重+0～+300</li><br><br>** 相关卡牌 **<br>[“腿部（内层）”](tag_Clothing.md)燃料 + 12  |  [湿度](Wetness.md)+100<br>[耐力](Stamina.md)-10<br>[情绪](Morale.md)+4<br>[压力](Stress.md)-48<br>[娱乐](Entertainment.md)+16<br>[污垢](Filth.md)-75<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[游泳(技能)](Skill_Swimming.md)+1  
洗个澡<br>[手部动作](HandAction.md)  |  15分  |    |  ** 相关卡牌 **<br>[“腿部（内层）”](tag_Clothing.md)燃料 + 12<br>** 相关卡牌 **<br>[眼镜蛇毒液](W_CobraSpit.md)燃料  -75  |  [湿度](Wetness.md)+100 (每15分钟)<br>[情绪](Morale.md)+1<br>[污垢](Filth.md)-150<br>[泥巴防护](MudProtection.md)-50<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[驱虫](BugRepellentApplied.md)-50<br>[阳光防护](SunProtection.md)-50  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“钓鱼线”](tag_FishingLine.md)  |  钓鱼<br>  |  1小时  |    |  <br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Nothing] **<br>基础权重：25<li>[钓鱼(技能)](Skill_Fishing.md)为0～150时权重+0～-15</li><li>[钓鱼竿](FishingRod.md)存在于*手中*，权重-5</li><br>** [Parrot Fish] **<br>  [鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：4<br>** [Goat Fish] **<br>  [绯鲤](Goatfish.md)(+1)<br>基础权重：4<br>** [Bonefish] **<br>  [北梭鱼](Bonefish.md)(+1)<br>基础权重：4  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[“诱饵（用于钓鱼线）”](tag_FishingLineBait.md)  |  钓鱼<br>  |  1小时  |    |  <br>** 使用物: **<br>可用次数  -1<br>燃料  -1<br><br>** 获得: **<br>** [Nothing] **<br>基础权重：15<li>[钓鱼(技能)](Skill_Fishing.md)为0～150时权重+0～-10</li><li>[钓鱼竿（已添加诱饵）](FishingRodBait.md)存在于*手中*，权重-4</li><br>** [Parrot Fish] **<br>  [鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：10<br>** [Goat Fish] **<br>  [绯鲤](Goatfish.md)(+1)<br>基础权重：10<br>** [Bonefish] **<br>  [北梭鱼](Bonefish.md)(+1)<br>基础权重：8  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[炸药(开)](DynamiteOn.md)  |  轰隆！<br>  |  30分  |    |  <br>** 使用物: **<br>消失<br><br>** 获得: **<br>** [Debris] **<br>  [绯鲤](Goatfish.md)(+8～+16)<br>  [鹦哥鱼](ParrotFish.md)(+8～+16)<br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
洋流冲刷  |  初始：0<br>最大：1000  |  每15分钟-0.5<br>最多需要：20天20小时  |    


<script>document.title="海水 - 卡牌生存百科 Card Survival Wiki";</script>