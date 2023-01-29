# 手机  
> 只要还有电，就能提供照明和娱乐。<br>可惜没信号。  
  
  手机  |   图片   
 ----  |  ----:   
 **重量：**25<br><br>** 效果: **<br>[光亮](Light.md)+25  |  <img decoding="async" src="Sprite/PhoneTorch.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[手机(开)](PhoneOn.md)  |  打开手电筒  
## 动作  
动作  |  耗时  |  条件  |  变化  |  状态  
----  |  ----  |  ----  |  ----  |  ----  
关机<br>  |  -  |    |  → [手机(关)](PhoneOff.md)  |    
玩游戏<br>  |  30分  |    |  燃料  -2  |  [情绪](Morale.md)+5<br>[压力](Stress.md)-25～+5  
看照片<br>  |  15分  |    |  燃料  -1  |  [孤独感](Loneliness.md)-50<br>[压力](Stress.md)-10  
关闭手电筒<br>  |  -  |    |  → [手机(开)](PhoneOn.md)<br>燃料  -1  |    
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
燃料  |  初始：288<br>最大：288  |  每15分钟-3<br>最多需要：1天  |  ** 到达0时：电量耗尽 **<br><br>→ [手机(关)](PhoneOff.md)  
