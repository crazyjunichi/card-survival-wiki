[返回首页](index.md)  
# 公猪  
> 可以宰了它获得猪肉和皮革，或者让它与母猪交配，以繁殖更多猪。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“野猪”](tag_Boar.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288<br><br>可重命名  |  ![](Sprite/BoarEnclosureMale.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[公猪](BoarTiedMale.md)  |  圈养在畜栏中  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生  |  15分  |    |  → [灰山鹑尸体](PartridgeDead.md)<br>  |  [蜂群密度](Pop_Boar.md)+1000  
捡起  |  30分  |  [光亮](Light.md):10-100  |  → [公猪](BoarTiedMale.md)<br>能量  -250<br>  |    
抚摸  |  15分  |    |  能量 + 25<br>  |  [孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)  |  喂食  |  15分  |    |  自身:<br>耐久 + 48<br>能量 + 12<br><br>  |    
[“喂”](tag_Meat.md)  |  喂食  |  15分  |    |  自身:<br>耐久 + 384<br>能量 + 50<br><br>  |    
[“喂/添加”](tag_Feed.md)  |  喂食  |  15分  |    |  自身:<br>耐久 + 192<br>能量 + 25<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  自身:<br>可用次数 + 48<br>能量 + 25<br><br>使用物:<br>含水量  -300<br><br>  |    
[大石块](StoneHeavy.md)  |  宰杀  |  30分  |  [光亮](Light.md):10-100  |  自身:<br>→ [野猪尸体](BoarCarcass.md)<br><br>使用物:<br>可用次数  -1<br><br>  |  [污垢](Filth.md)+20  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="height:30px;">  |  初始：288<br>最大：576  |  每天-1<br>最多需要：6天  |  → [野猪尸体](BoarCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：288<br>最大：288  |  每天-1<br>最多需要：3天  |  → [野猪尸体](BoarCarcass.md)  
压力<img decoding="async" src="Sprite/Content.png" style="height:30px;">  |  初始：0<br>最大：1000  |  每天-4<br>最多需要：2天14小时30分  |    
体重<img decoding="async" src="Sprite/SaturationMeat.png" style="height:30px;">  |  初始：0<br>最大：6000  |  每天-2<br>最多需要：31天6小时  |    
便便  |  初始：96<br>最大：96  |  每天-1<br>最多需要：1天  |  [粪便](Manure.md)1   
