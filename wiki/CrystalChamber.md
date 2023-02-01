# 晶石洞穴  
> 一个洞穴，洞壁上覆盖着某种水晶状的矿物。  
  
  晶石洞穴  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[晶石洞穴(环境)](Env_CrystalChamber.md)<br><br>**标签：**	[“室内”](tag_EnvIndoors.md), [“洞穴系统”](tag_EnvCaveSystem.md)<br><br>** 环境效果: **<br>[降水值](RainValue.md)-5<br>[绝热](InsulationHeat.md)+6<br>[体感温度](TemperaturePerceived.md)-6<br>[阳光防护](SunProtection.md)+6<br>[遮蔽](Sheltered.md)+1<br>[夜晚](IsNight.md)+1<br><br>** 容量： **20000<br><br>** 可改造项目: **<br>[皮地毯](Imp_StitchedHideFloor.md) , [白墙](Imp_WhiteWashedWalls.md) , [海之荣耀](Imp_SeaTrophy.md) , [家园标志](Imp_HomeSign.md)<br><br>** 可前往: **<br>[覆溺洞穴(区域)](FloodedChamber.md)<br>[洞穴底层(区域)](LowChamber.md)  |  <img decoding="async" src="Sprite/CrystalChamber.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 探索  
进度  |  目的地  
----  |  ----  
50%  |  [铜矿脉(洞穴上层)](CopperVein.md)  
100%  |  [狭窄通道(洞穴上层)](FloodedChamberEntranceClosed.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索<br>  |  15分  |  [光亮](Light.md): 5-100  |  ** 获得： **<br>** [Stone] **<br>  [石头](Stone.md)(+1)<br>基础权重：10<br>** [Calcite] **<br>  [方解石晶体](Calcite.md)(+1)<br>可用次数：+4<br>基础权重：1<br>** [Geode] **<br>  [晶洞](Geode.md)(+1)<br>可用次数：+3<br>基础权重：5  |  [污垢](Filth.md)+2  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[扫帚](Broom.md)  |  打扫<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 5-100  |  ** 自身: **<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">  -250<br><br>** 使用物: **<br>可用次数  -1  |  [压力](Stress.md)-10<br>[情绪](Morale.md)+5  
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


<script>document.title="晶石洞穴 - 卡牌生存百科 Card Survival Wiki";</script>