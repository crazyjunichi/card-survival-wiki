# 防毒面具  
> 一张带有过滤器的气密面具。非常适合用于探索带有毒气的地区。<br><br><b>必须装备在装备栏才能生效</b>  
<br>  
>   
  
  防毒面具  |   图片   
 ----  |  ----:   
 **重量：**100<br><br>**装备时减重：**-100<br><br>**标签：**	[“面部”](tag_Mask.md), [“腿部（内层）”](tag_Clothing.md)<br><br>**装备：**[“面部装备”](eTag_Mask.md)<br><br>**可使用次数：**64<br><br>** 效果: **<br>[保温](InsulationCold.md)+2<br>[空气毒性](AirToxicity.md)-1<br>[体感温度](TemperaturePerceived.md)+3  |  <img decoding="async" src="Sprite/GasMask.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[防毒面具(蓝图)](Bp_GasMask.md)  |  蓝图制造  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[木炭](Charcoal.md)  |  重新装填过滤器<br>  |  15分  |    |  ** 自身: **<br>使用次数  +96(150%)<br><br>** 使用物: **<br>→消失  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：64<br>最大：64  |  -  |    
湿度<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Filter  |  ** 需要属性：**<br>使用次数: 1～96(2%～150%)  |    |  [空气毒性](AirToxicity.md)-4  
FillUnderRain  |  ** 需要状态：**<br>[遮蔽](Sheltered.md): 0-0<br>[淋雨](RainExposure.md): 1-5  |  湿度<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">+2  |    
Acid Damage  |  ** 需要存在卡牌：**<br>[“有毒环境”](tag_EnvToxic.md)  |  使用次数-1  |    


<script>document.title="防毒面具 - 卡牌生存百科 Card Survival Wiki";</script>