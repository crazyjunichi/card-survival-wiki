# 包脚布  
> 保护我的脚。<br><br><b>必须装备在装备栏才能生效</b>  
<br>  
>   
  
  包脚布  |   图片   
 ----  |  ----:   
 ** 不可删除 **<br><br>**重量：**100<br><br>**装备时减重：**-100<br><br>**标签：**	[“左脚（内层）”](tag_InnerFeet.md), [“左脚（外层）”](tag_OuterFeet.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“袜子”](eTag_Socks.md)<br><br>**可使用次数：**2688<br><br>** 效果: **<br>[体感温度](TemperaturePerceived.md)+1<br>[足部损伤](FootDamage.md)-200<br>[足部防护](FootProtection.md)+2<br>[世界观](Structure.md)加成+0.1  |  <img decoding="async" src="Sprite/Footwraps.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[左脚（内层）(蓝图)](InnerLeftFootBlueprint.md)  |  制作包脚布<br>** 拖入：**[布](Cloth.md)  
[布](Cloth.md)  |  制作包脚布  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
撕开布料<br>[手部动作](HandAction.md)  |  -  |    |  ** 自身：**<br>→消失<br><br>** 获得： **<br>  [布片](ClothSmall.md)(+2)<br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：2688<br>最大：2688  |  -  |  ** 到达0时： **<br>  [布片](ClothSmall.md)(+1)<br><br>自身→消失  
<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Wet  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～12(8%～100%)  |    |  [湿度](Wetness.md)+20  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 0-0<br>[淋雨](RainExposure.md): 1-5  |  <img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">+2  |    


<script>document.title="包脚布 - 卡牌生存百科 Card Survival Wiki";</script>