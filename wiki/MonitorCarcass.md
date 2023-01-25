# 巨蜥尸体  
> 一头死去的巨蜥，应该趁还没腐烂先剥下它的皮。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**2000<br><br>**标签：**	[“大的”](tag_Large.md)<br><br>** 效果: **<br>[舒适度](Comfort.md)-250  |  ![](Sprite/MonitorCarcass.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)我拿下它了，但我受伤了。](Event_MonitorFightMixedSuccess.md)  |  继续  
[(事件)巨蜥倒下了！](Event_MonitorFightSuccess.md)  |  继续  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[黑曜石刀](KnifeObsidian.md)  |  剥皮  |  45分  |  [光亮](Light.md):10-100  |  自身:<br>→ [剥皮的巨蜥](MonitorSkinned.md)<br>使用次数  -1<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[蜥蜴生皮](SkinFreshReptile.md)(+2)<br>基础权重：1<br><br>  |  [污垢](Filth.md)+15  
[“切割工具”](tag_Cutter.md)  |  剥皮  |  1小时  |  [光亮](Light.md):10-100  |  自身:<br>→ [剥皮的巨蜥](MonitorSkinned.md)<br>使用次数  -1<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[蜥蜴生皮](SkinFreshReptile.md)(+2)<br>基础权重：1<br><br>  |  [污垢](Filth.md)+15  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
耐久  |  初始：192  |  每15分钟-1<br>最多需要：2天  |  ** 到达0时： **<br>[骨头](Bones.md)+4   
