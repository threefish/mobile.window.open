# [mobile.window.open 重构插件](#)
#### 针对手机对于window.open的支持不够友好和兼容，设计本插件
#### 本插件适用于手机移动办公系统
##### 更新
+ master 增加窗口横向滚动锁定功能
+ 1.1 添加了loading加载状态，响应更加的友好
+ 1.0 没有加载状态提示

#### 使用方法
##### 在发起弹出页引入opener1.1.js
##### 在被弹出页引入opener_ifarme.js
```js
//在页面中可以使用以下方法来开关状态加载图
ifarme_.loading_.show();
ifarme_.loading_.hide();
```
#### 关于重构window.open，在加载完页面后，会默认覆盖原生window.open方法

