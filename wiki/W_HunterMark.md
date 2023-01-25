# 鬼掌印  
> 猎手触碰了我。我能感觉到……  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**0<br><br>**装备：**[“精神创伤”](eTag_WSpiritual.md)  |  ![](Sprite/HuntersMark.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)我失败了！](Event_HunterFightBadFailure.md)  |  闭眼  
[(事件)我没能逃掉！](Event_HunterFightFailedRetreat.md)  |  闭眼  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/MindState.png" style="width:30px;">  |  初始：168<br>最大：168  |  每15分钟-0.5<br>最多需要：3天12小时  |  ** 到达0时：手印消退 **  
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Mark  |  ** 需要属性：**<br><img decoding="async" src="Sprite/MindState.png" style="width:20px;">1～168  |    |  [疼痛](Pain.md)+100<br>[压力](Stress.md)加成+1<br>[世界观](Structure.md)加成-1<br>[情绪](Morale.md)加成-1  
Healing  |  ** 需要状态：**<br>[精神失常](MindState.md):151-300  |  <img decoding="async" src="Sprite/MindState.png" style="width:20px;">：-2  |    
