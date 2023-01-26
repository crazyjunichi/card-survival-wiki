# 压力  
变化范围: 0 ~ 240  
基础变化率: +1 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
0 ～ 25  |  <img decoding="async" src="Sprite/Stress.png" style="width:20px;">放松  |    |  [世界观](Structure.md)加成+1  |    
97 ～ 144  |  <img decoding="async" src="Sprite/Stress.png" style="width:20px;">焦虑  |    |  [世界观](Structure.md)加成-1<br>[恶心](Nausea.md)加成+0.25  |    
145 ～ 192  |  <img decoding="async" src="Sprite/Stress.png" style="width:20px;">紧张  |    |  [世界观](Structure.md)加成-1<br>[恶心](Nausea.md)加成+0.5<br>[腹泻](Diarrhoea.md)加成+0.25<br>[压力](Stress.md)加成-0.5<br>[情绪](Morale.md)加成-0.5  |  [手部动作](HandAction.md)<br>[腿部动作](LegAction.md)<br>[压力](Stress.md)-5<br>[休息动作](SleepAction.md)<br>[睡眠钟](SleepClock.md)-2<br>时间-2  
193 ～ 240  |  <img decoding="async" src="Sprite/Stress.png" style="width:20px;">极度紧张  |    |  [世界观](Structure.md)加成-2<br>[恶心](Nausea.md)加成+1<br>[腹泻](Diarrhoea.md)加成+0.5<br>[压力](Stress.md)加成-1<br>[情绪](Morale.md)加成-1  |  [手部动作](HandAction.md)<br>[腿部动作](LegAction.md)<br>[压力](Stress.md)-10<br>[休息动作](SleepAction.md)<br>[睡眠钟](SleepClock.md)-4<br>时间-4  
## 加成值影响因素  
来源  |  操作  |  值  
----  |  ----  |  ----  
[崩解烙印](W_UnravellingMark.md)  |  条件被动  |  加成+2  
[鬼掌印](W_HunterMark.md)  |  条件被动  |  加成+1  
[狭窄隧道](NarrowTunnel.md)  |  被动  |  加成+1  
[铜项链](CopperNecklace.md)  |  被动  |  加成-0.25  
[鲜花项链](FlowerNecklace.md)  |  被动  |  加成-0.25  
[珍珠项链](PearlNecklace.md)  |  被动  |  加成-0.25  
[香茅蜡烛(开)](CandleCitronellaOn.md)  |  被动  |  加成-0.25  
[茉莉蜡烛(开)](CandleJasmineOn.md)  |  被动  |  加成-0.5  
## 关联状态  
[水分](Hydration.md)  |  [世界观](Structure.md)  |  [疼痛](Pain.md)  |  [饱食](Satiation.md)  |  [清醒度](Wakefulness.md)  |  [过热](Hyperthermia.md)  |  [外星植物渴求](AlienCravings.md)  |  [孤独感](Loneliness.md)  |  [娱乐](Entertainment.md)  |  [失血](BloodLoss.md)  |  [监视者的凝视](WatchersGlare.md)  |  [镇痛](Analgesia.md)  |  [酒精](Alcohol.md)  |  [奎宁](Quinine.md)  |  [咖啡因](Caffeine.md)  |  [茉莉效果](JasmineEffect.md)  |  [月季效果](ChinaRoseEffect.md)  |  [舒适度](Comfort.md)  |  [不适](Discomfort.md)  |  [宿敌现身](EnemyDefeated.md)  |  [猎手接近](HuntersProximity.md)  |  [神圣灵视](GodInsight.md)  |  [虚空灵视](VoidInsight.md)  
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[(事件)噩梦！](Event_Nightmare.md)  |  试着冷静下来……  |  50  
[(事件)一只蜘蛛咬了我！](Event_SpiderNight.md)  |  赶走蜘蛛！  |  50  
[(事件)船长](Event_CaptainSpecial1f.md)  |  滚吧！  |  10  
[叶床](LeafBed.md)  |  小憩  |  -1  
[叶床](LeafBed.md)  |  睡觉  |  -1  
[人鱼巢](MermaidNest.md)  |  小憩  |  -1  
[人鱼巢](MermaidNest.md)  |  睡觉  |  -1  
[窝棚](Shelter.md)  |  小憩  |  -1  
[窝棚](Shelter.md)  |  睡觉  |  -1  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  小憩  |  -1  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  睡觉  |  -1  
[帐篷](TentDeployed.md)  |  睡觉  |  -1  
[木筏庇护所](RaftShelter.md)  |  小憩  |  -1  
[木筏庇护所](RaftShelter.md)  |  睡觉  |  -1  
[睡袋](BedRoll.md)  |  小憩  |  -1.5  
[简易床](BedRustic.md)  |  小憩  |  -1.5  
[帐篷](TentDeployed.md)  |  小憩  |  -1.5  
[睡袋](BedRoll.md)  |  睡觉  |  -2  
[简易床](BedRustic.md)  |  睡觉  |  -2  
[吊床](Hammock.md)  |  小憩  |  -2  
[(事件)你睡着了！](Event_FallingAsleep.md)  |  Zzz……  |  -2  
[木床](BedWooden.md)  |  小憩  |  -2.5  
[木床](BedWooden.md)  |  睡觉  |  -3  
[吊床](Hammock.md)  |  睡觉  |  -3  
[黑暗](DarkChamber.md)  |  休息  |  -4  
[蜂箱(蓝图)](Bp_BeeSkep.md)  |  蓝图制造  |  -5  
[火堆(蓝图)](Bp_Fire.md)  |  蓝图制造  |  -5  
[野枣](JujubeFruits.md)  |  食用  |  -5  
[钝斧子头](AxeHeadBlunt.md)  |  磨利  |  -5  
[钝的求生斧](AxeSurvivalBlunt.md)  |  磨利  |  -5  
[钝刀](KnifeCopperBlunt.md)  |  磨利  |  -5  
[祖父的钝刀](KnifeGrandpaBlunt.md)  |  磨利  |  -5  
[钝刀](KnifeMilitaryBlunt.md)  |  磨利  |  -5  
[钝矛头](SpearHeadBlunt.md)  |  磨利  |  -5  
[木材](Wood.md)  |  刨花  |  -5  
[木材](Wood.md)  |  堆成火堆  |  -5  
[竖井](ShaftCrystalChamberToFloodedChamber.md)  |  爬下去  |  -5  
[竖井](ShaftFloodedChamberToCrystalChamber.md)  |  爬上去  |  -5  
[竖井(洞穴上层)](ShaftHighChamberToMidChamber.md)  |  爬下去  |  -5  
[竖井](ShaftLowChamberToMidChamber.md)  |  爬上去  |  -5  
[竖井](ShaftMidChamberToHighChamber.md)  |  爬上去  |  -5  
[竖井(洞穴中层)](ShaftMidChamberToLowChamber.md)  |  爬下去  |  -5  
[环礁](Atoll.md)  |  探索  |  -5  
[隐秘港湾](Cove.md)  |  探索  |  -5  
[米饭](RiceCooked.md)  |  食用  |  -7  
[芦荟膏(蓝图)](Bp_AloeGel.md)  |  蓝图制造  |  -10  
[箭矢(蓝图)](Bp_Arrow.md)  |  蓝图制造  |  -10  
[草木灰敷料(蓝图)](Bp_AshDressing.md)  |  蓝图制造  |  -10  
[简易床(蓝图)](Bp_BedRustic.md)  |  蓝图制造  |  -10  
[木床(蓝图)](Bp_BedWooden.md)  |  蓝图制造  |  -10  
[空蜂箱(蓝图)(空)](Bp_BeeSkepEmpty.md)  |  蓝图制造  |  -10  
[熏蜂器(蓝图)](Bp_BeeSmoker.md)  |  蓝图制造  |  -10  
[猪食槽(蓝图)](Bp_BoarFeeder.md)  |  蓝图制造  |  -10  
[骨刀(蓝图)](Bp_BoneKnife.md)  |  蓝图制造  |  -10  
[弓(蓝图)](Bp_Bow.md)  |  蓝图制造  |  -10  
[弓钻(蓝图)](Bp_BowDrill.md)  |  蓝图制造  |  -10  
[硫磺膏(蓝图)](Bp_BrimstoneGel.md)  |  蓝图制造  |  -10  
[扫帚(蓝图)](Bp_Broom.md)  |  蓝图制造  |  -10  
[驱虫膏(蓝图)](Bp_BugRepellent.md)  |  蓝图制造  |  -10  
[诱捕笼(蓝图)](Bp_CageTrap.md)  |  蓝图制造  |  -10  
[营火(蓝图)](Bp_Campfire.md)  |  蓝图制造  |  -10  
[蜡烛(蓝图)](Bp_Candles.md)  |  蓝图制造  |  -10  
[香茅蜡烛(蓝图)](Bp_CandlesCitronella.md)  |  蓝图制造  |  -10  
[茉莉蜡烛(蓝图)](Bp_CandlesJasmine.md)  |  蓝图制造  |  -10  
[地窖(蓝图)](Bp_Cellar.md)  |  蓝图制造  |  -10  
[仪式匕首(蓝图)](Bp_CeremonialDagger.md)  |  蓝图制造  |  -10  
[椅子(蓝图)](Bp_Chair.md)  |  蓝图制造  |  -10  
[储物箱(蓝图)](Bp_Chest.md)  |  蓝图制造  |  -10  
[水窖(蓝图)](Bp_Cistern.md)  |  蓝图制造  |  -10  
[堆肥箱(蓝图)](Bp_CompostBin.md)  |  蓝图制造  |  -10  
[铜斧(蓝图)](Bp_CopperAxe.md)  |  蓝图制造  |  -10  
[铜板(蓝图)](Bp_CopperSheet.md)  |  蓝图制造  |  -10  
[铜铲(蓝图)](Bp_CopperShovel.md)  |  蓝图制造  |  -10  
[铜长矛(蓝图)](Bp_CopperSpear.md)  |  蓝图制造  |  -10  
[农田(蓝图)](Bp_CropPlot.md)  |  蓝图制造  |  -10  
[落石陷阱(蓝图)](Bp_DeadfallTrap.md)  |  蓝图制造  |  -10  
[鼓(蓝图)](Bp_Drum.md)  |  蓝图制造  |  -10  
[晾晒架(蓝图)](Bp_DryingRack.md)  |  蓝图制造  |  -10  
[炸药(蓝图)](Bp_Dynamite.md)  |  蓝图制造  |  -10  
[木质餐具(蓝图)](Bp_EatingUtensilsWooden.md)  |  蓝图制造  |  -10  
[畜栏(蓝图)](Bp_Enclosure.md)  |  蓝图制造  |  -10  
[鸟食(蓝图)](Bp_FeedBird.md)  |  蓝图制造  |  -10  
[山羊饲料(蓝图)](Bp_FeedGoat.md)  |  蓝图制造  |  -10  
[鱼饵(蓝图)](Bp_FishBait.md)  |  蓝图制造  |  -10  
[捕鱼陷阱(蓝图)](Bp_FishTrap.md)  |  蓝图制造  |  -10  
[钓鱼线(蓝图)](Bp_FishingLine.md)  |  蓝图制造  |  -10  
[钓鱼竿(蓝图)](Bp_FishingRod.md)  |  蓝图制造  |  -10  
[鱼叉(蓝图)](Bp_FishingSpear.md)  |  蓝图制造  |  -10  
[燧石斧(蓝图)](Bp_FlintAxe.md)  |  蓝图制造  |  -10  
[燧石刀(蓝图)](Bp_FlintKnife.md)  |  蓝图制造  |  -10  
[燧石长矛(蓝图)](Bp_FlintSpear.md)  |  蓝图制造  |  -10  
[熔炉(蓝图)](Bp_Forge.md)  |  蓝图制造  |  -10  
[胶水(蓝图)](Bp_Glue.md)  |  蓝图制造  |  -10  
[羊食槽(蓝图)](Bp_GoatFeeder.md)  |  蓝图制造  |  -10  
[手钻(蓝图)](Bp_HandDrill.md)  |  蓝图制造  |  -10  
[鱼镖(蓝图)](Bp_Harpoon.md)  |  蓝图制造  |  -10  
[蜂蜜(蓝图)](Bp_Honey.md)  |  蓝图制造  |  -10  
[窑炉(蓝图)](Bp_Kiln.md)  |  蓝图制造  |  -10  
[高级窑炉(蓝图)](Bp_KilnAdvanced.md)  |  蓝图制造  |  -10  
[叶床(蓝图)](Bp_Leafbed.md)  |  蓝图制造  |  -10  
[蜥蜴皮手鼓(蓝图)](Bp_LizardDrum.md)  |  蓝图制造  |  -10  
[原木陷阱(蓝图)](Bp_LogTrap.md)  |  蓝图制造  |  -10  
[织布机(蓝图)](Bp_Loom.md)  |  蓝图制造  |  -10  
[人鱼巢(蓝图)](Bp_MermaidNest.md)  |  蓝图制造  |  -10  
[斧头模具(蓝图)](Bp_MoldAxe.md)  |  蓝图制造  |  -10  
[装饰品模具(蓝图)](Bp_MoldDecoration.md)  |  蓝图制造  |  -10  
[刀模具(蓝图)](Bp_MoldKnife.md)  |  蓝图制造  |  -10  
[铲头模具(蓝图)](Bp_MoldShovel.md)  |  蓝图制造  |  -10  
[矛头模具(蓝图)](Bp_MoldSpear.md)  |  蓝图制造  |  -10  
[砂浆(蓝图)](Bp_Mortar.md)  |  蓝图制造  |  -10  
[泥屋(蓝图)](Bp_MudHut.md)  |  蓝图制造  |  -10  
[菌床(蓝图)](Bp_MushroomBed.md)  |  蓝图制造  |  -10  
[硝石矿床(蓝图)](Bp_NiterBed.md)  |  蓝图制造  |  -10  
[黑曜石刀(蓝图)](Bp_ObsidianKnife.md)  |  蓝图制造  |  -10  
[黑曜石长矛(蓝图)](Bp_ObsidianSpear.md)  |  蓝图制造  |  -10  
[灰山鹑喂食器(蓝图)](Bp_PartridgeFeeder.md)  |  蓝图制造  |  -10  
[硫磺农药(蓝图)](Bp_PesticideBrimstone.md)  |  蓝图制造  |  -10  
[辣椒农药(蓝图)](Bp_PesticideChilli.md)  |  蓝图制造  |  -10  
[木板(蓝图)](Bp_Planks.md)  |  蓝图制造  |  -10  
[陶轮(蓝图)](Bp_PotteryWheel.md)  |  蓝图制造  |  -10  
[金鸡纳树皮粉(蓝图)](Bp_Quinine.md)  |  蓝图制造  |  -10  
[硫酸奎宁(蓝图)](Bp_QuinineSulfate.md)  |  蓝图制造  |  -10  
[木筏(蓝图)](Bp_Raft.md)  |  蓝图制造  |  -10  
[捕捞拖网(蓝图)](Bp_RaftFishTrap.md)  |  蓝图制造  |  -10  
[木筏庇护所(蓝图)](Bp_RaftShelter.md)  |  蓝图制造  |  -10  
[集雨器(蓝图)](Bp_Raincatcher.md)  |  蓝图制造  |  -10  
[水稻田(蓝图)](Bp_RicePaddy.md)  |  蓝图制造  |  -10  
[简易长矛(蓝图)](Bp_RusticSpear.md)  |  蓝图制造  |  -10  
[稻草人(蓝图)](Bp_Scarecrow.md)  |  蓝图制造  |  -10  
[废金属斧(蓝图)](Bp_ScrapAxe.md)  |  蓝图制造  |  -10  
[废金属刀(蓝图)](Bp_ScrapKnife.md)  |  蓝图制造  |  -10  
[废金属铲(蓝图)](Bp_ScrapShovel.md)  |  蓝图制造  |  -10  
[废金属长矛(蓝图)](Bp_ScrapSpear.md)  |  蓝图制造  |  -10  
[石刀(蓝图)](Bp_SharpenedStone.md)  |  蓝图制造  |  -10  
[棚屋(蓝图)](Bp_Shed.md)  |  蓝图制造  |  -10  
[架子(蓝图)](Bp_Shelf.md)  |  蓝图制造  |  -10  
[窝棚(蓝图)](Bp_Shelter.md)  |  蓝图制造  |  -10  
[盾牌(蓝图)](Bp_Shield.md)  |  蓝图制造  |  -10  
[投石索(蓝图)](Bp_Sling.md)  |  蓝图制造  |  -10  
[套索陷阱(蓝图)](Bp_SnareTrap.md)  |  蓝图制造  |  -10  
[肥皂(蓝图)](Bp_Soap.md)  |  蓝图制造  |  -10  
[太阳能蒸馏器(蓝图)](Bp_SolarStill.md)  |  蓝图制造  |  -10  
[纺锤(蓝图)](Bp_Spindle.md)  |  蓝图制造  |  -10  
[夹板(蓝图)](Bp_Splint.md)  |  蓝图制造  |  -10  
[石斧(蓝图)](Bp_StoneAxe.md)  |  蓝图制造  |  -10  
[石屋(蓝图)](Bp_StoneHut.md)  |  蓝图制造  |  -10  
[火炉(蓝图)](Bp_Stove.md)  |  蓝图制造  |  -10  
[补给箱(蓝图)](Bp_SupplyChest.md)  |  蓝图制造  |  -10  
[木桌(蓝图)](Bp_Table.md)  |  蓝图制造  |  -10  
[火把(蓝图)](Bp_Torch.md)  |  蓝图制造  |  -10  
[止血带(蓝图)](Bp_Tourniquet.md)  |  蓝图制造  |  -10  
[简易止血带(蓝图)](Bp_TourniquetRustic.md)  |  蓝图制造  |  -10  
[陷坑(蓝图)](Bp_TrappingPit.md)  |  蓝图制造  |  -10  
[小拉车(蓝图)](Bp_Travois.md)  |  蓝图制造  |  -10  
[木钉(蓝图)](Bp_Treenails.md)  |  蓝图制造  |  -10  
[硫酸(蓝图)](Bp_Vitriol.md)  |  蓝图制造  |  -10  
[滤水器(蓝图)](Bp_WaterFilter.md)  |  蓝图制造  |  -10  
[蓄水池(蓝图)](Bp_WaterReservoir.md)  |  蓝图制造  |  -10  
[水槽(蓝图)](Bp_WateringTrough.md)  |  蓝图制造  |  -10  
[水井(蓝图)](Bp_Well.md)  |  蓝图制造  |  -10  
[韦斯顿(蓝图)](Bp_Weston.md)  |  蓝图制造  |  -10  
[木雕(蓝图)](Bp_WoodCarvings.md)  |  蓝图制造  |  -10  
[木屑(蓝图)](Bp_WoodShavings.md)  |  蓝图制造  |  -10  
[木铲(蓝图)](Bp_WoodenShovel.md)  |  蓝图制造  |  -10  
[背篓(蓝图)](Bp_WovenBackpack.md)  |  蓝图制造  |  -10  
[编织篓(蓝图)](Bp_WovenBasket.md)  |  蓝图制造  |  -10  
[棕榈编织帽(蓝图)](Bp_WovenHat.md)  |  蓝图制造  |  -10  
[睡袋(蓝图)](Bp_Bedroll.md)  |  蓝图制造  |  -10  
[骨头汤(蓝图)](Bp_BoneBroth.md)  |  蓝图制造  |  -10  
[黄油(蓝图)](Bp_Butter.md)  |  蓝图制造  |  -10  
[黄油焗牡蛎(蓝图)](Bp_ButterBakedOysters.md)  |  蓝图制造  |  -10  
[姜糖(蓝图)](Bp_CandiedGinger.md)  |  蓝图制造  |  -10  
[奶酪(蓝图)](Bp_Cheese.md)  |  蓝图制造  |  -10  
[鸡肉三明治(蓝图)](Bp_ChickenSandwich.md)  |  蓝图制造  |  -10  
[椰子鱼(蓝图)](Bp_CoconutFish.md)  |  蓝图制造  |  -10  
[椰奶(蓝图)](Bp_CoconutMilk.md)  |  蓝图制造  |  -10  
[醉蟹(蓝图)](Bp_DrunkenCrab.md)  |  蓝图制造  |  -10  
[蛋炒饭(蓝图)](Bp_EggFriedRice.md)  |  蓝图制造  |  -10  
[炸鱼薯条(蓝图)](Bp_FishNChips.md)  |  蓝图制造  |  -10  
[鱼肉煎蛋饼(蓝图)](Bp_FishOmelette.md)  |  蓝图制造  |  -10  
[鱼肉塔可(蓝图)](Bp_FishTaco.md)  |  蓝图制造  |  -10  
[炸香蕉(蓝图)](Bp_FriedBananas.md)  |  蓝图制造  |  -10  
[炒菇球(蓝图)](Bp_FriedPuffballs.md)  |  蓝图制造  |  -10  
[炖羊肉(蓝图)](Bp_GoatStew.md)  |  蓝图制造  |  -10  
[肉食盛宴(蓝图)](Bp_HeartyFeast.md)  |  蓝图制造  |  -10  
[蜜糖(蓝图)](Bp_HoneyCandy.md)  |  蓝图制造  |  -10  
[蜜汁火腿(蓝图)](Bp_HoneyGlazedPork.md)  |  蓝图制造  |  -10  
[热带烤鸡(蓝图)](Bp_IslandChicken.md)  |  蓝图制造  |  -10  
[丛林沙拉(蓝图)](Bp_JungleSalad.md)  |  蓝图制造  |  -10  
[辣炒巨蜥肉(蓝图)](Bp_LizardFry.md)  |  蓝图制造  |  -10  
[猕猴肉串(蓝图)](Bp_MacaqueSkewers.md)  |  蓝图制造  |  -10  
[蛋白棒(蓝图)](Bp_ProteinBar.md)  |  蓝图制造  |  -10  
[西米蛋糕(蓝图)](Bp_SagoCake.md)  |  蓝图制造  |  -10  
[西米糕(蓝图)](Bp_SagoSlime.md)  |  蓝图制造  |  -10  
[海鲜杂烩(蓝图)](Bp_SeafoodCup.md)  |  蓝图制造  |  -10  
[寿司(蓝图)](Bp_Sushi.md)  |  蓝图制造  |  -10  
[汤力水(蓝图)](Bp_TonicWater.md)  |  蓝图制造  |  -10  
[参薯咖喱(蓝图)](Bp_YamCurry.md)  |  蓝图制造  |  -10  
[参薯酱(蓝图)](Bp_YamJam.md)  |  蓝图制造  |  -10  
[蒸馏器(蓝图)](Bp_Alembic.md)  |  蓝图制造  |  -10  
[陶碗(蓝图)](Bp_ClayBowl.md)  |  蓝图制造  |  -10  
[粘土火盆(蓝图)](Bp_ClayFirePit.md)  |  蓝图制造  |  -10  
[小陶罐(蓝图)](Bp_ClayJar.md)  |  蓝图制造  |  -10  
[保鲜罐(蓝图)](Bp_ClayPotCooler.md)  |  蓝图制造  |  -10  
[陶罐(蓝图)](Bp_ClayVase.md)  |  蓝图制造  |  -10  
[烹饪锅(蓝图)](Bp_CookingPot.md)  |  蓝图制造  |  -10  
[釉面陶罐(蓝图)](Bp_GlazedVase.md)  |  蓝图制造  |  -10  
[防蜂服(蓝图)](Bp_BeeSuit.md)  |  蓝图制造  |  -10  
[风箱(蓝图)](Bp_Bellows.md)  |  蓝图制造  |  -10  
[椰子凉鞋(蓝图)](Bp_CoconutSandals.md)  |  蓝图制造  |  -10  
[铜瓶(蓝图)](Bp_CopperBottle.md)  |  蓝图制造  |  -10  
[铜罐(蓝图)](Bp_CopperJar.md)  |  蓝图制造  |  -10  
[铜项链(蓝图)](Bp_CopperNecklace.md)  |  蓝图制造  |  -10  
[铜针(蓝图)](Bp_CopperNeedles.md)  |  蓝图制造  |  -10  
[铜制餐具(蓝图)](Bp_EatingUtensilsCopper.md)  |  蓝图制造  |  -10  
[鲜花项链(蓝图)](Bp_FlowerNecklace.md)  |  蓝图制造  |  -10  
[防毒面具(蓝图)](Bp_GasMask.md)  |  蓝图制造  |  -10  
[吊床(蓝图)](Bp_Hammock.md)  |  蓝图制造  |  -10  
[草裙(蓝图)](Bp_LeafSkirt.md)  |  蓝图制造  |  -10  
[皮革背包(蓝图)](Bp_LeatherBackpack.md)  |  蓝图制造  |  -10  
[皮革手套(蓝图)](Bp_LeatherGloves.md)  |  蓝图制造  |  -10  
[皮革手套(蓝图)](Bp_LeatherGloves.md)  |  蓝图制造  |  -10  
[皮裤(蓝图)](Bp_LeatherPants.md)  |  蓝图制造  |  -10  
[皮革鞋子(蓝图)](Bp_LeatherShoes.md)  |  蓝图制造  |  -10  
[皮革鞋子(蓝图)](Bp_LeatherShoes.md)  |  蓝图制造  |  -10  
[珍珠项链(蓝图)](Bp_PearlNecklace.md)  |  蓝图制造  |  -10  
[箭筒(蓝图)](Bp_Quiver.md)  |  蓝图制造  |  -10  
[雨衣(蓝图)](Bp_Raincoat.md)  |  蓝图制造  |  -10  
[布袋(蓝图)](Bp_Sack.md)  |  蓝图制造  |  -10  
[挎包(蓝图)](Bp_Satchel.md)  |  蓝图制造  |  -10  
[海鸥护符(蓝图)](Bp_SeagullCharm.md)  |  蓝图制造  |  -10  
[贝壳项链(蓝图)](Bp_SeashellNecklace.md)  |  蓝图制造  |  -10  
[鲨鱼头饰(蓝图)](Bp_SharkHeadpiece.md)  |  蓝图制造  |  -10  
[衬衫(蓝图)](Bp_Shirt.md)  |  蓝图制造  |  -10  
[蓑衣(蓝图)](Bp_StrawCape.md)  |  蓝图制造  |  -10  
[水袋(蓝图)](Bp_Waterskin.md)  |  蓝图制造  |  -10  
[木针(蓝图)](Bp_WoodenNeedles.md)  |  蓝图制造  |  -10  
[(事件)韦斯顿](Event_WestonSpecial1e.md)  |  继续  |  -10  
[椰子](Coconut.md)  |  给椰子钻孔  |  -10  
[椰子](Coconut.md)  |  敲开椰子  |  -10  
[椰子皮](CoconutHusk.md)  |  提取纤维  |  -10  
[青椰子](CoconutHusked.md)  |  剥  |  -10  
[青椰子](CoconutHusked.md)  |  剥  |  -10  
[青椰子](CoconutHusked.md)  |  剥  |  -10  
[铜制装饰品](CopperDecoration_Mold.md)  |  敲开  |  -10  
[纤维](Fibers.md)  |  缠起来  |  -10  
[外星结节](AlienNodule.md)  |  食用  |  -10  
[香蕉](Banana.md)  |  食用  |  -10  
[烤野猪肉](BoarMeatCooked.md)  |  食用  |  -10  
[烟熏野猪肉](BoarMeatSmoked.md)  |  食用  |  -10  
[烤羊肉](GoatMeatCooked.md)  |  食用  |  -10  
[烟熏羊肉](GoatMeatSmoked.md)  |  食用  |  -10  
[卡瓦根](KavaRoot.md)  |  食用  |  -10  
[捣碎的卡瓦根](KavaRootGround.md)  |  食用  |  -10  
[母猪](BoarEnclosureFemale.md)  |  抚摸  |  -10  
[公猪](BoarEnclosureMale.md)  |  抚摸  |  -10  
[小猪](BoarEnclosurePiglet.md)  |  抚摸  |  -10  
[母山羊](GoatEnclosureFemale.md)  |  抚摸  |  -10  
[小羊](GoatEnclosureKid.md)  |  抚摸  |  -10  
[哺乳期山羊](GoatEnclosureLactating.md)  |  抚摸  |  -10  
[公山羊](GoatEnclosureMale.md)  |  抚摸  |  -10  
[烤猕猴肉](MacaqueMeatCooked.md)  |  食用  |  -10  
[烟熏猕猴肉](MacaqueMeatSmoked.md)  |  食用  |  -10  
[芒果](Mango.md)  |  食用  |  -10  
[山羊奶酪](Cheese.md)  |  食用  |  -10  
[椰子鱼](CoconutFish.md)  |  食用  |  -10  
[醉蟹](DrunkenCrab.md)  |  食用  |  -10  
[蛋炒饭](EggFriedRice.md)  |  食用  |  -10  
[炒菇球](FriedPuffballs.md)  |  食用  |  -10  
[热带烤鸡](IslandChicken.md)  |  食用  |  -10  
[辣炒巨蜥肉](LizardFry.md)  |  食用  |  -10  
[参薯咖喱](YamCurry.md)  |  食用  |  -10  
[黄油焗牡蛎](OysterMeatBaked.md)  |  食用  |  -10  
[西米饼](SagoFlatbread.md)  |  食用  |  -10  
[寿司](Sushi.md)  |  食用  |  -10  
[热带杏仁核](TropicalAlmondKernels.md)  |  食用  |  -10  
[烤热带杏仁](TropicalAlmondsRoasted.md)  |  食用  |  -10  
[棕榈叶](PalmFronds.md)  |  编织  |  -10  
[手机(开)](PhoneOn.md)  |  看照片  |  -10  
[手机](PhoneOnLight.md)  |  看照片  |  -10  
[野猪牙](Tusk.md)  |  雕刻  |  -10  
[韦斯顿](Weston.md)  |  聊天  |  -10  
[未完成的木雕](WoodCarving_Unfinished.md)  |  雕刻  |  -10  
[月季花茶](LQ_ChinaRoseTea.md)  |  饮用  |  -10  
[椰奶](LQ_CoconutMilk.md)  |  饮用  |  -10  
[茉莉花茶](LQ_JasmineTea.md)  |  饮用  |  -10  
[卡瓦汤](LQ_Kava.md)  |  饮用  |  -10  
[蜂蜜酒](LQ_Mead.md)  |  饮用  |  -10  
[棕榈酒](LQ_PalmWine.md)  |  饮用  |  -10  
[糖酒](LQ_SugarWine.md)  |  饮用  |  -10  
[蝙蝠洞](CaveBats.md)  |  打扫  |  -10  
[草原洞穴](CaveGrasslands.md)  |  打扫  |  -10  
[海蚀洞](CaveSea.md)  |  打扫  |  -10  
[晶石洞穴](CrystalChamber.md)  |  打扫  |  -10  
[潮湿洞穴](DampChamber.md)  |  打扫  |  -10  
[黑暗](DarkChamber.md)  |  打扫  |  -10  
[覆溺洞穴](FloodedChamber.md)  |  打扫  |  -10  
[洞穴上层](HighChamber.md)  |  打扫  |  -10  
[洞穴底层](LowChamber.md)  |  打扫  |  -10  
[洞穴中层](MidChamber.md)  |  打扫  |  -10  
[狭窄隧道](NarrowTunnel.md)  |  打扫  |  -10  
[隧道](Tunnel.md)  |  打扫  |  -10  
[潮汐洞](CaveTidal.md)  |  打扫  |  -10  
[地窖](Cellar.md)  |  打扫  |  -10  
[幽暗洞穴](DarkCave.md)  |  打扫  |  -10  
[畜栏](Enclosure.md)  |  打扫  |  -10  
[猕猴窝](MacaqueDen.md)  |  打扫  |  -10  
[泥屋](MudHut.md)  |  打扫  |  -10  
[泥屋](MudHutRuins.md)  |  打扫  |  -10  
[飞机残骸](PlaneCrash.md)  |  打扫  |  -10  
[棚屋](Shed.md)  |  打扫  |  -10  
[石屋](StoneHut.md)  |  打扫  |  -10  
[酸湖](AcidLake.md)  |  探索  |  -10  
[海湾](Bay.md)  |  随便逛逛  |  -10  
[沙滩](Beach.md)  |  随便逛逛  |  -10  
[鸟岩岛](BirdRock.md)  |  探索  |  -10  
[丛林深处](DeepJungle.md)  |  探索  |  -10  
[荒芜沙滩](DesolateBeach.md)  |  探索  |  -10  
[东部草原](GrasslandsE.md)  |  探索  |  -10  
[西部草原](GrasslandsW.md)  |  探索  |  -10  
[东部高地](HighlandsEastern.md)  |  探索  |  -10  
[西部高地](HighlandsWestern.md)  |  探索  |  -10  
[丛林](Jungle.md)  |  探索  |  -10  
[丛林高地](JungleHighlands.md)  |  探索  |  -10  
[红树林](Mangroves.md)  |  探索  |  -10  
[丛林边缘](Outskirts.md)  |  探索  |  -10  
[岩滩](Rocks.md)  |  探索  |  -10  
[神秘谷](SecretValley.md)  |  探索  |  -10  
[火山](Volcano.md)  |  探索  |  -10  
[湿地丛林](Wetlands.md)  |  探索  |  -10  
[前往火山](Path_AcidLakeToVolcano.md)  |  前往  |  -10  
[前往沙滩(海湾)](Path_BayToBeach.md)  |  前往  |  -10  
[前往丛林小径(海湾)](Path_BayToJungle.md)  |  前往  |  -10  
[前往红树林](Path_BayToMangroves.md)  |  前往  |  -10  
[前往海湾](Path_BeachToBay.md)  |  前往  |  -10  
[前往丛林边缘(沙滩)](Path_BeachToOutskirts.md)  |  前往  |  -10  
[前往岩滩(沙滩)](Path_BeachToRocks.md)  |  前往  |  -10  
[前往丛林高地(隐秘港湾)](Path_CoveToJungleHighlands.md)  |  爬上去  |  -10  
[前往丛林高地(丛林深处)](Path_DeepJungleToJungleHighlands.md)  |  前往  |  -10  
[前往神秘谷(丛林深处)](Path_DeepJungleToValley.md)  |  前往  |  -10  
[前往湿地(丛林深处)](Path_DeepJungleToWetlands.md)  |  前往  |  -10  
[前往东部草原(荒芜沙滩)](Path_DesolateBeachToGrasslandsE.md)  |  前往  |  -10  
[前往红树林(荒芜沙滩)](Path_DesolateBeachToMangroves.md)  |  前往  |  -10  
[前往火山(荒芜沙滩)](Path_DesolateBeachToVolcano.md)  |  前往  |  -10  
[前往荒芜沙滩(东部草原)](Path_GrasslandsEToDesolateBeach.md)  |  前往  |  -10  
[前往西部草原(东部草原)](Path_GrasslandsEToGrasslandsW.md)  |  前往  |  -10  
[前往东部高地(东部草原)](Path_GrasslandsEToHighlandsE.md)  |  前往  |  -10  
[前往东部草原(西部草原)](Path_GrasslandsWToGrasslandsE.md)  |  前往  |  -10  
[前往西部高地(西部草原)](Path_GrasslandsWToHighlandsW.md)  |  前往  |  -10  
[前往丛林小径](Path_GrasslandsWToJungle.md)  |  前往  |  -10  
[前往红树林(西部草原)](Path_GrasslandsWToMangroves.md)  |  前往  |  -10  
[前往东部草原(东部高地)](Path_HighlandsEToGrasslandsE.md)  |  前往  |  -10  
[前往西部高地](Path_HighlandsEToHighlandsW.md)  |  前往  |  -10  
[前往火山(东部高地)](Path_HighlandsEToVolcano.md)  |  前往  |  -10  
[前往西部草原(西部高地)](Path_HighlandsWToGrasslandsW.md)  |  前往  |  -10  
[前往东部高地(西部高地)](Path_HighlandsWToHighlandsE.md)  |  前往  |  -10  
[前往丛林高地(西部高地)](Path_HighlandsWToJungleHighlands.md)  |  前往  |  -10  
[前往隐秘港湾(丛林高地)](Path_JungleHighlandsToCove.md)  |  爬下去  |  -10  
[前往丛林深处(丛林高地)](Path_JungleHighlandsToDeepJungle.md)  |  前往  |  -10  
[前往西部高地(丛林高地)](Path_JungleHighlandsToHighlandsW.md)  |  前往  |  -10  
[前往山谷悬崖](Path_JungleHighlandsToValley.md)  |  爬下去  |  -10  
[前往湿地悬崖](Path_JungleHighlandsToWetlands.md)  |  攀爬  |  -10  
[前往海湾(丛林)](Path_JungleToBay.md)  |  前往  |  -10  
[前往西部草原(丛林)](Path_JungleToGrasslandsW.md)  |  前往  |  -10  
[前往丛林边缘(丛林)](Path_JungleToOutskirts.md)  |  前往  |  -10  
[前往湿地(丛林)](Path_JungleToWetlands.md)  |  前往  |  -10  
[前往海湾](Path_MangrovesToBay.md)  |  前往  |  -10  
[前往荒芜沙滩](Path_MangrovesToDesolateBeach.md)  |  前往  |  -10  
[前往西部草原(红树林)](Path_MangrovesToGrasslandsW.md)  |  前往  |  -10  
[前往沙滩(丛林边缘)](Path_OutskirtsToBeach.md)  |  前往  |  -10  
[前往丛林小径](Path_OutskirtsToJungle.md)  |  前往  |  -10  
[前往沙滩(岩滩)](Path_RocksToBeach.md)  |  前往  |  -10  
[前往丛林深处(神秘谷)](Path_ValleyToDeepJungle.md)  |  前往  |  -10  
[前往丛林高地](Path_ValleyToJungleHighlands.md)  |  爬上去  |  -10  
[前往酸湖(火山)](Path_VolcanoToAcidLake.md)  |  前往  |  -10  
[前往荒芜沙滩(火山)](Path_VolcanoToDesolateBeach.md)  |  前往  |  -10  
[前往东部高地(火山)](Path_VolcanoToHighlandsE.md)  |  前往  |  -10  
[前往丛林深处(湿地丛林)](Path_WetlandsToDeepJungle.md)  |  前往  |  -10  
[前往丛林小径(湿地丛林)](Path_WetlandsToJungle.md)  |  前往  |  -10  
[前往丛林高地(湿地丛林)](Path_WetlandsToJungleHighlands.md)  |  爬上去  |  -10  
[椅子](ChairPlaced.md)  |  暂候15分钟  |  -12  
[座椅](SeatAttached.md)  |  暂候15分钟  |  -12  
[座椅](SeatPlaced.md)  |  暂候15分钟  |  -12  
[猕猴肉串](MacaqueSkewers.md)  |  食用  |  -15  
[巢脾](BeeHoneycomb.md)  |  食用  |  -20  
[炸鱼薯条](FishNChips.md)  |  食用  |  -20  
[炸香蕉](FriedBanana.md)  |  食用  |  -20  
[肉食盛宴](HeartyFeast.md)  |  食用  |  -20  
[蜜汁火腿](HoneyGlazedPork.md)  |  食用  |  -20  
[西米蛋糕](SagoCake.md)  |  食用  |  -20  
[参薯酱](YamJam.md)  |  食用  |  -20  
[蜂蜜西米饼](SagoFlatbreadHoney.md)  |  食用  |  -20  
[果酱西米饼](SagoFlatbreadJam.md)  |  食用  |  -20  
[糖](Sugar.md)  |  食用  |  -20  
[(事件)鼓](Event_DrumMenu.md)  |  练习  |  -24  
[鼓](Drum.md)  |  练习  |  -24  
[蜥蜴皮手鼓](LizardDrum.md)  |  练习  |  -24  
[书架(蓝图)](Bp_Bookshelf.md)  |  蓝图制造  |  -25  
[忠犬朋友](DogFriend.md)  |  一起玩耍  |  -25  
[手机(开)](PhoneOn.md)  |  玩游戏  |  -25 ~ 5  
[手机](PhoneOnLight.md)  |  玩游戏  |  -25 ~ 5  
[姜糖](CandiedGinger.md)  |  食用  |  -30  
[巧克力](Chocolate.md)  |  食用  |  -30  
[蜜糖](HoneyCandy.md)  |  食用  |  -30  
[椅子](ChairPlaced.md)  |  休息1小时  |  -48  
[座椅](SeatAttached.md)  |  休息1小时  |  -48  
[座椅](SeatPlaced.md)  |  休息1小时  |  -48  
[(事件)无法控制焦虑！](Event_AnxietyAttack.md)  |  继续  |  -48  
[(事件)鼓](Event_DrumMenu.md)  |  跃动的节奏  |  -48  
[(事件)鼓](Event_DrumMenu.md)  |  激昂的节奏  |  -48  
[鼓](Drum.md)  |  激昂的节奏  |  -48  
[蜥蜴皮手鼓](LizardDrum.md)  |  激昂的节奏  |  -48  
[蜥蜴皮手鼓](LizardDrum.md)  |  唤灵的节奏  |  -48  
[海水(覆溺洞穴)](Sea_Cave.md)  |  潜水  |  -48  
[沙堆(环礁)](SandSource.md)  |  堆沙堡  |  -48  
[海(环礁)](Sea_Atoll.md)  |  潜水  |  -48  
[海(海湾)](Sea_Bay.md)  |  潜水  |  -48  
[海(沙滩)](Sea_Beach.md)  |  潜水  |  -48  
[海(沙滩)](Sea_Cove.md)  |  潜水  |  -48  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  潜水  |  -48  
[海(红树林)](Sea_Mangroves.md)  |  潜水  |  -48  
[海](Sea_Raft.md)  |  潜水  |  -48  
[海(鸟岩岛)](Sea_Rocks.md)  |  潜水  |  -48  
[海水(覆溺洞穴)](Sea_Cave.md)  |  钓鱼  |  -50  
[海水(覆溺洞穴)](Sea_Cave.md)  |  钓鱼  |  -50  
[海(环礁)](Sea_Atoll.md)  |  钓鱼  |  -50  
[海(环礁)](Sea_Atoll.md)  |  钓鱼  |  -50  
[海(海湾)](Sea_Bay.md)  |  钓鱼  |  -50  
[海(海湾)](Sea_Bay.md)  |  钓鱼  |  -50  
[海(沙滩)](Sea_Beach.md)  |  钓鱼  |  -50  
[海(沙滩)](Sea_Beach.md)  |  钓鱼  |  -50  
[海(沙滩)](Sea_Cove.md)  |  钓鱼  |  -50  
[海(沙滩)](Sea_Cove.md)  |  钓鱼  |  -50  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  钓鱼  |  -50  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  钓鱼  |  -50  
[海(红树林)](Sea_Mangroves.md)  |  钓鱼  |  -50  
[海(红树林)](Sea_Mangroves.md)  |  钓鱼  |  -50  
[海](Sea_Raft.md)  |  钓鱼  |  -50  
[海](Sea_Raft.md)  |  钓鱼  |  -50  
[海(鸟岩岛)](Sea_Rocks.md)  |  钓鱼  |  -50  
[海(鸟岩岛)](Sea_Rocks.md)  |  钓鱼  |  -50  
[鼓](Drum.md)  |  跃动的节奏  |  -60  
[鼓](Drum.md)  |  入迷击鼓  |  -60  
[蜥蜴皮手鼓](LizardDrum.md)  |  跃动的节奏  |  -60  
[蜥蜴皮手鼓](LizardDrum.md)  |  入迷击鼓  |  -60  
[(事件)宿敌被打败了！](Event_EnemyFightSuccess.md)  |  胜利啦！  |  -100  
[(事件)猎手被击败了！](Event_HunterFightSuccess.md)  |  胜利啦！  |  -100  