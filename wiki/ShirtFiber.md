# 衬衫  
> 应该能稍微抵御蚊虫叮咬和日晒。<br><br><b>必须装备在装备栏才能生效</b>  
  
  衬衫  |   图片   
 ----  |  ----:   
 **重量：**200<br><br>**标签：**	[“躯干（内层）”](tag_InnerTorso.md), [“躯干（外层）”](tag_OuterTorso.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“衬衫”](eTag_Shirt.md)<br><br>**可使用次数：**2688<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+0.5<br>[阳光防护](SunProtection.md)+1<br>[蚊虫防护](BugProtection.md)+1<br>[世界观](Structure.md)加成+0.1<br><br>** 解锁条件: **<br>[纺织(技能)](Skill_Tailoring.md): 30-150  |  ![](Sprite/ShirtFiber.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[衬衫(蓝图)](Bp_Shirt.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
撕开布料<br>[手部动作](HandAction.md)  |  -  |    |  消失<br>[大块的布](ClothLarge.md)(+1)<br>基础权重：1<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“针线”](tag_ThreadedNeedle.md)  |  修复  |  30分  |    |  ** 自身: **<br>使用次数 + 800<br>** 使用物: **<br>可用次数  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：2688<br>最大：2688  |  -  |  ** 到达0时： **<br>[大块的布](ClothLarge.md)+1 <br>[细线](CordFiber.md)+4   
<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" style="width:20px;">: 1～12  |    |  [湿度](Wetness.md)+50  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 0-0<br>[淋雨](RainExposure.md): 1-5  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">+2  |    