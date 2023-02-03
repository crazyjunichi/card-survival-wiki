# 眼镜蛇毒液  
> 卧槽疼死了，赶紧用水把它洗掉！  
<br>  
> 在岛上的<b>草原和高地</b>上可以找到这些爬行动物。<br><br>虽然不是特别危险，但如果不用大量的<b>水</b>快速冲洗，它们的喷吐会造成剧烈的疼痛和永久性的眼部损伤。  
  
  眼镜蛇毒液  |   图片   
 ----  |  ----:   
 ** 不可删除 **<br><br>**重量：**0<br><br>**装备：**[“眼镜蛇射毒”](eTag_WCobraSpit.md)  |  <img decoding="async" src="Sprite/Eyes.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[我被它伤到了……(事件)](Event_CobraFightBadFailure.md)  |  继续  
[那条眼镜蛇喷射了毒液！(事件)](Event_CobraFightFailedRetreat.md)  |  继续  
[胜负参半(事件)](Event_CobraFightMixedSuccess.md)  |  继续  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[盐水](LQ_WaterSalt.md)  |  用海水清理<br>  |  15分  |  [勇气](Courage.md): 0-4000  |  ** 自身: **<br><img decoding="async" src="Sprite/CobraSpat.png" href="a.md" style="max-width:20px;max-height:20px;">  -75<br><br>** 使用物: **<br>耐久  -300<br>可用次数  -1<br>含水量  -300  |  [情绪](Morale.md)  
[“弱效清洁剂”](tag_CleanerWeak.md)  |  用淡水清理<br>  |  15分  |  [勇气](Courage.md): 0-4000  |  ** 自身: **<br><img decoding="async" src="Sprite/CobraSpat.png" href="a.md" style="max-width:20px;max-height:20px;">  -75<br><br>** 使用物: **<br>耐久  -300<br>可用次数  -1<br>含水量  -300  |    
## 转化  
放入  |  动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“敷料”](tag_Dressing.md)  |  敷料  |  -  |    |  耐久  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/CobraSpat.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：144<br>最大：144  |  每15分钟-1<br>最多需要：1天12小时  |  ** 到达0时：眼部清洗完成 **<br><br>自身→消失  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Minor Venom Dose  |  ** 需要属性：**<br><img decoding="async" src="Sprite/CobraSpat.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～100  |    |  [疼痛](Pain.md)+100<br>[视力](Myopia.md)+1<br>[眼部损伤](EyeDamage.md)加成+1  
Minor Venom Dose  |  ** 需要属性：**<br><img decoding="async" src="Sprite/CobraSpat.png" href="a.md" style="max-width:20px;max-height:20px;">: 101～200  |    |  [疼痛](Pain.md)+200<br>[视力](Myopia.md)+2<br>[光亮](Light.md)-25<br>[眼部损伤](EyeDamage.md)加成+1  
Minor Venom Dose  |  ** 需要属性：**<br><img decoding="async" src="Sprite/CobraSpat.png" href="a.md" style="max-width:20px;max-height:20px;">: 101～288  |    |  [疼痛](Pain.md)+300<br>[视力](Myopia.md)+3<br>[光亮](Light.md)-50<br>[眼部损伤](EyeDamage.md)加成+2  


<script>document.title="眼镜蛇毒液 - 卡牌生存百科 Card Survival Wiki";</script>