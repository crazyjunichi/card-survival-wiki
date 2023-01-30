# 攻击无人机！  
> 它冲着我来了！  
  
  攻击无人机！  |   图片   
 ----  |  ----:   
 **标签：**	[“战斗事件”](tag_FightEvent.md)  |  <img decoding="async" src="Sprite/Drone.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[酸湖(区域)(火山)](AcidLake.md)  |  探索  
[海湾(区域)](Bay.md)  |  随便逛逛  
[沙滩(区域)](Beach.md)  |  随便逛逛  
[鸟岩岛(区域)](BirdRock.md)  |  探索  
[隐秘港湾(区域)(沙滩)](Cove.md)  |  探索  
[丛林深处(区域)](DeepJungle.md)  |  探索  
[荒芜沙滩(区域)](DesolateBeach.md)  |  探索  
[东部草原(区域)](GrasslandsE.md)  |  探索  
[西部草原(区域)](GrasslandsW.md)  |  探索  
[东部高地(区域)](HighlandsEastern.md)  |  探索  
[西部高地(区域)](HighlandsWestern.md)  |  探索  
[丛林(区域)](Jungle.md)  |  探索  
[丛林高地(区域)](JungleHighlands.md)  |  探索  
[红树林(区域)](Mangroves.md)  |  探索  
[丛林边缘(区域)](Outskirts.md)  |  探索  
[岩滩(区域)](Rocks.md)  |  探索  
[神秘谷(区域)](SecretValley.md)  |  探索  
[火山(区域)](Volcano.md)  |  探索  
[湿地丛林(区域)(湿地)](Wetlands.md)  |  探索  
## 触发条件  
名称  |  条件  |  变化  
----  |  ----  |  ----  
无人机！  |  [无人机袭击计数器](DroneRaidCounter.md): 192-192  |  [无人机袭击计数器](DroneRaidCounter.md)-191  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  消失<br><br>** 获得： **<br>** [Success] **<br>  [成功！(事件)](Event_DroneFightSuccess.md)(+1)<br>基础权重：10<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+150<br>- [攀爬动作受限](ModifierClimb.md)为0～3时权重0～-125<br>- [燧石长矛](SpearFlint.md)在手中权重+10<br>- [铜长矛](SpearCopper.md)在手中权重+20<br>- [废金属长矛](SpearScrap.md)在手中权重+20<br>- [黑曜石长矛](SpearObsidian.md)在手中权重+25<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** [Mixed Success] **<br>  [胜负参半(事件)](Event_DroneFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [矛战(技能)](Skill_SpearFighting.md)为0～100时权重0～+75<br>- [攀爬动作受限](ModifierClimb.md)为0～3时权重0～-60<br>- [燧石长矛](SpearFlint.md)在手中权重+10<br>- [铜长矛](SpearCopper.md)在手中权重+20<br>- [废金属长矛](SpearScrap.md)在手中权重+20<br>- [黑曜石长矛](SpearObsidian.md)在手中权重+25<br><br>** [Failure] **<br>  [它撤退了！(事件)](Event_DroneFightFailure.md)(+1)<br>基础权重：20<br><br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_DroneFightBadFailure.md)(+1)<br>基础权重：20<br><br><br>** 相关卡牌 **<br><br>[“一级矛”](tag_Spear.md)可用次数  -50  |  [矛战(技能)](Skill_SpearFighting.md)+1  
用弓箭攻击！<br>  |  30分  |  [简易的弓](BowRustic.md)<br>[简易箭矢](ArrowSimple.md)  |  消失<br><br>** 获得： **<br>** [Success] **<br>  [成功！(事件)](Event_DroneFightSuccess.md)(+1)<br>基础权重：10<br>- [箭术(技能)](Skill_Archery.md)为0～150时权重0～+150<br>- [攀爬动作受限](ModifierClimb.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** [Mixed Success] **<br>  [胜负参半(事件)](Event_DroneFightMixedSuccess.md)(+1)<br>基础权重：15<br>- [箭术(技能)](Skill_Archery.md)为0～100时权重0～+75<br>- [攀爬动作受限](ModifierClimb.md)为0～3时权重0～-60<br><br>** [Failure] **<br>  [它撤退了！(事件)](Event_DroneFightFailure.md)(+1)<br>基础权重：40<br><br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_DroneFightBadFailure.md)(+1)<br>基础权重：10<br><br><br>** 相关卡牌 **<br><br>[简易的弓](BowRustic.md)可用次数  -1<br><br>** 相关卡牌 **<br><br>[简易箭矢](ArrowSimple.md)可用次数  -3  |  [箭术(技能)](Skill_Archery.md)+1  
用枪攻击！<br>  |  30分  |  [枪](Gun.md)  |  消失<br><br>** 获得： **<br>** [Success] **<br>  [成功！(事件)](Event_DroneFightSuccess.md)(+1)<br>基础权重：50<br>- [手枪(技能)](Skill_Handguns.md)为0～150时权重0～+150<br>- [手部动作受限](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** [Mixed Success] **<br>  [胜负参半(事件)](Event_DroneFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [手枪(技能)](Skill_Handguns.md)为0～100时权重0～+75<br>- [手部动作受限](ModifierHand.md)为0～3时权重0～-60<br><br>** [Failure] **<br>  [它撤退了！(事件)](Event_DroneFightFailure.md)(+1)<br>基础权重：40<br><br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_DroneFightBadFailure.md)(+1)<br>基础权重：10<br><br><br>** 相关卡牌 **<br><br>[枪](Gun.md)可用次数  -1  |  [手枪(技能)](Skill_Handguns.md)+1  
用投石索攻击！<br>  |  30分  |  [投石索](Sling.md)  |  消失<br><br>** 获得： **<br>** [Success] **<br>  [成功！(事件)](Event_DroneFightSuccess.md)(+1)<br>基础权重：10<br>- [投石索(技能)](Skill_Sling.md)为0～150时权重0～+150<br>- [手部动作受限](ModifierHand.md)为0～3时权重0～-125<br>- [视力](Myopia.md)为0～3时权重0～-100<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** [Mixed Success] **<br>  [胜负参半(事件)](Event_DroneFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [手枪(技能)](Skill_Handguns.md)为0～100时权重0～+75<br>- [手部动作受限](ModifierHand.md)为0～3时权重0～-60<br><br>** [Failure] **<br>  [它撤退了！(事件)](Event_DroneFightFailure.md)(+1)<br>基础权重：30<br><br>** [Bad Failure] **<br>  [我被它伤到了……(事件)](Event_DroneFightBadFailure.md)(+1)<br>基础权重：30<br><br><br>** 相关卡牌 **<br><br>[投石索](Sling.md)可用次数  -1  |  [投石索(技能)](Skill_Sling.md)+1  
撤退<br>  |  15分  |    |  消失<br><br>** 获得： **<br>** [Success] **<br>基础权重：50<br>- [护甲](Armor.md)为1～100时权重+1～+100<br>- [潜行(技能)](Skill_Stealth.md)为1～150时权重+1～+250<br>- [忠犬朋友](DogFriend.md)权重+25<br><br>** [Failure] **<br>  [无人机开火了！(事件)](Event_DroneFightFailedRetreat.md)(+1)<br>基础权重：50<br>  |  [潜行(技能)](Skill_Stealth.md)+1  
