# 黑暗  
> 这里黑黢黢、静悄悄，让我有点不安。  
  
  黑暗  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[阴暗洞穴(环境)](Env_DarkChamber.md)<br><br>**标签：**	[“室内”](tag_EnvIndoors.md), [“洞穴系统”](tag_EnvCaveSystem.md)<br><br>** 环境效果: **<br>[雨水防护](RainProtection.md)+5<br>[绝热](InsulationHeat.md)+6<br>[体感温度](TemperaturePerceived.md)-6<br>[阳光防护](SunProtection.md)+6<br>[遮蔽](Sheltered.md)+1<br>[夜晚](IsNight.md)+1<br><br>** 容量： **10000<br><br>** 可改造项目: **<br>[门](Imp_Door.md) , [皮地毯](Imp_StitchedHideFloor.md) , [白墙](Imp_WhiteWashedWalls.md) , [家园标志](Imp_HomeSign.md)<br><br>** 可前往: **<br>[洞穴中层(区域)](MidChamber.md)<br>[高地坑洞(区域)(坑洞)](HighlandHole.md)  |  <img decoding="async" src="Sprite/Darkness.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
休息<br>  |  1小时  |  [光亮](Light.md): 0-0  |    |  [压力](Stress.md)-4 (每15分钟)  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[扫帚](Broom.md)  |  打扫<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 5-100  |  ** 自身: **<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">  -250(-25%)<br><br>** 使用物: **<br>可用次数  -1  |  [压力](Stress.md)-10<br>[情绪](Morale.md)+5  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟+0.1<br>最多需要：104天4小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Darkness  |  ** 需要状态：**<br>[光亮](Light.md): 0-0  |    |  [精神失常](MindState.md)加成+2  
Minimal Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 100～250(10%～25%)  |    |  [不适](Discomfort.md)+175  
Low Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 251～500(25.1%～50%)  |    |  [不适](Discomfort.md)+375  
Moderate Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 501～750(50.1%～75%)  |    |  [不适](Discomfort.md)+625  
Extreme Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 751～1000(75.1%～100%)  |    |  [不适](Discomfort.md)+875  


<script>document.title="黑暗 - 卡牌生存百科 Card Survival Wiki";</script>