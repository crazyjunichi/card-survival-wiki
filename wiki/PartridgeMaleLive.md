# 雄灰山鹑  
> 一只活灰山鹑。可以通过喂食维持它的生命，或者圈养在畜栏里。  
  
  雄灰山鹑  |   图片   
 ----  |  ----:   
 **重量：**150<br><br>**标签：**	[“喂”](tag_Meat.md), [“灰山鹑”](tag_Partridge.md)  |  ![](Sprite/PartridgeHangingMale.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)礼物！](Event_DogFriendGift.md)  |  看看礼物  
[雄灰山鹑](PartridgeMaleEnclosure.md)  |  捆起来  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
圈养在畜栏中<br>  |  -  |  [畜栏(环境)](Env_Enclosure.md)  |  → [雄灰山鹑](PartridgeMaleEnclosure.md)  |    
放生<br>  |  15分  |  [畜栏(环境)](Env_Enclosure.md)  |  消失  |  [灰山鹑种群数量](Pop_Partridge.md)+1000  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)  |  喂养  |  -  |    |  ** 自身: **<br><img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 288<br><img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 50<br>** 使用物: **<br>消失<br>可用次数  -1  |    
[“喂/添加”](tag_Feed.md)  |  喂养  |  -  |    |  ** 自身: **<br><img decoding="async" src="Sprite/Hunger.png" style="width:20px;"> + 288<br><img decoding="async" src="Sprite/Content.png" style="width:20px;"> + 250<br>** 使用物: **<br>消失  |    
[“切割工具”](tag_Cutter.md)  |  剖开  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>消失<br>** 使用物: **<br>可用次数  -1<br>** 获得: **<br>[鸟骨](BonesBird.md)(+2)<br>[羽毛](Feathers.md)(+2～+4)<br>[鸟肉](BirdMeat.md)(+1)<br>  |  [污垢](Filth.md)+20  
## 可拖至  
[母猪](BoarEnclosureFemale.md), [公猪](BoarEnclosureMale.md), [小猪](BoarEnclosurePiglet.md), [母猪](BoarTiedFemale.md), [公猪](BoarTiedMale.md), [小猪](BoarTiedPiglet.md), [忠犬朋友](DogFriend.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Hunger.png" style="width:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时： **<br>→ [灰山鹑尸体](PartridgeDead.md)  
<img decoding="async" src="Sprite/Content.png" style="width:30px;">  |  初始：0<br>最大：1000  |  每15分钟-5<br>最多需要：2天2小时  |    