# 婴儿  
> 需要保护的小宝宝。  
  
  婴儿  |   图片   
 ----  |  ----:   
 **重量：**500<br><br>**标签：**	[“挎包”](tag_Satchel.md)<br><br>** 效果: **<br>[孤独感](Loneliness.md)加成-1<br><br>** 可重命名 **  |  ![](Sprite/Baby.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)时候已到！](Event_Pregnancy.md)  |  分娩！  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
喂奶<br>  |  15分  |    |  饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 16<br>情绪<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 4<br>  |  [体重](Weight.md)-5<br>[孤独感](Loneliness.md)-5<br>[情绪](Morale.md)+2  
哄哄<br>  |  15分  |    |  情绪<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 16<br>  |  [孤独感](Loneliness.md)-5<br>[情绪](Morale.md)+2<br>[娱乐](Entertainment.md)+4  
一起玩耍<br>  |  30分  |    |  情绪<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 32<br>  |  [孤独感](Loneliness.md)-10<br>[情绪](Morale.md)+4<br>[娱乐](Entertainment.md)+8  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
健康度<img decoding="async" src="Sprite/Health.png" style="width:30px;">  |  初始：150<br>最大：150  |  每15分钟-2<br>最多需要：18小时45分  |  ** 到达0时： **  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：16<br>最大：16  |  每15分钟-1<br>最多需要：4小时  |    
情绪<img decoding="async" src="Sprite/Content.png" style="width:30px;">  |  初始：12<br>最大：12  |  每15分钟-1<br>最多需要：3小时  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Well Fed  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;">: 1～0  |  健康度<img decoding="async" src="Sprite/Health.png" style="width:20px;">+1.5  |    
Happy  |  ** 需要属性：**<br>情绪<img decoding="async" src="Sprite/Content.png" style="width:20px;">: 1～0  |  健康度<img decoding="async" src="Sprite/Health.png" style="width:20px;">+1.5  |    
