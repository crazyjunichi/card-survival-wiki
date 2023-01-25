# 猕猴窝  
>   
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“室内”](tag_EnvIndoors.md)<br><br>** 效果: **<br>[舒适度](Comfort.md)-100<br><br>** 只允许存在一个 **  |  ![](Sprite/DarkCaveEntrance.png)   
  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[扫帚](Broom.md)  |  打扫  |  30分  |  [光亮](Light.md):5-100  |  自身:<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">  -250<br><br>使用物:<br>可用次数  -1<br><br>  |  [压力](Stress.md)-10<br>[情绪](Morale.md)+5  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:30px;">  |  初始：1000<br>最大：1000  |  每15分钟+1<br>最多需要：10天10小时  |    
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Minimal Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">100～250  |    |  [不适](Discomfort.md)+175  
Low Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">251～500  |    |  [不适](Discomfort.md)+375  
Moderate Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">501～750  |    |  [不适](Discomfort.md)+625  
Extreme Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" style="width:20px;">751～1000  |    |  [不适](Discomfort.md)+875  
