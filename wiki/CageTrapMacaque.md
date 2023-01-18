[返回首页](index.md)   |  [查看所有物品](object.md)
# 中陷阱的猕猴  
> 一只活的猕猴。宰杀以取其皮肉，抑或试与之交友，一切取决于你。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**1500<br><br>**标签：**	[“大的”](tag_Large.md)<br><br>**可使用次数：**144  |  ![](Sprite/CageMacaque.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放生  |  15分  |    |  → [诱捕笼](CageTrap.md)<br>  |  [猕猴种群数量](Pop_Macaque.md)+1000  
抚摸  |  15分  |    |  能量 + 250<br><br>[(事件)啊！！！！](Event_MacaqueFriendAnger.md)(1)  |    
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)  |  喂食  |  -  |    |  自身:<br>耐久 + 288<br>能量 + 50<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[(事件)啊！！！！](Event_MacaqueFriendAnger.md)(1)<br>  |    
[“喂/添加”](tag_Feed.md)  |  喂食  |  -  |    |  自身:<br>耐久 + 288<br>能量 + 250<br><br>获得:<br>[(事件)啊！！！！](Event_MacaqueFriendAnger.md)(1)<br>  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水  |  -  |    |  自身:<br>可用次数 + 48<br>能量 + 250<br><br>使用物:<br>含水量  -300<br><br>  |    
[“切割工具”](tag_Cutter.md)  |  杀害  |  15分  |  [光亮](Light.md):10-100  |  自身:<br>→ [猕猴尸体](MacaqueCarcass.md)<br><br>使用物:<br>可用次数  -1<br><br>  |  [污垢](Filth.md)+20  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" style="height:30px;">  |  初始：288<br>最大：576  |  每天-1<br>最多需要：6天  |  [诱捕笼](CageTrap.md)1 <br><br>→ [猕猴尸体](MacaqueCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：144<br>最大：288  |  每天-1<br>最多需要：3天  |  [诱捕笼](CageTrap.md)1 <br><br>→ [猕猴尸体](MacaqueCarcass.md)  
驯服进度<img decoding="async" src="Sprite/Entertainment.png" style="height:30px;">  |  初始：288<br>最大：672  |  每天-1<br>最多需要：7天  |  [诱捕笼](CageTrap.md)1 <br><br>→ [猕猴朋友](MacaqueFriend.md)  
压力<img decoding="async" src="Sprite/Content.png" style="height:30px;">  |  初始：0<br>最大：1000  |  每天-4<br>最多需要：2天14小时30分  |    
便便  |  初始：192<br>最大：192  |  每天-1<br>最多需要：2天  |  [粪便](Manure.md)1   
