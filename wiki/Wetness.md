# 湿度  
>   
  
#### ** 基础值: ** 0   
#### ** 变化范围: ** 0 ~ 100  
#### ** 基础变化率: ** -20 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
0 ～ 0  |  干燥  |    |    |    
1 ～ 75  |  <img decoding="async" src="Sprite/Wetness.png" href="a.md" style="max-width:20px;max-height:20px;">潮湿  |    |  [体感温度](TemperaturePerceived.md)-10<br>[晒伤](Sunburn.md)加成-1<br>[皮肤潮湿度](SkinHumidity.md)加成+8  |    
76 ～ 100  |  <img decoding="async" src="Sprite/Wetness.png" href="a.md" style="max-width:20px;max-height:20px;">湿透了  |    |  [体感温度](TemperaturePerceived.md)-20<br>[细菌性发烧](BacteriaFever.md)加成+4<br>[晒伤](Sunburn.md)加成-2<br>[发烧](Fever.md)-100<br>[皮肤潮湿度](SkinHumidity.md)加成+16  |    
## 相关卡牌  
[体感温度](TemperaturePerceived.md)  |  [淋雨](RainExposure.md)  
## 加成值影响因素  
来源  |  操作  |  值  
----  |  ----  |  ----  
[潮汐洞(区域)](CaveTidal.md)  |  条件被动  |  加成+50  
[火炉](Stove.md)  |  被动  |  加成-1  
[烟熏炉](Smoker.md)  |  被动  |  加成-1  
[烟熏炉(塑料布)(点燃)](SmokerPlastic.md)  |  被动  |  加成-1  
[蒸馏器(开)](AlembicOn.md)  |  被动  |  加成-2  
[营火](Campfire.md)  |  被动  |  加成-2  
[粘土火盆](ClayFirePit.md)  |  被动  |  加成-2  
[火堆](Fire.md)  |  被动  |  加成-2  
[瓦斯炉(开)](GasCookerOn.md)  |  被动  |  加成-2  
## 可被以下操作改变  
来源  |  操作  |  值  
----  |  ----  |  ----  
[我游不动了……(事件)](Event_SwimFail.md)  |  游回去  |  200  
[隐秘港湾](Path_BirdRockToCove.md)  |  游泳  |  200  
[荒芜沙滩(鸟岩岛)](Path_BirdRockToDesolateBeach.md)  |  游泳  |  200  
[岩滩(鸟岩岛)](Path_BirdRockToRocks.md)  |  游泳  |  200  
[鸟岩岛(沙滩)](Path_CoveToBirdRock.md)  |  游泳  |  200  
[鸟岩岛(荒芜沙滩)](Path_DesolateBeachToBirdRock.md)  |  游泳  |  200  
[鸟岩岛](Path_RocksToBirdRock.md)  |  游泳  |  200  
[水下洞穴](UnderwaterEntrance.md)  |  进入  |  200  
[水下出口(覆溺洞穴)](UnderwaterExit.md)  |  离开  |  200  
[风太大了！(事件)](Event_Flood.md)  |  躲避一会  |  100  
[风太大了！(事件)](Event_Storm.md)  |  躲避狂风暴雨  |  100  
[潮汐池(岩滩)](TidePool.md)  |  洗个澡  |  100  
[被淹没的潮汐池(岩滩)](TidePoolFlooded.md)  |  洗个澡  |  100  
[水](LQ_Water.md)  |  洗个澡  |  100  
[盐水](LQ_WaterSalt.md)  |  洗个澡  |  100  
[有毒的水](LQ_WaterToxic.md)  |  洗个澡  |  100  
[不安全的水](LQ_WaterUnsafe.md)  |  洗个澡  |  100  
[海水(覆溺洞穴)](Sea_Cave.md)  |  潜水  |  100  
[海水(覆溺洞穴)](Sea_Cave.md)  |  洗个澡  |  100  
[海(环礁)](Sea_Atoll.md)  |  潜水  |  100  
[海(环礁)](Sea_Atoll.md)  |  洗个澡  |  100  
[海(海湾)](Sea_Bay.md)  |  潜水  |  100  
[海(海湾)](Sea_Bay.md)  |  洗个澡  |  100  
[海(沙滩)](Sea_Beach.md)  |  潜水  |  100  
[海(沙滩)](Sea_Beach.md)  |  洗个澡  |  100  
[海(沙滩)](Sea_Cove.md)  |  潜水  |  100  
[海(沙滩)](Sea_Cove.md)  |  洗个澡  |  100  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  潜水  |  100  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  洗个澡  |  100  
[海(红树林)](Sea_Mangroves.md)  |  潜水  |  100  
[海(红树林)](Sea_Mangroves.md)  |  洗个澡  |  100  
[海](Sea_Raft.md)  |  潜水  |  100  
[海](Sea_Raft.md)  |  洗个澡  |  100  
[海(鸟岩岛)](Sea_Rocks.md)  |  潜水  |  100  
[海(鸟岩岛)](Sea_Rocks.md)  |  洗个澡  |  100  
[沉船(鸟岩岛)](Shipwreck.md)  |  探索沉船  |  100  
[海(环礁)](Sea_Atoll.md)  |  叉鱼  |  60  
[海(海湾)](Sea_Bay.md)  |  叉鱼  |  60  
[海(沙滩)](Sea_Beach.md)  |  叉鱼  |  60  
[海(沙滩)](Sea_Cove.md)  |  叉鱼  |  60  
[海(荒芜沙滩)](Sea_DesolateBeach.md)  |  叉鱼  |  60  
[海(红树林)](Sea_Mangroves.md)  |  叉鱼  |  60  
[海](Sea_Raft.md)  |  叉鱼  |  60  
[海(鸟岩岛)](Sea_Rocks.md)  |  叉鱼  |  60  
[卫衣](HoodieRetromation.md)  |  条件被动  |  50  
[衬衫](ShirtFiber.md)  |  条件被动  |  50  
[T恤](T-Shirt.md)  |  条件被动  |  50  
[夏威夷衬衫](HawaiianShirt.md)  |  条件被动  |  40  
[皮裤](LeatherPants.md)  |  条件被动  |  40  
[军裤](MilitaryPants.md)  |  条件被动  |  40  
[布制裤子](PantsCloth.md)  |  条件被动  |  40  
[内裤](Underwear.md)  |  条件被动  |  40  
[防蜂服](BeeSuit.md)  |  条件被动  |  20  
[包脚布](FootWrappings.md)  |  条件被动  |  20  
[绑手带](HandWrappings.md)  |  条件被动  |  20  
[求生帽](HatSurvival.md)  |  条件被动  |  20  
[头巾](HeadWrappings.md)  |  条件被动  |  20  
[皮革手套](LeatherGloves.md)  |  条件被动  |  20  
[临时防毒面具](MaskMakeshift.md)  |  条件被动  |  20  
[短裤](Shorts.md)  |  条件被动  |  20  
[运动鞋](Sneakers.md)  |  条件被动  |  20  
[袜子](Socks.md)  |  条件被动  |  20  
[干土堆](DirtPile.md)  |  制作泥巴  |  20  
[干涸的小水塘(湿地)](Puddle.md)  |  挖泥巴  |  20  
[湿肥皂](SoapWet.md)  |  洗个澡  |  15  
[草裙](LeafSKirt.md)  |  条件被动  |  10  
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[海鸥巢](SeagullNest.md)  |  影响  |  1 ~ 100  


<script>document.title="湿度 - 卡牌生存百科 Card Survival Wiki";</script>