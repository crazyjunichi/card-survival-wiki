# 眼镜蛇毒液  
> 卧槽疼死了，赶紧用水把它洗掉！  
  
  眼镜蛇毒液  |   图片   
 ----  |  ----:   
 **重量：**0<br><br>**装备：**[“眼镜蛇射毒”](eTag_WCobraSpit.md)  |  ![](Sprite/Eyes.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)我被它伤到了……](Event_CobraFightBadFailure.md)  |  继续  
[(事件)那条眼镜蛇喷射了毒液！](Event_CobraFightFailedRetreat.md)  |  继续  
[(事件)胜负参半](Event_CobraFightMixedSuccess.md)  |  继续  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[盐水](LQ_WaterSalt.md)  |  用海水清理  |  15分  |  [勇气](Courage.md): 0-4000  |  自身:<br><img decoding="async" src="Sprite/CobraSpat.png" style="width:20px;">  -75<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>耐久  -300<br>可用次数  -1<br>含水量  -300<br><br>  |  [情绪](Morale.md)  
[“弱效清洁剂”](tag_CleanerWeak.md)  |  用淡水清理  |  15分  |  [勇气](Courage.md): 0-4000  |  自身:<br><img decoding="async" src="Sprite/CobraSpat.png" style="width:20px;">  -75<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -300<br><br>  |    
## 转化  
放入  |  动作  |  耗时  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
[“敷料”](tag_Dressing.md)  |  敷料  |  -  |    |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/CobraSpat.png" style="width:30px;">  |  初始：144<br>最大：144  |  每15分钟-1<br>最多需要：1天12小时  |  ** 到达0时：眼部清洗完成 **  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Minor Venom Dose  |  ** 需要属性：**<br><img decoding="async" src="Sprite/CobraSpat.png" style="width:20px;">: 0～100  |    |  [疼痛](Pain.md)+100<br>[视力](Myopia.md)+1<br>[眼部损伤](EyeDamage.md)加成+1  
Minor Venom Dose  |  ** 需要属性：**<br><img decoding="async" src="Sprite/CobraSpat.png" style="width:20px;">: 101～200  |    |  [疼痛](Pain.md)+200<br>[视力](Myopia.md)+2<br>[光亮](Light.md)-25<br>[眼部损伤](EyeDamage.md)加成+1  
Minor Venom Dose  |  ** 需要属性：**<br><img decoding="async" src="Sprite/CobraSpat.png" style="width:20px;">: 101～288  |    |  [疼痛](Pain.md)+300<br>[视力](Myopia.md)+3<br>[光亮](Light.md)-50<br>[眼部损伤](EyeDamage.md)加成+2  
