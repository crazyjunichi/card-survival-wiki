# 泥屋  
>   
<br>  
> 用<b>泥砖、原木、细线和棕榈叶</b>建造的房子。它能使人免受<b>风暴、雨水和日晒</b>的影响。<br><br>泥屋可以进行多次升级来改进，包括存储扩展、门、粉刷墙面等。<br>屋顶一旦受损或有倒塌的危险，就应该修理。  
  
  泥屋  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[泥屋(环境)](Env_MudHut.md)<br><br>**标签：**	[“室内”](tag_EnvIndoors.md)<br><br>** 环境效果: **<br>[雨水防护](RainProtection.md)+5<br>[绝热](InsulationHeat.md)+3<br>[体感温度](TemperaturePerceived.md)-1<br>[阳光防护](SunProtection.md)+6<br>[遮蔽](Sheltered.md)+1<br><br>** 可改造项目: **<br>[门](Imp_Door.md) , [泥屋扩建](Imp_MudHutExpansion.md) , [白墙](Imp_WhiteWashedWalls.md) , [皮地毯](Imp_StitchedHideFloor.md) , [海之荣耀](Imp_SeaTrophy.md) , [家园标志](Imp_HomeSign.md)<br><br>** 相关损坏: **<br>[屋顶损坏](Dmg_RoofDamage.md) , [坍塌的屋顶(泥屋)](Dmg_RoofCollapsed.md)  |  <img decoding="async" src="Sprite/MudHut.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[泥屋](MudHutEntrance.md)  |  进入  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[扫帚](Broom.md)  |  打扫<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 5-100  |  ** 自身: **<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">  -250<br><br>** 使用物: **<br>可用次数  -1  |  [压力](Stress.md)-10<br>[情绪](Morale.md)+5  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟+1<br>最多需要：10天10小时  |    
屋顶破洞计数  |  初始：0<br>最大：96  |  每15分钟+0.1<br>最多需要：10天  |  ** 到达上限时： **<br>** [Result] **<br>  [屋顶损坏](Dmg_RoofDamage.md)(+1)<br>  
屋顶坍塌计数  |  初始：0<br>最大：4  |  -  |  ** 到达上限时： **<br>  [坍塌的屋顶(泥屋)](Dmg_RoofCollapsed.md)(+1)<br>  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Minimal Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 100～250  |    |  [不适](Discomfort.md)+175  
Low Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 251～500  |    |  [不适](Discomfort.md)+375  
Moderate Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 501～750  |    |  [不适](Discomfort.md)+625  
Extreme Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 751～1000  |    |  [不适](Discomfort.md)+875  
