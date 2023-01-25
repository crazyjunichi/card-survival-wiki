# 诱捕笼  
> 我应该布置好它，然后在里面放上诱饵。  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**1000<br><br>**标签：**	[“大的”](tag_Large.md)  |  ![](Sprite/CageShut.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[诱捕笼](CageTrapPlaced.md)  |  捡起  
[解除陷阱](CageTrapPlacedTriggered.md)  |  捡起  
[解除陷阱](CageTrapPlacedTriggeredPartridgeFemale.md)  |  捡起  
[解除陷阱](CageTrapPlacedTriggeredPartridgeMale.md)  |  捡起  
[解除陷阱](CageTrapPlacedTriggeredSeagull.md)  |  捡起  
[诱捕笼(蓝图)](Bp_CageTrap.md)  |  蓝图制造  
[中陷阱的猕猴](CageTrapMacaque.md)  |  放生  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放置<br>[腿部动作](LegAction.md)  |  30分  |  [光亮](Light.md):10-100<br>[遮蔽](Sheltered.md):0-0  |  → [诱捕笼](CageTrapPlaced.md)<br>  |    
拆除<br>[手部动作](HandAction.md)  |  1小时30分  |  [光亮](Light.md):10-100  |  [长木棍](StickLong.md)(+6)<br>[小树枝](Sticks.md)(+12)<br>[细线](CordFiber.md)(+16)<br>基础权重：1<br>  |    
