# 狗咬伤  
> 好痛！  
  
  属性  |   图片   
 ----  |  ----:   
 **重量：**0<br><br>**标签：**	[“开放性伤口”](tag_OpenWound.md)<br><br>**装备：**[“擦伤”](eTag_WAbrasion.md)<br><br>**槽位：**1<br><br>**过滤器：**[“敷料”](tag_Dressing.md)<br><br>**可使用次数：**0  |  ![](Sprite/MacaqueBite.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)┗｀O′┛ 嗷！！！！](Event_DogFriendAnger.md)  |  继续  
## 可拖入  
使用  |  动作  |  时间  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[盐水](LQ_WaterSalt.md)  |  用海水清理  |  15分  |    |  自身:<br><img decoding="async" src="Sprite/DressingApplied.png" style="width:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">  -150<br><br>使用物:<br>→ [陶碗](ClayBowl.md)<br>耐久  -300<br>可用次数  -1<br>含水量  -300<br><br>  |  [情绪](Morale.md)-5  
[“弱效清洁剂”](tag_CleanerWeak.md)  |  用淡水清理  |  15分  |    |  自身:<br><img decoding="async" src="Sprite/DressingApplied.png" style="width:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">  -150<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -300<br><br>  |    
[蜂蜜水](LQ_HoneyWater.md)  |  用蜂蜜水清理  |  15分  |  [勇气](Courage.md):50-4000  |  自身:<br><img decoding="async" src="Sprite/DressingApplied.png" style="width:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">  -250<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -300<br><br>  |    
[碱液](LQ_Lye.md)  |  用碱水清理  |  15分  |    |  自身:<br><img decoding="async" src="Sprite/DressingApplied.png" style="width:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">  -500<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -100<br><br>  |    
[湿肥皂](SoapWet.md)  |  用肥皂清理  |  15分  |    |  自身:<br><img decoding="async" src="Sprite/DressingApplied.png" style="width:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">  -500<br><br>使用物:<br>可用次数  -1<br><br>  |    
[芦荟膏](AloeVeraGel.md)  |  涂抹  |  15分  |    |  自身:<br><img decoding="async" src="Sprite/DressingApplied.png" style="width:20px;"> + 16<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">  -150<br><br>使用物:<br>可用次数  -1<br><br>  |    
[蜂蜜](LQ_Honey.md)  |  涂抹蜂蜜  |  15分  |  [勇气](Courage.md):50-4000  |  自身:<br><img decoding="async" src="Sprite/DressingApplied.png" style="width:20px;"> + 16<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">  -150<br><br>使用物:<br>耐久  -300<br>可用次数  -1<br>含水量  -150<br><br>  |    
## 转化  
放入  |  动作  |  时间  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
[“敷料”](tag_Dressing.md)  |  敷料  |  -  |    |    
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Health.png" style="width:30px;">  |  初始：0<br>最大：288  |  每15分钟+1<br>最多需要：3天  |  ** 到达上限时：擦伤 **  
<img decoding="async" src="Sprite/DressingApplied.png" style="width:30px;">  |  初始：0<br>最大：32  |  每15分钟-1<br>最多需要：8小时  |    
<img decoding="async" src="Sprite/Bacteria.png" style="width:30px;">  |  初始：144<br>最大：288  |  每15分钟+1<br>最多需要：3天  |    
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Dressing (weak)  |  ** 需要存在卡牌：**<br>[叶片绷带](LeafDressing.md)<br>[临时绷带](ImprovisedDressing.md)  |  <img decoding="async" src="Sprite/Health.png" style="width:20px;">：+1<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：-0.5  |  [皮肤完整度](SkinIntegrity.md)+2  
Dressing (strong)  |  ** 需要存在卡牌：**<br>[伤口敷料](WoundDressing.md)<br>[草木灰敷料](AshDressing.md)  |  <img decoding="async" src="Sprite/Health.png" style="width:20px;">：+1.5<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：-1  |  [皮肤完整度](SkinIntegrity.md)+2  
Surface Bacteria 1  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md):1-1  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：+1  |    
Surface Bacteria 2  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md):2-2  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：+2  |    
Surface Bacteria 3  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md):3-3  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：+4  |    
Surface Bacteria 4  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md):4-4  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：+8  |    
Surface Bacteria 5  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md):5-5  |  <img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：+16  |    
Gel Support  |  ** 需要属性：**<br><img decoding="async" src="Sprite/DressingApplied.png" style="width:20px;">1～32  |  <img decoding="async" src="Sprite/Health.png" style="width:20px;">：+0.25<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：-0.25  |  [疼痛](Pain.md)-25  
Sepsis  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">240～288  |  <img decoding="async" src="Sprite/Health.png" style="width:20px;">：-2<br><img decoding="async" src="Sprite/Bacteria.png" style="width:20px;">：+1  |  [细菌性发烧](BacteriaFever.md)加成+10  
Fresh Bite  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" style="width:20px;">0～192  |    |  [疼痛](Pain.md)+100<br>[皮肤完整度](SkinIntegrity.md)-2<br>[体重](Weight.md)加成-0.1<br>[受伤](Wounds.md)+100  
Healing Bite  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" style="width:20px;">193～288  |    |  [疼痛](Pain.md)+25<br>[皮肤完整度](SkinIntegrity.md)-1<br>[受伤](Wounds.md)+25  
