# 地窖  
> 一个地下房间，食物在这里可以储存更久。  
<br>  
> 一间凉爽的地下室，特别适合存放易腐物品。<br>储存在这里的食品要更久才会过期。<br><br>要建造它，你需要一把铲子、砂浆、原木、泥土、粘土和皮革。  
  
  地窖  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[地窖(环境)](Env_Cellar.md)<br><br>**标签：**	[“室内”](tag_EnvIndoors.md)<br><br>** 环境效果: **<br>[雨水防护](RainProtection.md)+5<br>[绝热](InsulationHeat.md)+6<br>[体感温度](TemperaturePerceived.md)-4<br>[阳光防护](SunProtection.md)+6<br>[遮蔽](Sheltered.md)+1<br><br>** 可改造项目: **<br>[门](Imp_Door.md) , [皮地毯](Imp_StitchedHideFloor.md) , [白墙](Imp_WhiteWashedWalls.md) , [海之荣耀](Imp_SeaTrophy.md) , [家园标志](Imp_HomeSign.md)  |  <img decoding="async" src="Sprite/Cellar.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[地窖](CellarEntrance.md)  |  进入  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[扫帚](Broom.md)  |  打扫<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 5-100  |  ** 自身: **<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">  -250<br><br>** 使用物: **<br>可用次数  -1  |  [压力](Stress.md)-10<br>[情绪](Morale.md)+5  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟+1<br>最多需要：10天10小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Minimal Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 100～250  |    |  [不适](Discomfort.md)+175  
Low Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 251～500  |    |  [不适](Discomfort.md)+375  
Moderate Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 501～750  |    |  [不适](Discomfort.md)+625  
Extreme Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 751～1000  |    |  [不适](Discomfort.md)+875  
## 其他效果  
名称  |  目标  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  
Preserve  |  [“喂/添加”](tag_Feed.md)<br>[“可烹饪的”](tag_MealCookingpot.md)<br>[“有机的”](tag_Organic.md)<br>[“可烹饪的”](tag_Cookable.md)  |    |  耐久+0.25  |    
