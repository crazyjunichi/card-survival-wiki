[返回首页](index.md)   |  [查看所有建筑](building.md)
# 海水  
> 可以去潜水或者抓些鱼。这似乎连通着大海。  
  
  属性  |   图片   
 ----  |  ----:   
 **环境：**[覆溺洞穴(环境)](Env_FloodedChamber.md)<br><br>**标签：**	[“浅水域”](tag_ShallowWater.md), [“海”](tag_Sea.md)  |  ![](Sprite/FloodedChamber.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
饮用  |  -  |  [肾脏](IfKidneys.md):1-1  |  → [椰子壳](CoconutShell.md)<br>耐久  -250<br>  |  [水分](Hydration.md)+40<br>[钠](Sodium.md)+250  
潜水  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  [海螺](Conch.md)(+1)<br>[海胆](Urchin.md)(+1)<br>[螃蟹](Crab.md)(+1)<br>[石头](Stone.md)(+1)<br>[水下出口](UnderwaterExit.md)(+1)  |  [湿度](Wetness.md)+100<br>[耐力](Stamina.md)-10<br>[情绪](Morale.md)+4<br>[压力](Stress.md)-48<br>[娱乐](Entertainment.md)+16<br>[污垢](Filth.md)-75<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[游泳(技能)](Skill_Swimming.md)+1  
洗个澡  |  15分  |    |    |  [湿度](Wetness.md)+100<br>[情绪](Morale.md)+1<br>[污垢](Filth.md)-150<br>[泥巴防护](MudProtection.md)-50<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[驱虫](BugRepellentApplied.md)-50<br>[阳光防护](SunProtection.md)-50  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“钓鱼线”](tag_FishingLine.md)  |  钓鱼  |  1小时  |    |  使用物:<br>可用次数  -1<br><br>获得:<br>[鹦哥鱼](ParrotFish.md)(+1)<br>[绯鲤](Goatfish.md)(+1)<br>[北梭鱼](Bonefish.md)(+1)<br>  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[“诱饵（用于钓鱼线）”](tag_FishingLineBait.md)  |  钓鱼  |  1小时  |    |  使用物:<br>→ [钓鱼竿](FishingRod.md)<br>可用次数  -1<br>燃料  -1<br><br>获得:<br>[鹦哥鱼](ParrotFish.md)(+1)<br>[绯鲤](Goatfish.md)(+1)<br>[北梭鱼](Bonefish.md)(+1)<br>  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[炸药(开)](DynamiteOn.md)  |  轰隆！  |  30分  |    |  获得:<br>[绯鲤](Goatfish.md)(+8～+16)<br>[鹦哥鱼](ParrotFish.md)(+8～+16)<br>  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
洋流冲刷  |  初始：0<br>最大：1000  |  每15分钟-0.5<br>最多需要：20天20小时  |    
