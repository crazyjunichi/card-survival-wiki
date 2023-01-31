# 沉船  
>   
<br>  
>   
  
  沉船  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**环境：**[鸟岩岛(环境)](Env_BirdRock.md)  |  <img decoding="async" src="Sprite/Shipwreck.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[沉船(事件)](Event_ShipwreckFound.md)  |  继续  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
探索沉船<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[攀爬动作受限](ModifierClimb.md): 0-2  |  ** 获得： **<br>** [Nothing] **<br>基础权重：50<br>** [Crab] **<br>  [螃蟹](Crab.md)(+1～+2)<br>[螃蟹种群数量](Pop_Crab.md)-1000<br>基础权重：0<li>[螃蟹种群数量](Pop_Crab.md)为1000～60000时权重+1～+100</li><br>** [Jerrycan] **<br>  [装有燃料的油桶](JerrycanFuel.md)(+1)<br>基础权重：100<br>** [ Rope] **<br>  [绳子](Rope.md)(+2)<br>基础权重：100<br>** [Scrap] **<br>  [金属废料](MetalScrap.md)(+1)<br>基础权重：100<br>** [Plastic Sheet] **<br>  [塑料布](PlasticSheet.md)(+1)<br>基础权重：100<br>** [Laceration] **<br>  [啊！(事件)](Event_DiveLaceration.md)(+1)<br>基础权重：100<li>[游泳(技能)](Skill_Swimming.md)为0～100时权重0～-100</li><li>[氧气面罩](Oxygen.md)存在于*手中*，权重-100</li>  |  [湿度](Wetness.md)+100<br>[耐力](Stamina.md)-4<br>[情绪](Morale.md)+2<br>[污垢](Filth.md)-75<br>[游泳(技能)](Skill_Swimming.md)+1  


<script>document.title="沉船 - 卡牌生存百科 Card Survival Wiki";</script>