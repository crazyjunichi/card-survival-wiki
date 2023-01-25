# 皮肤潮湿度  
变化范围: 0 ~ 64  
基础变化率: +2 / 每15分钟  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
49 ～ 63  |  湿润的皮肤  |  柔软又舒适  |  [水分](Hydration.md)加成+2  |    
33 ～ 48  |  <img decoding="async" src="Sprite/Sunburn.png" style="width:20px;">干燥的皮肤  |  痒痒的，我得为我的皮肤补充点水分。  |  [疼痛](Pain.md)+25  |    
17 ～ 32  |  <img decoding="async" src="Sprite/Sunburn.png" style="width:20px;">皴裂的皮肤  |  好痛，我早该补水的。  |  [疼痛](Pain.md)+75<br>[皮肤完整度](SkinIntegrity.md)-1  |    
0 ～ 16  |  <img decoding="async" src="Sprite/Sunburn.png" style="width:20px;">脱水的皮肤  |  疼死了…我需要立马为我的皮肤补充水分。  |  [疼痛](Pain.md)+150<br>[皮肤完整度](SkinIntegrity.md)-3  |    
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[人鱼巢](MermaidNest.md)  |  条件被动  |  0.5  
