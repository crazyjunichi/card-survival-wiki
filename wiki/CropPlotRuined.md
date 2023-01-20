[返回首页](index.md)   |  [查看所有建筑](building.md)
# 毁坏的田地  
> 这片植物枯死了，我应该打一些农药来保护它的健康……  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“农作物”](tag_Crop.md)  |  ![](Sprite/CropPlotRuined.png)   
  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
摧毁  |  30分  |    |  → [未栽种的农田(空)](CropPlotEmpty.md)<br>  |  [药草学(技能)](Skill_Herbology.md)+0.5<br>[污垢](Filth.md)+25  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子水](LQ_CoconutWater.md)  |  浇水  |  -  |    |  自身:<br>→ [杏仁树田](CropPlotAlmondTree.md)<br>燃料 + 96<br><br>使用物:<br>→ [椰壶](CoconutFlask.md)<br>含水量  -300<br><br>  |    
[“肥料”](tag_Fertilizer.md)  |  施肥  |  15分  |    |  自身:<br>→ [杏仁树田](CropPlotAlmondTree.md)<br>耐久 + 384<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>可用次数  -1<br><br>  |    
[“低效肥料”](tag_FertilizerWeak.md)  |  施肥  |  15分  |    |  自身:<br>→ [杏仁树田](CropPlotAlmondTree.md)<br>耐久 + 96<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>可用次数  -1<br><br>  |    
## 可拖至  
[硫磺农药](LQ_PesticideBrimstone.md), [辣椒农药](LQ_PesticideChilli.md)  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:30px;">  |  初始：0<br>最大：384  |  每15分钟-1<br>最多需要：4天  |    
水分<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：192<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  → [未浇灌的农田](CropPlotDry.md)  
农药 — 螨虫<img decoding="async" src="Sprite/MitesNot.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
农药 — 真菌<img decoding="async" src="Sprite/FungiNot.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
螨虫侵害<img decoding="async" src="Sprite/Mites.png" style="width:30px;">  |  初始：0<br>最大：100  |  每15分钟-1<br>最多需要：1天1小时  |    
真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
