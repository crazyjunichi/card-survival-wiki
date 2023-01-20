[返回首页](index.md)  
# 体重  
变化范围？: 0 ~ 15000  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
6721 ～ 15000  |  <img decoding="async" src="Sprite/Perk_Overweight.png" style="width:20px;">过度肥胖  |    |  [体重](Weight.md)加成-4<br>[ModifierLeg_GameName](ModifierLeg.md)+1  |    
4033 ～ 6720  |  <img decoding="async" src="Sprite/Perk_Overweight.png" style="width:20px;">超重  |    |  [体重](Weight.md)加成-3  |    
3001 ～ 4032  |  <img decoding="async" src="Sprite/WeightNormal.png" style="width:20px;">体重正常  |    |  [体重](Weight.md)加成-2  |    
2001 ～ 3000  |  <img decoding="async" src="Sprite/WeightNormal.png" style="width:20px;">体重正常  |    |  [体重](Weight.md)加成-1  |    
701 ～ 2000  |  <img decoding="async" src="Sprite/WeightNormal.png" style="width:20px;">体重正常  |    |  [体重](Weight.md)加成-0.5  |    
289 ～ 700  |  <img decoding="async" src="Sprite/Malnourishment.png" style="width:20px;">过瘦  |  我感觉身体虚弱  |  [清醒度](Wakefulness.md)加成-0.5<br>[食欲](Appetite.md)+50<br>[体重](Weight.md)加成-0.25<br>[免疫系统](ImmuneSystem.md)-50  |    
75 ～ 288  |  <img decoding="async" src="Sprite/Malnourishment.png" style="width:20px;">骨瘦嶙峋  |  我感觉身体非常虚弱  |  [免疫系统](ImmuneSystem.md)-100<br>[清醒度](Wakefulness.md)加成-1<br>[食欲](Appetite.md)+100<br>[体重](Weight.md)加成-0.1  |    
1 ～ 74  |  <img decoding="async" src="Sprite/Malnourishment.png" style="width:20px;">快饿死了  |  我没力气动了……我要坚持不住了  |  [清醒度](Wakefulness.md)加成-1<br>[细菌性发烧](BacteriaFever.md)加成+4<br>[食欲](Appetite.md)+100<br>[体重](Weight.md)加成-0.1  |    
0 ～ 0  |  <img decoding="async" src="Sprite/Malnourishment.png" style="width:20px;">死于饥饿  |  你死于饥饿。  |    |    
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[(事件)远处有一座大岛……](Event_DistantIsland.md)  |  乘坐木筏到岛上  |  8  
[没气的救生筏](LifeRaftDeflated.md)  |  切下塑料布  |  -1  
[打开的降落伞](ParachuteDeployed.md)  |  切下塑料布  |  -1  
[姜](Ginger.md)  |  捣碎  |  -1  
[干姜](GingerDried.md)  |  捣碎  |  -1  
[茉莉花](JasmineFlowers.md)  |  捣碎  |  -1  
[卡瓦根](KavaRoot.md)  |  捣碎  |  -1  
[干燥的卡瓦根](KavaRootDried.md)  |  捣碎  |  -1  
[柠檬草](LemongrassStalks.md)  |  捣碎  |  -1  
[蜘蛛兰叶](SpiderLilyLeaves.md)  |  捣碎叶子  |  -1  
[干燥的蜘蛛兰叶](SpiderLilyLeavesDried.md)  |  捣碎叶子  |  -1  
[蛇草](SnakeGrass.md)  |  捣碎  |  -1  
[摘光的香蕉树](BananaTreeCleared.md)  |  砍树  |  -1  
[摘光的香蕉树](BananaTreeCleared.md)  |  砍树  |  -2  
[椰子树](PalmTree_Unique.md)  |  爬树摘椰子  |  -2 ~ -1  
[倒下的西米树](SagoPalmFelled.md)  |  从中劈开  |  -4  
[倒下的西米树](SagoPalmFelled.md)  |  从中劈开  |  -4  
[劈开的西米树干](SagoSplitLog.md)  |  刮取树芯  |  -4  
[婴儿](Baby.md)  |  喂奶  |  -5  
[半根原木](HalfLog.md)  |  切割成木材  |  -6  
[原木](Log.md)  |  截成两段  |  -6  
[半根原木](HalfLog.md)  |  切割成木材  |  -8  
[原木](Log.md)  |  截成两段  |  -8  
[椰子树](PalmTree_IH.md)  |  砍倒  |  -8  
[椰子树](PalmTree_IH.md)  |  砍倒  |  -8  
[椰子树](PalmTree_Unique.md)  |  砍倒  |  -8  
[椰子树](PalmTree_Unique.md)  |  砍倒  |  -8  
[(事件)远处有一座大岛……](Event_DistantIsland.md)  |  游向小岛  |  -16  
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[睡袋](BedRoll.md)  |  小憩  |  0 ~ 74  
[睡袋](BedRoll.md)  |  睡觉  |  0 ~ 74  
[简易床](BedRustic.md)  |  小憩  |  0 ~ 74  
[简易床](BedRustic.md)  |  睡觉  |  0 ~ 74  
[木床](BedWooden.md)  |  小憩  |  0 ~ 74  
[木床](BedWooden.md)  |  睡觉  |  0 ~ 74  
[吊床](Hammock.md)  |  小憩  |  0 ~ 74  
[吊床](Hammock.md)  |  睡觉  |  0 ~ 74  
[叶床](LeafBed.md)  |  小憩  |  0 ~ 74  
[叶床](LeafBed.md)  |  睡觉  |  0 ~ 74  
[人鱼巢](MermaidNest.md)  |  小憩  |  0 ~ 74  
[人鱼巢](MermaidNest.md)  |  睡觉  |  0 ~ 74  
[窝棚](Shelter.md)  |  小憩  |  0 ~ 74  
[窝棚](Shelter.md)  |  睡觉  |  0 ~ 74  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  小憩  |  0 ~ 74  
[有遮蔽的叶床](ShelteredLeafBed.md)  |  睡觉  |  0 ~ 74  
[帐篷](TentDeployed.md)  |  小憩  |  0 ~ 74  
[帐篷](TentDeployed.md)  |  睡觉  |  0 ~ 74  
[(事件)无法控制焦虑！](Event_AnxietyAttack.md)  |  继续  |  0 ~ 74  
[(事件)你睡着了！](Event_FallingAsleep.md)  |  Zzz……  |  0 ~ 74  
[木筏庇护所](RaftShelter.md)  |  小憩  |  0 ~ 74  
[木筏庇护所](RaftShelter.md)  |  睡觉  |  0 ~ 74  
