# 套索陷阱  
> 我应该在里面放上诱饵，过段时间再来看看。（更换诱饵会重置陷阱）  
<br>  
> 一个有用的陷阱，可以建立在有树的地区，并能够捕获活的<b>灰山鹑</b>。<br><br>它还可以捕捉小动物，如<b>老鼠，蜥蜴，螃蟹和海鸥</b>。<br><br>这些陷阱需要<b>诱饵</b>才能工作，并且必须在每次触发后<b>重置</b>。<br>除非真的有必要，否则尽量不要更换诱饵，这样做会重置陷阱的计时器。  
  
  套索陷阱  |   图片   
 ----  |  ----:   
 **槽位：**1<br><br>**过滤器：**[“诱饵”](tag_Bait.md) , [“喂/添加”](tag_Feed.md)  |  <img decoding="async" src="Sprite/SnareTrap.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[套索陷阱](SnareTrapTriggered.md)  |  重置陷阱  
[套索陷阱(蓝图)](Bp_SnareTrap.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆除陷阱<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  消失<br>** Materials **<br>  [小树枝](Sticks.md)(+2)<br>  [细线](CordFiber.md)(+2)<br>基础权重：1<br>  |    
## 转化  
放入  |  动作  |  耗时  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)<br>[“喂/添加”](tag_Feed.md)  |  捕捉猎物  |  18小时45分  |  [套索陷阱](SnareTrapTriggered.md)  |  [陷阱(技能)](Skill_Trapping.md)+0.5  
