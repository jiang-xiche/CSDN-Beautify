// ==UserScript==
// @name        【CSDN美化】-旧版两栏+屏宽自动适配+自动展开+去广告
// @description  还你一个经典版的CSDN：作者信息和顶部导航栏保留，去掉右边评论区；内容自动展开；去广告；屏宽自动适配；净化剪贴板。
// @description:zh-TW   還你一個經典版的CSDN：作者信息和頂部導航欄保留，去掉右側評論區；內容自動展開；去廣告；屏寬自動適配；淨化剪貼板。
// @description:zh-HK   還你一個經典版的CSDN：作者信息和頂部導航欄保留，去掉右側評論區；內容自動展開；去廣告；屏寬自動適配；淨化剪貼板。
// @description:zh-CN   还你一个经典版的CSDN：作者信息和顶部导航栏保留，去掉右边评论区；内容自动展开；去广告；屏宽自动适配；净化剪贴板。

// @namespace    https://github.com/z1064244797/CSDN-Beautify
// @version      2.1
// @author       Nyaasu
// @match        http*://blog.csdn.net/*/article/details/*
// @run-at       document-end
// @grant        none
// @license      CC-BY-NC-3.0
// @supportURL   https://github.com/z1064244797/CSDN-Beautify/issues
// @date         05/11/2018
// @modified     23/11/2018
// ==/UserScript==

