[返回首页](index.md)  
# 烧伤  
变化范围？: 0 ~ 1500  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
1 ～ 150  |  <img decoding="async" src="Sprite/Sunburn.png" style="width:20px;">轻微烧伤  |    |  [皮肤完整度](SkinIntegrity.md)-1<br>[疼痛](Pain.md)+50<br>[受伤](Wounds.md)+50  |    
151 ～ 299  |  <img decoding="async" src="Sprite/Sunburn.png" style="width:20px;">一级烧伤  |  烧起来了……  |  [皮肤完整度](SkinIntegrity.md)-2<br>[疼痛](Pain.md)+100<br>[受伤](Wounds.md)+150  |    
300 ～ 599  |  <img decoding="async" src="Sprite/Abrasion.png" style="width:20px;">二级烧伤  |  烧伤了  |  [皮肤完整度](SkinIntegrity.md)-3<br>[疼痛](Pain.md)+200<br>[体重](Weight.md)加成-1<br>[受伤](Wounds.md)+300  |    
600 ～ 999  |  <img decoding="async" src="Sprite/Abrasion.png" style="width:20px;">二级烧伤  |  太痛了！  |  [皮肤完整度](SkinIntegrity.md)-4<br>[疼痛](Pain.md)+350<br>[体重](Weight.md)加成-1<br>[受伤](Wounds.md)+500  |    
1000 ～ 1500  |  <img decoding="async" src="Sprite/Abrasion.png" style="width:20px;">三级烧伤  |  啊啊啊啊！  |  [皮肤完整度](SkinIntegrity.md)-5<br>[疼痛](Pain.md)+500<br>[体重](Weight.md)加成-2<br>[受伤](Wounds.md)+1000  |    
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[(事件)<b>砰！！！</b>](Event_JerrycanExplosion.md)  |  它烧起来了！！  |  750 ~ 1500  
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
