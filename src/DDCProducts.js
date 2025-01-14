import React from 'react';
export default {
    // vtbs.moe和bilichat不需要在这里出现，会单独做成大板块。
    productLargePanel:[
        {
            name:"烤推机 - 推特翻译嵌字助手",
            author:"yuyuyzl、无敌飞雪、FZxiao",
            link:"https://www.bilibili.com/read/cv3081959",
            quote:"解放嵌字，解耦推特组工作流\n用过都说好的终极烤推解决方案",
            content:"利用Python + Selenium对网页推文进行截图，之后在前端添加译文和可定制的Logo以实现自动化的图片处理。\n" +
                "并与基于酷Q和RSSHub的推特提醒机器人深度结合，实现从推特监视到最终发布的数字化推文翻译流水线。",
        },
        {
            name:"Bilibili弹幕过滤提取插件",
            author:"yuyuyzl",
            link:"https://www.bilibili.com/read/cv341168",
            quote:"如果你也是一个看视频看直播都不喜欢开弹幕的自闭观众，\n但又因为锤子日语不得不依赖直播间同传man来推自己喜欢的虚拟主播，\n那恭喜你，好时代，来临了。",
            content:"本插件在启用后会接管直播播放器自带的弹幕透明度功能，使用可自定义的正则表达式过滤显示的弹幕内容，并修改颜色和透明度实现匹配弹幕的高亮显示。\n同时，匹配的弹幕会被收集到播放器下方的字幕框中，在你开完小差之后可以回看之前的对话。",
        },
        {
            name:"Youtube直播回放评论分析插件",
            author:"yuyuyzl",
            link:"http://nga.178.com/read.php?tid=18715097",
            quote:"没时间跟直播也没有关系，让看了的人告诉你哪里必须补",
            content:"调用Youtube评论回放接口爬取录播档所有评论并生成CSV / TSV文件，并将评论热点区域可视化到进度条上实现数据驱动的剪辑",
        },
        {
            name:"Bilibili弹幕黑名单挖掘",
            author:"一代鬃狮",
            link:"https://www.bilibili.com/read/cv2748506",
            quote:"看直播的时候，脚本哥广告哥很烦人？没问题！这个工具可以帮助你找出他们！",
            content:"此工具通过对过往VTuber直播弹幕进行数据挖掘，可以高效地寻找出发送恶意弹幕者的UID，以备封禁。",
        },
        {
            name:"人工DD：基于Bert的VTuber直播虚拟弹幕生成",
            author:"一代鬃狮、kinori//在线丢人 等",
            link:"https://www.bilibili.com/read/cv2837965",
            quote:"经过不懈的努力，模型酱终于能够以DD们的说话方式来向所有vtuber表达她的爱❤了",
            content:"利用神经网络对弹幕进行分析，可以将弹幕投影成768长度的向量。\n" +
                "根据已有的弹幕，此模型会生成相同语义的弹幕，以达到炒热气氛的目的。",
        },
        {
            name:"VTuber粉丝预测",
            author:"一代鬃狮，Simon",
            link:"https://github.com/pren1/fans_kalman.git",
            quote:"想知道心爱的VTuber接下来的粉丝涨跌情况吗？这个工具会告诉你！",
            content:"",
        },
        {
            name:"Blivechat",
            author:"xfgryujk",
            link:"https://github.com/xfgryujk/blivechat",
            quote:"",
            content:"用于OBS的仿YouTube风格的bilibili直播评论栏",
        },
        {
            name:"BiliSC - 醒目留言实时监控站",
            author:"Il Harper",
            link:"https://docs.bilisc.com/",
            quote:"",
            content:"醒目留言爬虫、回放、历史记录、实时监控、自动翻译、后台管理、数据分析的综合性网站。",
        },
        {
            name:"BiliChat Renderer Kit - BiliChat视频弹幕渲染器",
            author:"Il Harper",
            link:"https://github.com/dd-center/BiliChat-Renderer-Kit",
            quote:"",
            content:"用于在AE中叠加渲染弹幕。",
        },
        {
            name:"Bili-api",
            author:"Simon3000",
            link:"https://github.com/simon300000/bili-api",
            quote:"",
            content:"Bilibili API",
        },
        {
            name:"Transerver - 字幕组专用文件共享服务端",
            author:"Il Harper",
            link:"https://transerver.faithtown.tech/",
            quote:"",
            content:"字幕组可方便地将文件上传，全平台均可下载服务器上的文件，支持远程下载。",
        },
        {
            name:"Streamlink2Http",
            author:"Charlie Jiang",
            link:"https://www.bilibili.com/read/cv2173258",
            quote:"虽然要手动转播，但还是要转播得优雅。",
            content:"用Streamlink从YouTube拉取直播流并直接传输到OBS，以取代传统的视频源/窗口捕获转播。这样转播man不需要保持计算机中其他程序静音，且大幅降低资源占用。",
        },
        {
            name:"Aegisub-Align",
            author:"Charlie Jiang",
            link:"https://www.bilibili.com/read/cv2294932",
            quote:"枯燥的对帧从未如此轻松。",
            content:"在Aegisub中添加将字幕行对齐到视频中的硬字幕的功能，适合视频势翻译组。",
        },
        {
            name:"",
            author:"",
            link:"",
            quote:"",
            content:"",
        },
    ],
}
