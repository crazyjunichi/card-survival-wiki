[返回首页](index.md)   |  [查看所有建筑](building.md)
# 辣椒田  
> 我应该让田地保持水分然后等它成熟。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“农作物”](tag_Crop.md)<br><br>**可使用次数：**384  |  ![](Sprite/CropPlotGrowing.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[未栽种的农田](CropPlotEmpty.md) , [辣椒](Chilies.md)  |  种植辣椒  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
摧毁  |  30分  |    |  → [未栽种的农田](CropPlotEmpty.md)<br>  |  [药草学(技能)](Skill_Herbology.md)+0.5<br>[污垢](Filth.md)+25  
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
肥力<img decoding="async" src="Sprite/FineDirt.png" style="height:30px;">  |  初始：0<br>最大：384  |  每天-1<br>最多需要：4天  |    
健康度<img decoding="async" src="Sprite/Health.png" style="height:30px;">  |  初始：384<br>最大：384  |  每天+1<br>最多需要：4天  |  → [毁坏的田地](CropPlotRuined.md)  
水分<img decoding="async" src="Sprite/Thirst.png" style="height:30px;">  |  初始：192<br>最大：288  |  每天-1<br>最多需要：3天  |  → [未浇灌的农田](CropPlotDry.md)  
成熟度  |  初始：0<br>最大：672  |  每天+1<br>最多需要：7天  |  [辣椒丛](ChiliPlant.md)6 <br><br>→ [西米粉](SagoFlour.md)  
农药 — 螨虫<img decoding="async" src="Sprite/MitesNot.png" style="height:30px;">  |  初始：0<br>最大：288  |  每天+1<br>最多需要：3天  |    
农药 — 真菌<img decoding="async" src="Sprite/FungiNot.png" style="height:30px;">  |  初始：0<br>最大：288  |  每天-1<br>最多需要：3天  |    
螨虫侵害<img decoding="async" src="Sprite/Mites.png" style="height:30px;">  |  初始：0<br>最大：100  |  每天-1<br>最多需要：1天1小时  |    
真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" style="height:30px;">  |  初始：0<br>最大：288  |  每天-1<br>最多需要：3天  |    
