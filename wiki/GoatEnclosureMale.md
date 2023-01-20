[返回首页](index.md)  
# 公山羊  
> 可以宰了它获得羊肉和皮革，或者让它与母羊交配，以繁殖更多山羊。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“山羊”](tag_Goat.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288<br><br>可重命名  |  ![](Sprite/GoatMaleEnclosure.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[公山羊](GoatTiedMale.md)  |  圈养在畜栏中  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生  |  15分  |    |  → [灰山鹑尸体](PartridgeDead.md)<br>  |  [山羊种群数量](Pop_Goat.md)+1000  
捆起来  |  30分  |  [光亮](Light.md):10-100  |  → [公山羊](GoatTiedMale.md)<br>能量  -250<br>  |    
抚摸  |  15分  |    |  能量 + 25<br>  |  [孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“喂食（草食动物）”](tag_FeedHerb.md)  |  喂食  |  15分  |    |  自身:<br>耐久 + 144<br>能量 + 25<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  自身:<br>可用次数 + 48<br>能量 + 25<br><br>使用物:<br>含水量  -300<br><br>  |    
[大石块](StoneHeavy.md)  |  宰杀  |  30分  |  [光亮](Light.md):10-100  |  自身:<br>→ [山羊尸体](GoatCarcassFemale.md)<br><br>使用物:<br>可用次数  -1<br><br>  |  [污垢](Filth.md)+20  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：288<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  → [山羊尸体](GoatCarcassMale.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  → [山羊尸体](GoatCarcassMale.md)  
压力<img decoding="async" src="Sprite/Content.png" style="width:30px;">  |  初始：0<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |    
便便  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  [粪便](Manure.md)+1   
