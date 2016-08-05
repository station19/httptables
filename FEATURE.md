# Feature

* lamda
  
  支持用户自定义mark的来源方式，使用lua的loadstring实现
  
* 加载配置

  支持多种方式加载配置(json格式)，local、redis、http、etcd，同时允许一种生效。
  
* 管理接口

  * get /apis/role_types
  
    返回规则类型，json格式
    
  * get /apis/roles
  
    返回所有规则，josn格式

  
  * get /admin/sync
  
    更新规则，立即从配置源获取最新配置

  * get /admin/status
  
    查看规则事件统计
  
* 优化规则查找方式

  首先需按优先级来分别查找不同类型的规则，其次，每种规则使用mark当做key来hash存储

* 优化正则性能

  使用ngx.re.find替换string.find