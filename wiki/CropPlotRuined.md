# 毁坏的田地  
> 这片植物枯死了，我应该打一些农药来保护它的健康……  
<br>  
>   
  
  毁坏的田地  |   图片   
 ----  |  ----:   
 ** 不可堆叠 **<br><br>**标签：**	[“农作物”](tag_Crop.md)  |  <img decoding="async" src="Sprite/CropPlotRuined.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[杏仁树田](CropPlotAlmondTree.md)  |  作物已死亡！  
[芦荟田](CropPlotAloeVera.md)  |  作物已死亡！  
[香蕉树田](CropPlotBananaTree.md)  |  作物已死亡！  
[辣椒田](CropPlotChilies.md)  |  作物已死亡！  
[月季田](CropPlotChinaRose.md)  |  作物已死亡！  
[金鸡纳树田](CropPlotCinchonaTree.md)  |  作物已死亡！  
[咖啡田](CropPlotCoffee.md)  |  作物已死亡！  
[姜田](CropPlotGinger.md)  |  作物已死亡！  
[茉莉花田](CropPlotJasmine.md)  |  作物已死亡！  
[卡瓦胡椒田](CropPlotKava.md)  |  作物已死亡！  
[柠檬草田](CropPlotLemonGrass.md)  |  作物已死亡！  
[芒果树田](CropPlotMangoTree.md)  |  作物已死亡！  
[水椰树田](CropPlotNipaPalm.md)  |  作物已死亡！  
[棕榈丛田](CropPlotPalmBush.md)  |  作物已死亡！  
[椰子树田](CropPlotPalmTree.md)  |  作物已死亡！  
[稻田](CropPlotRice.md)  |  作物已死亡！  
[西米树田](CropPlotSagoPalm.md)  |  作物已死亡！  
[蛇草田](CropPlotSnakeGrass.md)  |  作物已死亡！  
[蜘蛛兰田](CropPlotSpiderLily.md)  |  作物已死亡！  
[大叶仙茅田](CropPlotWeevilLily.md)  |  作物已死亡！  
[野枣田](CropPlotWildJujube.md)  |  作物已死亡！  
[参薯田](CropPlotYam.md)  |  作物已死亡！  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
摧毁<br>[手部动作](HandAction.md)  |  30分  |    |  ** 自身：**<br>→ [未栽种的农田(空)](CropPlotEmpty.md)  |  [药草学(技能)](Skill_Herbology.md)+0.5<br>[污垢](Filth.md)+25  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子水](LQ_CoconutWater.md)<br>[“灌溉用水”](tag_WaterFresh.md)  |  浇水<br>  |  -  |    |  ** 自身: **<br>水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">  +96(33%)<br><br>** 使用物: **<br>含水量  -300  |    
[“肥料”](tag_Fertilizer.md)  |  施肥<br>  |  15分  |    |  ** 自身: **<br>肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;">  +384(100%)<br><br>** 使用物: **<br>→消失<br>可用次数  -1  |    
[“低效肥料”](tag_FertilizerWeak.md)  |  施肥<br>  |  15分  |    |  ** 自身: **<br>肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;">  +96(25%)<br><br>** 使用物: **<br>→消失<br>可用次数  -1  |    
## 可拖至  
[硫磺农药](LQ_PesticideBrimstone.md) | [辣椒农药](LQ_PesticideChilli.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：384  |  每15分钟-1<br>最多需要：4天  |    
水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：192<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时： **<br><br>自身→ [未浇灌的农田](CropPlotDry.md)  
农药 — 螨虫<img decoding="async" src="Sprite/MitesNot.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
农药 — 真菌<img decoding="async" src="Sprite/FungiNot.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：100  |  每15分钟-1<br>最多需要：1天1小时  |    
真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：288  |  每15分钟-1<br>最多需要：3天  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Fertilizer  |  ** 需要属性：**<br>肥力<img decoding="async" src="Sprite/FineDirt.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～384(0%～100%)  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">+0.75<br>成熟度+0.5  |    
Pesticide  |  ** 需要属性：**<br>农药 — 螨虫<img decoding="async" src="Sprite/MitesNot.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～288(0%～100%)  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">-5  |    
Fungicide  |  ** 需要属性：**<br>农药 — 真菌<img decoding="async" src="Sprite/FungiNot.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～288(0%～100%)  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">-5  |    
Overwatered  |  ** 需要属性：**<br>水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 216～288(75%～100%)  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">+1.25  |    
Underwatered  |  ** 需要属性：**<br>水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～72(0%～25%)  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">+1.25  |    
Mite Infestation  |  ** 需要属性：**<br>螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">: 50～100(50%～100%)  |  健康度-2  |    
Fungal Infestation  |  ** 需要属性：**<br>真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">: 144～288(50%～100%)  |  健康度-2  |    
Humid  |  ** 需要存在卡牌：**<br>[“潮湿环境”](tag_EnvHumid.md)  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">+0.75<br>成熟度-0.25  |    
Dry  |  ** 需要存在卡牌：**<br>[“干燥环境”](tag_EnvDry.md)  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">+0.75<br>成熟度+0.25  |    
Fertile  |  ** 需要存在卡牌：**<br>[“肥沃环境”](tag_EnvFertile.md)  |  成熟度+0.25  |    
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md): 1-5  |  水分<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">+25  |    
## 其他效果  
名称  |  目标  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  
Mite Infestation  |  [“农作物”](tag_Crop.md)  |  ** 需要属性：**<br>螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">: 50～100(50%～100%)  |  螨虫侵害<img decoding="async" src="Sprite/Mites.png" href="a.md" style="max-width:20px;max-height:20px;">+0.75  |    
Fungal Infestation  |  [“农作物”](tag_Crop.md)  |  ** 需要属性：**<br>真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">: 144～288(50%～100%)  |  真菌感染<img decoding="async" src="Sprite/SaturationMushrooms.png" href="a.md" style="max-width:20px;max-height:20px;">+0.5  |    


<script>document.title="毁坏的田地 - 卡牌生存百科 Card Survival Wiki";</script>