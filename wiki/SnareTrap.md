# 套索陷阱  
> 我应该在里面放上诱饵，过段时间再来看看。（更换诱饵会重置陷阱）  
<br>  
> 一个有用的陷阱，可以建立在有树的地区，并能够捕获活的<b>灰山鹑</b>。<br><br>它还可以捕捉小动物，如<b>老鼠，蜥蜴，螃蟹和海鸥</b>。<br><br>这些陷阱需要<b>诱饵</b>才能工作，并且必须在每次触发后<b>重置</b>。<br>除非真的有必要，否则尽量不要更换诱饵，这样做会重置陷阱的计时器。  
  
  套索陷阱  |   图片   
 ----  |  ----:   
 ** 不可删除 **<br><br>** 不可堆叠 **<br><br>**槽位：**1<br><br>**过滤器：**[“诱饵”](tag_Bait.md) , [“喂/添加”](tag_Feed.md)  |  <img decoding="async" src="Sprite/SnareTrap.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[套索陷阱](SnareTrapTriggered.md)  |  重置陷阱  
[套索陷阱(蓝图)](Bp_SnareTrap.md)  |  蓝图制造  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
拆除陷阱<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  消失<br><br>** 获得： **<br>** [Materials] **<br>  [小树枝](Sticks.md)(+2)<br>  [细线](CordFiber.md)(+2)<br>基础权重：1<br>  |    
## 转化  
放入  |  动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“诱饵”](tag_Bait.md)<br>[“喂/添加”](tag_Feed.md)  |  捕捉猎物  |  18小时45分  |    |  ** [Fail] **<br>基础权重：100<br>- [陷阱(技能)](Skill_Trapping.md)为0～150时权重0～-75<br>- [陷阱栅栏](Imp_TrappingFences.md)权重-20<br><br>** [Crab] **<br>  [螃蟹](Crab.md)(+1)<br>[螃蟹种群数量](Pop_Crab.md)-1000<br>基础权重：0<br>- [沙滩(环境)](Env_Beach.md)权重0<br>- [海湾(环境)](Env_Bay.md)权重0<br>- [荒芜沙滩(环境)](Env_DesolateBeach.md)权重0<br><br>** [Seagull] **<br>  [海鸥尸体](SeagullDead.md)(+1)<br>[海鸥种群数量](Pop_Seagull.md)-1000<br>[海鸥之惧](SeagullFear.md)+100<br>基础权重：0<br>- [沙滩(环境)](Env_Beach.md)权重0<br><br>** [Lizard] **<br>  [蜥蜴](Lizard.md)(+1)<br>[蜥蜴种群数量](Pop_Lizard.md)-1000<br>基础权重：0<br>- [丛林边缘(环境)](Env_Outskirts.md)权重0<br>- [西部高地(环境)](Env_HighlandsWestern.md)权重0<br>- [东部高地(环境)](Env_HighlandsEastern.md)权重0<br>- [西部草原(环境)](Env_GrasslandsW.md)权重0<br>- [东部草原(环境)](Env_GrasslandsE.md)权重0<br>- [荒芜沙滩(环境)](Env_DesolateBeach.md)权重0<br>- [沙滩(环境)](Env_Beach.md)权重0<br>- [丛林(环境)](Env_Jungle.md)权重0<br><br>** [Mouse] **<br>  [老鼠尸体](Mouse.md)(+1)<br>[老鼠种群数量](Pop_Mouse.md)-1000<br>[老鼠种群数量](Pop_Mouse.md)-1000<br>基础权重：0<br>- [丛林边缘(环境)](Env_Outskirts.md)权重0<br>- [西部高地(环境)](Env_HighlandsWestern.md)权重0<br>- [东部高地(环境)](Env_HighlandsEastern.md)权重0<br>- [丛林高地(环境)](Env_JungleHighlands.md)权重0<br>- [神秘谷(环境)](Env_SecretValley.md)权重0<br>- [西部草原(环境)](Env_GrasslandsW.md)权重0<br>- [东部草原(环境)](Env_GrasslandsE.md)权重0<br>- [丛林(环境)](Env_Jungle.md)权重0<br>- [丛林深处(环境)](Env_DeepJungle.md)权重0<br>- [湿地(环境)](Env_Wetlands.md)权重0<br>- [红树林(环境)](Env_Mangroves.md)权重0<br><br>** [Partridge] **<br>  [雌灰山鹑](PartridgeFemaleLive.md)(+1)<br>[灰山鹑种群数量](Pop_Partridge.md)-1000<br>基础权重：0<br>- [丛林(环境)](Env_Jungle.md)权重0<br>- [丛林高地(环境)](Env_JungleHighlands.md)权重0<br>- [丛林深处(环境)](Env_DeepJungle.md)权重0<br>- [湿地(环境)](Env_Wetlands.md)权重0<br>- [西部高地(环境)](Env_HighlandsWestern.md)权重0<br>- [西部草原(环境)](Env_GrasslandsW.md)权重0<br>- [东部草原(环境)](Env_GrasslandsE.md)权重0<br>- [神秘谷(环境)](Env_SecretValley.md)权重0<br><br>** [Partridge Male] **<br>  [雄灰山鹑](PartridgeMaleLive.md)(+1)<br>[灰山鹑种群数量](Pop_Partridge.md)-1000<br>基础权重：0<br>- [丛林(环境)](Env_Jungle.md)权重0<br>- [丛林高地(环境)](Env_JungleHighlands.md)权重0<br>- [丛林深处(环境)](Env_DeepJungle.md)权重0<br>- [湿地(环境)](Env_Wetlands.md)权重0<br>- [西部高地(环境)](Env_HighlandsWestern.md)权重0<br>- [西部草原(环境)](Env_GrasslandsW.md)权重0<br>- [东部草原(环境)](Env_GrasslandsE.md)权重0<br>- [神秘谷(环境)](Env_SecretValley.md)权重0<br><br><br>→ [套索陷阱](SnareTrapTriggered.md)  |  [陷阱(技能)](Skill_Trapping.md)+0.5  
