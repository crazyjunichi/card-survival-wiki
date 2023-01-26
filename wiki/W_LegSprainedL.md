# 左脚踝扭伤  
> 好疼……  
  
  左脚踝扭伤  |   图片   
 ----  |  ----:   
 **重量：**500<br><br>**标签：**	[“伤口需要夹板”](tag_WoundSplint.md)<br><br>**装备：**[“左脚踝扭伤”](eTag_WLegSprainedL.md)<br><br>**槽位：**1<br><br>**可使用次数：**0<br><br>** 区域唯一 **  |  ![](Sprite/SprainedAnkle.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)野猪伤到了我！](Event_BoarWoundMinor.md)  |  真不错  
[(事件)坠落！](Event_FallSprains.md)  |  真他妈不错  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[芦荟膏](AloeVeraGel.md)  |  涂抹  |  -  |    |  ** 自身: **<br><img decoding="async" src="Sprite/AloeGel.png" href="a.md" style="max-width:20px;max-height:20px;"> + 16<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -350<br>** 使用物: **<br>消失<br>可用次数  -1  |    
## 转化  
放入  |  动作  |  耗时  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
[夹板](Splint.md)  |  夹板  |  -  |    |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：750  |  每15分钟+1<br>最多需要：7天19小时30分  |  ** 到达上限时：扭伤 **<br>→ [轻微撕裂伤](W_MinorLaceration.md)  
<img decoding="async" src="Sprite/AloeGel.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：32  |  每15分钟-1<br>最多需要：8小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Splint  |  ** 需要存在卡牌：**<br>[夹板](Splint.md)<br>** 需要放入：**<br>[夹板](Splint.md)  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">+1  |    
Gel Support  |  ** 需要属性：**<br><img decoding="async" src="Sprite/AloeGel.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～32  |    |  [疼痛](Pain.md)-25  
Recent Sprain  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～500  |    |  [疼痛](Pain.md)+100<br>[体重](Weight.md)加成-0.1<br>[ModifierLeg_GameName](ModifierLeg.md)+1<br>[ModifierClimb_GameName](ModifierClimb.md)+1<br>[受伤](Wounds.md)+250  
Healing Sprain  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">: 501～750  |    |  [疼痛](Pain.md)+50<br>[体重](Weight.md)<br>[ModifierLeg_GameName](ModifierLeg.md)+1<br>[ModifierClimb_GameName](ModifierClimb.md)+1<br>[受伤](Wounds.md)+100  
