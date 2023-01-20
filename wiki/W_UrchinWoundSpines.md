[返回首页](index.md)   |  [查看所有物品](object.md)
# 海胆刺伤  
> 我应当把刺拔掉！  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**1000<br><br>**装备：**[“擦伤”](eTag_WAbrasion.md)<br><br>**可使用次数：**0  |  ![](Sprite/UrchinWoundSpines.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)海胆！！](Event_Urchin.md)  |  检查伤口  
## 动作  
动作  |  时间  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拔掉刺  |  15分  |    |  能量  -4<br>  |  [情绪](Morale.md)-10  
## 变化  
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Health.png" style="width:30px;">  |  初始：0<br>最大：500  |  每15分钟+1<br>最多需要：5天5小时  |    
<img decoding="async" src="Sprite/AloeGel.png" style="width:30px;">  |  初始：0<br>最大：32  |  每15分钟-1<br>最多需要：8小时  |    
<img decoding="async" src="Sprite/Bacteria.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟+1<br>最多需要：3天  |    
<img decoding="async" src="Sprite/UrchinSpines.png" style="width:30px;">  |  初始：8<br>最大：8  |  -  |  → [海胆刺伤](W_UrchinWound.md)  
