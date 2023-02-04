# 触发器  
名称  |  条件  |  效果  |  事件  
----  |  ----  |  ----  |  ----  
死亡  |  [水分](Hydration.md): 0-0  |    |  ** [Death] **<br>基础权重：1  
死亡  |  [失温](Hypothermia.md): 100-100  |    |  ** [Death] **<br>  [死亡(事件)](Event_DeathHypothermia.md)(+1)<br>基础权重：1  
死亡  |  [体重](Weight.md): 0-0  |    |  ** [Death] **<br>  [死亡(事件)](Event_DeathNutrition.md)(+1)<br>基础权重：1  
到达目的地  |  [距离](Distance.md): 2016-2016  |  [睡眠中断](SleepInterrupt.md)+1  |  ** [Ship] **<br>  [有船来了！(事件)](Event_ShipRescueDistance.md)(+1)<br>基础权重：1  
岩滩探索进度  |    |    |  ** [Cave] **<br>  [洞穴(事件)(岩滩)](Event_CaveFound.md)(+0)<br>基础权重：1  
海洋探索进度  |  [探索岩滩](Exploration_Rocks.md): 20-20  |    |  ** [Shipwreck] **<br>  [沉船(事件)](Event_ShipwreckFound.md)(+0)<br>基础权重：1  
晕倒  |  [耐力](Stamina.md): 0-0<br>[晕倒次数](FaintCounter.md): 0-0  |  [晕倒次数](FaintCounter.md)+33  |  ** [Death] **<br>  [你昏过去了(事件)](Event_FaintExhaustion.md)(+1)<br>基础权重：1  
一具骷髅！  |  [饱食](Satiation.md): 0-1000  |    |  ** [Skeleton] **<br>  [一具骷髅！(事件)(坑洞)](Event_SkeletonSeen.md)(+1)<br>基础权重：1  
死亡  |  [真人秀直播](TV_Lives.md): 0-0  |    |  ** [Damage] **<br>  [受到来自项圈的伤害！(事件)](Event_TVNerveDamageDead.md)(+1)<br>基础权重：1  
重置真人秀  |  [真人秀直播](TV_Lives.md): 1-1  |    |  ** [Damage] **<br>  [受到来自项圈的伤害！(事件)](Event_TVNerveDamageLegs.md)(+1)<br>基础权重：1  
重置真人秀  |  [真人秀直播](TV_Lives.md): 2-2  |    |  ** [Damage] **<br>  [受到来自项圈的伤害！(事件)](Event_TVNerveDamageHands.md)(+1)<br>基础权重：1  
真人秀经理  |  [真人秀 - 等待](TV_CounterWait.md): 288-288  |  [阻止抽到陨石坑事件](TV_CrateKiller.md)-1  |  ** [Jungle] **<br>  [掉落的空投 — 丛林(事件)](Event_TVPackageJungle.md)(+1)<br>[真人秀 丛林](TV_Jungle.md)+1<br>[真人秀 丛林 - 探索](TV_JungleExplore.md)-20<br>[真人秀 - 包裹倒计时](TV_CounterRush.md)-288<br>基础权重：1<li>[真人秀舞台](TV_Stage.md)为0～7时权重-1</li><br>** [Rocks] **<br>  [掉落的空投 — 岩滩(事件)](Event_TVPackageRocks.md)(+1)<br>[真人秀 - 岩滩](TV_Rocks.md)+1<br>[真人秀 石滩 - 探索](TV_RocksExplore.md)-20<br>[真人秀 - 包裹倒计时](TV_CounterRush.md)-288<br>基础权重：1<li>[真人秀舞台](TV_Stage.md)为0～7时权重-1</li><br>** [Mangroves] **<br>  [掉落的空投 — 红树林(事件)](Event_TVPackageMangroves.md)(+1)<br>[真人秀 红树林](TV_Mangroves.md)+1<br>[真人秀 红树林 - 探索](TV_MangrovesExplore.md)-20<br>[真人秀 - 包裹倒计时](TV_CounterRush.md)-288<br>基础权重：1<li>[真人秀舞台](TV_Stage.md)为0～7时权重-1</li><br>** [Grasslands] **<br>  [掉落的空投 — 草原(事件)](Event_TVPackageGrasslands.md)(+1)<br>[真人秀 草原](TV_Grasslands.md)+1<br>[真人秀 草原 - 探索](TV_GrasslandsExplore.md)-20<br>[真人秀 - 包裹倒计时](TV_CounterRush.md)-288<br>基础权重：1<li>[真人秀舞台](TV_Stage.md)为0～7时权重-1</li><br>** [Highlands] **<br>  [掉落的空投 — 高地(事件)](Event_TVPackageHighlands.md)(+1)<br>[真人秀 高地](TV_Highlands.md)+1<br>[真人秀 高地 - 探索](TV_HighlandsExplore.md)-20<br>[真人秀 - 包裹倒计时](TV_CounterRush.md)-288<br>基础权重：1<li>[真人秀舞台](TV_Stage.md)为0～7时权重-1</li><br>** [Highlands Victory] **<br>  [掉落的空投 — 高地(事件)](Event_TVPackageHighlands.md)(+1)<br>[真人秀 高地](TV_Highlands.md)+1<br>[真人秀 高地 - 探索](TV_HighlandsExplore.md)-20<br>[真人秀 - 包裹倒计时](TV_CounterRush.md)-288<br>基础权重：0<li>[真人秀舞台](TV_Stage.md)为+8时权重+10000</li>  
重置真人秀  |  [真人秀 - 包裹倒计时](TV_CounterRush.md): 288-288  |    |  ** [Reset] **<br>[真人秀 - 等待](TV_CounterWait.md)-287<br>[真人秀直播](TV_Lives.md)-1<br>[阻止抽到陨石坑事件](TV_CrateKiller.md)+1<br>[真人秀舞台](TV_Stage.md)+1<br>[真人秀 高地](TV_Highlands.md)-1<br>[真人秀 丛林](TV_Jungle.md)-1<br>[真人秀 红树林](TV_Mangroves.md)-1<br>[真人秀 - 岩滩](TV_Rocks.md)-1<br>基础权重：1  
胜利啦！  |  [真人秀舞台](TV_Stage.md): 10-10  |    |    
一株外星植物！  |  [外星孢子](AlienSpores.md): 288-288  |  [外星孢子](AlienSpores.md)-288  |  ** [1] **<br>  [外星植物](AlienGrowthCleared.md)(+1)<br>基础权重：100  
失落  |  [压力](Stress.md): 240-240<br>[焦虑计数](AnxietyCounter.md): 0-0  |  [焦虑计数](AnxietyCounter.md)+96  |  ** [Attack] **<br>  [无法控制焦虑！(事件)](Event_AnxietyAttack.md)(+1)<br>基础权重：1  
韦斯顿的特别谈话1  |  [船长亲密关系](CaptainPropinquity.md): 2000-3000<br>[睡眠钟](SleepClock.md): 1-999  |  [睡眠中断](SleepInterrupt.md)+1  |    [船长(Special1a)(事件)](Event_CaptainSpecial1a.md)(+1)<br>  
出生  |  [怀孕](Pregnancy.md): 8640-8640  |    |  ** [Birth] **<br>基础权重：1  
呕吐  |  [恶心](Nausea.md): 20-24<br>[呕吐次数](VomitCounter.md): 0-0  |  [呕吐次数](VomitCounter.md)+4  |  ** [Vomit] **<br>  [呕吐！(事件)](Event_Vomit.md)(+1)<br>基础权重：1  
无人机！  |  [无人机袭击计数器](DroneRaidCounter.md): 192-192  |  [无人机袭击计数器](DroneRaidCounter.md)-191  |  ** [Nothing] **<br>基础权重：500<li>[丛林边缘(环境)](Env_Outskirts.md)存在于*手中/面板*，权重+100</li><li>[红树林(环境)](Env_Mangroves.md)存在于*手中/面板*，权重+175</li><li>[丛林(环境)](Env_Jungle.md)存在于*手中/面板*，权重+250</li><li>[湿地(环境)](Env_Wetlands.md)存在于*手中/面板*，权重+325</li><li>[营火](Campfire.md)存在于*手中/面板*，权重-150</li><li>[粘土火盆](ClayFirePit.md)存在于*手中/面板*，权重-150</li><br>** [Drone] **<br>  [攻击无人机！(事件)](Event_DroneFight.md)(+1)<br>基础权重：1000<li>[首月次数](FirstMonthCounter.md)为0～1时权重-1000</li><li>[杀手无人机种群数量](Pop_Drone.md)为0～999时权重-1000</li><li>[杀手无人机种群数量](Pop_Drone.md)为1000～4000时权重-750～+0</li>  
晕倒  |  [酒精](Alcohol.md): 64-70<br>[晕倒次数](FaintCounter.md): 0-0  |  [晕倒次数](FaintCounter.md)+33  |  ** [Death] **<br>  [你昏过去了(事件)](Event_FaintDizzy.md)(+1)<br>基础权重：1  
睡着了  |  [清醒度](Wakefulness.md): 0-0  |    |  ** [Fell Asleep] **<br>  [你睡着了！(事件)](Event_FallingAsleep.md)(+1)<br>基础权重：1  
神性体验  |  [情绪](Morale.md): 350-350<br>[精神失常](MindState.md): 150-300<br>[神圣灵视](GodInsight.md): 0-0<br>[精神失常计数器](PsychoCounter.md): 0-0  |  [精神失常计数器](PsychoCounter.md)+96  |  ** [Death] **<br>  [神圣灵视(事件)](Event_GodExperience1a.md)(+1)<br>基础权重：1  
追杀体验  |  [猎手接近](HuntersProximity.md): 96-96<br>[精神失常计数器](PsychoCounter.md): 0-0<br>[夜晚](IsNight.md): 1-1  |  [精神失常计数器](PsychoCounter.md)+96<br>[睡眠中断](SleepInterrupt.md)+1  |  ** [Watched] **<br>  [猎手来了(事件)](Event_HunterFight.md)(+1)<br>基础权重：1  
被追杀体验  |  [孤立感](Isolation.md): 2881-8640<br>[压力](Stress.md): 193-240<br>[精神失常](MindState.md): 150-300<br>[精神失常计数器](PsychoCounter.md): 0-0<br>[光亮](Light.md): 1-100  |  [猎手的注视](HunterInsight.md)+1<br>[精神失常计数器](PsychoCounter.md)+96  |    
一只猕猴！！  |  [猕猴入侵计数器](MacaqueRaidCounter.md): 192-192  |  [猕猴入侵计数器](MacaqueRaidCounter.md)-192  |  ** [Nothing] **<br>基础权重：50<br>** [Macaque Raid] **<br>  [一只猕猴！(事件)](Event_MacaqueRaid.md)(+1)<br>基础权重：0<li>[计数](Counter.md)为0～48时权重-1000</li><li>[猕猴种群数量](Pop_Macaque.md)为+0时权重-1000</li><li>[猕猴种群数量](Pop_Macaque.md)为0～25000时权重-100～+0</li><li>[害怕猕猴](MacaqueFear.md)为0～3000时权重+0～-1000</li><li>[“饲料”](tag_Feed.md)存在于*面板/~~容器中~~*，权重+50</li><li>[“美丽的/好看的”](tag_Pretty.md)存在于*面板/~~容器中~~*，权重+25</li><li>[“装饰品”](tag_Decoration.md)存在于*面板/~~容器中~~*，权重+25</li><br>** [Macaque Crop Attack] **<br>  [一只猕猴！(事件)](Event_MacaqueRaid.md)(+1)<br>基础权重：0<li>[首月次数](FirstMonthCounter.md)为0～48时权重-1000</li><li>[猕猴种群数量](Pop_Macaque.md)为+0时权重-1000</li><li>[猕猴种群数量](Pop_Macaque.md)为1000～25000时权重-150～+0</li><li>[害怕猕猴](MacaqueFear.md)为0～2500时权重+0～-200</li><li>[“农作物”](tag_Crop.md)存在于*手中/面板*，权重+25</li>  
一头巨蜥！  |  [巨蜥袭击计时器](MonitorRaidCounter.md): 192-192  |  [巨蜥袭击计时器](MonitorRaidCounter.md)-192  |  ** [Nothing] **<br>基础权重：50<br>** [Monitor] **<br>  [一头巨蜥！(事件)](Event_MonitorRaid.md)(+1)<br>基础权重：0<li>[首月次数](FirstMonthCounter.md)为0～5759时权重-1000</li><li>[巨蜥种群数量](Pop_Monitor.md)为+0时权重-1000</li><li>[巨蜥种群数量](Pop_Monitor.md)为0～14000时权重-250～+0</li><li>[“肉”](tag_Meat.md)存在于*面板*，权重+10</li>  
鼠害！  |  [老鼠袭击次数](MouseDamageCounter.md): 192-192  |  [老鼠袭击次数](MouseDamageCounter.md)-192  |  ** [Nothing] **<br>基础权重：50<br>** [Mouse] **<br>  [鼠害(事件)](Event_MouseDamage.md)(+1)<br>基础权重：0<li>[首月次数](FirstMonthCounter.md)为0～1344时权重-1000</li><li>[老鼠种群数量](Pop_Mouse.md)为+0时权重-1000</li><li>[老鼠种群数量](Pop_Mouse.md)为0～100000时权重-150～+0</li><li>[“饲料”](tag_Feed.md)存在于*面板/~~容器中~~*，权重+10</li><li>[“农作物”](tag_Crop.md)存在于*手中/面板*，权重+10</li><li>[忠犬朋友](DogFriend.md)存在于*手中/面板*，权重-100</li>  
梦魇  |  [压力](Stress.md): 193-240<br>[睡眠钟](SleepClock.md): 1-14<br>[梦魇计数器](NightmareCounter.md): 0-0  |  [睡眠中断](SleepInterrupt.md)+1<br>[梦魇计数器](NightmareCounter.md)+36～+144  |    [噩梦！(事件)](Event_Nightmare.md)(+1)<br>  
怀孕  |  [怀孕](Pregnancy.md): 8640-8640  |    |  ** [Bby] **<br>  [时候已到！(事件)](Event_Pregnancy.md)(+1)<br>基础权重：1  
木筏事件  |  [距离](Distance.md): 336-2016  |    |  ** [Atoll] **<br>  [着陆预警！(事件)](Event_Raft_Atoll.md)(+1)<br>基础权重：5<br>** [Shark] **<br>  [一条鲨鱼！(事件)](Event_Raft_SharkVisitor.md)(+1)<br>基础权重：20<br>** [Debris] **<br>  [漂浮的残骸！(事件)](Event_Raft_FloatingDebris.md)(+1)<br>基础权重：20<br>** [Ship] **<br>  [一艘路过的船！(事件)](Event_Raft_PassingShip.md)(+1)<br>基础权重：5  
木筏事件  |  [距离](Distance.md): 672-2016  |    |  ** [Atoll] **<br>  [着陆预警！(事件)](Event_Raft_Atoll.md)(+1)<br>基础权重：10<br>** [Shark] **<br>  [一条鲨鱼！(事件)](Event_Raft_SharkVisitor.md)(+1)<br>基础权重：20<br>** [Debris] **<br>  [漂浮的残骸！(事件)](Event_Raft_FloatingDebris.md)(+1)<br>基础权重：20<br>** [Ship] **<br>  [一艘路过的船！(事件)](Event_Raft_PassingShip.md)(+1)<br>基础权重：10  
木筏事件  |  [距离](Distance.md): 1008-2016  |    |  ** [Atoll] **<br>  [着陆预警！(事件)](Event_Raft_Atoll.md)(+1)<br>基础权重：15<br>** [Shark] **<br>  [一条鲨鱼！(事件)](Event_Raft_SharkVisitor.md)(+1)<br>基础权重：20<br>** [Debris] **<br>  [漂浮的残骸！(事件)](Event_Raft_FloatingDebris.md)(+1)<br>基础权重：20<br>** [Ship] **<br>  [一艘路过的船！(事件)](Event_Raft_PassingShip.md)(+1)<br>基础权重：15  
木筏事件  |  [距离](Distance.md): 1344-2016  |    |  ** [Atoll] **<br>  [着陆预警！(事件)](Event_Raft_Atoll.md)(+1)<br>基础权重：15<br>** [Shark] **<br>  [一条鲨鱼！(事件)](Event_Raft_SharkVisitor.md)(+1)<br>基础权重：20<br>** [Debris] **<br>  [漂浮的残骸！(事件)](Event_Raft_FloatingDebris.md)(+1)<br>基础权重：20<br>** [Ship] **<br>  [一艘路过的船！(事件)](Event_Raft_PassingShip.md)(+1)<br>基础权重：20  
木筏事件  |  [距离](Distance.md): 1680-2016  |    |  ** [Atoll] **<br>  [着陆预警！(事件)](Event_Raft_Atoll.md)(+1)<br>基础权重：15<br>** [Shark] **<br>  [一条鲨鱼！(事件)](Event_Raft_SharkVisitor.md)(+1)<br>基础权重：20<br>** [Debris] **<br>  [漂浮的残骸！(事件)](Event_Raft_FloatingDebris.md)(+1)<br>基础权重：20<br>** [Ship] **<br>  [一艘路过的船！(事件)](Event_Raft_PassingShip.md)(+1)<br>基础权重：20  
一头海怪！  |  [海怪入侵计数器](SeaHoundRaidCounter.md): 192-192  |  [海怪入侵计数器](SeaHoundRaidCounter.md)-191  |  ** [Nothing] **<br>基础权重：100<br>** [Seahound] **<br>  [一头海怪！(事件)](Event_SeahoundFight.md)(+1)<br>基础权重：0<li>[计数](Counter.md)为0～1920时权重-1000</li><li>[海怪种群数量](Pop_Seahounds.md)为0～999时权重-1000</li><li>[海怪种群数量](Pop_Seahounds.md)为1000～4000时权重+50～+500</li>  
一只海鸥！  |  [海鸥入侵计数器](SeagullRaidCounter.md): 192-192  |  [海鸥入侵计数器](SeagullRaidCounter.md)-192  |  ** [Nothing] **<br>基础权重：50<br>** [Seagull Raid] **<br>  [一只海鸥！(事件)](Event_SeagullRaid.md)(+1)<br>基础权重：0<li>[首月次数](FirstMonthCounter.md)为0～48时权重-1000</li><li>[海鸥种群数量](Pop_Seagull.md)为+0时权重-1000</li><li>[海鸥种群数量](Pop_Seagull.md)为0～45000时权重-100～+0</li><li>[海鸥之惧](SeagullFear.md)为0～10000时权重+0～-1000</li><li>[“饲料”](tag_Feed.md)存在于*面板/~~容器中~~*，权重+50</li><br>** [Seagull Crop Attack] **<br>  [一只海鸥！(事件)](Event_SeagullRaid.md)(+1)<br>基础权重：0<li>[首月次数](FirstMonthCounter.md)为0～48时权重-1000</li><li>[海鸥种群数量](Pop_Seagull.md)为+0时权重-1000</li><li>[海鸥种群数量](Pop_Seagull.md)为1000～45000时权重-150～+0</li><li>[海鸥之惧](SeagullFear.md)为0～2500时权重+0～-200</li><li>[“农作物”](tag_Crop.md)存在于*手中/面板*，权重+25</li>  
蜘蛛  |  [睡眠风险](SleepRisk.md): 1-999<br>[睡眠钟](SleepClock.md): 2-14  |    |  ** [No Spider] **<br>基础权重：100<br>** [Spider] **<br>  [一只蜘蛛咬了我！(事件)](Event_SpiderNight.md)(+1)<br>[睡眠中断](SleepInterrupt.md)+1<br>基础权重：0<li>[丛林(区域)](Jungle.md)存在于*手中/面板*，权重+10</li><li>[湿地丛林(区域)(湿地)](Wetlands.md)存在于*手中/面板*，权重+10</li><li>[幽暗洞穴(区域)](DarkCave.md)存在于*手中/面板*，权重+20</li><li>[离开(坠毁的飞机)](PlaneCrashExit.md)存在于*手中/面板*，权重+5</li><li>[营火](Campfire.md)存在于*手中/面板*，权重-50</li><li>[粘土火盆](ClayFirePit.md)存在于*手中/面板*，权重-50</li>  
风暴来袭！  |  [暴风雨次数](StormCounter.md): 6-6  |  [暴风雨次数](StormCounter.md)-5  |  ** [Storm] **<br>  [风太大了！(事件)](Event_Storm.md)(+1)<br>基础权重：1  
风暴损失！  |  [海湾风暴](Storm_Bay.md): 1-1  |    |  ** [Storm Damage] **<br>  [风暴侵袭(事件)](Event_StormDamage.md)(+1)<br>[海湾风暴](Storm_Bay.md)-1<br>基础权重：1  
风暴损失！  |  [沙滩风暴](Storm_Beach.md): 1-1  |    |  ** [Storm Damage] **<br>  [风暴侵袭(事件)](Event_StormDamage.md)(+1)<br>[沙滩风暴](Storm_Beach.md)-1<br>基础权重：1  
风暴损失！  |  [荒芜沙滩风暴](Storm_DesolateBeach.md): 1-1  |    |  ** [Storm Damage] **<br>  [风暴侵袭(事件)](Event_StormDamage.md)(+1)<br>[荒芜沙滩风暴](Storm_DesolateBeach.md)-1<br>基础权重：1  
风暴损失！  |  [红树林风暴](Storm_Mangroves.md): 1-1  |    |  ** [Storm Damage] **<br>  [风暴侵袭(事件)](Event_StormDamage.md)(+1)<br>[红树林风暴](Storm_Mangroves.md)-1<br>基础权重：1  
风暴损失！  |  [丛林边缘风暴](Storm_Outskirts.md): 1-1  |    |  ** [Storm Damage] **<br>  [风暴侵袭(事件)](Event_StormDamage.md)(+1)<br>[丛林边缘风暴](Storm_Outskirts.md)-1<br>基础权重：1  
风暴损失！  |  [岩滩风暴](Storm_Rocks.md): 1-1  |    |  ** [Storm Damage] **<br>  [风暴侵袭(事件)](Event_StormDamage.md)(+1)<br>[岩滩风暴](Storm_Rocks.md)-1<br>基础权重：1  
大浪来袭！  |  [波次](WaveCounter.md): 24-24<br>[海风程度](SeaAgitation.md): 4-5  |  [波次](WaveCounter.md)-24  |  ** [Wave] **<br>  [巨浪击中了木筏！(事件)](Event_Wave.md)(+1)<br>基础权重：1  
虚假的现实  |  [失实症](Derealization.md): 101-1000<br>[精神失常](MindState.md): 150-300<br>[虚空灵视](VoidInsight.md): 0-0<br>[精神失常计数器](PsychoCounter.md): 0-0  |  [精神失常计数器](PsychoCounter.md)+96  |  ** [Death] **<br>  [虚空灵视(事件)](Event_VoidExperience1a.md)(+1)<br>基础权重：1  
监视体验  |  [监视者的凝视](WatchersGlare.md): 96-96<br>[精神失常计数器](PsychoCounter.md): 0-0  |  [精神失常计数器](PsychoCounter.md)+96<br>[睡眠中断](SleepInterrupt.md)+1  |  ** [Watched] **<br>  [监视者(事件)](Event_WatchedExperience1a.md)(+1)<br>基础权重：1  
被监视体验  |  [孤立感](Isolation.md): 2881-8640<br>[压力](Stress.md): 193-240<br>[精神失常](MindState.md): 150-300<br>[精神失常计数器](PsychoCounter.md): 0-0<br>[光亮](Light.md): 0-0  |  [监视者的注视](WatcherInsight.md)+1<br>[精神失常计数器](PsychoCounter.md)+96  |    
韦斯顿的特别谈话1  |  [韦斯顿亲密关系](WestonPropinquity.md): 2000-3000<br>[睡眠钟](SleepClock.md): 1-999  |  [睡眠中断](SleepInterrupt.md)+1  |    [韦斯顿(Special1a)(事件)](Event_WestonSpecial1a.md)(+1)<br>  
箭术提升！  |  [箭术(技能)](Skill_Archery.md): 10-150  |    |  ** [Skill] **<br>  [箭术提升了！(事件)](Event_SkillArchery1.md)(+1)<br>基础权重：1  
箭术提升！  |  [箭术(技能)](Skill_Archery.md): 30-150  |    |  ** [Skill] **<br>  [箭术提升了！(事件)](Event_SkillArchery2.md)(+1)<br>基础权重：1  
箭术提升！  |  [箭术(技能)](Skill_Archery.md): 70-150  |    |  ** [Skill] **<br>  [箭术提升了！(事件)](Event_SkillArchery3.md)(+1)<br>基础权重：1  
箭术提升！  |  [箭术(技能)](Skill_Archery.md): 150-150  |    |  ** [Skill] **<br>  [箭术提升了！(事件)](Event_SkillArchery4.md)(+1)<br>基础权重：1  
烹饪技能提升！  |  [烹饪(技能)](Skill_Cooking.md): 10-150  |    |  ** [Skill] **<br>  [烹饪技能提升！(事件)](Event_SkillCooking1.md)(+1)<br>基础权重：1  
烹饪技能提升！  |  [烹饪(技能)](Skill_Cooking.md): 30-150  |    |  ** [Skill] **<br>  [烹饪技能提升！(事件)](Event_SkillCooking2.md)(+1)<br>基础权重：1  
烹饪技能提升！  |  [烹饪(技能)](Skill_Cooking.md): 70-150  |    |  ** [Skill] **<br>  [烹饪技能提升！(事件)](Event_SkillCooking3.md)(+1)<br>基础权重：1  
烹饪技能提升！  |  [烹饪(技能)](Skill_Cooking.md): 150-150  |    |  ** [Skill] **<br>  [烹饪技能提升！(事件)](Event_SkillCooking4.md)(+1)<br>基础权重：1  
制作提升！  |  [制作(技能)](Skill_Crafting.md): 10-150  |    |  ** [Skill] **<br>  [制作技能提升！(事件)](Event_SkillCrafting1.md)(+1)<br>基础权重：1  
制作提升！  |  [制作(技能)](Skill_Crafting.md): 30-150  |    |  ** [Skill] **<br>  [制作技能提升！(事件)](Event_SkillCrafting2.md)(+1)<br>基础权重：1  
制作提升！  |  [制作(技能)](Skill_Crafting.md): 70-150  |    |  ** [Skill] **<br>  [制作技能提升！(事件)](Event_SkillCrafting3.md)(+1)<br>基础权重：1  
制作提升！  |  [制作(技能)](Skill_Crafting.md): 150-150  |    |  ** [Skill] **<br>  [制作技能提升！(事件)](Event_SkillCrafting4.md)(+1)<br>基础权重：1  
钓鱼技能提升！  |  [钓鱼(技能)](Skill_Fishing.md): 10-150  |    |  ** [Fishing Skill] **<br>  [钓鱼技能提升！(事件)](Event_SkillFishing1.md)(+1)<br>基础权重：1  
钓鱼技能提升！  |  [钓鱼(技能)](Skill_Fishing.md): 30-150  |    |  ** [Fishing Skill] **<br>  [钓鱼技能提升！(事件)](Event_SkillFishing2.md)(+1)<br>基础权重：1  
钓鱼技能提升！  |  [钓鱼(技能)](Skill_Fishing.md): 70-150  |    |  ** [Fishing Skill] **<br>  [钓鱼技能提升！(事件)](Event_SkillFishing3.md)(+1)<br>基础权重：1  
钓鱼技能提升！  |  [钓鱼(技能)](Skill_Fishing.md): 150-150  |    |  ** [Fishing Skill] **<br>  [钓鱼技能提升！(事件)](Event_SkillFishing4.md)(+1)<br>基础权重：1  
药草学技能提升了！  |  [药草学(技能)](Skill_Herbology.md): 10-150  |    |  ** [Herbology Skill] **<br>  [药草学技能提升了！(事件)](Event_SkillHerbology1.md)(+1)<br>基础权重：1  
药草学技能提升了！  |  [药草学(技能)](Skill_Herbology.md): 30-150  |    |  ** [Herbology Skill] **<br>  [药草学技能提升了！(事件)](Event_SkillHerbology2.md)(+1)<br>基础权重：1  
药草学技能提升了！  |  [药草学(技能)](Skill_Herbology.md): 70-150  |    |  ** [Herbology Skill] **<br>  [药草学技能提升了！(事件)](Event_SkillHerbology3.md)(+1)<br>基础权重：1  
药草学技能提升了！  |  [药草学(技能)](Skill_Herbology.md): 150-150  |    |  ** [Herbology Skill] **<br>  [药草学技能提升了！(事件)](Event_SkillHerbology4.md)(+1)<br>基础权重：1  
灵视增强！  |  [灵视(技能)](Skill_Insight.md): 999-999  |    |  ** [Skill] **<br>  [灵视增强！(事件)](Event_SkillInsight1.md)(+1)<br>基础权重：1  
灵视增强！  |  [灵视(技能)](Skill_Insight.md): 999-999  |    |  ** [Skill] **<br>  [灵视增强！(事件)](Event_SkillInsight2.md)(+1)<br>基础权重：1  
灵视增强！  |  [灵视(技能)](Skill_Insight.md): 999-999  |    |  ** [Skill] **<br>  [灵视增强！(事件)](Event_SkillInsight3.md)(+1)<br>基础权重：1  
灵视增强！  |  [灵视(技能)](Skill_Insight.md): 999-999  |    |  ** [Skill] **<br>  [灵视增强！(事件)](Event_SkillInsight4.md)(+1)<br>基础权重：1  
石工技能提升！  |  [石工(技能)](Skill_Knapping.md): 10-150  |    |  ** [Skill] **<br>  [石工技能提升！(事件)](Event_SkillKnapping1.md)(+1)<br>基础权重：1  
石工技能提升！  |  [石工(技能)](Skill_Knapping.md): 30-150  |    |  ** [Skill] **<br>  [石工技能提升！(事件)](Event_SkillKnapping2.md)(+1)<br>基础权重：1  
石工技能提升！  |  [石工(技能)](Skill_Knapping.md): 70-150  |    |  ** [Skill] **<br>  [石工技能提升！(事件)](Event_SkillKnapping3.md)(+1)<br>基础权重：1  
石工技能提升！  |  [石工(技能)](Skill_Knapping.md): 150-150  |    |  ** [Skill] **<br>  [石工技能提升！(事件)](Event_SkillKnapping4.md)(+1)<br>基础权重：1  
金工技能提升！  |  [金工(技能)](Skill_Metalworking.md): 10-150  |    |  ** [Skill] **<br>  [金工技能提升！(事件)](Event_SkillMetalworking1.md)(+1)<br>基础权重：1  
金工技能提升！  |  [金工(技能)](Skill_Metalworking.md): 30-150  |    |  ** [Skill] **<br>  [金工技能提升！(事件)](Event_SkillMetalworking2.md)(+1)<br>基础权重：1  
金工技能提升！  |  [金工(技能)](Skill_Metalworking.md): 70-150  |    |  ** [Skill] **<br>  [制作技能提升！(事件)](Event_SkillMetalworking3.md)(+1)<br>基础权重：1  
金工技能提升！  |  [金工(技能)](Skill_Metalworking.md): 150-150  |    |  ** [Skill] **<br>  [金工技能提升！(事件)](Event_SkillMetalworking4.md)(+1)<br>基础权重：1  
击鼓术提升！  |  [击鼓(技能)](Skill_Percussion.md): 10-150  |    |  ** [Percussion Skill] **<br>  [击鼓技能提升！(事件)](Event_SkillPercussion1.md)(+1)<br>基础权重：1  
击鼓术提升！  |  [击鼓(技能)](Skill_Percussion.md): 30-150  |    |  ** [Percussion Skill] **<br>  [击鼓技能提升！(事件)](Event_SkillPercussion2.md)(+1)<br>基础权重：1  
击鼓术提升！  |  [击鼓(技能)](Skill_Percussion.md): 70-150  |    |  ** [Percussion Skill] **<br>  [击鼓技能提升！(事件)](Event_SkillPercussion3.md)(+1)<br>基础权重：1  
击鼓术提升！  |  [击鼓(技能)](Skill_Percussion.md): 150-150  |    |  ** [Percussion Skill] **<br>  [击鼓技能提升！(事件)](Event_SkillPercussion4.md)(+1)<br>基础权重：1  
长矛技巧提升！  |  [矛战(技能)](Skill_SpearFighting.md): 10-150  |    |  ** [Spear Fishing Skill] **<br>  [长矛技巧提升！(事件)](Event_SkillSpearFighting1.md)(+1)<br>基础权重：1  
长矛技巧提升！  |  [矛战(技能)](Skill_SpearFighting.md): 30-150  |    |  ** [Spear Fishing Skill] **<br>  [长矛技巧提升！(事件)](Event_SkillSpearFighting2.md)(+1)<br>基础权重：1  
长矛技巧提升！  |  [矛战(技能)](Skill_SpearFighting.md): 70-150  |    |  ** [Spear Fishing Skill] **<br>  [长矛技巧提升！(事件)](Event_SkillSpearFighting3.md)(+1)<br>基础权重：1  
长矛技巧提升！  |  [矛战(技能)](Skill_SpearFighting.md): 150-150  |    |  ** [Spear Fishing Skill] **<br>  [长矛技巧提升！(事件)](Event_SkillSpearFighting4.md)(+1)<br>基础权重：1  
叉鱼技能提升！  |  [叉鱼(技能)](Skill_SpearFishing.md): 10-150  |    |  ** [Spear Fishing Skill] **<br>  [叉鱼技能提升！(事件)](Event_SkillSpearFishing1.md)(+1)<br>基础权重：1  
叉鱼技能提升！  |  [叉鱼(技能)](Skill_SpearFishing.md): 30-150  |    |  ** [Spear Fishing Skill] **<br>  [叉鱼技能提升！(事件)](Event_SkillSpearFishing2.md)(+1)<br>基础权重：1  
叉鱼技能提升！  |  [叉鱼(技能)](Skill_SpearFishing.md): 70-150  |    |  ** [Spear Fishing Skill] **<br>  [叉鱼技能提升！(事件)](Event_SkillSpearFishing3.md)(+1)<br>基础权重：1  
叉鱼技能提升！  |  [叉鱼(技能)](Skill_SpearFishing.md): 150-150  |    |  ** [Spear Fishing Skill] **<br>  [叉鱼技能提升！(事件)](Event_SkillSpearFishing4.md)(+1)<br>基础权重：1  
纺织技术提升！  |  [纺织(技能)](Skill_Tailoring.md): 10-150  |    |  ** [Tailoring Skill] **<br>  [纺织技能提升！(事件)](Event_SkillTailoring1.md)(+1)<br>基础权重：1  
纺织技术提升！  |  [纺织(技能)](Skill_Tailoring.md): 30-150  |    |  ** [Tailoring Skill] **<br>  [纺织技能提升！(事件)](Event_SkillTailoring2.md)(+1)<br>基础权重：1  
纺织技术提升！  |  [纺织(技能)](Skill_Tailoring.md): 70-150  |    |  ** [Tailoring Skill] **<br>  [纺织技能提升！(事件)](Event_SkillTailoring3.md)(+1)<br>基础权重：1  
纺织技术提升！  |  [纺织(技能)](Skill_Tailoring.md): 150-150  |    |  ** [Tailoring Skill] **<br>  [纺织技能提升！(事件)](Event_SkillTailoring4.md)(+1)<br>基础权重：1  
设陷技术提升！  |  [陷阱(技能)](Skill_Trapping.md): 10-150  |    |  ** [Trapping Skill] **<br>  [陷阱技能提升了！(事件)](Event_SkillTrapping1.md)(+1)<br>基础权重：1  
设陷技术提升！  |  [陷阱(技能)](Skill_Trapping.md): 30-150  |    |  ** [Trapping Skill] **<br>  [陷阱技能提升了！(事件)](Event_SkillTrapping2.md)(+1)<br>基础权重：1  
设陷技术提升！  |  [陷阱(技能)](Skill_Trapping.md): 70-150  |    |  ** [Trapping Skill] **<br>  [陷阱技能提升了！(事件)](Event_SkillTrapping3.md)(+1)<br>基础权重：1  
设陷技术提升！  |  [陷阱(技能)](Skill_Trapping.md): 150-150  |    |  ** [Trapping Skill] **<br>  [陷阱技能提升了！(事件)](Event_SkillTrapping4.md)(+1)<br>基础权重：1  
木工技术提升！  |  [木工(技能)](Skill_Woodworking.md): 10-150  |    |  ** [Skill] **<br>  [木工技能提升！(事件)](Event_SkillWoodworking1.md)(+1)<br>基础权重：1  
木工技术提升！  |  [木工(技能)](Skill_Woodworking.md): 30-150  |    |  ** [Skill] **<br>  [木工技能提升！(事件)](Event_SkillWoodworking2.md)(+1)<br>基础权重：1  
木工技术提升！  |  [木工(技能)](Skill_Woodworking.md): 70-150  |    |  ** [Skill] **<br>  [木工技能提升！(事件)](Event_SkillWoodworking3.md)(+1)<br>基础权重：1  
木工技术提升！  |  [木工(技能)](Skill_Woodworking.md): 150-150  |    |  ** [Skill] **<br>  [木工技能提升！(事件)](Event_SkillWoodworking4.md)(+1)<br>基础权重：1  


<script>document.title="触发器 - 卡牌生存百科 Card Survival Wiki";</script>