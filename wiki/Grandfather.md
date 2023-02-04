# 祖父  
> 你祖父病了。你需要给他提供吃喝。  
<br>  
>   
  
  祖父  |   图片   
 ----  |  ----:   
 ** 可重命名 **<br><br>** 不可堆叠 **<br><br>**装备：**[“宠物”](eTag_Pet.md)<br><br>**可使用次数：**288<br><br>** 效果: **<br>[孤独感](Loneliness.md)加成-5  |  <img decoding="async" src="Sprite/GranfatherSick.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
陪伴<br>  |  15分  |    |  ** 获得： **<br>** [Success] **<br>[孤独感](Loneliness.md)-30<br>[压力](Stress.md)-25<br>[娱乐](Entertainment.md)+5<br>基础权重：800  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“椰子壳料理”](tag_MealCoconutShell.md)  |  喂食<br>  |  30分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +576(100%)<br><br>** 使用物: **<br>→ [椰子壳](CoconutShell.md)  |  [孤独感](Loneliness.md)-50<br>[情绪](Morale.md)+5  
[“已烹饪的”](tag_MealCookingpot.md)  |  喂食<br>  |  30分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +576(100%)<br><br>** 使用物: **<br>→ [烹饪锅](CookingPot.md)  |  [孤独感](Loneliness.md)-50<br>[情绪](Morale.md)+5  
[“人类食物”](tag_HumanFood.md)  |  喂食<br>  |  30分  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +288(50%)<br><br>** 使用物: **<br>→消失  |  [孤独感](Loneliness.md)-15  
[“储水容器”](tag_WaterContainer.md)  |  喂水<br>  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">  +48(16.67%)<br><br>** 使用物: **<br>含水量  -300  |    
[“储水容器”](tag_WaterContainer.md)  |  喂药<br>  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">  +48(16.67%)<br>药  +24(25%)<br><br>** 使用物: **<br>含水量  -300  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时：悲报！ **<br><br>** 自身 **<br>→ [木床](BedWooden.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：悲报！ **<br><br>** 自身 **<br>→ [木床](BedWooden.md)  
健康度<img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：1440<br>最大：2880  |  每15分钟-2<br>最多需要：15天  |  ** 到达0时：悲报！ **<br><br>** 自身 **<br>→ [木床](BedWooden.md)  
情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：1<br>最大：10  |  -  |  ** 到达上限时：祖父的回归 **<br>** [1] **<br>  [祖父康复了！(事件)](Event_OutroFarmer1.md)(+1)<br><br>** 自身 **<br>→ [祖父(健康)](GrandfatherHealthy.md)  
药  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Cure Health  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 432～576(75%～100%)<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 216～288(75%～100%)  |  健康度<img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;"> +4(0.13%)  |    
Medicine  |  ** 需要属性：**<br>药: 1～96(1.04%～100%)  |  健康度<img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;"> +4(0.13%)  |    


<script>document.title="祖父 - 卡牌生存百科 Card Survival Wiki";</script>