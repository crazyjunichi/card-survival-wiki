# 哺乳期山羊  
> 可以每天挤奶。  
<br>  
> 这种动物经常出没于该岛的<b>草原和高地</b>。<br><br>可以猎杀它们以获取肉和皮，也可以通过<b>陷坑</b>活捉。<br>可以捕获山羊并圈养在畜栏里，如果公母山羊都在场，就可以繁殖并用于产奶。<br>  
  
  哺乳期山羊  |   图片   
 ----  |  ----:   
 ** 可重命名 **<br><br>** 不可堆叠 **<br><br>**标签：**	[“山羊”](tag_Goat.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288  |  <img decoding="async" src="Sprite/GoatFemaleEnclosure.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[母山羊](GoatEnclosureFemale.md)  |  转化  
[哺乳期山羊](GoatTiedFemaleLactating.md)  |  圈养在畜栏中  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生<br>  |  15分  |  ~~[畜栏(环境)](Env_Enclosure.md)存在于手中/面板~~  |  ** 自身：**<br>→消失  |  [山羊种群数量](Pop_Goat.md)+1000  
捆起来<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身：**<br>→ [哺乳期山羊](GoatTiedFemaleLactating.md)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  -250(-25%)  |    
抚摸<br>  |  15分  |    |  ** 自身：**<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +25(2.5%)  |  [孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“喂食（草食动物）”](tag_FeedHerb.md)<br>[“树叶”](tag_Leaves.md)  |  喂食<br>  |  15分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +144(25%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +25(2.5%)<br><br>** 使用物: **<br>→消失  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水<br>  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">  +48(16.67%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +25(2.5%)<br><br>** 使用物: **<br>含水量  -300  |    
[大石块](StoneHeavy.md)<br>[“切割工具”](tag_Cutter.md)<br>[“斧”](tag_Axe.md)<br>[“一级矛”](tag_Spear.md)  |  宰杀<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [山羊尸体(母)](GoatCarcassFemale.md)<br><br>** 使用物: **<br>可用次数  -1  |  [污垢](Filth.md)+20  
[“储水容器”](tag_WaterContainer.md)  |  挤奶<br>[手部动作](HandAction.md)  |  -  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>奶量<img decoding="async" src="Sprite/Milk.png" href="a.md" style="max-width:20px;max-height:20px;">  -48(-50%)<br>泌乳  +96(7.14%)<br><br>** 使用物: **<br>可用次数  -1<br><br>[全脂羊奶](LQ_MilkWhole.md)(+150)  |  [污垢](Filth.md)+5  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：576<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br><br>** 自身 **<br>→ [山羊尸体(母)](GoatCarcassFemale.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br><br>** 自身 **<br>→ [山羊尸体(母)](GoatCarcassFemale.md)  
奶量<img decoding="async" src="Sprite/Milk.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：96  |  -  |    
情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |    
泌乳  |  初始：1344<br>最大：1344  |  每15分钟-1<br>最多需要：14天  |  ** 到达0时：停止泌乳 **<br><br>** 自身 **<br>→ [母山羊](GoatEnclosureFemale.md)  
便便  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br>** [Poop]  **<br>  [粪便](Manure.md)(+1)<br><br>** 自身 **<br>便便  +96(100%)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Eat  |  ** 需要存在卡牌：**<br>[羊食槽](GoatFeeder.md)  |  饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> +2(0.34%)  |    
Drink  |  ** 需要存在卡牌：**<br>[水槽](WateringTrough.md)  |  口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> +2(0.69%)  |    
Cure Stress  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 288～576(50%～100%)<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 144～288(50%～100%)  |  情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">+10(1%)  |    
Kid Drinking  |  ** 需要属性：**<br>奶量<img decoding="async" src="Sprite/Milk.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～96(1.04%～100%)<br>** 需要存在卡牌：**<br>[小羊](GoatEnclosureKid.md)  |  奶量<img decoding="async" src="Sprite/Milk.png" href="a.md" style="max-width:20px;max-height:20px;"> -1(-1.05%)<br>泌乳 +2(0.14%)  |    
Lactating  |  ** 需要属性：**<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">: 101～1000(10.1%～100%)<br>泌乳: 1～1344(0.07%～100%)  |  奶量<img decoding="async" src="Sprite/Milk.png" href="a.md" style="max-width:20px;max-height:20px;"> +2(2.08%)  |    
Overcrowding  |  ** 需要属性：**<br>奶量<img decoding="async" src="Sprite/Milk.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～1536(1.04%～1600%)<br>** 需要存在卡牌：**<br>[“大型动物”](tag_LargeAnimal.md)  |  情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">-0.66(-0.07%)  |    
Poop  |  ** 需要存在卡牌：**<br>[粪便](Manure.md)  |  情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">-0.01(-0.01%)  |    
Company  |    |    |  [孤独感](Loneliness.md)加成-1  


<script>document.title="哺乳期山羊 - 卡牌生存百科 Card Survival Wiki";</script>