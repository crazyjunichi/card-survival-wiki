# 头巾  
>   
  
  头巾  |   图片   
 ----  |  ----:   
 **重量：**100<br><br>**标签：**	[“头部（内层）”](tag_InnerHead.md), [“头部（外层）”](tag_OuterHead.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“头部”](eTag_Head.md)<br><br>**可使用次数：**2400<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+0.5  |  ![](Sprite/Footwraps.png)   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
撕开布料<br>[手部动作](HandAction.md)  |  -  |    |  [布片](ClothSmall.md)(+2)<br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：2400<br>最大：2400  |  -  |  ** 到达0时： **  
<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" style="width:20px;">: 1～12  |    |  [湿度](Wetness.md)+20  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 0-0<br>[淋雨](RainExposure.md): 1-5  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">+2  |    
