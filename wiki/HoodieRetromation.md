# 卫衣  
> 一件舒适的复古卫衣！<b>必须装备在装备栏才能生效</b>  
  
  卫衣  |   图片   
 ----  |  ----:   
 **重量：**250<br><br>**标签：**	[“躯干（内层）”](tag_InnerTorso.md), [“躯干（外层）”](tag_OuterTorso.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“衬衫”](eTag_Shirt.md)<br><br>**槽位：**2<br><br>**过滤器：**~~[“可泼溅的”](tag_Spillable.md)~~<br><br>**容重量：**250<br><br>**减重量：**250<br><br>**可使用次数：**8640<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+6<br>[阳光防护](SunProtection.md)+1<br>[蚊虫防护](BugProtection.md)+1<br>[情绪](Morale.md)加成+0.25<br>[世界观](Structure.md)加成+0.25  |  <img decoding="async" src="Sprite/HoodieRetromation.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
撕开布料<br>[手部动作](HandAction.md)  |  -  |    |  消失<br>** Cloth **<br>  [布](Cloth.md)(+2)<br>基础权重：1<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“针线”](tag_ThreadedNeedle.md)  |  修复  |  30分  |    |  ** 自身: **<br>使用次数 + 800<br>** 使用物: **<br>可用次数  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：8640<br>最大：8640  |  -  |  ** 到达0时： **<br>[布](Cloth.md)+2   
<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～12  |    |  [湿度](Wetness.md)+50  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 0-0<br>[淋雨](RainExposure.md): 1-5  |  <img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">+2  |    
