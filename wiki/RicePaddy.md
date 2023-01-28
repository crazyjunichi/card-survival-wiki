# 水稻田  
> 我应该让田地保持水分然后等它成熟。  
<br>  
> 这些水漫的田地可以用来大规模种植水稻，并保护水稻免受<b>农害</b>的侵害以确保更加高产。<br><br>需要<b>铲子，土壤，灰烬</b>和某种<b>肥料</b>来建造，需要大量<b>水</b>来维持。  
  
  水稻田  |   图片   
 ----  |  ----:   
 **标签：**	[“容器（敞口）”](tag_ContainerOpen.md), [“脏容器（敞口）”](tag_ContainerDirty.md), [“容器（蓄水池）”](tag_ContainerReservoir.md), [“水稻田”](tag_Paddy.md)<br><br>**容水量：**2000  |  <img decoding="async" src="Sprite/RicePaddyEmptyPlanted.png" href="a.md" style="max-width:300px;max-height:300px;">   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[未栽种的稻田(空)](RicePaddyEmpty.md) , [稻米](RiceGrains.md)  |  种植水稻  
## 属性   
属性  |  值  |  耗时  |  变化  
----  |  ----  |  ----  |  ----  
进度  |  初始：0<br>最大：672  |  每15分钟-1<br>最多需要：7天  |  ** 到达0时： **<br>→ [未栽种的稻田(空)](RicePaddyEmpty.md)  
## 被动效果  
名称  |  条件  |  变化(每15分钟)  |  玩家状态  
----  |  ----  |  ----  |  ----  
Fertile  |  ** 需要存在卡牌：**<br>[“肥沃环境”](tag_EnvFertile.md)  |  进度+0.25  |    
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md): 1-5  |  [不安全的水](LQ_WaterUnsafe.md)+50  |    
Grow  |  ** 需要放入：**<br>[“灌溉用水”](tag_WaterFresh.md)  |  进度+2  |    
Evaporate  |    |  含水量-4  |    
