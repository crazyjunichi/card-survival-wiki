# 海怪寄生虫  
变化范围: 0 ~ 1500  
基础变化率: 0 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
1 ～ 300  |  <img decoding="async" src="Sprite/SeahoundParasites.png" style="width:20px;">  |    |  [海怪寄生虫](ParasitesSeahound.md)加成+1<br>[体重](Weight.md)加成-0.01<br>[免疫系统](ImmuneSystem.md)<br>[内陆恐惧症](LandSickness.md)加成+1.5  |    
301 ～ 600  |  <img decoding="async" src="Sprite/SeahoundParasites.png" style="width:20px;">  |    |  [海怪寄生虫](ParasitesSeahound.md)加成+2<br>[体重](Weight.md)加成-0.05<br>[免疫系统](ImmuneSystem.md)-25<br>[食欲](Appetite.md)+25<br>[内陆恐惧症](LandSickness.md)加成+2.5  |    
601 ～ 900  |  <img decoding="async" src="Sprite/SeahoundParasites.png" style="width:20px;">  |    |  [海怪寄生虫](ParasitesSeahound.md)加成+3<br>[体重](Weight.md)加成-0.125<br>[免疫系统](ImmuneSystem.md)-50<br>[食欲](Appetite.md)+50<br>[内陆恐惧症](LandSickness.md)加成+3.5  |    
901 ～ 1500  |  <img decoding="async" src="Sprite/SeahoundParasites.png" style="width:20px;">  |    |  [海怪寄生虫](ParasitesSeahound.md)加成+4<br>[体重](Weight.md)加成-0.25<br>[免疫系统](ImmuneSystem.md)-75<br>[食欲](Appetite.md)+75<br>[内陆恐惧症](LandSickness.md)加成+5  |    
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[(事件)我被它伤到了……](Event_SeahoundFightBadFailure.md)  |  继续  |  800 ~ 1600  
[(事件)海怪攻击了！](Event_SeahoundFightFailedRetreat.md)  |  继续  |  400 ~ 1600  
[(事件)我拿下它了，但我受伤了。](Event_SeahoundFightMixedSuccess.md)  |  继续  |  400 ~ 800  
[海怪肉](Seahoundmeat.md)  |  食用  |  0 ~ 75  
