# 棚屋  
> 用棕榈叶编成的小棚屋。  
<br>  
> 一个小而廉价的棚屋，由<b>长木棍和棕榈编织片</b>搭建来的，可以帮助你抵御<b>风暴，雨和日晒</b>。<br><br>它没有像泥屋或石屋那么多的存储空间和抵御风暴的能力，但可以在岛屿较远的部分作为一个快速基地或一个前哨站。<br><br>棚屋可以升级改造，包括存储扩展，门和其他什么的。<br>屋顶一旦受损，就应该修理，不然有倒塌的危险。  
  
  棚屋  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[棚屋(环境)](Env_Shed.md)<br><br>**标签：**	[“室内”](tag_EnvIndoors.md)<br><br>** 环境效果: **<br>[雨水防护](RainProtection.md)+5<br>[绝热](InsulationHeat.md)+3<br>[阳光防护](SunProtection.md)+6<br>[遮蔽](Sheltered.md)+1<br><br>** 容量： **15000<br><br>** 可改造项目: **<br>[门](Imp_Door.md) , [棚屋扩建](Imp_ShedExpansion.md) , [海之荣耀](Imp_SeaTrophy.md) , [家园标志](Imp_HomeSign.md)<br><br>** 相关损坏: **<br>[屋顶损坏](Dmg_RoofDamage.md) , [坍塌的屋顶(泥屋)](Dmg_RoofCollapsed.md)  |  <img decoding="async" src="Sprite/Shed.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[扫帚](Broom.md)  |  打扫<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 5-100  |  ** 自身: **<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">  -250(-25%)<br><br>** 使用物: **<br>可用次数  -1  |  [压力](Stress.md)-10<br>[情绪](Morale.md)+5  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟+1<br>最多需要：10天10小时  |    
屋顶破洞计数  |  初始：0<br>最大：96  |  每15分钟+0.1<br>最多需要：10天  |  ** 到达上限时： **<br>** [Result]  **<br>  [屋顶损坏](Dmg_RoofDamage.md)(+1)<br><br>** 自身 **<br>屋顶破洞计数  -96(-100%)<br>屋顶坍塌计数  +1(50%)  
屋顶坍塌计数  |  初始：0<br>最大：2  |  -  |  ** 到达上限时： **<br>  [坍塌的屋顶(泥屋)](Dmg_RoofCollapsed.md)(+1)<br>  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Minimal Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 100～250(10%～25%)  |    |  [不适](Discomfort.md)+175  
Low Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 251～500(25.1%～50%)  |    |  [不适](Discomfort.md)+375  
Moderate Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 501～750(50.1%～75%)  |    |  [不适](Discomfort.md)+625  
Extreme Filth  |  ** 需要属性：**<br>污秽<img decoding="async" src="Sprite/Dirt4.png" href="a.md" style="max-width:20px;max-height:20px;">: 751～1000(75.1%～100%)  |    |  [不适](Discomfort.md)+875  


<script>document.title="棚屋 - 卡牌生存百科 Card Survival Wiki";</script>