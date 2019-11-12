# React
React 项目以及笔记
## react核心文件下载资源
github:https://github.com/facebook/react/tree/v16.11.0
cdn:https://www.bootcdn.cn/
npm install 模块：安装好后不写入package.json中
npm install 模块 --save 安装好后写入package.json的dependencies中（生产环境依赖）
npm install 模块 --save-dev 安装好后写入package.json的devDepencies中（开发环境依赖）
## jsx(javascript+xml)
jsx语法：插值{}不会输出布尔值,undefined,null,插值表达式中不能直接输出对象，如果是一个数组对象，则是可以的。注意这里react对数组进行转字符串操作，并使用空字符串拼接
相当于[1,2,3].join('')
## jsx当中的属性
class属性是不能直接使用的使用className代替
style属性，他的值必须接受对象 <h6 style={{color:'pink'}}>{[11,22,33]}</h6>
数组对象输出，React没有模版语法，插值表达式中只支持表达式，不支持语句for,if。如下：
<ul>
    {
        // 根据数组中的内容生成包含有结构的新数组
        users.map((item,index)=>{
            return <li key={index}>{item.name}</li>
        })
    }
</ul>
对象输出方法如下：
<ol>
    {Object.keys(obj).map((key)=>{
        return <li key={key}>{obj[key]}</li>;
    })}
</ol>

## 组件
拥有独立功能的模块
标签化形式，标签化传参是通过标签属性传参
通过函数实现组件化 见：2.html
如果使用类实现组件，那么需要继承一个父类React.Component,同时组件类必须实行一个render()的方法props:传入的参数必须使用对象下的一个属性props
QQ列表 见：5.html