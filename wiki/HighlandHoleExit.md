# 离开  
> 离开洞穴  
  
  离开  |   图片   
 ----  |  ----:   
 ** 区域唯一 **  |  <img decoding="async" src="Sprite/HoleUp.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[坑洞](HighlandHoleEntrance.md)  |  爬下去  
[坑洞](HighlandHoleEntrance.md)  |  爬下去  
[坑洞](HighlandHoleEntrance.md)  |  爬下去  
[坑洞](HighlandHoleEntrance.md)  |  爬下去  
[坑洞](HighlandHoleEntrance.md)  |  爬下去  
[坑洞](HighlandHoleEntrance.md)  |  爬下去  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
爬上去<br>[攀爬动作](ClimbAction.md)  |  15分  |  [光亮](Light.md): 10-100<br>[耐力](Stamina.md): 11-32<br>[ModifierClimb_GameName](ModifierClimb.md): 0-2  |  使用次数  -1<br>** Fall - Fracture **<br>  [(事件)坠落！](Event_FallFracture.md)(+1)<br>基础权重：1<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>** Fall - Sprains **<br>  [(事件)坠落！](Event_FallSprains.md)(+1)<br>基础权重：2<br>- [攀爬(技能)](Skill_Climbing.md)为100～150时权重-1<br><br>** Fall - Abrasion **<br>  [(事件)坠落！](Event_FallAbrasion.md)(+1)<br>基础权重：3<br><br>** Fall - Bruises **<br>  [(事件)坠落！](Event_FallBruise.md)(+1)<br>基础权重：6<br><br>** Success **<br>  [西部高地(环境)](Env_HighlandsWestern.md)(+1)<br>  [坑洞](HighlandHoleEntrance.md)(+1)<br>基础权重：1<br>- [攀爬(技能)](Skill_Climbing.md)为0～100时权重0～+100<br>- [降水值](RainValue.md)为1～5时权重-4～-25<br>  |  [耐力](Stamina.md)-20<br>[足部损伤](FootDamage.md)+10<br>[污垢](Filth.md)+6<br>[攀爬(技能)](Skill_Climbing.md)+1  
