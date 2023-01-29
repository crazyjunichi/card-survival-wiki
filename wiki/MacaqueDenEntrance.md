# 猕猴窝  
> 一个周围全是猕猴的小洞穴，我得小心应付。  
<br>  
> 一个洞穴，似乎被这个岛上的猕猴群用作它们的行动基地。<br><br>尽管被这些家伙<b>偷走</b>的东西最终大概率都存在这里，但除非你做足了<b>战斗</b>准备，否则不建议靠近这个地方。这些猕猴显然有着很强的领地意识，并且不欢迎访客。  
  
  猕猴窝  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[丛林高地(环境)](Env_JungleHighlands.md)  |  <img decoding="async" src="Sprite/MacaqueDen.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
进入<br>  |  -  |    |  ** 获得： **<br>** [Entrance] **<br>  [猕猴们攻击了你！(事件)](Event_MacaqueDenFight.md)(+1)<br>基础权重：1<br>  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[炸药(开)](DynamiteOn.md)  |  我TM来啦！<br>  |  15分  |    |  <br>** 使用物: **<br>消失<br><br>** 获得: **<br>  [猕猴肉](MacaqueMeat.md)(+2～+6)<br>  [烤猕猴肉](MacaqueMeatCooked.md)(+2～+6)<br>  [猕猴尸体](MacaqueCarcass.md)(+1～+2)<br>  [受伤的猕猴](MacaqueWounded.md)(0～+1)<br>  [骨头碎片](BoneSplinters.md)(+2～+6)<br>  |  [猕猴种群数量](Pop_Macaque.md)-20000<br>[害怕猕猴](MacaqueFear.md)+10000<br>[情绪](Morale.md)+100  
## 触发器  
名称  |  条件  |  变化  
----  |  ----  |  ----  
猕猴灭绝  |  [猕猴种群数量](Pop_Macaque.md): 0-1999  |  → [猕猴窝(空)](MacaqueDenEntranceClear.md)  
