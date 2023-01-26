# 海  
> 可以游个泳或者用合适的工具整一些鱼。  
  
  海  |   图片   
 ----  |  ----:   
 **环境：**[红树林(环境)](Env_Mangroves.md)<br><br>**标签：**	[“浅水域”](tag_ShallowWater.md), [“海”](tag_Sea.md)<br><br>** 区域唯一 **  |  ![](Sprite/Sea.png)   
  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
饮用<br>  |  -  |  [肾脏](IfKidneys.md): 1-1  |  耐久  -250  |  [水分](Hydration.md)+40<br>[钠](Sodium.md)+250  
潜水<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  [石头](Stone.md)(+1)<br>基础权重：30<br><br>[(事件)一条海蛇！](Event_SeaKraitSwim.md)(+1)<br>基础权重：10<br><br>[螃蟹](Crab.md)(+1)<br>基础权重：75<br>- [螃蟹种群数量](Pop_Crab.md)为1000～30000时权重+1～+50<br><br>[海藻](Seaweed.md)(+2～+3)<br>基础权重：50<br><br>基础权重：225<br>- [游泳(技能)](Skill_Swimming.md)为0～150时权重0～-200<br><br>** 相关卡牌 **<br>[“腿部（内层）”](tag_Clothing.md)燃料 + 12  |  [湿度](Wetness.md)+100<br>[耐力](Stamina.md)-10<br>[情绪](Morale.md)+4<br>[压力](Stress.md)-48<br>[娱乐](Entertainment.md)+16<br>[污垢](Filth.md)-75<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[游泳(技能)](Skill_Swimming.md)+1  
洗个澡<br>[手部动作](HandAction.md)  |  15分  |    |  ** 相关卡牌 **<br>[“腿部（内层）”](tag_Clothing.md)燃料 + 12<br>** 相关卡牌 **<br>[眼镜蛇毒液](W_CobraSpit.md)燃料  -75  |  [湿度](Wetness.md)+100<br>[情绪](Morale.md)+1<br>[污垢](Filth.md)-150<br>[泥巴防护](MudProtection.md)-50<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[驱虫](BugRepellentApplied.md)-50<br>[阳光防护](SunProtection.md)-50  
回归大海<br>  |  -  |  [美人鱼最终行动](MermaidFinalAction.md): 2-2  |    |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[“一级矛”](tag_Spear.md)  |  叉鱼  |  30分  |  [光亮](Light.md): 10-100  |  ** 使用物: **<br>可用次数  -1<br>** 获得: **<br>基础权重：25<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～-19<br><br>[弹涂鱼](Mudskipper.md)(+1)<br>基础权重：6<br><br>[鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：4<br><br>[绯鲤](Goatfish.md)(+1)<br>基础权重：5<br><br>[大马鲅鱼](KingThreadfin.md)(+1)<br>基础权重：1<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～+3<br><br>[海蛇尸体](SeaKraitDead.md)(+1)<br>基础权重：2<br><br>[(事件)一条海蛇！](Event_SeaKraitStep.md)(+1)<br>基础权重：1<br>  |  [湿度](Wetness.md)+60<br>[叉鱼(技能)](Skill_SpearFishing.md)+0.5<br>[情绪](Morale.md)+1  
[“钓鱼线”](tag_FishingLine.md)  |  钓鱼  |  1小时  |    |  ** 使用物: **<br>可用次数  -1<br>** 获得: **<br>基础权重：25<br>- [钓鱼(技能)](Skill_Fishing.md)为0～150时权重0～-15<br><br>[弹涂鱼](Mudskipper.md)(+1)<br>基础权重：5<br><br>[鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：4<br><br>[绯鲤](Goatfish.md)(+1)<br>基础权重：4<br><br>[北梭鱼](Bonefish.md)(+1)<br>基础权重：4<br><br>[大马鲅鱼](KingThreadfin.md)(+1)<br>基础权重：3<br>  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[“诱饵（用于钓鱼线）”](tag_FishingLineBait.md)  |  钓鱼  |  1小时  |    |  ** 使用物: **<br>可用次数  -1<br>燃料  -1<br>** 获得: **<br>基础权重：15<br>- [钓鱼(技能)](Skill_Fishing.md)为0～150时权重0～-10<br><br>[弹涂鱼](Mudskipper.md)(+1)<br>基础权重：6<br><br>[鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：10<br><br>[绯鲤](Goatfish.md)(+1)<br>基础权重：10<br><br>[北梭鱼](Bonefish.md)(+1)<br>基础权重：8<br><br>[大马鲅鱼](KingThreadfin.md)(+1)<br>基础权重：6<br>  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[炸药(开)](DynamiteOn.md)  |  轰隆！  |  30分  |    |  ** 使用物: **<br>消失<br>** 获得: **<br>[绯鲤](Goatfish.md)(+8～+16)<br>[鹦哥鱼](ParrotFish.md)(+8～+16)<br>[弹涂鱼](Mudskipper.md)(+8～+16)<br>[大马鲅鱼](KingThreadfin.md)(+1～+6)<br>  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
洋流冲刷  |  初始：0<br>最大：1000  |  每15分钟-0.5<br>最多需要：20天20小时  |    