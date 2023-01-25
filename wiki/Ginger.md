# 姜  
> 可以捣碎并制成姜茶，能够增强免疫系统并缓解消化问题。  
  
  姜  |   图片   
 ----  |  ----:   
 **重量：**75<br><br>**标签：**	[“喂食（草食动物）”](tag_FeedHerb.md), [“喂/添加”](tag_Feed.md)  |  ![](Sprite/Ginger.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[姜株](GingerPlant.md)  |  采集根部  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
食用<br>[VegetarianAction](VegetarianAction.md)<br>[EatingAction](EatingAction.md)  |  15分  |    |    |  [饱食](Satiation.md)+10<br>[胃](Stomach.md)+4<br>[水分](Hydration.md)+1<br>[蔬菜<nobr>厌倦度</nobr>](SaturationVegetables.md)+30<br>[姜效果](GingerEffect.md)+4<br>[污垢](Filth.md)+2  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“锤”](tag_Hammer.md)  |  捣碎  |  15分  |  [光亮](Light.md): 10-100  |  自身:<br>→ [姜末](GingerGround.md)<br><br>  |  [体重](Weight.md)-1<br>[污垢](Filth.md)+4<br>[手掌损伤](HandDamage.md)+20<br>[药草学(技能)](Skill_Herbology.md)+1  
## 可拖至  
[猪食槽](BoarFeeder.md), [猪食槽(空)](BoarFeederEmpty.md), [堆肥箱](CompostBin.md), [未栽种的农田(空)](CropPlotEmpty.md), [羊食槽](GoatFeeder.md), [羊食槽(空)](GoatFeederEmpty.md), [灰山鹑喂食器](PartridgeFeeder.md), [灰山鹑喂食器(空)](PartridgeFeederEmpty.md), [中陷阱的猕猴](CageTrapMacaque.md), [母猪](BoarEnclosureFemale.md), [公猪](BoarEnclosureMale.md), [小猪](BoarEnclosurePiglet.md), [母猪](BoarTiedFemale.md), [公猪](BoarTiedMale.md), [小猪](BoarTiedPiglet.md), [母山羊](GoatEnclosureFemale.md), [小羊](GoatEnclosureKid.md), [哺乳期山羊](GoatEnclosureLactating.md), [公山羊](GoatEnclosureMale.md), [母山羊](GoatTiedFemale.md), [哺乳期山羊](GoatTiedFemaleLactating.md), [小羊](GoatTiedKid.md), [公山羊](GoatTiedMale.md), [猕猴朋友](MacaqueFriend.md), [受伤的猕猴](MacaqueWounded.md), [小灰山鹑](PartridgeChick.md), [雌灰山鹑](PartridgeFemaleEnclosure.md), [雌灰山鹑](PartridgeFemaleLive.md), [雄灰山鹑](PartridgeMaleEnclosure.md), [雄灰山鹑](PartridgeMaleLive.md)  
## 可用于蓝图  
- [姜糖(蓝图)](Bp_CandiedGinger.md)  
- [醉蟹(蓝图)](Bp_DrunkenCrab.md)  
  
  
## 可用于转化  
转化为  |  容器  
----  |  ----  
[干姜](GingerDried.md)  |  [晾晒架](DryingRack.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：672  |  每15分钟-1<br>最多需要：7天  |  ** 到达0时： **<br>→ [腐烂物](RottenRemains.md)  
进度  |  初始：0<br>最大：336  |  -  |  ** 到达上限时： **<br>→ [干姜](GingerDried.md)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Drying  |  ** 需要存在卡牌：**<br>[“干燥环境”](tag_EnvDry.md)<br>** 需要状态：**<br>[降水值](RainValue.md): 0-0  |  进度+1  |    
