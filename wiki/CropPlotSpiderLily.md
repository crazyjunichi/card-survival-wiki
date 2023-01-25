# 蜘蛛兰田  
> 我应该让田地保持水分然后等它成熟。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“农作物”](tag_Crop.md)<br><br>**可使用次数：**384  |  ![](Sprite/CropPlotGrowing.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[未栽种的农田(空)](CropPlotEmpty.md) , [蜘蛛兰叶](SpiderLilyLeaves.md)  |  种植蜘蛛兰  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
摧毁<br>[手部动作](HandAction.md)  |  30分  |    |  → [未栽种的农田(空)](CropPlotEmpty.md)<br>  |  [药草学(技能)](Skill_Herbology.md)+0.5<br>[污垢](Filth.md)+25  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子水](LQ_CoconutWater.md)  |  浇水  |  -  |    |  自身:<br>→ [杏仁树田](CropPlotAlmondTree.md)<br>水分<img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 96<br><br>使用物:<br>→ [椰壶](CoconutFlask.md)<br>含水量  -300<br><br>  |    
[“肥料”](tag_Fertilizer.md)  |  施肥  |  15分  |    |  自身:<br>→ [杏仁树田](CropPlotAlmondTree.md)<br>肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:20px;"> + 384<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>可用次数  -1<br><br>  |    
[“低效肥料”](tag_FertilizerWeak.md)  |  施肥  |  15分  |    |  自身:<br>→ [杏仁树田](CropPlotAlmondTree.md)<br>肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:20px;"> + 96<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>可用次数  -1<br><br>  |    
## 可拖至  
[硫磺农药](LQ_PesticideBrimstone.md), [辣椒农药](LQ_PesticideChilli.md)  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:30px;">  |  初始：0<br>最大：384  |  每15分钟-1<br>最多需要：4天  |    
健康度<img decoding="async" src="Sprite/Health.png" style="width:30px;">  |  初始：384<br>最大：384  |  每15分钟+1<br>最多需要：4天  |  ** 到达0时：作物已死亡！ **<br>→ [毁坏的田地](CropPlotRuined.md)  
水分<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：192<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时： **<br>→ [未浇灌的农田](CropPlotDry.md)  
成熟度  |  初始：0<br>最大：672  |  每15分钟+1<br>最多需要：7天  |  ** 到达上限时： **<br>[蜘蛛兰](SpiderLily.md)+6 <br>→ [西米粉](SagoFlour.md)  
农药 — 螨虫<img decoding="async" src="Sprite/MitesNot.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
农药 — 真菌<img decoding="async" src="Sprite/FungiNot.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
螨虫侵害<img decoding="async" src="Sprite/Mites.png" style="width:30px;">  |  初始：0<br>最大：100  |  每15分钟-1<br>最多需要：1天1小时  |    
真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Fertilizer  |  ** 需要属性：**<br>肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:20px;">1～384  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" style="width:20px;">：+0.75<br>成熟度+0.5  |    
Pesticide  |  ** 需要属性：**<br>农药 — 螨虫<img decoding="async" src="Sprite/MitesNot.png" style="width:20px;">1～288  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" style="width:20px;">：-5  |    
Fungicide  |  ** 需要属性：**<br>农药 — 真菌<img decoding="async" src="Sprite/FungiNot.png" style="width:20px;">1～288  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" style="width:20px;">：-5  |    
Overwatered  |  ** 需要属性：**<br>水分<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">216～288  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" style="width:20px;">：+1.25  |    
Underwatered  |  ** 需要属性：**<br>水分<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">0～72  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" style="width:20px;">：+1.25  |    
Mite Infestation  |  ** 需要属性：**<br>螨虫侵害<img decoding="async" src="Sprite/Mites.png" style="width:20px;">50～100  |  健康度<img decoding="async" src="Sprite/Health.png" style="width:20px;">：-2  |    
Fungal Infestation  |  ** 需要属性：**<br>真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" style="width:20px;">144～288  |  健康度<img decoding="async" src="Sprite/Health.png" style="width:20px;">：-2  |    
Humid  |  ** 需要存在卡牌：**<br>[“潮湿环境”](tag_EnvHumid.md)  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" style="width:20px;">：+0.5<br>成熟度+0.25  |    
Dry  |  ** 需要存在卡牌：**<br>[“干燥环境”](tag_EnvDry.md)  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" style="width:20px;">：+0.75<br>成熟度-0.25  |    
Fertile  |  ** 需要存在卡牌：**<br>[“肥沃环境”](tag_EnvFertile.md)  |  成熟度+0.25  |    
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md):1-5  |  水分<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">：+25  |    
