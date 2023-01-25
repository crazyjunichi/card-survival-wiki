# 摘光的芒果树  
> 芒果还是会生长出来的。  
  
  属性  |   图片   
 ----  |  ----:   
   |  ![](Sprite/MangoTreeCleared.png)   
  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[石斧](StoneAxe.md)  |  砍树  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32<br>[IGNOREKEY](OnNotAxeAdv.md):0-0  |  自身:<br>→ [倒下的热带杏仁树](TropicalAlmondTreeFelled.md)<br>芒果 成熟度<img decoding="async" src="Sprite/AlarmClock.png" style="width:20px;">  -1500<br>砍伐进度  -10<br><br>使用物:<br>可用次数  -3<br><br>  |  [耐力](Stamina.md)-8<br>[手掌损伤](HandDamage.md)+80<br>[木工(技能)](Skill_Woodworking.md)+1  
[“锤状的”](tag_AxeAdv.md)  |  砍树  |  30分  |  [光亮](Light.md):10-100<br>[耐力](Stamina.md):11-32  |  自身:<br>→ [倒下的热带杏仁树](TropicalAlmondTreeFelled.md)<br>芒果 成熟度<img decoding="async" src="Sprite/AlarmClock.png" style="width:20px;">  -1500<br>砍伐进度  -25<br><br>使用物:<br>可用次数  -3<br><br>  |  [耐力](Stamina.md)-6<br>[手掌损伤](HandDamage.md)+60<br>[木工(技能)](Skill_Woodworking.md)+1  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
芒果 成熟度<img decoding="async" src="Sprite/AlarmClock.png" style="width:30px;">  |  初始：0<br>最大：2880  |  每15分钟+1<br>最多需要：30天  |  ** 到达上限时： **<br>→ [芒果树](MangoTree.md)  
砍伐进度  |  初始：50<br>最大：50  |  -  |  ** 到达0时： **<br>[小树枝](Sticks.md)+2～+4 <br>[树叶](LeavesFresh.md)+6～+18 <br>→ [倒下的大树](LargeTreeFelled.md)  
