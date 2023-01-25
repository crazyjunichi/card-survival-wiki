# 临时防毒面具  
> 这块布有助于稍微抵消有毒气体带来的伤害。尤其是在打湿了之后。<br><br><b>必须装备在装备栏才能生效</b>  
  
  临时防毒面具  |   图片   
 ----  |  ----:   
 **重量：**100<br><br>**标签：**	[“面部”](tag_Mask.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“面部装备”](eTag_Mask.md)<br><br>**可使用次数：**288<br><br>** 效果: **<br>[保温](InsulationCold.md)+2<br>[空气毒性](AirToxicity.md)-2<br>[体感温度](TemperaturePerceived.md)+5  |  ![](Sprite/MakeshiftMask.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[大块的布](ClothLarge.md)  |  临时防毒面具  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
还原成布匹<br>  |  -  |    |  → [大块的布](ClothLarge.md)<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“水”](tag_WaterAny.md)  |  打湿  |  -  |    |  自身:<br><img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 12<br><br>使用物:<br>含水量  -300<br><br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：288<br>最大：288  |  -  |  ** 到达0时： **<br>[布](Cloth.md)+1   
<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" style="width:20px;">: 1～12  |    |  [空气毒性](AirToxicity.md)-2<br>[湿度](Wetness.md)+20  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 0-0<br>[淋雨](RainExposure.md): 1-5  |  <img decoding="async" src="Sprite/Thirst.png" style="width:20px;">+2  |    
Acid Damage  |  ** 需要存在卡牌：**<br>[“有毒环境”](tag_EnvToxic.md)  |  使用次数-1  |    
