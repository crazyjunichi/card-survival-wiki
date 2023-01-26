# 皮裤  
> 穿起来有点热，不过能保护我的腿。<br><br><b>必须装备在装备栏才能生效</b>  
  
  皮裤  |   图片   
 ----  |  ----:   
 **重量：**250<br><br>**标签：**	[“腿部（内层）”](tag_InnerLegs.md), [“腿部（外层）”](tag_OuterLegs.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“裤子”](eTag_Pants.md)<br><br>**可使用次数：**5376<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+3<br>[阳光防护](SunProtection.md)+1<br>[蚊虫防护](BugProtection.md)+1<br>[腿部防护](LegProtection.md)+6<br>[护甲](Armor.md)+10<br>[蜂蛰防护](BeeProtection.md)+3<br>[世界观](Structure.md)加成+0.1  |  ![](Sprite/LeatherPants.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[皮裤(蓝图)](Bp_LeatherPants.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆解<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  消失<br>[鞣制兽皮](CuredSkin.md)(+4)<br>[细线](CordFiber.md)(+6)<br>基础权重：1<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“针线”](tag_ThreadedNeedle.md)  |  修复  |  30分  |    |  ** 自身: **<br>使用次数 + 800<br>** 使用物: **<br>可用次数  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：5376<br>最大：5376  |  -  |  ** 到达0时： **<br>[鞣制兽皮](CuredSkin.md)+4 <br>[细线](CordFiber.md)+6   
<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" style="width:20px;">: 1～12  |    |  [湿度](Wetness.md)+40  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 0-0<br>[淋雨](RainExposure.md): 1-5  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">+2  |    