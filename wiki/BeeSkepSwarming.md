# 繁殖中的蜂群  
> 这个蜂巢在繁殖，我应该找个布袋把新蜂后抓起来。  
<br>  
> <b>蜂箱</b>是一种人工蜂巢，需要由<b>棕榈编织片、泥土和粪便</b>制成，然后需要放入<b>巢脾</b>、蜂王和一些蜜蜂。<br>一旦你有了一个蜂巢，你就要确保该地区长了足够的花，让蜜蜂可以生产足够的蜂蜜来养活自己。你也可以给蜜蜂喂混合了<b>糖或蜂蜜</b>的<b>水</b>，这样它们的蜂蜜储备增长得更快。<br><br>一旦蜜蜂达到最大数量，它们就会<b>繁殖</b>。这时可以用一个袋子捕捉多余的蜜蜂和它们的蜂后，并用它们来制作一个新的蜂箱。<br>处理蜜蜂时，考虑使用<b>熏蜂器和防蜂服</b>，否则你会被蜇得很惨。  
  
  繁殖中的蜂群  |   图片   
 ----  |  ----:   
 ** 不可堆叠 **<br><br>**可使用次数：**336  |  <img decoding="async" src="Sprite/SkepSwarm.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[蜂箱](BeeSkep.md)  |  转化  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
采集<br>  |  45分  |  [光亮](Light.md): 10-100  |  ** 自身：**<br>蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">  -500(-50%)<br><br>** 获得： **<br>** [Beehive] **<br>  [巢脾](BeeHoneycomb.md)(+2)<br>  [一群蜜蜂！(事件)](Event_BeesSwarming.md)(+1)<br>  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+4～+16  
采集<br>  |  45分  |  [光亮](Light.md): 10-100  |  ** 自身：**<br>蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">  -500(-50%)<br><br>** 获得： **<br>** [Beehive] **<br>  [巢脾](BeeHoneycomb.md)(+2)<br>  |  [污垢](Filth.md)+20<br>[蜜蜂蛰刺](BeeStings.md)+2～+8  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[火把(开)](TorchOn.md)<br>[熏蜂器(开)](BeeSmokerOn.md)  |  烟熏<br>  |  -  |    |  ** 自身: **<br>休眠<img decoding="async" src="Sprite/Sleepy.png" href="a.md" style="max-width:20px;max-height:20px;">  +6(100%)  |    
[“储水容器”](tag_WaterContainer.md)  |  添入<br>  |  -  |    |  ** 自身: **<br>食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +500(174%)<br><br>** 使用物: **<br>含水量  -300  |    
[布袋](Sack.md)  |  捕捉蜜蜂<br>  |  15分  |    |  ** 自身: **<br>→ [蜂箱](BeeSkep.md)<br>种群数量<img decoding="async" src="Sprite/BeeStings.png" href="a.md" style="max-width:20px;max-height:20px;">  -672(-50%)<br><br>** 使用物: **<br>含水量  -300<br><br>** 获得: **<br>** [Protected] **<br>  [蜂后](QueenBee.md)(+1)<br>  [蜜蜂](Bees.md)(+1)<br><li>[蜂蛰防护](BeeProtection.md)为6～10时权重+10</li><br>** [Protected] **<br>  [蜂后](QueenBee.md)(+1)<br>  [蜜蜂](Bees.md)(+1)<br>  [一群蜜蜂！(事件)](Event_BeesSwarming.md)(+1)<br><li>[蜂蛰防护](BeeProtection.md)为+0时权重+10</li>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
休眠<img decoding="async" src="Sprite/Sleepy.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：6  |  每15分钟-1<br>最多需要：1小时30分  |    
种群数量<img decoding="async" src="Sprite/BeeStings.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：336<br>最大：1344  |  每15分钟+1<br>最多需要：14天  |    
食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  -  |    
  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br><br>自身→ [蜂箱](BeeSkep.md)<br>可用次数  -672  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Make Honey  |  ** 需要存在卡牌：**<br>[“花”](tag_Flower.md)  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">+0.1  |    
Eat Honey  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～0.1(0%～0%)  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">-1  |    
Starve  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～0.1(0%～0%)<br>蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～0.1(0%～0%)  |  种群数量<img decoding="async" src="Sprite/BeeStings.png" href="a.md" style="max-width:20px;max-height:20px;">-2  |    
Hive Competition  |  ** 需要存在卡牌：**<br>[繁殖中的蜂群](BeeSkepSwarming.md)  |  蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">-0.5  |    
Breed More  |  ** 需要属性：**<br>食物储备<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 0.5～1(0%～0%)<br>蜂蜜<img decoding="async" src="Sprite/BeeHoneycomb.png" href="a.md" style="max-width:20px;max-height:20px;">: 0.5～1(0%～0%)  |  种群数量<img decoding="async" src="Sprite/BeeStings.png" href="a.md" style="max-width:20px;max-height:20px;">+1  |    


<script>document.title="繁殖中的蜂群 - 卡牌生存百科 Card Survival Wiki";</script>