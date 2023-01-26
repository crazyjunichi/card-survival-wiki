# 海胆刺伤  
> 我应当把刺拔掉！  
  
  海胆刺伤  |   图片   
 ----  |  ----:   
 **重量：**1000<br><br>**装备：**[“擦伤”](eTag_WAbrasion.md)<br><br>**可使用次数：**0  |  ![](Sprite/UrchinWoundSpines.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)海胆！！](Event_Urchin.md)  |  检查伤口  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拔掉刺<br>  |  15分  |    |  <img decoding="async" src="Sprite/UrchinSpines.png" style="width:20px;">  -4  |  [情绪](Morale.md)-10  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Health.png" style="width:30px;">  |  初始：0<br>最大：500  |  每15分钟+1<br>最多需要：5天5小时  |  ** 到达上限时：擦伤 **  
<img decoding="async" src="Sprite/AloeGel.png" style="width:30px;">  |  初始：0<br>最大：32  |  每15分钟-1<br>最多需要：8小时  |    
<img decoding="async" src="Sprite/Bacteria.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟+1<br>最多需要：3天  |    
<img decoding="async" src="Sprite/UrchinSpines.png" style="width:30px;">  |  初始：8<br>最大：8  |  -  |  ** 到达0时：刺已拔除！ **<br>→ [海胆刺伤](W_UrchinWound.md)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Surface Bacteria 1  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 1-1  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">+1  |    
Surface Bacteria 2  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 2-2  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">+2  |    
Surface Bacteria 3  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 3-3  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">+4  |    
Surface Bacteria 4  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 4-4  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">+8  |    
Surface Bacteria 5  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 5-5  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">+16  |    
Sepsis  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">: 240～288  |  <img decoding="async" src="Sprite/Health.png" style="width:20px;">-2<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">+1  |  [细菌性发烧](BacteriaFever.md)加成+10  
Urchin Wound  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" style="width:20px;">: 0～250  |    |  [疼痛](Pain.md)+300<br>[皮肤完整度](SkinIntegrity.md)-1<br>[ModifierLeg_GameName](ModifierLeg.md)+3<br>[体重](Weight.md)加成-0.1<br>[受伤](Wounds.md)+100  
