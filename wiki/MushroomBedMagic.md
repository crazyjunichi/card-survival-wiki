# 迷幻菇菌床  
> 我应该让田地保持水分然后等它成熟。  
  
  迷幻菇菌床  |   图片   
 ----  |  ----:   
 **标签：**	[“农作物”](tag_Crop.md)<br><br>**可使用次数：**0<br><br>** 效果: **<br>[不适](Discomfort.md)+300  |  ![](Sprite/MushroomBedMagic.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[未种植的菌床(空)](MushroomBedEmpty.md) , [迷幻菇](MagicMushrooms.md)  |  种植迷幻菇  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[椰子水](LQ_CoconutWater.md)  |  浇水  |  -  |    |  ** 自身: **<br>水分<img decoding="async" src="Sprite/Thirst.png" style="width:20px;"> + 96<br>** 使用物: **<br>含水量  -300  |    
[“肥料”](tag_Fertilizer.md)  |  施肥  |  15分  |    |  ** 自身: **<br>肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:20px;"> + 384<br>** 使用物: **<br>消失<br>可用次数  -1  |    
[“低效肥料”](tag_FertilizerWeak.md)  |  施肥  |  15分  |    |  ** 自身: **<br>肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:20px;"> + 96<br>** 使用物: **<br>消失<br>可用次数  -1  |    
## 可拖至  
[硫磺农药](LQ_PesticideBrimstone.md), [辣椒农药](LQ_PesticideChilli.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:30px;">  |  初始：0<br>最大：384  |  每15分钟-1<br>最多需要：4天  |    
使用次数  |  初始：0<br>最大：384  |  每15分钟-1<br>最多需要：4天  |    
水分<img decoding="async" src="Sprite/Thirst.png" style="width:30px;">  |  初始：192<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时： **<br>→ [未浇灌的菌床](MushroomBedDry.md)  
进度  |  初始：0<br>最大：672  |  每15分钟+1<br>最多需要：7天  |  ** 到达上限时： **<br>[迷幻菇](MagicMushroomsPlant.md)+4 <br>[木板](Plank.md)+4 <br>→ [西米粉](SagoFlour.md)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Fertilizer  |  ** 需要属性：**<br>肥力<img decoding="async" src="Sprite/FineDirt.png" style="width:20px;">: 1～384  |  进度+0.5  |    
Humid  |  ** 需要存在卡牌：**<br>[“潮湿环境”](tag_EnvHumid.md)  |  进度+0.25  |    
Dry  |  ** 需要存在卡牌：**<br>[“干燥环境”](tag_EnvDry.md)  |  进度-0.5  |    
Dark  |  ** 需要状态：**<br>[光亮](Light.md): 0-0  |  进度+0.25  |    
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md): 1-5  |  水分<img decoding="async" src="Sprite/Thirst.png" style="width:20px;">+25  |    
