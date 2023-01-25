# 未完成的木雕  
> 一个未完成的木雕。应该继续用刀在上面雕刻。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**150<br><br>**标签：**	[“燃料”](tag_Fuel.md)  |  ![](Sprite/WoodCarving.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[木雕(蓝图)](Bp_WoodCarvings.md)  |  蓝图制造  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“高级切割工具”](tag_CutterAdv.md)  |  雕刻  |  30分  |  [光亮](Light.md):10-100  |  自身:<br>进度 + 1<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[木屑](WoodShavings.md)(0～+1)<br><br>  |  [木工(技能)](Skill_Woodworking.md)+1<br>[手掌损伤](HandDamage.md)+20<br>[情绪](Morale.md)+5<br>[压力](Stress.md)-10<br>[娱乐](Entertainment.md)+16  
## 可拖至  
[蒸馏器(关)](AlembicOff.md), [蒸馏器(开)](AlembicOn.md), [营火](Campfire.md), [营火(熄灭)](CampfireExtinguished.md), [粘土火盆](ClayFirePit.md), [粘土火盆(熄灭)](ClayFirePitExtinguished.md), [火堆](Fire.md), [火堆(熄灭)](FireExtinguished.md), [熔炉](Forge.md), [熔炉(熄灭)](ForgeExtinguished.md), [窑炉](Kiln.md), [高级窑炉](KilnAdvanced.md), [高级窑炉(熄灭)](KilnAdvancedExtinguished.md), [窑炉(熄灭)](KilnExtinguished.md), [火炉](Stove.md), [火炉(熄灭)](StoveExtinguished.md)  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
进度  |  初始：0<br>最大：4  |  -  |  ** 到达上限时：完成了！ **<br>[失败品](WoodCarving_Failed.md)+1 <br>[山羊木雕](WoodCarving_Goat.md)+1 <br>[海鸥木雕](WoodCarving_Seagull.md)+1 <br>[小人木雕（男）](WoodCarving_Man.md)+1 <br>[小人木雕（女）](WoodCarving_Woman.md)+1 <br>[神灵木雕](WoodCarving_Monster.md)+1   
