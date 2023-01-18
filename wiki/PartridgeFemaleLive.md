[返回首页](index.md)   |  [查看所有物品](object.md)
# 雌灰山鹑  
> 一只活灰山鹑。可以通过喂食维持它的生命，或者圈养在畜栏里。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**150<br><br>**标签：**	[“喂”](tag_Meat.md), [“灰山鹑”](tag_Partridge.md)  |  ![](Sprite/PartridgeHanging.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)礼物！](Event_DogFriendGift.md)  |  看看礼物  
[雌灰山鹑](PartridgeFemaleEnclosure.md)  |  捆起来  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
圈养在畜栏中  |  -  |    |  → [雌灰山鹑](PartridgeFemaleEnclosure.md)<br>  |    
放生  |  15分  |    |  → [灰山鹑尸体](PartridgeDead.md)<br>  |  [灰山鹑种群数量](Pop_Partridge.md)+1000  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)  |  喂食  |  -  |    |  自身:<br>耐久 + 288<br>能量 + 50<br><br>使用物:<br>可用次数  -1<br><br>  |    
[“喂/添加”](tag_Feed.md)  |  喂食  |  -  |    |  自身:<br>耐久 + 288<br>能量 + 250<br><br>  |    
[“切割工具”](tag_Cutter.md)  |  剖开  |  30分  |  [光亮](Light.md):10-100  |  使用物:<br>可用次数  -1<br><br>获得:<br>[鸟骨](BonesBird.md)(2)<br>[羽毛](Feathers.md)(2~4)<br>[鸟肉](BirdMeat.md)(1)<br>  |  [污垢](Filth.md)+20  
## 可拖至  
[母猪](BoarEnclosureFemale.md), [公猪](BoarEnclosureMale.md), [小猪](BoarEnclosurePiglet.md), [母猪](BoarTiedFemale.md), [公猪](BoarTiedMale.md), [小猪](BoarTiedPiglet.md), [忠犬朋友](DogFriend.md)  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Hunger.png" style="height:30px;">  |  初始：288<br>最大：288  |  每天-1<br>最多需要：3天  |  → [灰山鹑尸体](PartridgeDead.md)  
<img decoding="async" src="Sprite/Content.png" style="height:30px;">  |  初始：0<br>最大：1000  |  每天-5<br>最多需要：2天2小时  |    
