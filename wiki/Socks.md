# 袜子  
> 为我的脚提供些许保护。<br><br><b>必须装备在装备栏才能生效</b>  
  
  袜子  |   图片   
 ----  |  ----:   
 **重量：**125<br><br>**标签：**	[“左脚（内层）”](tag_InnerFeet.md), [“左脚（外层）”](tag_OuterFeet.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“袜子”](eTag_Socks.md)<br><br>**可使用次数：**1344<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+1<br>[足部损伤](FootDamage.md)-200<br>[足部防护](FootProtection.md)+2<br>[世界观](Structure.md)加成+0.1  |  ![](Sprite/Sock.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[补给胶囊](TV_SupplyCapsule.md)  |  打开  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
撕开布料<br>[手部动作](HandAction.md)  |  -  |    |  消失<br>[布片](ClothSmall.md)(+2)<br>基础权重：1<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“针线”](tag_ThreadedNeedle.md)  |  修复  |  30分  |    |  ** 自身: **<br>使用次数 + 800<br>** 使用物: **<br>可用次数  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：1344<br>最大：1344  |  -  |  ** 到达0时： **<br>[布片](ClothSmall.md)+2   
<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～12  |    |  [湿度](Wetness.md)+20  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 0-0<br>[淋雨](RainExposure.md): 1-5  |  <img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">+2  |    
