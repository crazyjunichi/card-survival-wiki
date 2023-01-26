# 原木陷阱  
> 一个针对大型猎物的陷阱。需要诱饵。（更换诱饵会重置陷阱）  
  
  原木陷阱  |   图片   
 ----  |  ----:   
 **槽位：**1  |  ![](Sprite/LogTrap.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[原木陷阱](LogTrapTriggered.md)  |  重置陷阱  
[原木陷阱(蓝图)](Bp_LogTrap.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆除陷阱<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  消失<br>[长木棍](StickLong.md)(+1)<br>[小树枝](Sticks.md)(+1)<br>[原木](Log.md)(+1)<br>基础权重：1<br>  |    
## 转化  
放入  |  动作  |  耗时  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
[“喂”](tag_Meat.md)  |  捕捉猎物  |  2天  |  [原木陷阱](LogTrapTriggered.md)  |  [陷阱(技能)](Skill_Trapping.md)+0.5  
[“喂/添加”](tag_Feed.md)  |  捕捉猎物  |  2天  |  [原木陷阱](LogTrapTriggered.md)  |  [陷阱(技能)](Skill_Trapping.md)+0.5  
