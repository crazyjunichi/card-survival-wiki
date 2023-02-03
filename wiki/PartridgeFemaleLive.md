# 雌灰山鹑  
> 一只活灰山鹑。可以通过喂食维持它的生命，或者圈养在畜栏里。  
<br>  
> 这种动物可以在岛上的<b>丛林和草原</b>中找到。<br><br>可以猎杀它们以获取肉、骨头和羽毛，也可以通过<b>套索陷阱</b>活捉。<br>被活捉的灰山鹑可以圈养在畜栏里，之后它们会下蛋。如果雌雄灰山鹑都在场，它们也会产下受精的蛋进而孵出小灰山鹑。<br>  
  
  雌灰山鹑  |   图片   
 ----  |  ----:   
 ** 不可堆叠 **<br><br>**重量：**150<br><br>**标签：**	[“肉”](tag_Meat.md), [“灰山鹑”](tag_Partridge.md)  |  <img decoding="async" src="Sprite/PartridgeHanging.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[套索陷阱](SnareTrap.md)  |  捕捉猎物  
[礼物！(事件)](Event_DogFriendGift.md)  |  看看礼物  
[雌灰山鹑](PartridgeFemaleEnclosure.md)  |  捆起来  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
圈养在畜栏中<br>  |  -  |  [畜栏(环境)](Env_Enclosure.md)  |  ** 自身：**<br>→ [雌灰山鹑](PartridgeFemaleEnclosure.md)  |    
放生<br>  |  15分  |  [畜栏(环境)](Env_Enclosure.md)  |  ** 自身：**<br>→消失  |  [灰山鹑种群数量](Pop_Partridge.md)+1000  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)<br>[烤鱼片](FishSlicesCooked.md)<br>[虾](Prawns.md)<br>[烤虾](PrawnsCooked.md)<br>[鱼杂](FishScraps.md)<br>[烤鱼杂](FishScrapsCooked.md)  |  喂食<br>  |  -  |    |  ** 自身: **<br><img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> + 288<br><img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 50<br><br>** 使用物: **<br>→消失<br>可用次数  -1  |    
[“饲料”](tag_Feed.md)  |  喂食<br>  |  -  |    |  ** 自身: **<br><img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;"> + 288<br><img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;"> + 250<br><br>** 使用物: **<br>→消失  |    
[“切割工具”](tag_Cutter.md)  |  剖开<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→消失<br><br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Harvest] **<br>  [鸟骨](BonesBird.md)(+2)<br>  [羽毛](Feathers.md)(+2～+4)<br>  [鸟肉](BirdMeat.md)(+1)<br>  |  [污垢](Filth.md)+20  
## 可拖至  
[猪食槽](BoarFeeder.md) | [猪食槽(空)](BoarFeederEmpty.md) | [母猪](BoarEnclosureFemale.md) | [公猪](BoarEnclosureMale.md) | [小猪](BoarEnclosurePiglet.md) | [母猪](BoarTiedFemale.md) | [公猪](BoarTiedMale.md) | [小猪](BoarTiedPiglet.md) | [忠犬朋友](DogFriend.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时： **<br><br>自身→ [灰山鹑尸体](PartridgeDead.md)  
<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟-5<br>最多需要：2天2小时  |    


<script>document.title="雌灰山鹑 - 卡牌生存百科 Card Survival Wiki";</script>