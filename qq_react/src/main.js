import React, { Component } from "react"
import ReactDom from "react-dom"

import Hot from "./components/hot.jsx"

var data =[
	{
	    "img": "images/icon_01.png",
	    "title": "腾讯新闻",
	    "day": "",
	    "time": "9:00",
	    "prompt": "",
	    "con": "美女老师做爆炸实验 学生疯狂打call",
	    "bg":""
	},
	{
	    "img": "images/icon_02.png",
	    "title": "我的电脑",
	    "day": "星期二",
	    "time": "",
	    "prompt": "",
	    "con": "[图片]P71017-191529(1).jpg",
	    "bg":"bg"
	},
	{
	    "img": "images/icon_03.png",
	    "title": "QQ看点",
	    "day": "",
	    "time": "7:15",
	    "prompt": "",
	    "con": "小视频精选：唐艺昕新剧场当女主被指存在感太",
	    "bg":""
	},
	{
	    "img": "images/icon_04.png",
	    "title": "购物号",
	    "day": "昨天",
	    "time": "",
	    "prompt": "[新消息]",
	    "con": "拼多多商城：活动参与成功通知",
	    "bg":""
	},
	{
	    "img": "images/icon_05.png",
	    "title": "服务号",
	    "day": "昨天",
	    "time": "",
	    "prompt": "",
	    "con": "QQ天气：【房山】多云8°/18°",
	    "bg":""
	},
	{
	    "img": "images/icon_06.png",
	    "title": "QQ邮箱提醒",
	    "day": "昨天",
	    "time": "",
	    "prompt": "",
	    "con": "AAA教育：学到IT技能，月薪7000起",
	    "bg":"bg"
	},
	{
	    "img": "images/icon_07.png",
	    "title": "无名",
	    "day": "星期三",
	    "time": "",
	    "prompt": "",
	    "con": "神晃：@坚持 你会选择原谅她吗？",
	    "bg":""
	 }
]

ReactDom.render(<Hot num={data} />,document.getElementById("app"))
