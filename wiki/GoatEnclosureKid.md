[返回首页](index.md)  
# 小羊  
> 可以宰了它获得羊肉和皮革，或者等它成年。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“山羊”](tag_Goat.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288  |  ![](Sprite/GoatKidEnclosure.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[小羊](GoatTiedKid.md)  |  圈养在畜栏中  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生  |  15分  |    |  → [灰山鹑尸体](PartridgeDead.md)<br>  |  [山羊种群数量](Pop_Goat.md)+1000  
捆起来  |  30分  |  [光亮](Light.md):10-100  |  → [小羊](GoatTiedKid.md)<br>能量  -250<br>  |    
抚摸  |  15分  |    |  能量 + 25<br>  |  [孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“喂食（草食动物）”](tag_FeedHerb.md)  |  喂食  |  15分  |    |  自身:<br>耐久 + 144<br>能量 + 25<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  自身:<br>可用次数 + 48<br>能量 + 25<br><br>使用物:<br>含水量  -300<br><br>  |    
[大石块](StoneHeavy.md)  |  宰杀  |  30分  |  [光亮](Light.md):10-100  |  自身:<br>→ [小羊尸体](GoatCarcassKid.md)<br><br>使用物:<br>可用次数  -1<br><br>  |  [污垢](Filth.md)+20  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="height:30px;">  |  初始：576<br>最大：576  |  每天-1<br>最多需要：6天  |  → [小羊尸体](GoatCarcassKid.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：288<br>最大：288  |  每天-1<br>最多需要：3天  |  → [小羊尸体](GoatCarcassKid.md)  
成熟度<img decoding="async" src="Sprite/Spoilage.png" style="height:30px;">  |  初始：0<br>最大：1344  |  每天+1<br>最多需要：14天  |  [母山羊](GoatEnclosureFemale.md)1 <br><br>[公山羊](GoatEnclosureMale.md)1   
压力<img decoding="async" src="Sprite/Content.png" style="height:30px;">  |  初始：0<br>最大：1000  |  每天-4<br>最多需要：2天14小时30分  |    
