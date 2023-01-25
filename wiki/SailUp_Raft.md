# 扬起的帆  
> 当风向不利时，我应该收起船帆，否则船帆会受损。  
  
  扬起的帆  |   图片   
 ----  |  ----:   
 **可使用次数：**480  |  ![](Sprite/SailRaised.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[捕捞拖网](RaftFishTrap.md) , [细线](CordFiber.md)  |  修理  
[补给箱](SupplyChestRaft.md) , [细线](CordFiber.md)  |  修理  
[损坏的帆](SailBroken_Raft.md) , [细线](CordFiber.md)  |  修理船帆  
[收起的帆](SailDown_Raft.md)  |  扬帆  
[收起的帆](SailDown_Raft.md) , [细线](CordFiber.md)  |  修理船帆  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
收帆<br>  |  -  |    |  → [收起的帆](SailDown_Raft.md)<br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
使用次数  |  初始：480<br>最大：480  |  每15分钟-1<br>最多需要：5天  |  ** 到达0时： **<br>→ [损坏的帆](SailBroken_Raft.md)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Storm Back  |  ** 需要状态：**<br>[风](Wind.md): 3-5  |  使用次数-3  |  [距离](Distance.md)加成+3  
Very Favourable Wind  |  ** 需要状态：**<br>[风](Wind.md): 2-2  |  使用次数-1  |  [距离](Distance.md)加成+2  
Favourable Wind  |  ** 需要状态：**<br>[风](Wind.md): 1-1  |    |  [距离](Distance.md)加成+1  
Unfavourable Wind  |  ** 需要状态：**<br>[风](Wind.md): -1--1  |  使用次数-1  |  [距离](Distance.md)加成-1.5  
Very Unfavourable Wind  |  ** 需要状态：**<br>[风](Wind.md): -2--2  |  使用次数-2  |  [距离](Distance.md)加成-2.5  
Storm Front  |  ** 需要状态：**<br>[风](Wind.md): -5--3  |  使用次数-4  |  [距离](Distance.md)加成-3.5  
