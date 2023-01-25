# 水分  
变化范围: 0 ~ 288  
基础变化率: -1 / 每15分钟  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
211 ～ 260  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">轻微口渴  |  有点渴了  |    |    
151 ～ 210  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">口渴  |  我想喝点什么  |    |    
91 ～ 150  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">非常口渴  |  我得喝点什么  |  [情绪](Morale.md)加成-1<br>[压力](Stress.md)加成+1  |    
61 ～ 90  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">脱水  |  我必须要赶紧喝点什么  |  [情绪](Morale.md)加成-2<br>[压力](Stress.md)加成+1  |    
31 ～ 60  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">严重脱水  |  我严重脱水了  |  [情绪](Morale.md)加成-2<br>[压力](Stress.md)加成+2  |    
1 ～ 30  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">极度脱水  |  我撑不了多久了  |  [情绪](Morale.md)加成-3<br>[压力](Stress.md)加成+3  |    
0 ～ 0  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">死于口渴  |  你死于脱水。  |    |    
## 加成值影响因素  
来源  |  操作  |  值  
----  |  ----  |  ----  
[鱼干](FishDried.md)  |  食用  |  加成0  
[咸鱼](FishSalted.md)  |  食用  |  加成0  
[卡瓦根](KavaRoot.md)  |  食用  |  加成0  
[捣碎的卡瓦根](KavaRootGround.md)  |  食用  |  加成0  
[蜂蜜西米饼](SagoFlatbreadHoney.md)  |  食用  |  加成0  
[果酱西米饼](SagoFlatbreadJam.md)  |  食用  |  加成0  
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[后有风暴](OpenSea_StormBehind.md)  |  喝雨水  |  75  
[后有风暴](OpenSea_StormBehindInfinite.md)  |  喝雨水  |  75  
[前有风暴](OpenSea_StormFront.md)  |  喝雨水  |  75  
[海鲜杂烩](SeafoodCup.md)  |  食用  |  48  
[醉蟹](DrunkenCrab.md)  |  食用  |  44  
[骨头汤](BoneBroth.md)  |  饮用  |  40  
[应急水包](WaterRation.md)  |  饮用  |  40  
[潮汐池(岩滩)](TidePool.md)  |  饮用  |  40  
[被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  |  饮用  |  40  
[灰水](LQ_AshWater.md)  |  饮用  |  40  
[月季花茶](LQ_ChinaRoseTea.md)  |  饮用  |  40  
[椰子水](LQ_CoconutWater.md)  |  饮用  |  40  
[咖啡](LQ_Coffee.md)  |  饮用  |  40  
[姜茶](LQ_GingerTea.md)  |  饮用  |  40  
[茉莉花茶](LQ_JasmineTea.md)  |  饮用  |  40  
[浸泡的西米](LQ_SoakedSago.md)  |  食用  |  40  
[浸泡的参薯](LQ_SoakedYam.md)  |  食用  |  40  
[蜘蛛兰茶](LQ_SpiderLily.md)  |  饮用  |  40  
[汤力水](LQ_TonicWater.md)  |  饮用  |  40  
[水](LQ_Water.md)  |  饮用  |  40  
[米汤](LQ_WaterRice.md)  |  饮用  |  40  
[盐水](LQ_WaterSalt.md)  |  饮用  |  40  
[有毒的水](LQ_WaterToxic.md)  |  饮用  |  40  
[不安全的水](LQ_WaterUnsafe.md)  |  饮用  |  40  
[海水(覆溺洞穴)](Sea_Cave.md)  |  饮用  |  40  
[海(环礁)](Sea_Atoll.md)  |  饮用  |  40  
[海(海湾)](Sea_Bay.md)  |  饮用  |  40  
[海(沙滩)](Sea_Beach.md)  |  饮用  |  40  
[海(沙滩)](Sea_Cove.md)  |  饮用  |  40  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  饮用  |  40  
[海(红树林)](Sea_Mangroves.md)  |  饮用  |  40  
[海](Sea_Raft.md)  |  饮用  |  40  
[海(鸟岩岛)](Sea_Rocks.md)  |  饮用  |  40  
[卡瓦汤](LQ_Kava.md)  |  饮用  |  35  
[蜂蜜酒](LQ_Mead.md)  |  饮用  |  35  
[棕榈酒](LQ_PalmWine.md)  |  饮用  |  35  
[糖酒](LQ_SugarWine.md)  |  饮用  |  35  
[蜂蜜水](LQ_HoneyWater.md)  |  饮用  |  30  
[脱脂羊奶](LQ_MilkSkimmed.md)  |  饮用  |  30  
[乳清](LQ_MilkWhey.md)  |  饮用  |  30  
[全脂羊奶](LQ_MilkWhole.md)  |  饮用  |  30  
[水椰树汁](LQ_Sap.md)  |  饮用  |  30  
[糖水](LQ_SugarWater.md)  |  饮用  |  30  
[炖羊汤](GoatStew.md)  |  食用  |  25  
[椰子鱼](CoconutFish.md)  |  食用  |  22  
[肉食盛宴](HeartyFeast.md)  |  食用  |  22  
[蜜汁火腿](HoneyGlazedPork.md)  |  食用  |  22  
[丛林沙拉](JungleSalad.md)  |  食用  |  22  
[芦荟膏](AloeVeraGel.md)  |  食用  |  20  
[椰奶](LQ_CoconutMilk.md)  |  饮用  |  20  
[炒菇球](FriedPuffballs.md)  |  食用  |  14  
[热带烤鸡](IslandChicken.md)  |  食用  |  14  
[炸鱼薯条](FishNChips.md)  |  食用  |  10  
[盐水](LQ_WaterSalt.md)  |  饮用  |  10  
[外星结节](AlienNodule.md)  |  食用  |  8  
[芒果](Mango.md)  |  食用  |  8  
[蛋白棒](ProteinBar.md)  |  食用  |  7  
[蛋](Egg.md)  |  食用  |  6  
[受精蛋](EggPartridgeFertilized.md)  |  食用  |  6  
[鸡肉三明治](ChickenSandwich.md)  |  食用  |  6  
[西米糕](SagoSlime.md)  |  食用  |  6  
[山羊奶酪](Cheese.md)  |  食用  |  5  
[鱼肉塔可](FishTaco.md)  |  食用  |  5  
[西米浆](SagoPulp.md)  |  食用  |  5  
[海藻](Seaweed.md)  |  食用  |  5  
[煮熟的参薯](YamBoiled.md)  |  食用  |  5  
[参薯片](YamCut.md)  |  食用  |  5  
[蜂蜜](LQ_Honey.md)  |  饮用  |  5  
[油](LQ_Oil.md)  |  饮用  |  5  
[香茅精油](LQ_OilCitronella.md)  |  饮用  |  5  
[香茅油混合物](LQ_OilCitronellaMix.md)  |  饮用  |  5  
[茉莉精油](LQ_OilJasmine.md)  |  饮用  |  5  
[茉莉油混合物](LQ_OilJasmineMix.md)  |  饮用  |  5  
[香蕉树芯](BananaStem.md)  |  食用  |  4  
[蝙蝠尸体](Bat.md)  |  食用  |  4  
[鸟肉](BirdMeat.md)  |  食用  |  4  
[烤鸟肉](BirdMeatCooked.md)  |  食用  |  4  
[烟熏鸟肉](BirdMeatSmoked.md)  |  食用  |  4  
[野猪肉](BoarMeat.md)  |  食用  |  4  
[烤野猪肉](BoarMeatCooked.md)  |  食用  |  4  
[野猪肉干](BoarMeatDried.md)  |  食用  |  4  
[腌野猪肉](BoarMeatSalted.md)  |  食用  |  4  
[腌制中的野猪肉](BoarMeatSaltedDrying.md)  |  食用  |  4  
[烟熏野猪肉](BoarMeatSmoked.md)  |  食用  |  4  
[烤北梭鱼](BonefishCooked.md)  |  食用  |  4  
[北梭鱼肉](BonefishMeat.md)  |  食用  |  4  
[烟熏北梭鱼](BonefishSmoked.md)  |  食用  |  4  
[椰肉](CoconutMeat.md)  |  食用  |  4  
[松软的烤海螺肉](ConchMeatSoftCooked.md)  |  食用  |  4  
[螃蟹](Crab.md)  |  食用  |  4  
[腌制中的咸鱼肉](FishSaltedDrying.md)  |  食用  |  4  
[羊肉](GoatMeat.md)  |  食用  |  4  
[烤羊肉](GoatMeatCooked.md)  |  食用  |  4  
[羊肉干](GoatMeatDried.md)  |  食用  |  4  
[腌羊肉](GoatMeatSalted.md)  |  食用  |  4  
[腌制中的羊肉](GoatMeatSaltedDrying.md)  |  食用  |  4  
[烟熏羊肉](GoatMeatSmoked.md)  |  食用  |  4  
[绯鲤](Goatfish.md)  |  食用  |  4  
[烤绯鲤](GoatfishCooked.md)  |  食用  |  4  
[烟熏绯鲤](GoatfishSmoked.md)  |  食用  |  4  
[石斑鱼肉](GrouperMeat.md)  |  食用  |  4  
[烤石斑鱼](GrouperMeatCooked.md)  |  食用  |  4  
[烟熏石斑鱼](GrouperMeatSmoked.md)  |  食用  |  4  
[鲱鱼](Herring.md)  |  食用  |  4  
[烤鲱鱼](HerringCooked.md)  |  食用  |  4  
[烟熏鲱鱼](HerringSmoked.md)  |  食用  |  4  
[捣碎的柠檬草](LemonGrassGround.md)  |  食用  |  4  
[柠檬草](LemongrassStalks.md)  |  食用  |  4  
[蜥蜴](Lizard.md)  |  食用  |  4  
[猕猴肉](MacaqueMeat.md)  |  食用  |  4  
[烤猕猴肉](MacaqueMeatCooked.md)  |  食用  |  4  
[猕猴肉干](MacaqueMeatDried.md)  |  食用  |  4  
[腌猕猴肉](MacaqueMeatSalted.md)  |  食用  |  4  
[腌制中的猕猴肉](MacaqueMeatSaltedDrying.md)  |  食用  |  4  
[烟熏猕猴肉](MacaqueMeatSmoked.md)  |  食用  |  4  
[蛋炒饭](EggFriedRice.md)  |  食用  |  4  
[鱼肉蛋饼](FishOmelette.md)  |  食用  |  4  
[辣炒巨蜥肉](LizardFry.md)  |  食用  |  4  
[猕猴肉串](MacaqueSkewers.md)  |  食用  |  4  
[西米蛋糕](SagoCake.md)  |  食用  |  4  
[参薯咖喱](YamCurry.md)  |  食用  |  4  
[巨蜥肉](MonitorMeat.md)  |  食用  |  4  
[烤巨蜥肉](MonitorMeatCooked.md)  |  食用  |  4  
[巨蜥肉干](MonitorMeatDried.md)  |  食用  |  4  
[腌巨蜥肉](MonitorMeatSalted.md)  |  食用  |  4  
[腌制中的巨蜥肉](MonitorMeatSaltedDrying.md)  |  食用  |  4  
[烟熏巨蜥肉](MonitorMeatSmoked.md)  |  食用  |  4  
[老鼠尸体](Mouse.md)  |  食用  |  4  
[剥皮的老鼠](MouseSkinned.md)  |  食用  |  4  
[弹涂鱼](Mudskipper.md)  |  食用  |  4  
[水椰籽](NipaSeeds.md)  |  食用  |  4  
[黄油焗牡蛎](OysterMeatBaked.md)  |  食用  |  4  
[烤牡蛎肉](OysterMeatCooked.md)  |  食用  |  4  
[鹦哥鱼](ParrotFish.md)  |  食用  |  4  
[烤鹦哥鱼](ParrotFishCooked.md)  |  食用  |  4  
[烟熏鹦哥鱼](ParrotFishSmoked.md)  |  食用  |  4  
[小灰山鹑尸体](PartridgeChickDead.md)  |  食用  |  4  
[烤海怪肉](SeahoundCooked.md)  |  食用  |  4  
[海怪肉](Seahoundmeat.md)  |  食用  |  4  
[烤鲨鱼肉](SharkCooked.md)  |  食用  |  4  
[鲨鱼肉](SharkMeat.md)  |  食用  |  4  
[烟熏鲨鱼肉](SharkSmoked.md)  |  食用  |  4  
[烤蛇肉](SnakeCooked.md)  |  食用  |  4  
[捣碎的蛇草](SnakeGrassGround.md)  |  食用  |  4  
[剥皮的蛇](SnakeSkinned.md)  |  食用  |  4  
[捣碎的蜘蛛兰](SpiderLilyGround.md)  |  食用  |  4  
[蜘蛛兰叶](SpiderLilyLeaves.md)  |  食用  |  4  
[干燥的蜘蛛兰叶](SpiderLilyLeavesDried.md)  |  食用  |  4  
[烤马鲅鱼](ThreadfinCooked.md)  |  食用  |  4  
[马鲅鱼肉](ThreadfinMeat.md)  |  食用  |  4  
[烟熏马鲅鱼](ThreadfinSmoked.md)  |  食用  |  4  
[热带杏仁核](TropicalAlmondKernels.md)  |  食用  |  4  
[烤热带杏仁](TropicalAlmondsRoasted.md)  |  食用  |  4  
[烤椰肉](CoconutMeatCooked.md)  |  食用  |  3  
[海螺肉](ConchMeat.md)  |  食用  |  3  
[松软的海螺肉](ConchMeatSoft.md)  |  食用  |  3  
[野枣](JujubeFruits.md)  |  食用  |  3  
[牡蛎肉](OysterMeat.md)  |  食用  |  3  
[海胆肉](UrchinMeat.md)  |  食用  |  3  
[烤蝙蝠](BatCooked.md)  |  食用  |  2  
[黄油](Butter.md)  |  食用  |  2  
[月季](ChinaRoseFlowers.md)  |  食用  |  2  
[烤海螺肉](ConchMeatCooked.md)  |  食用  |  2  
[烤螃蟹](CrabCooked.md)  |  食用  |  2  
[烤蛋](EggCooked.md)  |  食用  |  2  
[脂肪](Fat.md)  |  食用  |  2  
[烤蜥蜴](LizardCooked.md)  |  食用  |  2  
[参薯酱](YamJam.md)  |  食用  |  2  
[烤老鼠](MouseCooked.md)  |  食用  |  2  
[烤弹涂鱼](MudskipperCooked.md)  |  食用  |  2  
[马勃菌](Puffballs.md)  |  食用  |  2  
[腐烂物](RottenRemains.md)  |  食用  |  2  
[西米树芯](SagoSawdust.md)  |  食用  |  2  
[烤海胆](UrchinMeatCooked.md)  |  食用  |  2  
[杂菌](AssortedMushrooms.md)  |  食用  |  1  
[香蕉](Banana.md)  |  食用  |  1  
[辣椒](Chilies.md)  |  食用  |  1  
[咖啡果](CoffeeBerries.md)  |  食用  |  1  
[咖啡果浆](CoffeeBerryPulp.md)  |  食用  |  1  
[水煮蛋](EggBoiled.md)  |  食用  |  1  
[压缩干粮](FoodRation.md)  |  食用  |  1 ~ 4  
[姜](Ginger.md)  |  食用  |  1  
[干姜](GingerDried.md)  |  食用  |  1  
[姜末](GingerGround.md)  |  食用  |  1  
[迷幻菇](MagicMushrooms.md)  |  食用  |  1  
[姜糖](CandiedGinger.md)  |  食用  |  1  
[巧克力](Chocolate.md)  |  食用  |  1  
[炸香蕉](FriedBanana.md)  |  食用  |  1  
[蜜糖](HoneyCandy.md)  |  食用  |  1  
[虫子](Bugs.md)  |  食用  |  0.25  
[鱼杂](FishScraps.md)  |  食用  |  0.25  
[烤鱼杂](FishScrapsCooked.md)  |  食用  |  0.25  
[鱼片](FishSlices.md)  |  食用  |  0.25  
[烤鱼片](FishSlicesCooked.md)  |  食用  |  0.25  
[虾](Prawns.md)  |  食用  |  0.25  
[烤虾](PrawnsCooked.md)  |  食用  |  0.25  
[米饭](RiceCooked.md)  |  食用  |  -1  
[西米饼](SagoFlatbread.md)  |  食用  |  -1  
[寿司](Sushi.md)  |  食用  |  -1  
[干燥的卡瓦根](KavaRootDried.md)  |  食用  |  -3  
[干辣椒](ChiliesDried.md)  |  食用  |  -4  
[烧焦物](CharredRemains.md)  |  吃烧焦物  |  -5  
[西米粉](SagoFlour.md)  |  食用  |  -5  
[(事件)呕吐！](Event_Vomit.md)  |  呕呕呕……  |  -15  
[木炭](Charcoal.md)  |  食用  |  -15  
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[睡袋](BedRoll.md)  |  小憩  |  0 ~ 30  
[睡袋](BedRoll.md)  |  睡觉  |  0 ~ 30  
[简易床](BedRustic.md)  |  小憩  |  0 ~ 30  
[简易床](BedRustic.md)  |  睡觉  |  0 ~ 30  
[木床](BedWooden.md)  |  小憩  |  0 ~ 30  
[木床](BedWooden.md)  |  睡觉  |  0 ~ 30  
[吊床](Hammock.md)  |  小憩  |  0 ~ 30  
[吊床](Hammock.md)  |  睡觉  |  0 ~ 30  
[叶床](LeafBed.md)  |  小憩  |  0 ~ 30  
[叶床](LeafBed.md)  |  睡觉  |  0 ~ 30  
[人鱼巢](MermaidNest.md)  |  小憩  |  0 ~ 30  
[人鱼巢](MermaidNest.md)  |  睡觉  |  0 ~ 30  
[窝棚](Shelter.md)  |  小憩  |  0 ~ 30  
[窝棚](Shelter.md)  |  睡觉  |  0 ~ 30  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  小憩  |  0 ~ 30  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  睡觉  |  0 ~ 30  
[帐篷](TentDeployed.md)  |  小憩  |  0 ~ 30  
[帐篷](TentDeployed.md)  |  睡觉  |  0 ~ 30  
[(事件)无法控制焦虑！](Event_AnxietyAttack.md)  |  继续  |  0 ~ 30  
[(事件)你睡着了！](Event_FallingAsleep.md)  |  Zzz……  |  0 ~ 30  
[木筏庇护所](RaftShelter.md)  |  小憩  |  0 ~ 30  
[木筏庇护所](RaftShelter.md)  |  睡觉  |  0 ~ 30  
