# 海  
> 可以游个泳或者用合适的工具整一些鱼。  
<br>  
> 被困在岛上意味着你周围全是大海，但海里通常也有很多有用的资源。<br><br>最好在岛上的不同区域都潜水试试，因为大海的构型并非一成不变，不同场景的大海可以探寻到不同的东西。<br><br>例如，你可以在<b>多岩的海滩</b>发现更多<b>鱼</b>，在<b>红树林</b>发现更大的鱼，如<b>大马鲅鱼</b>。<br><br>鲨鱼和海蛇通常出现在<b>海湾</b>中，但在这里你也能发现<b>珊瑚和珍珠</b>。  
  
  海  |   图片   
 ----  |  ----:   
 **环境：**[沙滩(环境)](Env_Beach.md)<br><br>**标签：**	[“浅水域”](tag_ShallowWater.md), [“海”](tag_Sea.md)<br><br>** 区域唯一 **  |  <img decoding="async" src="Sprite/Sea.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
饮用<br>  |  -  |  [肾脏](IfKidneys.md): 1-1  |  耐久  -250  |  [水分](Hydration.md)+40<br>[钠](Sodium.md)+250  
潜水<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** Conch **<br>  [海螺](Conch.md)(+1)<br>基础权重：0<br>- [海螺种群数量](Pop_Conch.md)为1000～30000时权重+1～+60<br><br>** Urchin **<br>  [海胆](Urchin.md)(+1)<br>基础权重：0<br>- [海胆种群数量](Pop_Urchin.md)为1000～6000时权重+1～+10<br><br>** Stone **<br>  [石头](Stone.md)(+1)<br>基础权重：30<br><br>** Nothing **<br>基础权重：225<br>- [游泳(技能)](Skill_Swimming.md)为0～150时权重0～-200<br><br>** 相关卡牌 **<br>[“腿部（内层）”](tag_Clothing.md)燃料 + 12  |  [湿度](Wetness.md)+100<br>[耐力](Stamina.md)-10<br>[情绪](Morale.md)+4<br>[压力](Stress.md)-48<br>[娱乐](Entertainment.md)+16<br>[污垢](Filth.md)-75<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[游泳(技能)](Skill_Swimming.md)+1  
洗个澡<br>[手部动作](HandAction.md)  |  15分  |    |  ** 相关卡牌 **<br>[“腿部（内层）”](tag_Clothing.md)燃料 + 12<br>** 相关卡牌 **<br>[眼镜蛇毒液](W_CobraSpit.md)燃料  -75  |  [湿度](Wetness.md)+100<br>[情绪](Morale.md)+1<br>[污垢](Filth.md)-150<br>[泥巴防护](MudProtection.md)-50<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[驱虫](BugRepellentApplied.md)-50<br>[阳光防护](SunProtection.md)-50  
回归大海<br>  |  -  |  [美人鱼最终行动](MermaidFinalAction.md): 2-2  |    |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“一级矛”](tag_Spear.md)  |  叉鱼  |  30分  |  [光亮](Light.md): 10-100  |  ** 使用物: **<br>可用次数  -1<br>** 获得: **<br>** Nothing **<br>基础权重：25<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～-20<br>- [鱼叉](SpearFishing.md)权重-5<br><br>** Goatfish **<br>  [绯鲤](Goatfish.md)(+1)<br>基础权重：4<br><br>** Parrot Fish **<br>  [鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：4<br>  |  [湿度](Wetness.md)+60<br>[叉鱼(技能)](Skill_SpearFishing.md)+0.5<br>[情绪](Morale.md)+1  
[“钓鱼线”](tag_FishingLine.md)  |  钓鱼  |  1小时  |    |  ** 使用物: **<br>可用次数  -1<br>** 获得: **<br>** Nothing **<br>基础权重：30<br>- [钓鱼(技能)](Skill_Fishing.md)为0～150时权重0～-15<br>- [钓鱼竿](FishingRod.md)在手中权重-5<br><br>** Parrot Fish **<br>  [鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：3<br><br>** Goat Fish **<br>  [绯鲤](Goatfish.md)(+1)<br>基础权重：3<br>  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[“诱饵（用于钓鱼线）”](tag_FishingLineBait.md)  |  钓鱼  |  1小时  |    |  ** 使用物: **<br>可用次数  -1<br>燃料  -1<br>** 获得: **<br>** Nothing **<br>基础权重：15<br>- [钓鱼(技能)](Skill_Fishing.md)为0～150时权重0～-10<br>- [钓鱼竿（已添加诱饵）](FishingRodBait.md)在手中权重-4<br><br>** Parrot Fish **<br>  [鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：10<br><br>** Goat Fish **<br>  [绯鲤](Goatfish.md)(+1)<br>基础权重：10<br>  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[捕鱼陷阱](FishTrap.md)  |  放置  |  15分  |  [光亮](Light.md): 10-100  |  ** 使用物: **<br>→ [捕鱼陷阱](FishTrapDeployed.md)  |    
[炸药(开)](DynamiteOn.md)  |  轰隆！  |  30分  |    |  ** 使用物: **<br>消失<br>** 获得: **<br>** Debris **<br>  [绯鲤](Goatfish.md)(+8～+16)<br>  [鹦哥鱼](ParrotFish.md)(+8～+16)<br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
洋流冲刷  |  初始：0<br>最大：1000  |  每15分钟-0.5<br>最多需要：20天20小时  |    