(function () {
    'use strict';
    
    // ==========================================
    // 1. 内容展开功能
    // ==========================================
    
    /**
     * 移除"阅读全文"限制
     * 原理：删除遮罩层并重置文章内容区域的高度限制
     */
    $('.hide-article-box').remove();
    $('#article_content').css({'height':'initial'});
    
    // ==========================================
    // 2. 界面净化功能
    // ==========================================
    
    /**
     * 移除VIP免广告按钮
     * 该按钮通常显示在页面右侧，用于推广VIP服务
     */
    $('.meau-gotop-box').remove();
    
    /**
     * 移除未登录提示框
     * CSDN会弹出未登录提示，影响阅读体验
     */
    $('.unlogin-box').remove();
    
    /**
     * 移除左侧最新评论模块
     * 该模块显示最新评论，但会占用空间
     */
    $('#asideNewComments').remove();
    
    /**
     * 移除左侧CSDN联系方式
     * 显示作者联系方式的区域
     */
    $('.persion_article').remove();
    
    /**
     * 移除右侧工具栏
     * 包含点赞、收藏等功能的侧边栏
     */
    $('.tool-box').remove();
    
    /**
     * 移除底部推荐内容
     * 文章底部的相关推荐模块
     */
    $('.recommend-box').remove();
    
    // ==========================================
    // 3. 剪贴板净化功能
    // ==========================================
    
    /**
     * 净化剪贴板，移除版权劫持
     * 原理：调用CSDN的copyright.init()函数，传入空参数禁用版权追加功能
     * 这样复制文章内容时不会自动添加版权信息和链接
     */
    csdn.copyright.init("", "", "");
    
    // ==========================================
    // 4. 两栏布局优化
    // ==========================================
    
    /**
     * 针对无数据页面的特殊处理
     * 确保容器宽度正确设置
     */
    $('.nodata .container').css({'width':'1318px !important'});
    $('.nodata .tool-box .meau-list .btn-like-box p').css({'display': 'block'});
    
    /**
     * 隐藏右侧推荐栏
     * 实现经典两栏布局的关键步骤
     */
    $('.recommend-right').css({'display':'none'});
    
    /**
     * 设置主容器宽度
     * 基础宽度设为1318px，适配大屏幕
     */
    $('.container').css({'width':'1318px'});
    
    /**
     * 设置主内容区域宽度
     * 主文章内容区域宽度为1010px
     */
    $('.container main').css({'width': '1010px'});
    
    /**
     * 调整推荐内容的布局
     * 设置描述区域和标题区域的宽度比例
     */
    $('.container main .recommend-box .type_blog .content .desc').css({'width': '81%'});
    $('.container main .recommend-box .type_blog .content .blog_title_box').css({'width': '18%'});
    
    /**
     * 设置主内容区域左浮动
     * 感谢 ID:potoo 的反馈
     * 确保主内容和侧边栏正确排列
     */
    $("#mainBox > main").css("float","left");
    
    /**
     * 设置侧边栏右浮动
     * 与主内容区域配合，形成两栏布局
     */
    $("aside").css("float","right");
    
    /**
     * 移除body和工具栏的最小宽度限制
     * 允许页面在小屏幕上更好地适配
     */
    $('body').css({'min-width':'0'});
    $('.csdn-toolbar').css({'min-width':'0'});
    
    // ==========================================
    // 5. 广告移除功能
    // ==========================================
    
    /**
     * 移除各类广告元素
     * 通过选择器批量删除CSDN页面中的广告模块
     */
    $('.pulllog-box').remove();      // 推广信息框
    $('.fourth_column').remove();    // 第四列广告
    $('.mb8').remove();               // margin-bottom广告
    $('newsfeed').remove();          // 新闻推送
    $('#asideFooter').remove();      // 侧边栏底部广告
    
    /**
     * 移除特定文本的列表项
     * 删除"赚零钱"等营销相关的导航项
     */
    $("li:contains('赚零钱')").remove();
    
    // ==========================================
    // 6. 响应式屏宽适配功能
    // ==========================================
    
    /**
     * 屏幕宽度自适应函数
     * 根据浏览器窗口宽度自动调整页面布局
     * 
     * 断点说明：
     * - 大屏 (≥1360px): 完整显示主内容和侧边栏
     * - 中屏 (1120px-1359px): 缩小主内容宽度，保留侧边栏
     * - 小屏 (<1120px): 隐藏侧边栏，主内容居中
     */
    function resize(){
        // 检测屏幕宽度是否大于等于1360px
        var result1 = window.matchMedia('(min-width:1360px)');
        // 检测屏幕宽度是否大于等于1120px
        var result2 = window.matchMedia('(min-width:1120px)');
        
        if (result1.matches) {
            // 大屏幕模式：显示完整布局
            console.log("大屏宽，恢复原样式");
            $("aside").css({'display':'block'});          // 显示侧边栏
            $("#mainBox > main").css("width","1010px");   // 主内容宽度1010px
            $('.container').css({'width':'1318px'});      // 容器宽度1318px
        } else if (result2.matches) {
            // 中屏幕模式：缩小主内容区，保留侧边栏
            console.log("中屏宽，减小mainBox宽度");
            $("aside").css({'display':'block'});          // 显示侧边栏
            $('.container').css({'width':'1178px'});      // 容器宽度1178px
            $("#mainBox > main").css("width","870px");    // 主内容宽度870px
        } else {
            // 小屏幕模式：隐藏侧边栏，主内容居中
            console.log("小屏宽，隐藏右侧信息栏，mainBox居中");
            $("aside").css({'display':'none'});           // 隐藏侧边栏
            $('.container').css({'width':'910px'});       // 容器宽度910px
            $("#mainBox > main").css("width","870px");    // 主内容宽度870px
            $(".btns").css("float","right");              // 按钮右对齐
            $(".csdn-toolbar > div").css("width","870px"); // 工具栏宽度调整
        }
    }
    
    /**
     * 监听窗口大小变化事件
     * 当用户调整浏览器窗口大小时，自动重新计算布局
     */
    window.onresize = function() {
        resize();
    };
    
    /**
     * 初始化时执行一次resize
     * 确保页面加载时应用正确的布局
     */
    resize();
    
    // ==========================================
    // 已知问题说明
    // ==========================================
    
    /**
     * 已知但暂时无法解决的问题：
     * 1. 评论区无法在底部显示
     *    - 原因：CSDN的评论区结构与主内容区域耦合
     *    - 影响：用户需要临时禁用脚本查看评论
     * 
     * 2. 页面底部的广告因太顽强而无法移除
     *    - 原因：广告元素可能是动态加载或使用特殊技术
     *    - 影响：部分广告仍可能显示
     */
    
})();
