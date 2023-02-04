# 海  
> 可以游个泳或者用合适的工具整一些鱼。  
<br>  
> 被困在岛上意味着你周围全是大海，但海里通常也有很多有用的资源。<br><br>最好在岛上的不同区域都潜水试试，因为大海的构型并非一成不变，不同场景的大海可以探寻到不同的东西。<br><br>例如，你可以在<b>多岩的海滩</b>发现更多<b>鱼</b>，在<b>红树林</b>发现更大的鱼，如<b>大马鲅鱼</b>。<br><br>鲨鱼和海蛇通常出现在<b>海湾</b>中，但在这里你也能发现<b>珊瑚和珍珠</b>。  
  
  海  |   图片   
 ----  |  ----:   
 ** 区域唯一 **<br><br>**标签：**	[“海”](tag_Sea.md)  |  <img decoding="async" src="Sprite/Ocean.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[开始冒险](Start_Raft.md)  |  把木筏推下水  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
饮用<br>  |  -  |  [肾脏](IfKidneys.md): 1-1  |    |  [水分](Hydration.md)+40<br>[钠](Sodium.md)+250  
潜水<br>[攀爬动作](ClimbAction.md)  |  30分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32  |  ** 获得： **<br>** [Shark]  **<br>  [一条鲨鱼！(事件)](Event_SharkFight.md)(+1)<br>基础权重：5<li>[鲨鱼](SharkVisitor.md)存在于*手中/面板*，权重+400(可叠加)</li><li>[“鱼杂”](tag_FishScrap.md)存在于*手中*，权重+1(可叠加)</li><li>[“鱼肉”](tag_Fish.md)存在于*手中*，权重+5(可叠加)</li><li>[“肉”](tag_Meat.md)存在于*手中*，权重+5(可叠加)</li><li>[“开放性伤口”](tag_OpenWound.md)存在于*手中/面板*，权重+10(可叠加)</li><br>** [Nothing] 游了个泳！ **<br>基础权重：100<br><br>** 相关卡牌 **<br>[“腿部（内层）”](tag_Clothing.md)燃料  +12  |  [湿度](Wetness.md)+100 (每15分钟)<br>[耐力](Stamina.md)-10<br>[情绪](Morale.md)+4<br>[压力](Stress.md)-48<br>[娱乐](Entertainment.md)+16<br>[污垢](Filth.md)-75<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[游泳(技能)](Skill_Swimming.md)+1  
洗个澡<br>[手部动作](HandAction.md)  |  15分  |    |  ** 获得： **<br>** [Nothing]  **<br>基础权重：9<br>** [Shark]  **<br>  [一条鲨鱼！(事件)](Event_SharkFight.md)(+1)<br>基础权重：0<li>[鲨鱼](SharkVisitor.md)存在于*手中/面板*，权重+1(可叠加)</li><br><br>** 相关卡牌 **<br>[“腿部（内层）”](tag_Clothing.md)燃料  +12<br>** 相关卡牌 **<br>[眼镜蛇毒液](W_CobraSpit.md)燃料  -75  |  [湿度](Wetness.md)+100 (每15分钟)<br>[情绪](Morale.md)+1<br>[污垢](Filth.md)-150<br>[泥巴防护](MudProtection.md)-50<br>[芦荟膏防护](AloeVeraGelProtection.md)-50<br>[驱虫](BugRepellentApplied.md)-50<br>[阳光防护](SunProtection.md)-50  
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼镖](HarpoonBone.md)  |  叉鱼<br>[手部动作](HandAction.md)  |  30分  |  [光亮](Light.md): 10-100  |  <br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Nothing] 运气不佳…… **<br>基础权重：25<li>[叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重限定为+0～-19</li><li>[鱼叉](SpearFishing.md)存在于*手中/面板*，权重-5</li><br>** [Goat Fish]  **<br>  [绯鲤](Goatfish.md)(+1)<br>基础权重：5<br>** [Bonefish]  **<br>  [北梭鱼](Bonefish.md)(+1)<br>基础权重：1<li>[叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重+0～+3</li><br>** [Shark]  **<br>  [一条鲨鱼！(事件)](Event_SharkFight.md)(+1)<br>基础权重：1  |  [湿度](Wetness.md)+60<br>[叉鱼(技能)](Skill_SpearFishing.md)+0.5<br>[情绪](Morale.md)+1  
[“钓鱼线”](tag_FishingLine.md)  |  钓鱼<br>  |  1小时  |    |  <br>** 使用物: **<br>可用次数  -1<br><br>** 获得: **<br>** [Nothing] 运气不佳…… **<br>基础权重：30<li>[钓鱼(技能)](Skill_Fishing.md)为0～150时权重+0～-15</li><li>[钓鱼竿](FishingRod.md)存在于*手中*，权重-5(可叠加)</li><br>** [Parrot Fish]  **<br>  [鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：4<br>** [Goat Fish]  **<br>  [绯鲤](Goatfish.md)(+1)<br>基础权重：4<br>** [Bonefish]  **<br>  [北梭鱼](Bonefish.md)(+1)<br>基础权重：4  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[“诱饵（用于钓鱼线）”](tag_FishingLineBait.md)  |  钓鱼<br>  |  1小时  |    |  <br>** 使用物: **<br>可用次数  -1<br>燃料  -1<br><br>** 获得: **<br>** [Nothing] 运气不佳…… **<br>基础权重：15<li>[钓鱼(技能)](Skill_Fishing.md)为0～150时权重+0～-10</li><li>[钓鱼竿（已添加诱饵）](FishingRodBait.md)存在于*手中*，权重-4(可叠加)</li><br>** [Parrot Fish]  **<br>  [鹦哥鱼](ParrotFish.md)(+1)<br>基础权重：10<br>** [Goat Fish]  **<br>  [绯鲤](Goatfish.md)(+1)<br>基础权重：10<br>** [Bonefish]  **<br>  [北梭鱼](Bonefish.md)(+1)<br>基础权重：8  |  [情绪](Morale.md)+1<br>[钓鱼(技能)](Skill_Fishing.md)+1<br>[压力](Stress.md)-50  
[炸药(开)](DynamiteOn.md)  |  轰隆！<br>  |  30分  |    |  ** 自身: **<br>洋流冲刷  +500(50%)<br><br>** 使用物: **<br>→消失<br><br>** 获得: **<br>** [Debris]  **<br>  [绯鲤](Goatfish.md)(+8～+16)<br>  [北梭鱼](Bonefish.md)(+6～+12)<br>  |    
## 可拖至  
[肥皂](SoapDry.md) | [湿肥皂](SoapWet.md)  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
洋流冲刷  |  初始：0<br>最大：1000  |  每15分钟-10<br>最多需要：1天1小时  |    


<script>document.title="海 - 卡牌生存百科 Card Survival Wiki";</script>