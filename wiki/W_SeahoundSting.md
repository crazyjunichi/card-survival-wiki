[返回首页](index.md)   |  [查看所有物品](object.md)
# 海怪刺伤  
> 它烧起来了！  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**0<br><br>**装备：**[“擦伤”](eTag_WAbrasion.md)<br><br>**槽位：**1<br><br>**过滤器：**[“敷料”](tag_Dressing.md)<br><br>**可使用次数：**0  |  ![](Sprite/SeahoundStings.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)我被它伤到了……](Event_SeahoundFightBadFailure.md)  |  继续  
[(事件)海怪攻击了！](Event_SeahoundFightFailedRetreat.md)  |  继续  
[(事件)我拿下它了，但我受伤了。](Event_SeahoundFightMixedSuccess.md)  |  继续  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[盐水](LQ_WaterSalt.md)  |  用海水清理  |  15分  |    |  自身:<br>可用次数  -32<br>燃料  -150<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>耐久  -300<br>可用次数  -1<br>含水量  -300<br><br>  |  [情绪](Morale.md)-5  
[“弱效清洁剂”](tag_CleanerWeak.md)  |  用淡水清理  |  15分  |    |  自身:<br>可用次数  -32<br>燃料  -150<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -300<br><br>  |    
[蜂蜜水](LQ_HoneyWater.md)  |  用蜂蜜水清理  |  15分  |  [勇气](Courage.md):50-4000  |  自身:<br>可用次数  -32<br>燃料  -250<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -300<br><br>  |    
[碱液](LQ_Lye.md)  |  用碱水清理  |  15分  |    |  自身:<br>可用次数  -32<br>燃料  -500<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -100<br><br>  |    
[湿肥皂](SoapWet.md)  |  用肥皂清理  |  15分  |    |  自身:<br>可用次数  -32<br>燃料  -500<br><br>使用物:<br>可用次数  -1<br><br>  |    
[芦荟膏](AloeVeraGel.md)  |  涂抹  |  15分  |    |  自身:<br>可用次数 + 16<br>燃料  -150<br><br>使用物:<br>可用次数  -1<br><br>  |    
[蜂蜜](LQ_Honey.md)  |  涂抹蜂蜜  |  15分  |  [勇气](Courage.md):50-4000  |  自身:<br>可用次数 + 16<br>燃料  -150<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -150<br><br>  |    
## 转化  
放入  |  动作  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
[“敷料”](tag_Dressing.md)  |  敷料  |  -  |    
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Health.png" style="width:30px;">  |  初始：0<br>最大：500  |  每15分钟+1<br>最多需要：5天5小时  |    
<img decoding="async" src="Sprite/DressingApplied.png" style="width:30px;">  |  初始：0<br>最大：32  |  每15分钟-1<br>最多需要：8小时  |    
<img decoding="async" src="Sprite/Bacteria.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟+1<br>最多需要：3天  |    
