# 哺乳期山羊  
> 一头活山羊。可以通过喂食喂水来维持生命，或者放养在畜栏里。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**2000<br><br>**标签：**	[“山羊”](tag_Goat.md), [“大的”](tag_Large.md), [“大型动物”](tag_LargeAnimal.md)<br><br>**可使用次数：**288  |  ![](Sprite/GoatTied.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[哺乳期山羊](GoatEnclosureLactating.md)  |  捆起来  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
圈养在畜栏中<br>  |  -  |  [畜栏(环境)](Env_Enclosure.md)  |  → [哺乳期山羊](GoatEnclosureLactating.md)<br>  |    
放生<br>  |  15分  |  [畜栏(环境)](Env_Enclosure.md)  |  → [灰山鹑尸体](PartridgeDead.md)<br>  |  [山羊种群数量](Pop_Goat.md)+1000  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“喂食（草食动物）”](tag_FeedHerb.md)  |  喂食  |  15分  |    |  自身:<br>饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 144<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 25<br><br>  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  自身:<br>口渴<img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 48<br>压力<img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 25<br><br>使用物:<br>含水量  -300<br><br>  |    
[大石块](StoneHeavy.md)  |  宰杀  |  30分  |  [光亮](Light.md):10-100  |  自身:<br>→ [山羊尸体](GoatCarcassFemale.md)<br><br>使用物:<br>可用次数  -1<br><br>  |  [污垢](Filth.md)+20  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：576<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br>→ [山羊尸体](GoatCarcassFemale.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br>→ [山羊尸体](GoatCarcassFemale.md)  
奶量<img decoding="async" src="Sprite/Milk.png" style="width:30px;">  |  初始：0<br>最大：96  |  -  |    
压力<img decoding="async" src="Sprite/Content.png" style="width:30px;">  |  初始：0<br>最大：1000  |  每15分钟-5<br>最多需要：2天2小时  |    
泌乳  |  初始：1344<br>最大：1344  |  每15分钟-1<br>最多需要：14天  |  ** 到达0时：停止泌乳 **<br>→ [母山羊](GoatEnclosureFemale.md)  
