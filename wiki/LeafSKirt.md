# 草裙  
> 为了遮羞。<br><br><b>必须装备在装备栏才能生效</b>  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**200<br><br>**标签：**	[“腿部（内层）”](tag_InnerLegs.md), [“腿部（外层）”](tag_OuterLegs.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“裤子”](eTag_Pants.md)<br><br>**可使用次数：**1344<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+0.5<br>[阳光防护](SunProtection.md)+0.5<br>[世界观](Structure.md)加成+0.1<br>[情绪](Morale.md)加成+0.25  |  ![](Sprite/PalmFrondSkirt.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[草裙(蓝图)](Bp_LeafSkirt.md)  |  蓝图制造  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆解<br>  |  -  |    |  [细线](CordFiber.md)(+4)<br>  |    
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：1344<br>最大：1344  |  -  |  ** 到达0时： **<br>[细线](CordFiber.md)+4   
<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：12  |  每15分钟-4<br>最多需要：45分  |    
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" style="width:20px;">1～12  |    |  [湿度](Wetness.md)+10  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md):0-0<br>[淋雨](RainExposure.md):1-5  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">：+2  |    
