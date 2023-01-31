# 巨蜥咬伤  
> 我需要保持创面洁净  
<br>  
> 一个被<b>巨蜥</b>撕咬出的丑陋伤口，沾满了细菌。<br><br>如果你不幸被巨蜥咬伤，请时刻保持伤口的<b>清洁和防护</b>，因为它很容易感染。<br>考虑服用一些药物来增强你的<b>免疫系统</b>，如果免疫系统不够强大，随着时间推移，伤口中的细菌会让你生病。  
  
  巨蜥咬伤  |   图片   
 ----  |  ----:   
 ** 不可删除 **<br><br>**重量：**0<br><br>**标签：**	[“开放性伤口”](tag_OpenWound.md)<br><br>**装备：**[“咬伤”](eTag_WBite.md)<br><br>**槽位：**1<br><br>**过滤器：**[“敷料”](tag_Dressing.md)<br><br>**可使用次数：**0  |  <img decoding="async" src="Sprite/Abrasion.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[我被它伤到了……(事件)](Event_MonitorFightBadFailure.md)  |  继续  
[巨蜥发动攻击了！(事件)](Event_MonitorFightFailedRetreat.md)  |  继续  
[我拿下它了，但我受伤了。(事件)](Event_MonitorFightMixedSuccess.md)  |  继续  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[盐水](LQ_WaterSalt.md)  |  用海水清理<br>  |  15分  |    |  ** 自身: **<br><img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:20px;max-height:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -150<br><br>** 使用物: **<br>耐久  -300<br>可用次数  -1<br>含水量  -300  |  [情绪](Morale.md)-5  
[“弱效清洁剂”](tag_CleanerWeak.md)  |  用淡水清理<br>[手部动作](HandAction.md)  |  15分  |    |  ** 自身: **<br><img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:20px;max-height:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -150<br><br>** 使用物: **<br>耐久  -300<br>可用次数  -1<br>含水量  -300  |    
[蜂蜜水](LQ_HoneyWater.md)  |  用蜂蜜水清理<br>[手部动作](HandAction.md)  |  15分  |  [勇气](Courage.md): 50-4000  |  ** 自身: **<br><img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:20px;max-height:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -250<br><br>** 使用物: **<br>耐久  -300<br>可用次数  -1<br>含水量  -300  |    
[碱液](LQ_Lye.md)  |  用碱水清理<br>[手部动作](HandAction.md)  |  15分  |    |  ** 自身: **<br><img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:20px;max-height:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -500<br><br>** 使用物: **<br>耐久  -300<br>可用次数  -1<br>含水量  -100  |    
[湿肥皂](SoapWet.md)  |  用肥皂清理<br>  |  15分  |    |  ** 自身: **<br><img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:20px;max-height:20px;">  -32<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -500<br><br>** 使用物: **<br>可用次数  -1  |    
[芦荟膏](AloeVeraGel.md)  |  涂抹<br>  |  15分  |    |  ** 自身: **<br><img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:20px;max-height:20px;"> + 16<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -150<br><br>** 使用物: **<br>消失<br>可用次数  -1  |    
[蜂蜜](LQ_Honey.md)  |  涂抹蜂蜜<br>[手部动作](HandAction.md)  |  15分  |  [勇气](Courage.md): 50-4000  |  ** 自身: **<br><img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:20px;max-height:20px;"> + 16<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">  -150<br><br>** 使用物: **<br>耐久  -300<br>可用次数  -1<br>含水量  -150  |    
## 转化  
放入  |  动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“敷料”](tag_Dressing.md)  |  敷料  |  -  |    |  耐久  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
<img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：960  |  每15分钟+1<br>最多需要：10天  |  ** 到达上限时：巨蜥咬伤 **<br>  
<img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：32  |  每15分钟-1<br>最多需要：8小时  |    
<img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：288  |  每15分钟+1<br>最多需要：3天  |    
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Dressing (weak)  |  ** 需要存在卡牌：**<br>[叶片绷带](LeafDressing.md)<br>[临时绷带](ImprovisedDressing.md)<br>** 需要放入：**<br>[叶片绷带](LeafDressing.md)<br>[临时绷带](ImprovisedDressing.md)  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">+1<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">-0.5  |  [皮肤完整度](SkinIntegrity.md)+2  
Dressing (strong)  |  ** 需要存在卡牌：**<br>[伤口敷料](WoundDressing.md)<br>[草木灰敷料](AshDressing.md)<br>** 需要放入：**<br>[伤口敷料](WoundDressing.md)<br>[草木灰敷料](AshDressing.md)  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">+1.5<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">-1  |  [皮肤完整度](SkinIntegrity.md)+2  
Surface Bacteria 1  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 1-1  |  <img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">+1  |    
Surface Bacteria 2  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 2-2  |  <img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">+2  |    
Surface Bacteria 3  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 3-3  |  <img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">+4  |    
Surface Bacteria 4  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 4-4  |  <img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">+8  |    
Surface Bacteria 5  |  ** 需要状态：**<br>[表面细菌](BacteriaSurface.md): 5-5  |  <img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">+16  |    
Gel Support  |  ** 需要属性：**<br><img decoding="async" src="Sprite/DressingApplied.png" href="a.md" style="max-width:20px;max-height:20px;">: 1～32  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">+0.25<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">-0.25  |  [疼痛](Pain.md)-25  
Sepsis  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">: 240～288  |  <img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">-2<br><img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">+1  |  [细菌性发烧](BacteriaFever.md)加成+10  
Open Bite  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">: 0～599  |  <img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">+2  |  [疼痛](Pain.md)+300<br>[皮肤完整度](SkinIntegrity.md)-2<br>[体重](Weight.md)加成-0.5<br>[受伤](Wounds.md)+400<br>[腿部动作受限](ModifierLeg.md)+1<br>[细菌性发烧](BacteriaFever.md)加成+5  
Healing Bite  |  ** 需要属性：**<br><img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;">: 600～960  |  <img decoding="async" src="Sprite/Bacteria.png" href="a.md" style="max-width:20px;max-height:20px;">+1  |  [疼痛](Pain.md)+100<br>[皮肤完整度](SkinIntegrity.md)-1<br>[体重](Weight.md)加成-0.1<br>[受伤](Wounds.md)+150  


<script>document.title="巨蜥咬伤 - 卡牌生存百科 Card Survival Wiki";</script>