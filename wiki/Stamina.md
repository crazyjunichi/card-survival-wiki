# 耐力  
变化范围: 0 ~ 32  
基础变化率: +2 / 每15分钟  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
0 ～ 0  |  <img decoding="async" src="Sprite/Tired.png" style="width:20px;">昏厥  |  Zzz……  |  [体重](Weight.md)加成-4<br>[食欲](Appetite.md)+100  |    
1 ～ 15  |  <img decoding="async" src="Sprite/Tired.png" style="width:20px;">筋疲力尽  |  太累了，我要休息一下。  |  [体重](Weight.md)加成-4<br>[食欲](Appetite.md)+100<br>[体感温度](TemperaturePerceived.md)+10  |    
16 ～ 25  |  <img decoding="async" src="Sprite/Tired.png" style="width:20px;">疲惫  |  大量体力活动让我有点累了。  |  [体重](Weight.md)加成-2<br>[食欲](Appetite.md)+75<br>[体感温度](TemperaturePerceived.md)+5  |    
26 ～ 31  |  活跃  |    |  [体重](Weight.md)加成-1<br>[食欲](Appetite.md)+50<br>[体感温度](TemperaturePerceived.md)+2  |    
32 ～ 32  |  休息中  |    |    |    
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[(事件)你昏过去了](Event_FaintDizzy.md)  |  继续  |  100  
[(事件)你昏过去了](Event_FaintExhaustion.md)  |  继续  |  100  
[椅子](ChairPlaced.md)  |  休息1小时  |  40  
[座椅](SeatAttached.md)  |  休息1小时  |  40  
[座椅](SeatPlaced.md)  |  休息1小时  |  40  
[木床](BedWooden.md)  |  睡觉  |  30  
[(事件)Event_WestonSpecial2e_CardName](Event_WestonSpecial2e.md)  |  Event_WestonSpecial2e_DismantleActions[0].ActionName  |  30  
[椅子](ChairPlaced.md)  |  暂候15分钟  |  15  
[座椅](SeatAttached.md)  |  暂候15分钟  |  15  
[座椅](SeatPlaced.md)  |  暂候15分钟  |  15  
[盛开的外星植物](AlienGrowth.md)  |  砍倒  |  -1  
[外星植物](AlienGrowthCleared.md)  |  砍倒  |  -1  
[金鸡纳树](CinchonaTree.md)  |  砍树  |  -1  
[金鸡纳树](CinchonaTree.md)  |  采集树皮  |  -1  
[剥净的金鸡纳树](CinchonaTreeCleared.md)  |  砍树  |  -1  
[小芒果树](MangoTreeYoung.md)  |  砍树  |  -1  
[环礁](Atoll.md)  |  探索  |  -1  
[隐秘港湾](Cove.md)  |  探索  |  -1  
[丛林边缘](Outskirts.md)  |  探索  |  -1  
[幼年椰子树](PalmTreeYoung.md)  |  砍树  |  -1  
[小棕榈树](SmallPalm.md)  |  砍树  |  -1  
[小树](SmallTree.md)  |  砍树  |  -1  
[小杏仁树](TropicalAlmondTreeYoung.md)  |  砍树  |  -1  
[野枣丛](WildJujube.md)  |  砍倒  |  -1  
[摘光的野枣从](WildJujubeCleared.md)  |  砍倒  |  -1  
[青椰子](CoconutHusked.md)  |  剥  |  -2  
[青椰子](CoconutHusked.md)  |  剥  |  -2  
[稻秆](RiceStalks.md)  |  打谷  |  -2  
[海湾](Bay.md)  |  随便逛逛  |  -2  
[沙滩](Beach.md)  |  随便逛逛  |  -2  
[前往丛林边缘(沙滩)](Path_BeachToOutskirts.md)  |  前往  |  -2  
[前往岩滩(沙滩)](Path_BeachToRocks.md)  |  前往  |  -2  
[(事件)鼓](Event_DrumMenu.md)  |  跃动的节奏  |  -2.5  
[鼓](Drum.md)  |  跃动的节奏  |  -2.5  
[鼓](Drum.md)  |  入迷击鼓  |  -2.5  
[蜥蜴皮手鼓](LizardDrum.md)  |  跃动的节奏  |  -2.5  
[蜥蜴皮手鼓](LizardDrum.md)  |  入迷击鼓  |  -2.5  
[(事件)鼓](Event_DrumMenu.md)  |  练习  |  -3  
[鼓](Drum.md)  |  练习  |  -3  
[蜥蜴皮手鼓](LizardDrum.md)  |  练习  |  -3  
[椰子树](PalmTreeNew.md)  |  扔石头  |  -3  
[劈开的西米树干](SagoSplitLog.md)  |  刮取树芯  |  -3  
[青椰子](CoconutHusked.md)  |  剥  |  -4  
[水椰子](NipaFruit.md)  |  取得种子  |  -4  
[鱼镖](HarpoonBone.md)  |  训练  |  -4  
[废墟(泥屋)](Debris.md)  |  清理  |  -4  
[酸湖](AcidLake.md)  |  探索  |  -4  
[鸟岩岛](BirdRock.md)  |  探索  |  -4  
[丛林深处](DeepJungle.md)  |  探索  |  -4  
[丛林深处](DeepJungle.md)  |  砍伐木材  |  -4  
[丛林深处](DeepJungle.md)  |  砍伐木材  |  -4  
[荒芜沙滩](DesolateBeach.md)  |  探索  |  -4  
[东部草原](GrasslandsE.md)  |  探索  |  -4  
[东部草原](GrasslandsE.md)  |  挖土  |  -4  
[西部草原](GrasslandsW.md)  |  探索  |  -4  
[西部草原](GrasslandsW.md)  |  挖土  |  -4  
[东部高地](HighlandsEastern.md)  |  探索  |  -4  
[东部高地](HighlandsEastern.md)  |  砍伐木材  |  -4  
[东部高地](HighlandsEastern.md)  |  砍伐木材  |  -4  
[西部高地](HighlandsWestern.md)  |  探索  |  -4  
[西部高地](HighlandsWestern.md)  |  砍伐木材  |  -4  
[西部高地](HighlandsWestern.md)  |  砍伐木材  |  -4  
[丛林](Jungle.md)  |  探索  |  -4  
[丛林](Jungle.md)  |  砍伐木材  |  -4  
[丛林](Jungle.md)  |  砍伐木材  |  -4  
[丛林高地](JungleHighlands.md)  |  探索  |  -4  
[丛林高地](JungleHighlands.md)  |  砍伐木材  |  -4  
[丛林高地](JungleHighlands.md)  |  砍伐木材  |  -4  
[红树林](Mangroves.md)  |  探索  |  -4  
[红树林](Mangroves.md)  |  砍伐木材  |  -4  
[红树林](Mangroves.md)  |  砍伐木材  |  -4  
[丛林边缘](Outskirts.md)  |  砍伐木材  |  -4  
[丛林边缘](Outskirts.md)  |  砍伐木材  |  -4  
[岩滩](Rocks.md)  |  探索  |  -4  
[神秘谷](SecretValley.md)  |  探索  |  -4  
[神秘谷](SecretValley.md)  |  挖土  |  -4  
[沉船(鸟岩岛)](Shipwreck.md)  |  探索沉船  |  -4  
[火山](Volcano.md)  |  探索  |  -4  
[湿地丛林](Wetlands.md)  |  探索  |  -4  
[湿地丛林](Wetlands.md)  |  砍伐木材  |  -4  
[湿地丛林](Wetlands.md)  |  砍伐木材  |  -4  
[前往火山](Path_AcidLakeToVolcano.md)  |  前往  |  -4  
[前往沙滩(海湾)](Path_BayToBeach.md)  |  前往  |  -4  
[前往丛林小径(海湾)](Path_BayToJungle.md)  |  前往  |  -4  
[前往红树林](Path_BayToMangroves.md)  |  前往  |  -4  
[前往海湾](Path_BeachToBay.md)  |  前往  |  -4  
[前往丛林高地(丛林深处)](Path_DeepJungleToJungleHighlands.md)  |  前往  |  -4  
[前往神秘谷(丛林深处)](Path_DeepJungleToValley.md)  |  前往  |  -4  
[前往湿地(丛林深处)](Path_DeepJungleToWetlands.md)  |  前往  |  -4  
[前往东部草原(荒芜沙滩)](Path_DesolateBeachToGrasslandsE.md)  |  前往  |  -4  
[前往红树林(荒芜沙滩)](Path_DesolateBeachToMangroves.md)  |  前往  |  -4  
[前往火山(荒芜沙滩)](Path_DesolateBeachToVolcano.md)  |  前往  |  -4  
[前往荒芜沙滩(东部草原)](Path_GrasslandsEToDesolateBeach.md)  |  前往  |  -4  
[前往西部草原(东部草原)](Path_GrasslandsEToGrasslandsW.md)  |  前往  |  -4  
[前往东部草原(西部草原)](Path_GrasslandsWToGrasslandsE.md)  |  前往  |  -4  
[前往丛林小径](Path_GrasslandsWToJungle.md)  |  前往  |  -4  
[前往红树林(西部草原)](Path_GrasslandsWToMangroves.md)  |  前往  |  -4  
[前往东部草原(东部高地)](Path_HighlandsEToGrasslandsE.md)  |  前往  |  -4  
[前往西部高地](Path_HighlandsEToHighlandsW.md)  |  前往  |  -4  
[前往火山(东部高地)](Path_HighlandsEToVolcano.md)  |  前往  |  -4  
[前往西部草原(西部高地)](Path_HighlandsWToGrasslandsW.md)  |  前往  |  -4  
[前往东部高地(西部高地)](Path_HighlandsWToHighlandsE.md)  |  前往  |  -4  
[前往丛林高地(西部高地)](Path_HighlandsWToJungleHighlands.md)  |  前往  |  -4  
[前往丛林深处(丛林高地)](Path_JungleHighlandsToDeepJungle.md)  |  前往  |  -4  
[前往西部高地(丛林高地)](Path_JungleHighlandsToHighlandsW.md)  |  前往  |  -4  
[前往海湾(丛林)](Path_JungleToBay.md)  |  前往  |  -4  
[前往西部草原(丛林)](Path_JungleToGrasslandsW.md)  |  前往  |  -4  
[前往丛林边缘(丛林)](Path_JungleToOutskirts.md)  |  前往  |  -4  
[前往湿地(丛林)](Path_JungleToWetlands.md)  |  前往  |  -4  
[前往海湾](Path_MangrovesToBay.md)  |  前往  |  -4  
[前往荒芜沙滩](Path_MangrovesToDesolateBeach.md)  |  前往  |  -4  
[前往沙滩(丛林边缘)](Path_OutskirtsToBeach.md)  |  前往  |  -4  
[前往丛林小径](Path_OutskirtsToJungle.md)  |  前往  |  -4  
[前往沙滩(岩滩)](Path_RocksToBeach.md)  |  前往  |  -4  
[前往丛林深处(神秘谷)](Path_ValleyToDeepJungle.md)  |  前往  |  -4  
[前往酸湖(火山)](Path_VolcanoToAcidLake.md)  |  前往  |  -4  
[前往荒芜沙滩(火山)](Path_VolcanoToDesolateBeach.md)  |  前往  |  -4  
[前往东部高地(火山)](Path_VolcanoToHighlandsE.md)  |  前往  |  -4  
[前往丛林深处(湿地丛林)](Path_WetlandsToDeepJungle.md)  |  前往  |  -4  
[前往丛林小径(湿地丛林)](Path_WetlandsToJungle.md)  |  前往  |  -4  
[水稻](RicePlant.md)  |  采集  |  -4  
[书架(蓝图)](Bp_Bookshelf.md)  |  蓝图制造  |  -5  
[砂浆(蓝图)](Bp_Mortar.md)  |  蓝图制造  |  -5  
[架子(蓝图)](Bp_Shelf.md)  |  蓝图制造  |  -5  
[(事件)鼓](Event_DrumMenu.md)  |  激昂的节奏  |  -5  
[鼓](Drum.md)  |  激昂的节奏  |  -5  
[蜥蜴皮手鼓](LizardDrum.md)  |  激昂的节奏  |  -5  
[蜥蜴皮手鼓](LizardDrum.md)  |  唤灵的节奏  |  -5  
[狭窄通道(洞穴底层)](CrystalChamberEntranceClosed.md)  |  挖  |  -5  
[狭窄通道(潮湿洞穴)](DarkCaveCaveEntranceClosed.md)  |  挖  |  -5  
[狭窄通道(洞穴中层)](DarkChamberCaveEntranceClosed.md)  |  挖  |  -5  
[狭窄通道(晶石洞穴)](FloodedChamberEntranceClosed.md)  |  挖  |  -5  
[狭窄通道(隧道)](HighChamberEntranceClosed.md)  |  挖  |  -5  
[竖井](ShaftFloodedChamberToCrystalChamber.md)  |  爬上去  |  -5  
[竖井](ShaftLowChamberToMidChamber.md)  |  爬上去  |  -5  
[竖井](ShaftMidChamberToHighChamber.md)  |  爬上去  |  -5  
[坍塌的隧道入口(东部高地)](TunnelEntranceClosed.md)  |  挖  |  -5  
[水下洞穴](UnderwaterEntrance.md)  |  进入  |  -5  
[水下出口](UnderwaterExit.md)  |  离开  |  -5  
[水椰子](NipaFruit.md)  |  取得种子  |  -6  
[竖井](ShaftFloodedChamberToCrystalChamber.md)  |  练习攀爬  |  -6  
[竖井](ShaftLowChamberToMidChamber.md)  |  练习攀爬  |  -6  
[前往丛林高地(隐秘港湾)](Path_CoveToJungleHighlands.md)  |  练习攀爬  |  -6  
[前往东部高地(东部草原)](Path_GrasslandsEToHighlandsE.md)  |  前往  |  -6  
[前往西部高地(西部草原)](Path_GrasslandsWToHighlandsW.md)  |  前往  |  -6  
[前往西部草原(红树林)](Path_MangrovesToGrasslandsW.md)  |  前往  |  -6  
[前往丛林高地](Path_ValleyToJungleHighlands.md)  |  练习攀爬  |  -6  
[前往丛林高地(湿地丛林)](Path_WetlandsToJungleHighlands.md)  |  练习攀爬  |  -6  
[大树](LargeTree.md)  |  砍树  |  -6  
[倒下的大树](LargeTreeFelled.md)  |  修整原木  |  -6  
[摘光的芒果树](MangoTreeCleared.md)  |  砍树  |  -6  
[摘完的椰子树](PalmTreeCleared.md)  |  练习攀爬  |  -6  
[摘完的椰子树](PalmTreeCleared.md)  |  砍倒  |  -6  
[倒下的棕榈树](PalmTreeFelled.md)  |  清除  |  -6  
[椰子树](PalmTreeNew.md)  |  爬树  |  -6  
[椰子树](PalmTreeNew.md)  |  练习攀爬  |  -6  
[椰子树](PalmTreeNew.md)  |  砍倒  |  -6  
[椰子树](PalmTreeNewMultiEventOld.md)  |  爬树  |  -6  
[椰子树](PalmTreeNewMultiEventOld.md)  |  爬树  |  -6  
[椰子树](PalmTreeNewMultiEventOld.md)  |  爬树  |  -6  
[椰子树](PalmTreeNewMultiEventOld.md)  |  爬树  |  -6  
[椰子树](PalmTreeNewMultiEventOld.md)  |  练习攀爬  |  -6  
[椰子树](PalmTreeNewMultiEventOld.md)  |  砍倒  |  -6  
[椰子树](PalmTreeOld.md)  |  爬树  |  -6  
[椰子树](PalmTreeOld.md)  |  练习攀爬  |  -6  
[椰子树](PalmTreeOld.md)  |  砍倒  |  -6  
[树液收集处](PalmTreeSapStation.md)  |  爬树  |  -6  
[树液收集处](PalmTreeSapStation.md)  |  练习攀爬  |  -6  
[树液收集处](PalmTreeSapStation.md)  |  砍倒  |  -6  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  爬树  |  -6  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  练习攀爬  |  -6  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  砍倒  |  -6  
[椰子树](PalmTree_IH.md)  |  爬树  |  -6  
[椰子树](PalmTree_Unique.md)  |  爬树摘椰子  |  -6  
[椰子树](PalmTree_Unique.md)  |  爬树摘椰子  |  -6  
[椰子树](PalmTree_Unique.md)  |  爬树摘椰子  |  -6  
[西米树](SagoPalm.md)  |  砍树  |  -6  
[倒下的西米树](SagoPalmFelled.md)  |  从中劈开  |  -6  
[摘光的热带杏仁树](TropicalAlmondTreeCleared.md)  |  砍树  |  -6  
[倒下的热带杏仁树](TropicalAlmondTreeFelled.md)  |  清理树枝  |  -6  
[海鸥巢](SeagullNest.md)  |  攀爬  |  -6  
[扫帚](Broom.md)  |  训练  |  -8  
[铜长矛](SpearCopper.md)  |  训练  |  -8  
[鱼叉](SpearFishing.md)  |  训练  |  -8  
[燧石长矛](SpearFlint.md)  |  训练  |  -8  
[黑曜石长矛](SpearObsidian.md)  |  训练  |  -8  
[简易长矛](SpearRustic.md)  |  训练  |  -8  
[废金属长矛](SpearScrap.md)  |  训练  |  -8  
[废墟(泥屋)](Debris.md)  |  清理  |  -8  
[漂浮的残骸](FloatingDebris.md)  |  采集  |  -8  
[大树](LargeTree.md)  |  砍树  |  -8  
[倒下的大树](LargeTreeFelled.md)  |  修整原木  |  -8  
[摘光的芒果树](MangoTreeCleared.md)  |  砍树  |  -8  
[摘完的椰子树](PalmTreeCleared.md)  |  砍倒  |  -8  
[倒下的棕榈树](PalmTreeFelled.md)  |  清除  |  -8  
[椰子树](PalmTreeNew.md)  |  砍倒  |  -8  
[椰子树](PalmTreeNewMultiEventOld.md)  |  砍倒  |  -8  
[椰子树](PalmTreeOld.md)  |  砍倒  |  -8  
[树液收集处](PalmTreeSapStation.md)  |  砍倒  |  -8  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  砍倒  |  -8  
[西米树](SagoPalm.md)  |  砍树  |  -8  
[倒下的西米树](SagoPalmFelled.md)  |  从中劈开  |  -8  
[摘光的热带杏仁树](TropicalAlmondTreeCleared.md)  |  砍树  |  -8  
[倒下的热带杏仁树](TropicalAlmondTreeFelled.md)  |  清理树枝  |  -8  
[(事件)我游不动了……](Event_SwimFail.md)  |  游回去  |  -10  
[忠犬朋友](DogFriend.md)  |  一起玩耍  |  -10  
[隐秘港湾](Path_BirdRockToCove.md)  |  游泳  |  -10  
[荒芜沙滩(鸟岩岛)](Path_BirdRockToDesolateBeach.md)  |  游泳  |  -10  
[岩滩(鸟岩岛)](Path_BirdRockToRocks.md)  |  游泳  |  -10  
[鸟岩岛(隐秘港湾)](Path_CoveToBirdRock.md)  |  游泳  |  -10  
[鸟岩岛(荒芜沙滩)](Path_DesolateBeachToBirdRock.md)  |  游泳  |  -10  
[鸟岩岛](Path_RocksToBirdRock.md)  |  游泳  |  -10  
[海水(覆溺洞穴)](Sea_Cave.md)  |  潜水  |  -10  
[竖井](ShaftCrystalChamberToFloodedChamber.md)  |  爬下去  |  -10  
[竖井(洞穴上层)](ShaftHighChamberToMidChamber.md)  |  爬下去  |  -10  
[竖井(洞穴中层)](ShaftMidChamberToLowChamber.md)  |  爬下去  |  -10  
[海(环礁)](Sea_Atoll.md)  |  潜水  |  -10  
[海(海湾)](Sea_Bay.md)  |  潜水  |  -10  
[海(沙滩)](Sea_Beach.md)  |  潜水  |  -10  
[海(沙滩)](Sea_Cove.md)  |  潜水  |  -10  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  潜水  |  -10  
[海(红树林)](Sea_Mangroves.md)  |  潜水  |  -10  
[海](Sea_Raft.md)  |  潜水  |  -10  
[海(鸟岩岛)](Sea_Rocks.md)  |  潜水  |  -10  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  爬下去  |  -10  
[半根原木](HalfLog.md)  |  切割成木材  |  -12  
[原木](Log.md)  |  截成两段  |  -12  
[水槽](WateringTrough.md)  |  拆除  |  -15  
[狭窄隧道(洞穴底层)](NarrowTunnelEntrance.md)  |  进入  |  -15  
[洞穴底层](NarrowTunnelExit.md)  |  进入  |  -15  
[半根原木](HalfLog.md)  |  切割成木材  |  -16  
[原木](Log.md)  |  截成两段  |  -16  
[铜矿脉(狭窄隧道)](CopperVein.md)  |  采矿  |  -20  
[火炉(熄灭)](StoveExtinguished.md)  |  拆除  |  -20  
[木板(蓝图)](Bp_Planks.md)  |  蓝图制造  |  -20  
[(事件)时候已到！](Event_Pregnancy.md)  |  分娩！  |  -20  
[坑洞](HighlandHoleEntrance.md)  |  爬下去  |  -20  
[离开](HighlandHoleExit.md)  |  爬上去  |  -20  
[前往丛林高地(隐秘港湾)](Path_CoveToJungleHighlands.md)  |  爬上去  |  -20  
[前往山谷悬崖](Path_JungleHighlandsToValley.md)  |  爬下去  |  -20  
[前往湿地悬崖](Path_JungleHighlandsToWetlands.md)  |  攀爬  |  -20  
[前往丛林高地](Path_ValleyToJungleHighlands.md)  |  爬上去  |  -20  
[前往丛林高地(湿地丛林)](Path_WetlandsToJungleHighlands.md)  |  爬上去  |  -20  
[滤水器](WaterFilter.md)  |  拆除  |  -20  
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[海水(覆溺洞穴)](Sea_Cave.md)  |  潜水  |  11 ~ 32  
[竖井](ShaftCrystalChamberToFloodedChamber.md)  |  爬下去  |  11 ~ 32  
[竖井](ShaftFloodedChamberToCrystalChamber.md)  |  爬上去  |  11 ~ 32  
[竖井](ShaftFloodedChamberToCrystalChamber.md)  |  练习攀爬  |  11 ~ 32  
[竖井(洞穴上层)](ShaftHighChamberToMidChamber.md)  |  爬下去  |  11 ~ 32  
[竖井](ShaftLowChamberToMidChamber.md)  |  爬上去  |  11 ~ 32  
[竖井](ShaftLowChamberToMidChamber.md)  |  练习攀爬  |  11 ~ 32  
[竖井](ShaftMidChamberToHighChamber.md)  |  爬上去  |  11 ~ 32  
[竖井(洞穴中层)](ShaftMidChamberToLowChamber.md)  |  爬下去  |  11 ~ 32  
[坑洞](HighlandHoleEntrance.md)  |  爬下去  |  11 ~ 32  
[离开](HighlandHoleExit.md)  |  爬上去  |  11 ~ 32  
[丛林深处](DeepJungle.md)  |  砍伐木材  |  11 ~ 32  
[丛林深处](DeepJungle.md)  |  砍伐木材  |  11 ~ 32  
[东部草原](GrasslandsE.md)  |  挖土  |  11 ~ 32  
[西部草原](GrasslandsW.md)  |  挖土  |  11 ~ 32  
[东部高地](HighlandsEastern.md)  |  砍伐木材  |  11 ~ 32  
[东部高地](HighlandsEastern.md)  |  砍伐木材  |  11 ~ 32  
[西部高地](HighlandsWestern.md)  |  砍伐木材  |  11 ~ 32  
[西部高地](HighlandsWestern.md)  |  砍伐木材  |  11 ~ 32  
[丛林](Jungle.md)  |  砍伐木材  |  11 ~ 32  
[丛林](Jungle.md)  |  砍伐木材  |  11 ~ 32  
[丛林高地](JungleHighlands.md)  |  砍伐木材  |  11 ~ 32  
[丛林高地](JungleHighlands.md)  |  砍伐木材  |  11 ~ 32  
[红树林](Mangroves.md)  |  砍伐木材  |  11 ~ 32  
[红树林](Mangroves.md)  |  砍伐木材  |  11 ~ 32  
[丛林边缘](Outskirts.md)  |  砍伐木材  |  11 ~ 32  
[丛林边缘](Outskirts.md)  |  砍伐木材  |  11 ~ 32  
[海(环礁)](Sea_Atoll.md)  |  潜水  |  11 ~ 32  
[海(海湾)](Sea_Bay.md)  |  潜水  |  11 ~ 32  
[海(沙滩)](Sea_Beach.md)  |  潜水  |  11 ~ 32  
[海(沙滩)](Sea_Cove.md)  |  潜水  |  11 ~ 32  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  潜水  |  11 ~ 32  
[海(红树林)](Sea_Mangroves.md)  |  潜水  |  11 ~ 32  
[海](Sea_Raft.md)  |  潜水  |  11 ~ 32  
[海(鸟岩岛)](Sea_Rocks.md)  |  潜水  |  11 ~ 32  
[神秘谷](SecretValley.md)  |  挖土  |  11 ~ 32  
[沉船(鸟岩岛)](Shipwreck.md)  |  探索沉船  |  11 ~ 32  
[湿地丛林](Wetlands.md)  |  砍伐木材  |  11 ~ 32  
[湿地丛林](Wetlands.md)  |  砍伐木材  |  11 ~ 32  
[前往火山](Path_AcidLakeToVolcano.md)  |  前往  |  11 ~ 32  
[前往丛林小径(海湾)](Path_BayToJungle.md)  |  前往  |  11 ~ 32  
[前往丛林高地(隐秘港湾)](Path_CoveToJungleHighlands.md)  |  爬上去  |  11 ~ 32  
[前往丛林高地(隐秘港湾)](Path_CoveToJungleHighlands.md)  |  练习攀爬  |  11 ~ 32  
[前往丛林高地(丛林深处)](Path_DeepJungleToJungleHighlands.md)  |  前往  |  11 ~ 32  
[前往神秘谷(丛林深处)](Path_DeepJungleToValley.md)  |  前往  |  11 ~ 32  
[前往湿地(丛林深处)](Path_DeepJungleToWetlands.md)  |  前往  |  11 ~ 32  
[前往西部草原(东部草原)](Path_GrasslandsEToGrasslandsW.md)  |  前往  |  11 ~ 32  
[前往东部高地(东部草原)](Path_GrasslandsEToHighlandsE.md)  |  前往  |  11 ~ 32  
[前往东部草原(西部草原)](Path_GrasslandsWToGrasslandsE.md)  |  前往  |  11 ~ 32  
[前往西部高地(西部草原)](Path_GrasslandsWToHighlandsW.md)  |  前往  |  11 ~ 32  
[前往丛林小径](Path_GrasslandsWToJungle.md)  |  前往  |  11 ~ 32  
[前往东部草原(东部高地)](Path_HighlandsEToGrasslandsE.md)  |  前往  |  11 ~ 32  
[前往西部高地](Path_HighlandsEToHighlandsW.md)  |  前往  |  11 ~ 32  
[前往火山(东部高地)](Path_HighlandsEToVolcano.md)  |  前往  |  11 ~ 32  
[前往西部草原(西部高地)](Path_HighlandsWToGrasslandsW.md)  |  前往  |  11 ~ 32  
[前往东部高地(西部高地)](Path_HighlandsWToHighlandsE.md)  |  前往  |  11 ~ 32  
[前往丛林高地(西部高地)](Path_HighlandsWToJungleHighlands.md)  |  前往  |  11 ~ 32  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  爬下去  |  11 ~ 32  
[前往丛林深处(丛林高地)](Path_JungleHighlandsToDeepJungle.md)  |  前往  |  11 ~ 32  
[前往西部高地(丛林高地)](Path_JungleHighlandsToHighlandsW.md)  |  前往  |  11 ~ 32  
[前往山谷悬崖](Path_JungleHighlandsToValley.md)  |  爬下去  |  11 ~ 32  
[前往湿地悬崖](Path_JungleHighlandsToWetlands.md)  |  攀爬  |  11 ~ 32  
[前往海湾(丛林)](Path_JungleToBay.md)  |  前往  |  11 ~ 32  
[前往西部草原(丛林)](Path_JungleToGrasslandsW.md)  |  前往  |  11 ~ 32  
[前往丛林边缘(丛林)](Path_JungleToOutskirts.md)  |  前往  |  11 ~ 32  
[前往湿地(丛林)](Path_JungleToWetlands.md)  |  前往  |  11 ~ 32  
[前往西部草原(红树林)](Path_MangrovesToGrasslandsW.md)  |  前往  |  11 ~ 32  
[前往丛林小径](Path_OutskirtsToJungle.md)  |  前往  |  11 ~ 32  
[前往丛林深处(神秘谷)](Path_ValleyToDeepJungle.md)  |  前往  |  11 ~ 32  
[前往丛林高地](Path_ValleyToJungleHighlands.md)  |  爬上去  |  11 ~ 32  
[前往丛林高地](Path_ValleyToJungleHighlands.md)  |  练习攀爬  |  11 ~ 32  
[前往酸湖(火山)](Path_VolcanoToAcidLake.md)  |  前往  |  11 ~ 32  
[前往东部高地(火山)](Path_VolcanoToHighlandsE.md)  |  前往  |  11 ~ 32  
[前往丛林深处(湿地丛林)](Path_WetlandsToDeepJungle.md)  |  前往  |  11 ~ 32  
[前往丛林小径(湿地丛林)](Path_WetlandsToJungle.md)  |  前往  |  11 ~ 32  
[前往丛林高地(湿地丛林)](Path_WetlandsToJungleHighlands.md)  |  爬上去  |  11 ~ 32  
[前往丛林高地(湿地丛林)](Path_WetlandsToJungleHighlands.md)  |  练习攀爬  |  11 ~ 32  
[大树](LargeTree.md)  |  砍树  |  11 ~ 32  
[大树](LargeTree.md)  |  砍树  |  11 ~ 32  
[摘光的芒果树](MangoTreeCleared.md)  |  砍树  |  11 ~ 32  
[摘光的芒果树](MangoTreeCleared.md)  |  砍树  |  11 ~ 32  
[摘完的椰子树](PalmTreeCleared.md)  |  练习攀爬  |  11 ~ 32  
[摘完的椰子树](PalmTreeCleared.md)  |  砍倒  |  11 ~ 32  
[摘完的椰子树](PalmTreeCleared.md)  |  砍倒  |  11 ~ 32  
[倒下的棕榈树](PalmTreeFelled.md)  |  清除  |  11 ~ 32  
[倒下的棕榈树](PalmTreeFelled.md)  |  清除  |  11 ~ 32  
[椰子树](PalmTreeNew.md)  |  爬树  |  11 ~ 32  
[椰子树](PalmTreeNew.md)  |  练习攀爬  |  11 ~ 32  
[椰子树](PalmTreeNew.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTreeNew.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTreeNew.md)  |  扔石头  |  11 ~ 32  
[椰子树](PalmTreeNew.md)  |  派出猕猴  |  11 ~ 32  
[椰子树](PalmTreeNewMultiEventOld.md)  |  爬树  |  11 ~ 32  
[椰子树](PalmTreeNewMultiEventOld.md)  |  爬树  |  11 ~ 32  
[椰子树](PalmTreeNewMultiEventOld.md)  |  爬树  |  11 ~ 32  
[椰子树](PalmTreeNewMultiEventOld.md)  |  爬树  |  11 ~ 32  
[椰子树](PalmTreeNewMultiEventOld.md)  |  练习攀爬  |  11 ~ 32  
[椰子树](PalmTreeNewMultiEventOld.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTreeNewMultiEventOld.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTreeOld.md)  |  爬树  |  11 ~ 32  
[椰子树](PalmTreeOld.md)  |  练习攀爬  |  11 ~ 32  
[椰子树](PalmTreeOld.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTreeOld.md)  |  砍倒  |  11 ~ 32  
[树液收集处](PalmTreeSapStation.md)  |  爬树  |  11 ~ 32  
[树液收集处](PalmTreeSapStation.md)  |  练习攀爬  |  11 ~ 32  
[树液收集处](PalmTreeSapStation.md)  |  砍倒  |  11 ~ 32  
[树液收集处](PalmTreeSapStation.md)  |  砍倒  |  11 ~ 32  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  爬树  |  11 ~ 32  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  练习攀爬  |  11 ~ 32  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  砍倒  |  11 ~ 32  
[树液补给点(空)](PalmTreeSapStationEmpty.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTree_IH.md)  |  爬树  |  11 ~ 32  
[椰子树](PalmTree_IH.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTree_IH.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTree_Unique.md)  |  爬树摘椰子  |  11 ~ 32  
[椰子树](PalmTree_Unique.md)  |  爬树摘椰子  |  11 ~ 32  
[椰子树](PalmTree_Unique.md)  |  爬树摘椰子  |  11 ~ 32  
[椰子树](PalmTree_Unique.md)  |  爬树摘椰子  |  11 ~ 32  
[椰子树](PalmTree_Unique.md)  |  砍倒  |  11 ~ 32  
[椰子树](PalmTree_Unique.md)  |  砍倒  |  11 ~ 32  
[西米树](SagoPalm.md)  |  砍树  |  11 ~ 32  
[西米树](SagoPalm.md)  |  砍树  |  11 ~ 32  
[倒下的西米树](SagoPalmFelled.md)  |  从中劈开  |  11 ~ 32  
[倒下的西米树](SagoPalmFelled.md)  |  从中劈开  |  11 ~ 32  
[摘光的热带杏仁树](TropicalAlmondTreeCleared.md)  |  砍树  |  11 ~ 32  
[摘光的热带杏仁树](TropicalAlmondTreeCleared.md)  |  砍树  |  11 ~ 32  
[倒下的热带杏仁树](TropicalAlmondTreeFelled.md)  |  清理树枝  |  11 ~ 32  
[倒下的热带杏仁树](TropicalAlmondTreeFelled.md)  |  清理树枝  |  11 ~ 32  
[海鸥巢](SeagullNest.md)  |  攀爬  |  11 ~ 32  
[劈开的西米树干](SagoSplitLog.md)  |  刮取树芯  |  8 ~ 32  
