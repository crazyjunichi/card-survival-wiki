# 我进不去！  
> 猕猴们不让我进去，我没打赢它们！  
  
  我进不去！  |   图片   
 ----  |  ----:   
   |  ![](Sprite/MacaqueDen.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)猕猴们攻击了你！](Event_MacaqueDenFight.md)  |  用长矛攻击！  
[(事件)猕猴们攻击了你！](Event_MacaqueDenFight.md)  |  用弓箭攻击！  
[(事件)猕猴们攻击了你！](Event_MacaqueDenFight.md)  |  用枪攻击！  
[(事件)猕猴们攻击了你！](Event_MacaqueDenFight.md)  |  用投石索攻击！  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
继续<br>  |  -  |    |  消失<br>[猕猴咬伤](W_MacaqueBite.md)(0～+1)<br>[擦伤](W_Abrasion.md)(0～+2)<br>  |  [情绪](Morale.md)-10<br>[害怕猕猴](MacaqueFear.md)-500<br>[淤青](Bruising.md)0～+200  
