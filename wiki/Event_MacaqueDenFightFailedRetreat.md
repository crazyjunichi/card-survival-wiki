[返回首页](index.md)  
# 啊！  
> 在我逃跑前猕猴就攻击了我！  
  
  属性  |   图片   
 ----  |  ----:   
   |  ![](Sprite/MacaqueDen.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)猕猴们攻击了你！](Event_MacaqueDenFight.md)  |  撤退  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
继续  |  -  |    |  [猕猴咬伤](W_MacaqueBite.md)(0~1)<br>[(事件)坠落！](Event_FallAbrasion.md)(0~1)  |  [情绪](Morale.md)-20<br>[淤青](Bruising.md)+25<br>[害怕猕猴](MacaqueFear.md)-500  
