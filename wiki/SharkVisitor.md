# 鲨鱼  
> 一条鲨鱼好像在紧紧地跟着我。也许我该暂时远离水体。  
  
  鲨鱼  |   图片   
 ----  |  ----:   
 **可使用次数：**1<br><br>** 效果: **<br>[不适](Discomfort.md)+500  |  ![](Sprite/SharkVisitor.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[(事件)一条鲨鱼！](Event_Raft_SharkVisitor.md)  |  继续  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  消失<br>[(事件)鲨鱼死了！](Event_SharkFightSuccess.md)(+1)<br>基础权重：10<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～+150<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+50<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-125<br><br>[(事件)我拿下它了，但我受伤了。](Event_SharkFightMixedSuccess.md)(+1)<br>基础权重：20<br>- [叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重0～+150<br>- [矛战(技能)](Skill_SpearFighting.md)为0～150时权重0～+25<br>- [游泳(技能)](Skill_Swimming.md)为0～150时权重0～-25<br>- [ModifierClimb_GameName](ModifierClimb.md)为0～3时权重0～-60<br>- [腿部防护](LegProtection.md)为1～10时权重-1～-15<br><br>[(事件)它逃跑了！](Event_SharkFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -30<br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -15  |  [矛战(技能)](Skill_SpearFighting.md)+1  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
次数  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **  
离开  |  初始：1<br>最大：1  |  -  |  ** 到达0时： **<br>→ [摘光的香蕉树](BananaTreeCleared.md)  