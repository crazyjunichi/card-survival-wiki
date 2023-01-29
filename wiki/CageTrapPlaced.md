# 诱捕笼  
> 我应该在里面放上诱饵，过段时间再来看看。（更换诱饵会重置陷阱）  
<br>  
> 一种先进的，需要<b>长木棍和细线</b>来建造的陷阱。<br><br>可以随身携带并且非常适合用来活捉 <b>猕猴和灰山鹑</b>。<br><br>这些陷阱需要<b>诱饵</b>才能用，并且每次触发后必须<b>重置</b>。<br>除非真的有必要，否则不要更换诱饵，不然会重置陷阱的计时器。  
  
  诱捕笼  |   图片   
 ----  |  ----:   
 ** 不可删除 **<br><br>** 不可堆叠 **<br><br>**标签：**	[“大的”](tag_Large.md)<br><br>**槽位：**1<br><br>**过滤器：**[“诱饵”](tag_Bait.md) , [“喂/添加”](tag_Feed.md)  |  <img decoding="async" src="Sprite/CagePlacedTrap.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
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
捡起<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  → [诱捕笼](CageTrap.md)  |    
## 转化  
放入  |  动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)<br>[“喂/添加”](tag_Feed.md)  |  捕捉猎物  |  18小时45分  |    |    |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
诱捕笼  |  初始：0<br>最大：1  |  -  |  ** 到达上限时：陷阱触发了！ **<br>** [Fail] **<br>  [解除陷阱](CageTrapPlacedTriggered.md)(+1)<br>基础权重：100<br>- [陷阱(技能)](Skill_Trapping.md)为0～150时权重0～-75<br>- [陷阱栅栏](Imp_TrappingFences.md)权重-20<br><br>** [Seagull] **<br>  [解除陷阱(海鸥)](CageTrapPlacedTriggeredSeagull.md)(+1)<br>[海鸥种群数量](Pop_Seagull.md)-1000<br>[海鸥之惧](SeagullFear.md)+100<br>基础权重：0<br>- [沙滩(环境)](Env_Beach.md)权重0<br><br>** [Partridge Female] **<br>  [解除陷阱(雌灰山鹑)](CageTrapPlacedTriggeredPartridgeFemale.md)(+1)<br>[灰山鹑种群数量](Pop_Partridge.md)-1000<br>基础权重：0<br>- [丛林(环境)](Env_Jungle.md)权重0<br>- [丛林高地(环境)](Env_JungleHighlands.md)权重0<br>- [丛林深处(环境)](Env_DeepJungle.md)权重0<br>- [湿地(环境)](Env_Wetlands.md)权重0<br>- [西部高地(环境)](Env_HighlandsWestern.md)权重0<br>- [西部草原(环境)](Env_GrasslandsW.md)权重0<br>- [东部草原(环境)](Env_GrasslandsE.md)权重0<br>- [神秘谷(环境)](Env_SecretValley.md)权重0<br><br>** [Partridge Male] **<br>  [解除陷阱(雄灰山鹑)](CageTrapPlacedTriggeredPartridgeMale.md)(+1)<br>[灰山鹑种群数量](Pop_Partridge.md)-1000<br>基础权重：0<br>- [丛林(环境)](Env_Jungle.md)权重0<br>- [丛林高地(环境)](Env_JungleHighlands.md)权重0<br>- [丛林深处(环境)](Env_DeepJungle.md)权重0<br>- [湿地(环境)](Env_Wetlands.md)权重0<br>- [西部高地(环境)](Env_HighlandsWestern.md)权重0<br>- [西部草原(环境)](Env_GrasslandsW.md)权重0<br>- [东部草原(环境)](Env_GrasslandsE.md)权重0<br>- [神秘谷(环境)](Env_SecretValley.md)权重0<br><br>** [Macaque] **<br>  [中陷阱的猕猴](CageTrapMacaque.md)(+1)<br>[猕猴种群数量](Pop_Macaque.md)-1000<br>基础权重：0<br>- [丛林(环境)](Env_Jungle.md)权重0<br>- [丛林高地(环境)](Env_JungleHighlands.md)权重0<br>- [丛林深处(环境)](Env_DeepJungle.md)权重0<br>- [湿地(环境)](Env_Wetlands.md)权重0<br>- [西部高地(环境)](Env_HighlandsWestern.md)权重0<br>- [海湾(环境)](Env_Bay.md)权重0<br>- [神秘谷(环境)](Env_SecretValley.md)权重0<br><br>→ [中陷阱的猕猴](CageTrapMacaque.md)  
