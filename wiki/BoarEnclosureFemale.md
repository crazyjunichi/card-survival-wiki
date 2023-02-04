# 母猪  
> 可以宰了它获得猪肉和皮革，或者让它与公猪交配，以繁殖更多猪。  
  
  母猪  |   图片   
 ----  |  ----:   
 ** 可重命名 **<br><br>** 不可堆叠 **<br><br>**标签：**	[“野猪”](tag_Boar.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288  |  <img decoding="async" src="Sprite/BoarEnclosureFemale.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[小猪](BoarEnclosurePiglet.md)  |  转化  
[母猪](BoarTiedFemale.md)  |  圈养在畜栏中  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生<br>  |  15分  |  ~~[畜栏(环境)](Env_Enclosure.md)存在于手中/面板~~  |  ** 自身：**<br>→消失  |  [野猪种群数量](Pop_Boar.md)+1000  
捡起<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身：**<br>→ [母猪](BoarTiedFemale.md)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  -250(-25%)  |    
抚摸<br>  |  15分  |    |  ** 自身：**<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +25(2.5%)  |  [孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)<br>[“弱效食料”](tag_FeedWeak.md)  |  喂食<br>  |  15分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +48(8.33%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +12(1.2%)<br><br>** 使用物: **<br>→消失  |    
[“肉”](tag_Meat.md)<br>[“强效食料”](tag_FeedRich.md)  |  喂食<br>  |  15分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +384(66.67%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +50(5%)<br><br>** 使用物: **<br>→消失  |    
[“饲料”](tag_Feed.md)  |  喂食<br>  |  15分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +192(33.33%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +25(2.5%)<br><br>** 使用物: **<br>→消失  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水<br>  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">  +48(16.67%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +25(2.5%)<br><br>** 使用物: **<br>含水量  -300  |    
[大石块](StoneHeavy.md)<br>[“切割工具”](tag_Cutter.md)<br>[“斧”](tag_Axe.md)<br>[“一级矛”](tag_Spear.md)  |  宰杀<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [野猪尸体](BoarCarcass.md)<br><br>** 使用物: **<br>可用次数  -1  |  [污垢](Filth.md)+20  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时：噢不！ **<br><br>** 自身 **<br>→ [野猪尸体](BoarCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br><br>** 自身 **<br>→ [野猪尸体](BoarCarcass.md)  
怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1344  |  每15分钟-1<br>最多需要：14天  |  ** 到达上限时： **<br>** [Bad Pregancy]  **<br>  [小猪尸体](BoarCarcassPiglet.md)(+0～+3)<br>  [小猪](BoarEnclosurePiglet.md)(+0～+3)<br>基础权重：5<li>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">为0～750时权重+100～+0</li><br>** [Good Pregnancy]  **<br>  [小猪](BoarEnclosurePiglet.md)(+3～+6)<br>基础权重：65<br>** 自身 **<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:20px;max-height:20px;">  -1344(-100%)<br>Lactating  +1344(100%)  
情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |    
体重<img decoding="async" src="Sprite/SaturationMeat.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：6000  |  每15分钟-2<br>最多需要：31天6小时  |    
Lactating  |  初始：0<br>最大：1344  |  每15分钟-1<br>最多需要：14天  |    
便便  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br>** [Poop]  **<br>  [粪便](Manure.md)(+1)<br><br>** 自身 **<br>便便  +96(100%)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Starvation Protection  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～12(0.17%～2.08%)<br>体重<img decoding="async" src="Sprite/SaturationMeat.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～6000(0.02%～100%)  |  饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> +1(0.17%)  |    
Gaining Weight 1  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 288～432(50%～75%)  |  体重<img decoding="async" src="Sprite/SaturationMeat.png" href="a.md" style="max-width:20px;max-height:20px;"> +3(0.05%)  |    
Gaining Weight 2  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 433～576(75.17%～100%)  |  体重<img decoding="async" src="Sprite/SaturationMeat.png" href="a.md" style="max-width:20px;max-height:20px;"> +4(0.06%)  |    
Eat  |  ** 需要存在卡牌：**<br>[猪食槽](BoarFeeder.md)  |  饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> +2(0.34%)  |    
Drink  |  ** 需要存在卡牌：**<br>[水槽](WateringTrough.md)  |  口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> +2(0.69%)  |    
Cure Stress  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 288～576(50%～100%)<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 144～288(50%～100%)  |  情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">+10(1%)  |    
Pregnant  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:20px;max-height:20px;">: 193～1344(14.36%～100%)  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:20px;max-height:20px;"> +2(0.14%)  |    
Impregnate  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～192(0%～14.29%)<br>** 需要存在卡牌：**<br>[公猪](BoarEnclosureMale.md)  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:20px;max-height:20px;"> +2(0.14%)  |    
Lactating  |  ** 需要属性：**<br>Lactating: 1～1344(0.07%～100%)  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:20px;max-height:20px;"> -4(-0.3%)  |    
Overcrowding  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～1536(0.07%～114.29%)<br>** 需要存在卡牌：**<br>[“大型动物”](tag_LargeAnimal.md)  |  怀孕<img decoding="async" src="Sprite/Pregnancy.png" href="a.md" style="max-width:20px;max-height:20px;"> -0.1(-0.01%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">-0.66(-0.07%)  |    
Poop  |  ** 需要存在卡牌：**<br>[粪便](Manure.md)  |  情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">-0.01(-0.01%)  |    
Company  |    |    |  [孤独感](Loneliness.md)加成-1  
## 其他效果  
名称  |  目标  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  
Boar Overeating  |  [猪食槽](BoarFeeder.md)  |  ** 需要属性：**<br>特殊1: 4500～6000  |  食物<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> -1(-0.04%)  |    


<script>document.title="母猪 - 卡牌生存百科 Card Survival Wiki";</script>