# 诱捕笼  
> 我应该在里面放上诱饵，过段时间再来看看。（更换诱饵会重置陷阱）  
<br>  
> 一种先进的，需要<b>长木棍和细线</b>来建造的陷阱。<br><br>可以随身携带并且非常适合用来活捉 <b>猕猴和灰山鹑</b>。<br><br>这些陷阱需要<b>诱饵</b>才能用，并且每次触发后必须<b>重置</b>。<br>除非真的有必要，否则不要更换诱饵，不然会重置陷阱的计时器。  
  
  诱捕笼  |   图片   
 ----  |  ----:   
 ** 不可删除 **<br><br>** 不可堆叠 **<br><br>**标签：**	[“大的”](tag_Large.md)<br><br>**槽位：**1<br><br>**过滤器：**[“诱饵”](tag_Bait.md) , [“饲料”](tag_Feed.md)  |  <img decoding="async" src="Sprite/CagePlacedTrap.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[诱捕笼](CageTrap.md)  |  放置  
[解除陷阱](CageTrapPlacedTriggered.md)  |  重置陷阱  
[解除陷阱(雌灰山鹑)](CageTrapPlacedTriggeredPartridgeFemale.md)  |  重置陷阱  
[解除陷阱(雄灰山鹑)](CageTrapPlacedTriggeredPartridgeMale.md)  |  重置陷阱  
[解除陷阱(海鸥)](CageTrapPlacedTriggeredSeagull.md)  |  重置陷阱  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
捡起<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身：**<br>→ [诱捕笼](CageTrap.md)  |    
## 转化  
放入  |  动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)<br>[“饲料”](tag_Feed.md)  |  捕捉猎物  |  18小时45分 ～ 1天13小时30分  |    |    +1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
诱捕笼  |  初始：0<br>最大：1  |  -  |  ** 到达上限时：陷阱触发了！ **<br>** [Fail]  **<br>  [解除陷阱](CageTrapPlacedTriggered.md)(+1)<br>基础权重：100<li>[陷阱(技能)](Skill_Trapping.md)为0～150时权重+0～-75</li><li>[陷阱栅栏](Imp_TrappingFences.md)存在于*手中/面板*，权重-20(可叠加)</li><br>** [Seagull]  **<br>  [解除陷阱(海鸥)](CageTrapPlacedTriggeredSeagull.md)(+1)<br>[海鸥种群数量](Pop_Seagull.md)-1000<br>[海鸥之惧](SeagullFear.md)+100<br>基础权重：0<li>[沙滩(环境)](Env_Beach.md)存在于*手中/面板*，[海鸥种群数量](Pop_Seagull.md)为1000～4500时权重限定为+0～+10</li><br>** [Partridge Female]  **<br>  [解除陷阱(雌灰山鹑)](CageTrapPlacedTriggeredPartridgeFemale.md)(+1)<br>[灰山鹑种群数量](Pop_Partridge.md)-1000<br>基础权重：0<li>[丛林(环境)](Env_Jungle.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+22</li><li>[丛林高地(环境)](Env_JungleHighlands.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+22</li><li>[丛林深处(环境)](Env_DeepJungle.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+22</li><li>[湿地(环境)](Env_Wetlands.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+22</li><li>[西部高地(环境)](Env_HighlandsWestern.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+22</li><li>[西部草原(环境)](Env_GrasslandsW.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+22[巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重限定为+0～-30</li><li>[东部草原(环境)](Env_GrasslandsE.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+22[巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重限定为+0～-30</li><li>[神秘谷(环境)](Env_SecretValley.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+4</li><br>** [Partridge Male]  **<br>  [解除陷阱(雄灰山鹑)](CageTrapPlacedTriggeredPartridgeMale.md)(+1)<br>[灰山鹑种群数量](Pop_Partridge.md)-1000<br>基础权重：0<li>[丛林(环境)](Env_Jungle.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+8</li><li>[丛林高地(环境)](Env_JungleHighlands.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+8</li><li>[丛林深处(环境)](Env_DeepJungle.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+8</li><li>[湿地(环境)](Env_Wetlands.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+8</li><li>[西部高地(环境)](Env_HighlandsWestern.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+8</li><li>[西部草原(环境)](Env_GrasslandsW.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+8[巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重限定为+0～-30</li><li>[东部草原(环境)](Env_GrasslandsE.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+8[巨蜥种群数量](Pop_Monitor.md)为1000～14000时权重限定为+0～-30</li><li>[神秘谷(环境)](Env_SecretValley.md)存在于*手中/面板*，[灰山鹑种群数量](Pop_Partridge.md)为1000～40000时权重限定为+0～+4</li><br>** [Macaque]  **<br>  [中陷阱的猕猴](CageTrapMacaque.md)(+1)<br>[猕猴种群数量](Pop_Macaque.md)-1000<br>基础权重：0<li>[丛林(环境)](Env_Jungle.md)存在于*手中/面板*，[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重限定为+0～+22</li><li>[丛林高地(环境)](Env_JungleHighlands.md)存在于*手中/面板*，[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重限定为+0～+22</li><li>[丛林深处(环境)](Env_DeepJungle.md)存在于*手中/面板*，[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重限定为+0～+22</li><li>[湿地(环境)](Env_Wetlands.md)存在于*手中/面板*，[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重限定为+0～+22</li><li>[西部高地(环境)](Env_HighlandsWestern.md)存在于*手中/面板*，[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重限定为+0～+22</li><li>[海湾(环境)](Env_Bay.md)存在于*手中/面板*，[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重限定为+0～+22</li><li>[神秘谷(环境)](Env_SecretValley.md)存在于*手中/面板*，[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重限定为+0～+4</li><br>** 自身 **<br>→消失  


<script>document.title="诱捕笼 - 卡牌生存百科 Card Survival Wiki";</script>