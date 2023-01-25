# 受伤的猕猴  
> 一只活的猕猴。让它摆脱痛苦，还是恢复健康，一切都取决于你。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**750<br><br>**可使用次数：**144  |  ![](Sprite/MacaqueWounded.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)我拿下它了，但我受伤了。](Event_MacaqueFightMixedSuccess.md)  |  继续  
[(事件)那只猕猴倒下了！](Event_MacaqueFightSuccess.md)  |  继续  
[(事件)那只猕猴倒下了！](Event_MacaqueUndeadFightSuccess.md)  |  继续  
[猕猴窝(丛林高地)](MacaqueDenEntrance.md) , [炸药(开)](DynamiteOn.md)  |  我TM来啦！  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放它走<br>  |  15分  |  [畜栏(环境)](Env_Enclosure.md)  |  → [灰山鹑尸体](PartridgeDead.md)<br>  |    
抚摸<br>  |  15分  |    |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 250<br><br>基础权重：50<br><br>[(事件)啊！！！！](Event_MacaqueFriendAnger.md)(+1)<br>基础权重：50<br>  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)  |  喂食  |  -  |    |  自身:<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 288<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 50<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>基础权重：50<br><br>[(事件)啊！！！！](Event_MacaqueFriendAnger.md)(+1)<br>基础权重：50<br><br>  |    
[“喂/添加”](tag_Feed.md)  |  喂食  |  -  |    |  自身:<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 288<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 250<br><br>获得:<br>基础权重：50<br><br>[(事件)啊！！！！](Event_MacaqueFriendAnger.md)(+1)<br>基础权重：50<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  自身:<br>口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 48<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 250<br><br>使用物:<br>含水量  -300<br><br>  |    
[“切割工具”](tag_Cutter.md)  |  解脱  |  15分  |  [光亮](Light.md):10-100  |  自身:<br>→ [猕猴尸体](MacaqueCarcass.md)<br><br>使用物:<br>可用次数  -1<br><br>  |  [污垢](Filth.md)+20  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：288<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br>→ [猕猴尸体](MacaqueCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：144<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br>→ [猕猴尸体](MacaqueCarcass.md)  
健康度<img decoding="async" src="Sprite/Health.png" style="width:30px;">  |  初始：288<br>最大：672  |  每15分钟-1<br>最多需要：7天  |  ** 到达上限时：痊愈了！ **<br>→ [猕猴朋友](MacaqueFriend.md)  
压力<img decoding="async" src="Sprite/Content.png" style="width:30px;">  |  初始：0<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |    
便便  |  初始：192<br>最大：192  |  每15分钟-1<br>最多需要：2天  |  ** 到达0时： **<br>[粪便](Manure.md)+1   
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Cure Stress  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">432～576<br>口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">216～288  |  压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">+10  |    
Heal  |  ** 需要属性：**<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;">250～1000  |  健康度<img decoding="async" src="Sprite/Health.png" style="width:20px;">：+2  |    
