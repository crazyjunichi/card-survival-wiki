# 泥堆  
> 可以将它和抗裂剂混合来制作砖块。沙子、贝壳碎片或灰烬都可以。  
  
  泥堆  |   图片   
 ----  |  ----:   
 **重量：**150<br><br>**标签：**	[“储水容器”](tag_WaterContainer.md), [“沉重的”](tag_Heavy.md)  |  ![](Sprite/Mud.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[干土堆](DirtPile.md)  |  制作泥巴  
[干土堆](DirtPile.md) , [“水”](tag_WaterAny.md)  |  制作泥巴  
[水井(蓝图)](Bp_Well.md)  |  蓝图制造  
[泥滩](MudDeposit.md)  |  挖泥巴  
[泥滩](MudDeposit.md) , [“铲子”](tag_Shovel.md)  |  挖泥巴  
[干涸的小水塘(湿地丛林)](Puddle.md)  |  挖泥巴  
[干涸的小水塘(湿地丛林)](Puddle.md) , [“铲子”](tag_Shovel.md)  |  挖泥巴  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
制作粘土<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 1-100  |  → [粘土](Clay.md)  |  [污垢](Filth.md)+15  
涂到身上<br>[手部动作](HandAction.md)  |  15分  |    |    |  [污垢](Filth.md)+500<br>[泥巴防护](MudProtection.md)+50  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“抗裂剂”](tag_Temper.md)  |  制作泥砖  |  15分  |  [光亮](Light.md): 1-100  |  ** 自身: **<br>→ [泥砖](MudBrick.md)<br>** 使用物: **<br>消失  |  [污垢](Filth.md)+15  
[“锤”](tag_Hammer.md)  |  制作粘土  |  30分  |  [光亮](Light.md): 1-100  |  ** 自身: **<br>→ [粘土](Clay.md)  |  [污垢](Filth.md)+10  
## 可拖至  
[蜂箱](BeeSkep.md), [繁殖中的蜂群](BeeSkepSwarming.md), [中陷阱的猕猴](CageTrapMacaque.md), [母猪](BoarEnclosureFemale.md), [公猪](BoarEnclosureMale.md), [小猪](BoarEnclosurePiglet.md), [母猪](BoarTiedFemale.md), [公猪](BoarTiedMale.md), [小猪](BoarTiedPiglet.md), [忠犬朋友](DogFriend.md), [母山羊](GoatEnclosureFemale.md), [小羊](GoatEnclosureKid.md), [哺乳期山羊](GoatEnclosureLactating.md), [哺乳期山羊](GoatEnclosureLactating.md), [公山羊](GoatEnclosureMale.md), [母山羊](GoatTiedFemale.md), [哺乳期山羊](GoatTiedFemaleLactating.md), [小羊](GoatTiedKid.md), [公山羊](GoatTiedMale.md), [祖父](Grandfather.md), [祖父](Grandfather.md), [祖父(健康)](GrandfatherHealthy.md), [猕猴朋友](MacaqueFriend.md), [受伤的猕猴](MacaqueWounded.md), [西米饼](SagoFlatbread.md), [应急水包](WaterRation.md), [干涸的小水塘(湿地丛林)](Puddle.md), [蓄水池](WaterReservoir.md), [蓄水池(满)](WaterReservoirFull.md), [蓄水池（灌溉中）](WaterReservoirIrrigating.md)  
## 可用于蓝图  
- [空蜂箱(蓝图)(空)](Bp_BeeSkepEmpty.md)  
- [农田(蓝图)](Bp_CropPlot.md)  
- [斧头模具(蓝图)](Bp_MoldAxe.md)  
- [刀模具(蓝图)](Bp_MoldKnife.md)  
- [铲头模具(蓝图)](Bp_MoldShovel.md)  
- [矛头模具(蓝图)](Bp_MoldSpear.md)  
- [水稻田(蓝图)](Bp_RicePaddy.md)  
  
  
## 可用于转化  
转化为  |  容器  
----  |  ----  
[干土堆](DirtPile.md)  |  [营火](Campfire.md)  
[干土堆](DirtPile.md)  |  [粘土火盆](ClayFirePit.md)  
[干土堆](DirtPile.md)  |  [火堆](Fire.md)  
[干土堆](DirtPile.md)  |  [瓦斯炉(开)](GasCookerOn.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：180<br>最大：180  |  每15分钟-1<br>最多需要：1天21小时  |  ** 到达0时： **<br>→ [干土堆](DirtPile.md)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md): 1-5  |  耐久+10  |    
