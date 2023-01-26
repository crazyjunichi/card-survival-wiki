# 公猪  
> 一头活公猪。可以通过喂食喂水来维持生命，或者放养在畜栏里。  
  
  公猪  |   图片   
 ----  |  ----:   
 **重量：**3000<br><br>**标签：**	[“野猪”](tag_Boar.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288  |  ![](Sprite/BoarMaleTied.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[公猪](BoarEnclosureMale.md)  |  捡起  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
圈养在畜栏中<br>  |  -  |  [畜栏(环境)](Env_Enclosure.md)  |  → [公猪](BoarEnclosureMale.md)  |    
放生<br>  |  15分  |  [畜栏(环境)](Env_Enclosure.md)  |  消失  |  [蜂群密度](Pop_Boar.md)+1000  
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
饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：576<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br>→ [野猪尸体](BoarCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br>→ [野猪尸体](BoarCarcass.md)  
压力<img decoding="async" src="Sprite/Content.png" style="width:30px;">  |  初始：0<br>最大：1000  |  每15分钟-5<br>最多需要：2天2小时  |    
体重<img decoding="async" src="Sprite/SaturationMeat.png" style="width:30px;">  |  初始：3000<br>最大：6000  |  每15分钟-2<br>最多需要：31天6小时  |    