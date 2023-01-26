# 母山羊  
> 可以在它哺乳的时候挤奶，或者宰了它获得羊肉和皮革。  
  
  母山羊  |   图片   
 ----  |  ----:   
 **标签：**	[“山羊”](tag_Goat.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288<br><br>** 可重命名 **  |  ![](Sprite/GoatFemaleEnclosure.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[母山羊](GoatTiedFemale.md)  |  圈养在畜栏中  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生<br>  |  15分  |  [畜栏(环境)](Env_Enclosure.md)  |  消失  |  [山羊种群数量](Pop_Goat.md)+1000  
捆起来<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  → [母山羊](GoatTiedFemale.md)<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">  -250  |    
抚摸<br>  |  15分  |    |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 25  |  [孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“喂食（草食动物）”](tag_FeedHerb.md)  |  喂食  |  15分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 144<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 25<br>** 使用物: **<br>消失  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 48<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 25<br>** 使用物: **<br>含水量  -300  |    
[大石块](StoneHeavy.md)  |  宰杀  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [山羊尸体(母)](GoatCarcassFemale.md)<br>** 使用物: **<br>可用次数  -1  |  [污垢](Filth.md)+20  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：288<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时：噢不！ **<br>→ [山羊尸体(母)](GoatCarcassFemale.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br>→ [山羊尸体(母)](GoatCarcassFemale.md)  
怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:30px;">  |  初始：0<br>最大：1344  |  每15分钟-1<br>最多需要：14天  |  ** 到达上限时： **<br>[小羊尸体](GoatCarcassKid.md)+1 <br>[小羊](GoatEnclosureKid.md)+1 <br>[小羊](GoatEnclosureKid.md)+2 <br>→ [哺乳期山羊](GoatEnclosureLactating.md)  
压力<img decoding="async" src="Sprite/Content.png" style="width:30px;">  |  初始：0<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |    
便便  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br>[粪便](Manure.md)+1   
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Eat  |  ** 需要存在卡牌：**<br>[羊食槽](GoatFeeder.md)  |  饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">+2  |    
Drink  |  ** 需要存在卡牌：**<br>[水槽](WateringTrough.md)  |  口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">+2  |    
Cure Stress  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">: 288～576<br>口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">: 144～288  |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">+10  |    
Pregnant  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">: 193～1344  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">+2  |    
Impregnate  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">: 0～192<br>** 需要存在卡牌：**<br>[公山羊](GoatEnclosureMale.md)  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">+2  |    
Overcrowding  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" style="width:20px;">: 1～1536<br>** 需要存在卡牌：**<br>[“大型动物”](tag_LargeAnimal.md)  |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">-0.66  |    
Poop  |  ** 需要存在卡牌：**<br>[粪便](Manure.md)  |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">-0.01  |    
Company  |    |    |  [孤独感](Loneliness.md)加成-1  