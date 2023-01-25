# 落石陷阱  
> 我需要在里面放上诱饵，然后过段时间再来看看。<b>（更换诱饵会重置陷阱）</b>  
  
  落石陷阱  |   图片   
 ----  |  ----:   
 **槽位：**1  |  ![](Sprite/DeadfallTrap.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[落石陷阱](DeadfallTrapTriggered.md)  |  重置陷阱  
[落石陷阱(蓝图)](Bp_DeadfallTrap.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆除陷阱<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  [小树枝](Sticks.md)(+1)<br>[大石块](StoneHeavy.md)(+1)<br>基础权重：1<br>  |    
## 转化  
放入  |  动作  |  耗时  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)<br>[“喂/添加”](tag_Feed.md)  |  捕捉猎物  |  18小时45分  |  [落石陷阱](DeadfallTrapTriggered.md)  |  [陷阱(技能)](Skill_Trapping.md)+0.5  
