# 毁坏的田地  
> 这片植物枯死了，我应该打一些农药来保护它的健康……  
<br>  
>   
  
  毁坏的田地  |   图片   
 ----  |  ----:   
 **标签：**	[“农作物”](tag_Crop.md)  |  <img decoding="async" src="Sprite/CropPlotRuined.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
摧毁<br>[手部动作](HandAction.md)  |  30分  |    |  → [未栽种的农田(空)](CropPlotEmpty.md)  |  [药草学(技能)](Skill_Herbology.md)+0.5<br>[污垢](Filth.md)+25  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子水](LQ_CoconutWater.md)  |  浇水  |  -  |    |  ** 自身: **<br>水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;"> + 96<br>** 使用物: **<br>含水量  -300  |    
[“肥料”](tag_Fertilizer.md)  |  施肥  |  15分  |    |  ** 自身: **<br>肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;"> + 384<br>** 使用物: **<br>消失<br>可用次数  -1  |    
[“低效肥料”](tag_FertilizerWeak.md)  |  施肥  |  15分  |    |  ** 自身: **<br>肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;"> + 96<br>** 使用物: **<br>消失<br>可用次数  -1  |    
## 可拖至  
[硫磺农药](LQ_PesticideBrimstone.md), [辣椒农药](LQ_PesticideChilli.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：384  |  每15分钟-1<br>最多需要：4天  |    
水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：192<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时： **<br>→ [未浇灌的农田](CropPlotDry.md)  
农药 — 螨虫<img decoding="async" src="Sprite/MitesNot.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
农药 — 真菌<img decoding="async" src="Sprite/FungiNot.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：100  |  每15分钟-1<br>最多需要：1天1小时  |    
真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Fertilizer  |  ** 需要属性：**<br>肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～384  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">+0.75<br>成熟度+0.5  |    
Pesticide  |  ** 需要属性：**<br>农药 — 螨虫<img decoding="async" src="Sprite/MitesNot.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～288  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">-5  |    
Fungicide  |  ** 需要属性：**<br>农药 — 真菌<img decoding="async" src="Sprite/FungiNot.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～288  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">-5  |    
Overwatered  |  ** 需要属性：**<br>水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 216～288  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">+1.25  |    
Underwatered  |  ** 需要属性：**<br>水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～72  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">+1.25  |    
Mite Infestation  |  ** 需要属性：**<br>螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">: 50～100  |  健康度-2  |    
Fungal Infestation  |  ** 需要属性：**<br>真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">: 144～288  |  健康度-2  |    
Humid  |  ** 需要存在卡牌：**<br>[“潮湿环境”](tag_EnvHumid.md)  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">+0.75<br>成熟度-0.25  |    
Dry  |  ** 需要存在卡牌：**<br>[“干燥环境”](tag_EnvDry.md)  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">+0.75<br>成熟度+0.25  |    
Fertile  |  ** 需要存在卡牌：**<br>[“肥沃环境”](tag_EnvFertile.md)  |  成熟度+0.25  |    
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md): 1-5  |  水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">+25  |    
## 其他效果  
名称  |  目标  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  
Mite Infestation  |  [“农作物”](tag_Crop.md)  |  ** 需要属性：**<br>螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">: 50～100  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">+0.75  |    
Fungal Infestation  |  [“农作物”](tag_Crop.md)  |  ** 需要属性：**<br>真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">: 144～288  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">+0.5  |    
