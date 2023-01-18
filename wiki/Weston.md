[返回首页](index.md)   |  [查看所有物品](object.md)
# 韦斯顿  
> 一个陪伴我的朋友。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**150<br><br>**标签：**	[“美丽的/好看的”](tag_Pretty.md)  |  ![](Sprite/Weston.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[韦斯顿(蓝图)](Bp_Weston.md)  |  蓝图制造  
[TestDropModifiers_CardName](TestDropModifiers.md)  |  TestDropModifiers_DismantleActions[0].ActionName  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
聊天  |  15分  |  [韦斯顿亲密关系](WestonPropinquity.md):0-1000  |  [(事件)韦斯顿](Event_Weston0a.md)(1)<br>[(事件)韦斯顿](Event_Weston0b.md)(1)<br>[(事件)韦斯顿](Event_Weston0c.md)(1)<br>[(事件)韦斯顿](Event_Weston0d.md)(1)<br>[(事件)韦斯顿](Event_Weston0e.md)(1)  |  [韦斯顿的陪伴](WestonCompany.md)+96<br>[压力](Stress.md)-10<br>[孤独感](Loneliness.md)-20  
聊天  |  15分  |  [韦斯顿亲密关系](WestonPropinquity.md):1001-2000  |  [(事件)韦斯顿](Event_Weston1a.md)(1)<br>[(事件)韦斯顿](Event_Weston1b.md)(1)<br>[(事件)韦斯顿](Event_Weston1c.md)(1)<br>[(事件)韦斯顿](Event_Weston1d.md)(1)<br>[(事件)韦斯顿](Event_Weston1e.md)(1)  |  [韦斯顿的陪伴](WestonCompany.md)+96<br>[孤独感](Loneliness.md)-20  
聊天  |  15分  |  [韦斯顿亲密关系](WestonPropinquity.md):2001-3000  |  [(事件)韦斯顿](Event_Weston2a.md)(1)<br>[(事件)韦斯顿](Event_Weston2b.md)(1)<br>[(事件)韦斯顿](Event_Weston2c.md)(1)<br>[(事件)韦斯顿](Event_Weston2d.md)(1)  |  [韦斯顿的陪伴](WestonCompany.md)+96<br>[孤独感](Loneliness.md)-20  
聊天  |  15分  |  [韦斯顿亲密关系](WestonPropinquity.md):3001-5000  |  [(事件)韦斯顿](Event_Weston3a.md)(1)<br>[(事件)韦斯顿](Event_Weston3b.md)(1)<br>[(事件)韦斯顿](Event_Weston3c.md)(1)<br>[(事件)韦斯顿](Event_Weston3d.md)(1)  |  [韦斯顿的陪伴](WestonCompany.md)+96<br>[孤独感](Loneliness.md)-20  
离开这座岛  |  -  |  [韦斯顿亲密关系](WestonPropinquity.md):2001-3000<br>[决心](Determination.md):1-100<br>[韦斯顿的决心](WestonDetermination.md):0-0  |  [(事件)韦斯顿](Event_WestonIslandEscape1.md)(1)  |  [韦斯顿的决心](WestonDetermination.md)+1  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[相机](Camera.md)  |  拍照！  |  15分  |    |    |  [娱乐](Entertainment.md)+1  
[“锤”](tag_Hammer.md)  |  杀害！  |  15分  |    |  自身:<br>→ [猕猴尸体](MacaqueCarcass.md)<br><br>使用物:<br>可用次数  -1<br><br>获得:<br>[半个椰子](CoconutHalf.md)(2)<br>  |  [污垢](Filth.md)+20<br>[情绪](Morale.md)-100<br>[哀悼](Mourning.md)+288  
