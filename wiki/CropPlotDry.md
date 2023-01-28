# 未浇灌的农田  
> 在种植前我需要先浇灌田地。  
<br>  
>   
  
  未浇灌的农田  |   图片   
 ----  |  ----:   
   |  <img decoding="async" src="Sprite/CropPlot.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[农田(蓝图)](Bp_CropPlot.md)  |  蓝图制造  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子水](LQ_CoconutWater.md)  |  浇水  |  -  |    |  ** 自身: **<br>→ [未栽种的农田(空)](CropPlotEmpty.md)<br>水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> + 96<br>** 使用物: **<br>含水量  -300  |    
[“肥料”](tag_Fertilizer.md)  |  施肥  |  15分  |    |  ** 自身: **<br>肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;"> + 384<br>** 使用物: **<br>消失<br>可用次数  -1  |    
[“低效肥料”](tag_FertilizerWeak.md)  |  施肥  |  15分  |    |  ** 自身: **<br>肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;"> + 96<br>** 使用物: **<br>消失<br>可用次数  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：384  |  每15分钟-1<br>最多需要：4天  |    
水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
