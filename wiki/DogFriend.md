# 忠犬朋友  
> 汪汪！  
  
  忠犬朋友  |   图片   
 ----  |  ----:   
 ** 可重命名 **<br><br>** 不可删除 **<br><br>** 不可堆叠 **<br><br>**重量：**0<br><br>**标签：**	[“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288<br><br>** 效果: **<br>[孤独感](Loneliness.md)加成-2<br>[害怕猕猴](MacaqueFear.md)+500<br>[海鸥之惧](SeagullFear.md)+1000  |  <img decoding="async" src="Sprite/Dog.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
抚摸<br>  |  15分  |    |  ** 自身：**<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 25<br><br>** 获得： **<br>** [Success] **<br>[孤独感](Loneliness.md)-30<br>[压力](Stress.md)-25<br>[娱乐](Entertainment.md)+6<br>基础权重：800  |    
一起玩耍<br>  |  30分  |    |  ** 自身：**<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 25  |  [娱乐](Entertainment.md)+16<br>[耐力](Stamina.md)-10<br>[压力](Stress.md)-25<br>[孤独感](Loneliness.md)-30  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)  |  喂食<br>  |  -  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> + 288<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 50<br><br>** 使用物: **<br>消失<br>可用次数  -1<br><br>** 获得: **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：800  |  [孤独感](Loneliness.md)-20～+0  
[“肉”](tag_Meat.md)  |  喂食<br>  |  -  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> + 288<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 250<br><br>** 使用物: **<br>消失<br><br>** 获得: **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：800  |    
[骨头(猕猴窝)](Bones.md)  |  Give Bones<br>  |  -  |    |  ** 自身: **<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 400<br><br>** 使用物: **<br>消失<br><br>** 获得: **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：800  |  [情绪](Morale.md)+1  
[“储水容器”](tag_WaterContainer.md)  |  喂水<br>  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> + 48<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 25<br><br>** 使用物: **<br>含水量  -300  |    
[“切割工具”](tag_Cutter.md)  |  杀害！<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>消失<br><br>** 使用物: **<br>可用次数  -1  |  [污垢](Filth.md)+20<br>[情绪](Morale.md)-100<br>[哀悼](Mourning.md)+288  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：576<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时：饿死了 **<br><br>→ [猕猴尸体](MacaqueCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br><br>→ [猕猴尸体](MacaqueCarcass.md)  
压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：1000<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |  ** 到达0时： **<br>** [Bite] **<br>  [┗｀O′┛ 嗷！！！！(事件)](Event_DogFriendAnger.md)(+1)<br>  
独处时间  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br>** [Gift] **<br>  [礼物！(事件)](Event_DogFriendGift.md)(+1)<br>  
便便  |  初始：192<br>最大：192  |  每15分钟-1<br>最多需要：2天  |  ** 到达0时： **<br>** [Poop] **<br>  [粪便](Manure.md)(+1)<br>  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Cure Stress  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 432～576<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 216～288  |  饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">-1<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">+10  |    
Overcrowding  |  ** 需要属性：**<br>怀孕<img decoding="async" src="Sprite/DeepPregnancy.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～1536<br>** 需要存在卡牌：**<br>[“山羊”](tag_Goat.md)  |  压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">-0.66  |    


<script>document.title="忠犬朋友 - 卡牌生存百科 Card Survival Wiki";</script>