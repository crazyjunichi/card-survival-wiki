# 棚屋  
> 用棕榈叶编成的小棚屋。  
  
  棚屋  |   图片   
 ----  |  ----:   
 **标签：**	[“室内”](tag_EnvIndoors.md)<br><br>** 区域唯一 **  |  ![](Sprite/Shed.png)   
  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[扫帚](Broom.md)  |  打扫  |  30分  |  [光亮](Light.md): 5-100  |  ** 自身: **<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">  -250<br>** 使用物: **<br>可用次数  -1  |  [压力](Stress.md)-10<br>[情绪](Morale.md)+5  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:30px;">  |  初始：0<br>最大：1000  |  每15分钟+1<br>最多需要：10天10小时  |    
屋顶破洞计数  |  初始：0<br>最大：96  |  每15分钟+0.1<br>最多需要：10天  |  ** 到达上限时： **<br>[屋顶损坏](Dmg_RoofDamage.md)+1   
屋顶坍塌计数  |  初始：0<br>最大：2  |  -  |  ** 到达上限时： **<br>[坍塌的屋顶](Dmg_RoofCollapsed.md)+1   
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Minimal Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">: 100～250  |    |  [不适](Discomfort.md)+175  
Low Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">: 251～500  |    |  [不适](Discomfort.md)+375  
Moderate Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">: 501～750  |    |  [不适](Discomfort.md)+625  
Extreme Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">: 751～1000  |    |  [不适](Discomfort.md)+875  