# 鲨鱼  
> 一条鲨鱼好像在紧紧地跟着我。也许我该暂时远离水体。  
<br>  
> 如果你够倒霉的话，这种大鱼可能会袭击你。它只会出现在海湾和木筏航行中。<br>比起普通的鱼类，它的肉更有营养，也同样可以被熏制。此外，它的颌骨也是不错的装饰品。  
  
  鲨鱼  |   图片   
 ----  |  ----:   
 **可使用次数：**1<br><br>** 效果: **<br>[不适](Discomfort.md)+500  |  <img decoding="async" src="Sprite/SharkVisitor.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[一条鲨鱼！(事件)](Event_Raft_SharkVisitor.md)  |  继续  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
用长矛攻击！<br>  |  30分  |  [“一级矛”](tag_Spear.md)  |  ** 自身：**<br>→消失<br><br>** 获得： **<br>** [Success] **<br>  [鲨鱼死了！(事件)](Event_SharkFightSuccess.md)(+1)<br>基础权重：10<li>[叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重+0～+150</li><li>[矛战(技能)](Skill_SpearFighting.md)为0～150时权重+0～+50</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-125</li><li>[燧石长矛](SpearFlint.md)存在于*手中*，权重+5</li><li>[铜长矛](SpearCopper.md)存在于*手中*，权重+10</li><li>[黑曜石长矛](SpearObsidian.md)存在于*手中*，权重+13</li><li>[鱼镖](HarpoonBone.md)存在于*手中*，权重+25</li><br>** [Minor Success] **<br>  [我拿下它了，但我受伤了。(事件)](Event_SharkFightMixedSuccess.md)(+1)<br>基础权重：20<li>[叉鱼(技能)](Skill_SpearFishing.md)为0～150时权重+0～+150</li><li>[矛战(技能)](Skill_SpearFighting.md)为0～150时权重+0～+25</li><li>[游泳(技能)](Skill_Swimming.md)为0～150时权重+0～-25</li><li>[攀爬动作受限](ModifierClimb.md)为0～3时权重+0～-60</li><li>[腿部防护](LegProtection.md)为1～10时权重-1～-15</li><li>[燧石长矛](SpearFlint.md)存在于*手中*，权重+5</li><li>[铜长矛](SpearCopper.md)存在于*手中*，权重+10</li><li>[黑曜石长矛](SpearObsidian.md)存在于*手中*，权重+13</li><li>[鱼镖](HarpoonBone.md)存在于*手中*，权重+25</li><br>** [Failure] **<br>  [它逃跑了！(事件)](Event_SharkFightFailure.md)(+1)<br>基础权重：30<br><br>** 相关卡牌 **<br>[“一级矛”](tag_Spear.md)可用次数  -30<br>** 相关卡牌 **<br>[盾牌](Shield.md)可用次数  -15  |  [矛战(技能)](Skill_SpearFighting.md)+1  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
次数  |  初始：96<br>最大：96  |  每15分钟-1<br>最多需要：1天  |  ** 到达0时： **<br>** [stays] **<br>基础权重：50<br>** [leaves] **<br>基础权重：50  
离开  |  初始：1<br>最大：1  |  -  |  ** 到达0时： **<br><br>自身→消失  


<script>document.title="鲨鱼 - 卡牌生存百科 Card Survival Wiki";</script>