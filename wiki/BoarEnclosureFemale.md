# 母猪  
> 可以宰了它获得猪肉和皮革，或者让它与公猪交配，以繁殖更多猪。  
  
  母猪  |   图片   
 ----  |  ----:   
 **标签：**	[“野猪”](tag_Boar.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288<br><br>** 可重命名 **  |  ![](Sprite/BoarEnclosureFemale.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[母猪](BoarTiedFemale.md)  |  圈养在畜栏中  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生<br>  |  15分  |  [畜栏(环境)](Env_Enclosure.md)  |  消失  |  [蜂群密度](Pop_Boar.md)+1000  
捡起<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  → [母猪](BoarTiedFemale.md)<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">  -250  |    
抚摸<br>  |  15分  |    |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 25  |  [孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)  |  喂食  |  15分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 48<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 12<br>** 使用物: **<br>消失  |    
[“喂”](tag_Meat.md)  |  喂食  |  15分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 384<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 50<br>** 使用物: **<br>消失  |    
[“喂/添加”](tag_Feed.md)  |  喂食  |  15分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 192<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 25<br>** 使用物: **<br>消失  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 48<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 25<br>** 使用物: **<br>含水量  -300  |    
[大石块](StoneHeavy.md)  |  宰杀  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [野猪尸体](BoarCarcass.md)<br>** 使用物: **<br>可用次数  -1  |  [污垢](Filth.md)+20  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：288<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时：噢不！ **<br>→ [野猪尸体](BoarCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br>→ [野猪尸体](BoarCarcass.md)  
怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:30px;">  |  初始：0<br>最大：1344  |  每15分钟-1<br>最多需要：14天  |  ** 到达上限时： **<br>[小猪尸体](BoarCarcassPiglet.md)0～+3 <br>[小猪](BoarEnclosurePiglet.md)0～+3 <br>[小猪](BoarEnclosurePiglet.md)+3～+6 <br>→ [哺乳期山羊](GoatEnclosureLactating.md)  
压力<img decoding="async" src="Sprite/Content.png" style="width:30px;">  |  初始：0<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |    
体重<img decoding="async" src="Sprite/SaturationMeat.png" style="width:30px;">  |  初始：0<br>最大：6000  |  每15分钟-2<br>最多需要：31天6小时  |    
BoarEnclosureFemale_SpecialDurability2.CardStatName  |  初始：0<br>最大：1344  |  每15分钟-1<br>最多需要：14天  |    
便便  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br>[粪便](Manure.md)+1   
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Starvation Protection  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">: 1～12<br>体重<img decoding="async" src="Sprite/SaturationMeat.png" style="width:20px;">: 1～6000  |  饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">+1  |    
Gaining Weight 1  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">: 288～432  |  体重<img decoding="async" src="Sprite/SaturationMeat.png" style="width:20px;">+3  |    
Gaining Weight 2  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">: 433～576  |  体重<img decoding="async" src="Sprite/SaturationMeat.png" style="width:20px;">+4  |    
Eat  |  ** 需要存在卡牌：**<br>[猪食槽](BoarFeeder.md)  |  饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">+2  |    
Drink  |  ** 需要存在卡牌：**<br>[水槽](WateringTrough.md)  |  口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">+2  |    
Cure Stress  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">: 288～576<br>口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">: 144～288  |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">+10  |    
Pregnant  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">: 193～1344  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">+2  |    
Impregnate  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">: 0～192<br>** 需要存在卡牌：**<br>[公猪](BoarEnclosureMale.md)  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">+2  |    
Pregnancy Killer  |  ** 需要属性：**<br>BoarEnclosureFemale_SpecialDurability2.CardStatName: 1～1344  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">-4  |    
Overcrowding  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">: 1～1536<br>** 需要存在卡牌：**<br>[“大型动物”](tag_LargeAnimal.md)  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">-0.5<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">-0.66  |    
Poop  |  ** 需要存在卡牌：**<br>[粪便](Manure.md)  |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">-0.01  |    
Company  |    |    |  [孤独感](Loneliness.md)加成-1  
## 其他效果  
名称  |  目标  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  
Boar Overeating  |  [猪食槽](BoarFeeder.md)  |  ** 需要属性：**<br>特殊1: 4500～6000  |  食物<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">-1  |    