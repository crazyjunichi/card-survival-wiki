# 中陷阱的猕猴  
> 一只活的猕猴。宰杀以取其皮肉，抑或试与之交友，一切取决于你。  
  
  中陷阱的猕猴  |   图片   
 ----  |  ----:   
 ** 不可堆叠 **<br><br>**重量：**1500<br><br>**标签：**	[“大的”](tag_Large.md)<br><br>**可使用次数：**144  |  <img decoding="async" src="Sprite/CageMacaque.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[诱捕笼](CageTrapPlaced.md)  |  陷阱触发了！  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生<br>  |  15分  |  [畜栏(环境)](Env_Enclosure.md)  |  → [诱捕笼](CageTrap.md)  |  [猕猴种群数量](Pop_Macaque.md)+1000  
抚摸<br>  |  15分  |    |  压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 250<br><br>** 获得： **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：50<br><br>** [Ouch!] **<br>  [啊！！！！(事件)](Event_MacaqueFriendAnger.md)(+1)<br>[压力](Stress.md)+10<br>基础权重：50<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)  |  喂食<br>  |  -  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> + 288<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 50<br><br>** 使用物: **<br>消失<br>可用次数  -1<br><br>** 获得: **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：50<br><br>** [Ouch!] **<br>  [啊！！！！(事件)](Event_MacaqueFriendAnger.md)(+1)<br>[压力](Stress.md)+10<br>基础权重：50<br>  |    
[“喂/添加”](tag_Feed.md)  |  喂食<br>  |  -  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> + 288<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 250<br><br>** 使用物: **<br>消失<br><br>** 获得: **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：50<br><br>** [Ouch!] **<br>  [啊！！！！(事件)](Event_MacaqueFriendAnger.md)(+1)<br>[压力](Stress.md)+10<br>基础权重：50<br>  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水<br>  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> + 48<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 250<br><br>** 使用物: **<br>含水量  -300  |    
[“切割工具”](tag_Cutter.md)  |  杀害<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [诱捕笼](CageTrap.md)<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Macaque] **<br>  [猕猴尸体](MacaqueCarcass.md)(+1)<br>  |  [污垢](Filth.md)+20  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br>** [Cage] **<br>  [诱捕笼](CageTrap.md)(+1)<br><br>→ [猕猴尸体](MacaqueCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：144<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br>** [Cage] **<br>  [诱捕笼](CageTrap.md)(+1)<br><br>→ [猕猴尸体](MacaqueCarcass.md)  
驯服进度<img decoding="async" src="Sprite/Entertainment.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：672  |  每15分钟-1<br>最多需要：7天  |  ** 到达上限时：已驯服！ **<br>** [Cage] **<br>  [诱捕笼](CageTrap.md)(+1)<br><br>→ [猕猴朋友](MacaqueFriend.md)  
压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |    
便便  |  初始：192<br>最大：192  |  每15分钟-1<br>最多需要：2天  |  ** 到达0时： **<br>** [Poop] **<br>  [粪便](Manure.md)(+1)<br>  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Cure Stress  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 432～576<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 216～288  |  压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">+10  |    
Tame  |  ** 需要属性：**<br>压力<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">: 250～1000  |  驯服进度<img decoding="async" src="Sprite/Entertainment.png" href="a.md" style="max-width:20px;max-height:20px;">+2  |    
