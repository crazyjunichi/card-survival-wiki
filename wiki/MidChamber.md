# 洞穴中层  
> 洞穴系统的第二层。  
  
  洞穴中层  |   图片   
 ----  |  ----:   
 **标签：**	[“室内”](tag_EnvIndoors.md), [“洞穴系统”](tag_EnvCaveSystem.md)<br><br>** 效果: **<br>[舒适度](Comfort.md)-500<br><br>** 区域唯一 **  |  ![](Sprite/CaveChamber.png)   
  
## 探索  
进度  |  目的地  
----  |  ----  
33%  |  [铜矿脉(狭窄隧道)](CopperVein.md)  
66%  |  [竖井(洞穴中层)](ShaftMidChamberToLowChamber.md)  
100%  |  [狭窄通道(洞穴中层)](DarkChamberCaveEntranceClosed.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>  |  15分  |  [光亮](Light.md): 5-100  |  [石头](Stone.md)(+1)<br>基础权重：10<br><br>[晶洞](Geode.md)(+1)<br>基础权重：3<br><br>[燧石](Flint.md)(+1)<br>基础权重：1<br><br>[燧石板](FlintSlab.md)(+1)<br>基础权重：1<br>  |  [污垢](Filth.md)+2  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[扫帚](Broom.md)  |  打扫  |  30分  |  [光亮](Light.md): 5-100  |  ** 自身: **<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">  -250<br>** 使用物: **<br>可用次数  -1  |  [压力](Stress.md)-10<br>[情绪](Morale.md)+5  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：1000<br>最大：1000  |  每15分钟+3<br>最多需要：3天11小时20分  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Minimal Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 100～250  |    |  [不适](Discomfort.md)+175  
Low Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 251～500  |    |  [不适](Discomfort.md)+375  
Moderate Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 501～750  |    |  [不适](Discomfort.md)+625  
Extreme Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 751～1000  |    |  [不适](Discomfort.md)+875  
