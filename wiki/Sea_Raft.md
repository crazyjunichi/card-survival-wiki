[返回首页](index.md)   |  [查看所有建筑](building.md)
# 海  
> 可以游个泳或者用合适的工具整一些鱼。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“海”](tag_Sea.md)  |  ![](Sprite/Ocean.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[开始冒险](Start_Raft.md)  |  把木筏推下水  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
饮用  |  -  |  [肾脏](IfKidneys.md):1-1  |  → [椰子壳](CoconutShell.md)<br>耐久  -250<br>  |  [水分](Hydration.md)+40<br>[钠](Sodium.md)+250  
潜水  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  [(事件)一条鲨鱼！](Event_SharkFight.md)(1)  |  [湿度](Wetness.md)+100<br>[耐力](Stamina.md)-10<br>[情绪](Morale.md)+4<br>[压力](Stress.md)-48<br>[娱乐](Entertainment.md)+16<br>[污垢](Filth.md)-75<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[游泳(技能)](Skill_Swimming.md)+1  
洗个澡  |  15分  |    |  [(事件)一条鲨鱼！](Event_SharkFight.md)(1)  |  [湿度](Wetness.md)+100<br>[情绪](Morale.md)+1<br>[污垢](Filth.md)-150<br>[泥巴防护](MudProtection.md)-50<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[驱虫](BugRepellentApplied.md)-50<br>[阳光防护](SunProtection.md)-50  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼镖](HarpoonBone.md)  |  叉鱼  |  30分  |  [光亮](Light.md):10-100  |  使用物:<br>可用次数  -1<br><br>获得:<br>[绯鲤](Goatfish.md)(1)<br>[北梭鱼](Bonefish.md)(1)<br>[(事件)一条鲨鱼！](Event_SharkFight.md)(1)<br>  |  [湿度](Wetness.md)+60<br>[叉鱼(技能)](Skill_SpearFishing.md)+0.5<br>[情绪](Morale.md)+1  
[“钓鱼线”](tag_FishingLine.md)  |  钓鱼  |  1小时  |    |  使用物:<br>可用次数  -1<br><br>获得:<br>[鹦哥鱼](ParrotFish.md)(1)<br>[绯鲤](Goatfish.md)(1)<br>[北梭鱼](Bonefish.md)(1)<br>  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[“诱饵（用于钓鱼线）”](tag_FishingLineBait.md)  |  钓鱼  |  1小时  |    |  使用物:<br>→ [钓鱼竿](FishingRod.md)<br>可用次数  -1<br>燃料  -1<br><br>获得:<br>[鹦哥鱼](ParrotFish.md)(1)<br>[绯鲤](Goatfish.md)(1)<br>[北梭鱼](Bonefish.md)(1)<br>  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[炸药](DynamiteOn.md)  |  轰隆！  |  30分  |    |  获得:<br>[绯鲤](Goatfish.md)(8~16)<br>[北梭鱼](Bonefish.md)(6~12)<br>  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
洋流冲刷  |  初始：0<br>最大：1000  |  每天-10<br>最多需要：1天1小时  |    
