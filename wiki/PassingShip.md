# 过路的船只  
> 一艘经过的船！我得引起它的注意！信号弹亦或是火炬肯定能起作用。  
<br>  
>   
  
  过路的船只  |   图片   
 ----  |  ----:   
 ** 效果: **<br>[不适](Discomfort.md)+500  |  <img decoding="async" src="Sprite/Ship.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[一艘路过的船！(事件)](Event_Raft_PassingShip.md)  |  继续  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
挥舞双手并呼救！<br>  |  15分  |    |  ** 自身：**<br>进度  +1～+10(1%～10%)  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[燃烧的信号弹(开)](FlareHandOn.md)  |  挥舞信号弹！<br>  |  15分  |    |  ** 自身: **<br>进度  +25～+50(25%～50%)  |    
[火把(开)](TorchOn.md)  |  挥舞火把！<br>  |  15分  |    |  ** 自身: **<br>进度  +15～+35(15%～35%)  |    
[信号镜](SignalingMirror.md)  |  发出信号！<br>  |  15分  |    |  ** 自身: **<br>进度  +10～+30(10%～30%)  |    
[蜡烛(开)](CandleOn.md)<br>[茉莉蜡烛(开)](CandleJasmineOn.md)<br>[香茅蜡烛(开)](CandleCitronellaOn.md)  |  挥舞蜡烛！<br>  |  15分  |    |  ** 自身: **<br>进度  +5～+30(5%～30%)  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
剩余时间<img decoding="async" src="Sprite/AlarmClock.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：6<br>最大：6  |  每15分钟-1<br>最多需要：1小时30分  |  ** 到达0时： **<br>** [1]  **<br>  [错过了船只(事件)](Event_ShipMissed.md)(+1)<br><br>** 自身 **<br>→消失  
进度  |  初始：0<br>最大：100  |  -  |  ** 到达上限时： **<br>** [1]  **<br>  [船舶救援(事件)](Event_ShipRescue.md)(+1)<br><br>** 自身 **<br>→消失  


<script>document.title="过路的船只 - 卡牌生存百科 Card Survival Wiki";</script>