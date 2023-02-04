# 受伤的猕猴  
> 一只活的猕猴。让它摆脱痛苦，还是恢复健康，一切都取决于你。  
<br>  
> 猕猴出没于岛上森林茂密的地区。当它们觉得你好欺负的时候，就会经常<b>偷</b>你的东西。即使它们战斗力不强，未及时处理的猕猴<b>咬伤</b>也很容易引发感染。<br><br>你可以试着猎杀它们，猕猴肉也是不错的营养来源，同时还能提供一些皮革。<br>如果你只是伤了它们但没有致其死地，你可以照料它们直至其恢复健康，并和它们成为朋友。猕猴朋友会陪伴你，降低你的<b>孤独</b>，送你礼物，甚至帮你剥椰子。注意要保证它们吃饱喝足，否则它们不高兴了，就有可能<b>咬你一口</b>。  
  
  受伤的猕猴  |   图片   
 ----  |  ----:   
 ** 不可堆叠 **<br><br>**重量：**750<br><br>**可使用次数：**144  |  <img decoding="async" src="Sprite/MacaqueWounded.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[原木陷阱](LogTrap.md)  |  捕捉猎物  
[我拿下它了，但我受伤了。(事件)](Event_MacaqueFightMixedSuccess.md)  |  继续  
[那只猕猴倒下了！(事件)](Event_MacaqueFightSuccess.md)  |  继续  
[那只猕猴倒下了！(事件)](Event_MacaqueUndeadFightSuccess.md)  |  继续  
[猕猴窝(丛林高地)](MacaqueDenEntrance.md)  |  我TM来啦！<br>** 拖入：**[炸药(开)](DynamiteOn.md)  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
放它走<br>  |  15分  |  ~~[畜栏(环境)](Env_Enclosure.md)存在于手中/面板~~  |  ** 自身：**<br>→消失  |    
抚摸<br>  |  15分  |    |  ** 自身：**<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +250(25%)<br><br>** 获得： **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：50<br>** [Ouch!] **<br>  [啊！！！！(事件)](Event_MacaqueFriendAnger.md)(+1)<br>[压力](Stress.md)+10<br>基础权重：50  |    
## 可拖入  
使用  |  动作  |  耗时  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  |  ----  |  ----  
[鱼片](FishSlices.md)<br>[烤鱼片](FishSlicesCooked.md)<br>[虾](Prawns.md)<br>[烤虾](PrawnsCooked.md)<br>[鱼杂](FishScraps.md)<br>[烤鱼杂](FishScrapsCooked.md)  |  喂食<br>  |  -  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +288(50%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +50(5%)<br><br>** 使用物: **<br>→消失<br>可用次数  -1<br><br>** 获得: **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：50<br>** [Ouch!] **<br>  [啊！！！！(事件)](Event_MacaqueFriendAnger.md)(+1)<br>[压力](Stress.md)+10<br>基础权重：50  |    
[“饲料”](tag_Feed.md)  |  喂食<br>  |  -  |    |  ** 自身: **<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">  +288(50%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +250(25%)<br><br>** 使用物: **<br>→消失<br><br>** 获得: **<br>** [Success] **<br>[孤独感](Loneliness.md)-20<br>[压力](Stress.md)-10<br>基础权重：50<br>** [Ouch!] **<br>  [啊！！！！(事件)](Event_MacaqueFriendAnger.md)(+1)<br>[压力](Stress.md)+10<br>基础权重：50  |    
[“储水容器”](tag_WaterContainer.md)  |  喂水<br>  |  -  |    |  ** 自身: **<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">  +48(16.67%)<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">  +250(25%)<br><br>** 使用物: **<br>含水量  -300  |    
[“切割工具”](tag_Cutter.md)  |  解脱<br>[手部动作](HandAction.md)  |  15分  |  [光亮](Light.md): 10-100  |  ** 自身: **<br>→ [猕猴尸体](MacaqueCarcass.md)<br><br>** 使用物: **<br>可用次数  -1  |  [污垢](Filth.md)+20  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：576  |  每15分钟-1<br>最多需要：6天  |  ** 到达0时： **<br><br>** 自身 **<br>→ [猕猴尸体](MacaqueCarcass.md)  
口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：144<br>最大：288  |  每15分钟-1<br>最多需要：3天  |  ** 到达0时：渴死了 **<br><br>** 自身 **<br>→ [猕猴尸体](MacaqueCarcass.md)  
健康度<img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：288<br>最大：672  |  每15分钟-1<br>最多需要：7天  |  ** 到达上限时：痊愈了！ **<br><br>** 自身 **<br>→ [猕猴朋友](MacaqueFriend.md)  
情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:30px;max-height:30px;">  |  初始：0<br>最大：1000  |  每15分钟-4<br>最多需要：2天14小时30分  |    
便便  |  初始：192<br>最大：192  |  每15分钟-1<br>最多需要：2天  |  ** 到达0时： **<br>** [Poop] **<br>  [粪便](Manure.md)(+1)<br><br>** 自身 **<br>便便  +192(100%)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Cure Stress  |  ** 需要属性：**<br>饥饿<img decoding="async" src="Sprite/Hunger.png" href="a.md" style="max-width:20px;max-height:20px;">: 432～576(75%～100%)<br>口渴<img decoding="async" src="Sprite/Thirst.png" href="a.md" style="max-width:20px;max-height:20px;">: 216～288(75%～100%)  |  情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">+10(1%)  |    
Heal  |  ** 需要属性：**<br>情绪<img decoding="async" src="Sprite/Content.png" href="a.md" style="max-width:20px;max-height:20px;">: 250～1000(25%～100%)  |  健康度<img decoding="async" src="Sprite/Health.png" href="a.md" style="max-width:20px;max-height:20px;"> +2(0.29%)  |    


<script>document.title="受伤的猕猴 - 卡牌生存百科 Card Survival Wiki";</script>