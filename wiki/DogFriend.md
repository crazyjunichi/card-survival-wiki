[返回首页](index.md)   |  [查看所有物品](object.md)
# 忠犬朋友  
> 汪汪！  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**0<br><br>**标签：**	[“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288<br><br>可重命名  |  ![](Sprite/Dog.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
抚摸  |  15分  |    |  能量 + 25<br>  |    
一起玩耍  |  30分  |    |  能量 + 25<br>  |  [娱乐](Entertainment.md)+16<br>[耐力](Stamina.md)-10<br>[压力](Stress.md)-25<br>[孤独感](Loneliness.md)-30  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)  |  喂食  |  -  |    |  自身:<br>耐久 + 288<br>能量 + 50<br><br>使用物:<br>可用次数  -1<br><br>  |  [孤独感](Loneliness.md)-20  
[“喂”](tag_Meat.md)  |  喂食  |  -  |    |  自身:<br>耐久 + 288<br>能量 + 250<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  自身:<br>可用次数 + 48<br>能量 + 25<br><br>使用物:<br>含水量  -300<br><br>  |    
[“切割工具”](tag_Cutter.md)  |  杀害！  |  15分  |  [光亮](Light.md):10-100  |  自身:<br>→ [猕猴尸体](MacaqueCarcass.md)<br><br>使用物:<br>可用次数  -1<br><br>  |  [污垢](Filth.md)+20<br>[情绪](Morale.md)-100<br>[哀悼](Mourning.md)+288  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="height:30px;">  |  初始：576<br>最大：576  |  每天-1<br>最多需要：6天  |  → [猕猴尸体](MacaqueCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：288<br>最大：288  |  每天-1<br>最多需要：3天  |  → [猕猴尸体](MacaqueCarcass.md)  
压力<img decoding="async" src="Sprite/Content.png" style="height:30px;">  |  初始：1000<br>最大：1000  |  每天-4<br>最多需要：2天14小时30分  |  [(事件)┗|｀O′|┛ 嗷！！！！](Event_DogFriendAnger.md)1   
独处时间  |  初始：96<br>最大：96  |  每天-1<br>最多需要：1天  |  [(事件)礼物！](Event_DogFriendGift.md)1   
便便  |  初始：192<br>最大：192  |  每天-1<br>最多需要：2天  |  [粪便](Manure.md)1   
