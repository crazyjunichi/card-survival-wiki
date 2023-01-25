# 水稻田  
> 我应该让田地保持水分然后等它成熟。  
  
  属性  |   图片   
 ----  |  ----:   
 **标签：**	[“容器（敞口）”](tag_ContainerOpen.md), [“脏容器（敞口）”](tag_ContainerDirty.md), [“容器（蓄水池）”](tag_ContainerReservoir.md), [“水稻田”](tag_Paddy.md)<br><br>**容水量：**2000  |  ![](Sprite/RicePaddyEmptyPlanted.png)   
  
## 获取来源  
来源  |  操作  
----  |  ----  
[未栽种的稻田(空)](RicePaddyEmpty.md) , [稻米](RiceGrains.md)  |  种植水稻  
## 变化   
操作  |  值  |  时间  |  变化  
----  |  ----  |  ----  |  ----  
进度  |  初始：0<br>最大：672  |  每15分钟-1<br>最多需要：7天  |  ** 到达0时： **<br>→ [未栽种的稻田(空)](RicePaddyEmpty.md)  
## 被动效果 (每15分钟)  
名称  |  条件  |  变化  |  玩家状态  
----  |  ----  |  ----  |  ----  
Fertile  |  ** 需要存在卡牌：**<br>[“肥沃环境”](tag_EnvFertile.md)  |  进度+0.25  |    
Rain  |  ** 需要状态：**<br>[降水值](RainValue.md):1-5  |    |    
Grow  |    |  进度+2  |    
Evaporate  |    |    |    
