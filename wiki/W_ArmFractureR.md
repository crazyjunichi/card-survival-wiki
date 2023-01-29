# 右臂骨折  
> 太痛了。  
<br>  
> 骨折最常见于<b>从高处坠落</b>。<br><br>这是一种剧烈疼痛的外伤，会<b>长时间使你的胳膊或腿残废</b>。<br>当你手或者腿骨折时，一些基本的任务，比如<b>手工制作和行走</b>，会花费<b>更多的时间</b>。<br><br>要治疗骨折，最好的方法是<b>用夹板固定肢体</b>直到骨头愈合。<b>芦荟膏</b>涂抹于患处，可以减轻一些疼痛。  
  
  右臂骨折  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>** 不可删除 **<br><br>**重量：**0<br><br>**标签：**	[“伤口需要夹板”](tag_WoundSplint.md)<br><br>**装备：**[“右臂骨折”](eTag_WArmFractureR.md)<br><br>**槽位：**1<br><br>**可使用次数：**0  |  <img decoding="async" src="Sprite/SprainedWrist.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[野猪伤到了我！(事件)](Event_BoarWoundMajor.md)  |  真他妈不错  
[野猪伤到了我！(事件)](Event_BoarWoundMinor.md)  |  真不错  
[坠落！(事件)](Event_FallFracture.md)  |  真他妈不错  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[芦荟膏](AloeVeraGel.md)  |  涂抹<br>  |  -  |    |  ** 自身: **<br><img decoding="async" src="Sprite/AloeGel.png" href="a.md" style="max-width:20px;max-height:20px;"> + 16<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -350<br><br>** 使用物: **<br>消失<br>可用次数  -1  |    
## 转化  
放入  |  动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[夹板](Splint.md)  |  夹板  |  -  |    |  耐久  -1<br>可用次数  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1500  |  每15分钟+1<br>最多需要：15天15小时  |  ** 到达上限时：骨折 **<br><br>→ [轻微撕裂伤](W_MinorLaceration.md)  
<img decoding="async" src="Sprite/AloeGel.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：32  |  每15分钟-1<br>最多需要：8小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Splint  |  ** 需要存在卡牌：**<br>[夹板](Splint.md)<br>** 需要放入：**<br>[夹板](Splint.md)  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">+1  |    
Gel Support  |  ** 需要属性：**<br><img decoding="async" src="Sprite/AloeGel.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～32  |    |  [疼痛](Pain.md)-25  
Fracture Extreme  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～750  |    |  [疼痛](Pain.md)+500<br>[体重](Weight.md)加成-0.5<br>[ModifierHand_GameName](ModifierHand.md)+2<br>[ModifierClimb_GameName](ModifierClimb.md)+2<br>[受伤](Wounds.md)+750  
Fracture Severe  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">: 751～1250  |    |  [疼痛](Pain.md)+325<br>[体重](Weight.md)加成-0.25<br>[ModifierHand_GameName](ModifierHand.md)+1<br>[ModifierClimb_GameName](ModifierClimb.md)+1<br>[受伤](Wounds.md)+750  
Fracture Moderate  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">: 1251～1500  |    |  [疼痛](Pain.md)+150<br>[体重](Weight.md)加成-0.1<br>[ModifierHand_GameName](ModifierHand.md)+0.5<br>[ModifierClimb_GameName](ModifierClimb.md)+0.5<br>[受伤](Wounds.md)+250  
