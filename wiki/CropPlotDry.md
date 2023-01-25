# 未浇灌的农田  
> 在种植前我需要先浇灌田地。  
  
  属性  |   图片   
 ----  |  ----:   
   |  ![](Sprite/CropPlot.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[农田(蓝图)](Bp_CropPlot.md)  |  蓝图制造  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子水](LQ_CoconutWater.md)  |  浇水  |  -  |    |  自身:<br>→ [未栽种的农田(空)](CropPlotEmpty.md)<br>水分<img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 96<br><br>使用物:<br>→ [椰壶](CoconutFlask.md)<br>含水量  -300<br><br>  |    
[“肥料”](tag_Fertilizer.md)  |  施肥  |  15分  |    |  自身:<br>→ [杏仁树田](CropPlotAlmondTree.md)<br>肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:20px;"> + 384<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>可用次数  -1<br><br>  |    
[“低效肥料”](tag_FertilizerWeak.md)  |  施肥  |  15分  |    |  自身:<br>→ [杏仁树田](CropPlotAlmondTree.md)<br>肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:20px;"> + 96<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>可用次数  -1<br><br>  |    
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:30px;">  |  初始：0<br>最大：384  |  每15分钟-1<br>最多需要：4天  |    
水分<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
