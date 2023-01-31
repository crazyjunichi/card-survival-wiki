# 季节  
#### ** 基础值: ** 0   
#### ** 变化范围: ** 0 ~ 8641  
#### ** 基础变化率: ** +1 / 每15分钟  
## 阶段  
范围  |  名称  |  描述  |  影响状态  |  影响动作  
----  |  ----  |  ----  |  ----  |  ----  
288 ～ 576  |  温和季  |    |  [雨水计数器](RainCounter.md)加成+1  |    
2881 ～ 5760  |  湿润季  |    |  [体感温度](TemperaturePerceived.md)-5<br>[雨水计数器](RainCounter.md)加成+5  |    
5761 ～ 8640  |  干旱季  |    |  [体感温度](TemperaturePerceived.md)+5<br>[雨水计数器](RainCounter.md)加成-1  |    
8641 ～ 8641  |  季节重启  |    |  [季节](Seasons.md)-8641  |    
## 被以下操作需求  
来源  |  操作  |  值  
----  |  ----  |  ----  
[晴朗](TropicalIsland_Clear.md)  |  影响  |  5761 ~ 8640  
[阴天](TropicalIsland_Cloudy.md)  |  影响  |  5761 ~ 8640  
[大雨](TropicalIsland_HeavyRain.md)  |  影响  |  5761 ~ 8640  
[小雨](TropicalIsland_LightRain.md)  |  影响  |  5761 ~ 8640  
[多云](TropicalIsland_PartiallyCloudy.md)  |  影响  |  5761 ~ 8640  
[暴风雨](TropicalIsland_Storm.md)  |  影响  |  5761 ~ 8640  
[晴朗](TropicalIsland_Clear.md)  |  影响  |  2881 ~ 5760  
[阴天](TropicalIsland_Cloudy.md)  |  影响  |  2881 ~ 5760  
[大雨](TropicalIsland_HeavyRain.md)  |  影响  |  2881 ~ 5760  
[小雨](TropicalIsland_LightRain.md)  |  影响  |  2881 ~ 5760  
[多云](TropicalIsland_PartiallyCloudy.md)  |  影响  |  2881 ~ 5760  
[暴风雨](TropicalIsland_Storm.md)  |  影响  |  2881 ~ 5760  


<script>document.title="季节 - 卡牌生存百科 Card Survival Wiki";</script>