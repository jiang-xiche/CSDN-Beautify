# 贡献指南

感谢您有兴趣为CSDN美化脚本做出贡献！本文档提供了如何参与项目的详细指南。

## 目录

- [行为准则](#行为准则)
- [如何贡献](#如何贡献)
  - [报告Bug](#报告bug)
  - [建议新功能](#建议新功能)
  - [提交代码](#提交代码)
- [开发指南](#开发指南)
  - [开发环境设置](#开发环境设置)
  - [代码规范](#代码规范)
  - [测试指南](#测试指南)
- [提交规范](#提交规范)
- [Pull Request流程](#pull-request流程)

## 行为准则

### 我们的承诺

为了营造开放和友好的环境，我们承诺：
- 尊重所有贡献者
- 欢迎不同观点和经验
- 接受建设性的批评
- 关注对社区最有利的事情

### 我们的标准

积极行为包括：
- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

不可接受的行为包括：
- 使用性化的语言或图像
- 侮辱性/贬损性评论，人身攻击或政治攻击
- 公开或私下骚扰
- 未经许可发布他人的私人信息
- 其他可以合理认为不适当的行为

## 如何贡献

### 报告Bug

如果您发现了bug，请通过以下方式报告：

1. **搜索现有Issues** - 确认是否已有人报告了相同的问题
2. **创建新Issue** - 如果问题尚未报告，请创建新的Issue

#### Bug报告应包含：

```markdown
### Bug描述
清晰简洁地描述bug是什么

### 复现步骤
1. 访问 '...'
2. 点击 '...'
3. 滚动到 '...'
4. 看到错误

### 预期行为
描述您期望发生什么

### 实际行为
描述实际发生了什么

### 截图
如果可能，添加截图帮助解释问题

### 环境信息
- 浏览器: [例如 Chrome 100.0]
- 脚本版本: [例如 2.1]
- 脚本管理器: [例如 Tampermonkey 4.18]
- 操作系统: [例如 Windows 11]
- 问题页面URL: [例如 https://blog.csdn.net/xxx/article/details/xxx]

### 附加信息
添加任何其他关于问题的上下文
```

### 建议新功能

我们欢迎功能建议！在提交建议前：

1. **搜索现有Issues** - 确认是否已有类似建议
2. **考虑必要性** - 确保功能符合项目目标
3. **创建Feature Request**

#### 功能建议应包含：

```markdown
### 功能描述
清晰简洁地描述您想要的功能

### 问题说明
描述这个功能要解决什么问题或改善什么体验

### 建议的解决方案
描述您认为应该如何实现这个功能

### 备选方案
描述您考虑过的其他解决方案

### 附加信息
添加任何其他关于功能请求的上下文或截图
```

### 提交代码

我们欢迎代码贡献！无论是修复bug还是添加新功能。

#### 快速开始

1. **Fork仓库** - 点击页面右上角的Fork按钮
2. **克隆您的Fork**
   ```bash
   git clone https://github.com/your-username/CSDN-Beautify.git
   cd CSDN-Beautify
   ```
3. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```
4. **进行更改** - 编写代码并测试
5. **提交更改**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
6. **推送到您的Fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **创建Pull Request** - 在GitHub上提交PR

## 开发指南

### 开发环境设置

#### 必需工具

1. **浏览器** - Chrome、Firefox或Edge
2. **脚本管理器** - Tampermonkey、Violentmonkey或Greasemonkey
3. **代码编辑器** - VS Code（推荐）、Sublime Text或其他

#### VS Code推荐扩展

- ESLint - 代码检查
- Prettier - 代码格式化
- JavaScript (ES6) code snippets - 代码片段

#### 本地测试

1. 在脚本管理器中创建新脚本
2. 复制 `CSDN-Beautify-latest.js` 的内容
3. 访问CSDN博客测试
4. 打开开发者工具(F12)查看日志

### 代码规范

#### JavaScript规范

```javascript
// ✅ 好的实践
function resize() {
    const result = window.matchMedia('(min-width:1360px)');
    if (result.matches) {
        // 使用描述性的注释
        console.log("大屏宽，恢复原样式");
    }
}

// ❌ 避免
function r(){var a=window.matchMedia('(min-width:1360px)');if(a.matches){console.log("大屏宽，恢复原样式")}}
```

#### 命名约定

- **变量**: 使用驼峰命名 `let mainBox = ...`
- **常量**: 使用大写下划线 `const MAX_WIDTH = 1318`
- **函数**: 使用驼峰命名 `function resizeLayout() {...}`
- **私有方法**: 使用下划线前缀 `function _internalMethod() {...}`

#### 注释规范

```javascript
/**
 * 函数说明（多行注释用于函数/类）
 * @param {string} selector - 选择器描述
 * @returns {boolean} - 返回值描述
 */
function checkElement(selector) {
    // 单行注释用于解释复杂逻辑
    return $(selector).length > 0;
}
```

#### 代码组织

```javascript
(function () {
    'use strict';
    
    // 1. 常量定义
    const CONFIG = {...};
    
    // 2. 工具函数
    function debounce() {...}
    
    // 3. 功能模块
    function removeAds() {...}
    function expandContent() {...}
    
    // 4. 初始化
    function init() {...}
    init();
})();
```

### 测试指南

#### 手动测试清单

在提交PR前，请确保测试以下场景：

- [ ] **不同屏幕尺寸**
  - [ ] 大屏幕 (≥1360px)
  - [ ] 中屏幕 (1120-1359px)
  - [ ] 小屏幕 (<1120px)
  - [ ] 窗口大小调整时的响应

- [ ] **核心功能**
  - [ ] 内容自动展开
  - [ ] 广告移除
  - [ ] 剪贴板净化（复制文章内容）
  - [ ] 布局正确显示

- [ ] **浏览器兼容性**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Edge

- [ ] **控制台无错误**
  - [ ] 打开F12检查控制台
  - [ ] 确认无JavaScript错误

#### 测试用例示例

```javascript
// 测试广告是否被移除
console.assert($('.pulllog-box').length === 0, '广告未被移除');

// 测试内容是否展开
console.assert($('#article_content').css('height') === 'auto' || 
               $('#article_content').css('height') === 'initial', 
               '内容未展开');

// 测试响应式布局
window.resizeTo(1200, 800);
setTimeout(() => {
    console.assert($("aside").css('display') === 'block', 
                   '中屏宽侧边栏应显示');
}, 1000);
```

## 提交规范

我们使用语义化的提交消息格式：

### 格式

```
<类型>(<范围>): <简短描述>

<详细描述>

<footer>
```

### 类型

- `feat`: 新功能
- `fix`: Bug修复
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 示例

```bash
feat(layout): 添加暗色主题支持

- 实现暗色主题CSS
- 添加主题切换按钮
- 保存用户主题偏好到localStorage

Closes #123
```

```bash
fix(resize): 修复窗口调整时的布局闪烁问题

添加防抖函数避免频繁触发resize事件
```

## Pull Request流程

### 提交PR前的检查清单

- [ ] 代码遵循项目的代码规范
- [ ] 已添加必要的注释
- [ ] 已在本地测试所有功能
- [ ] 已测试不同屏幕尺寸
- [ ] 没有引入新的警告或错误
- [ ] 提交消息符合规范
- [ ] 已更新相关文档（如需要）

### PR描述模板

```markdown
## 变更描述
简要描述这个PR做了什么

## 变更类型
- [ ] Bug修复
- [ ] 新功能
- [ ] 代码重构
- [ ] 文档更新
- [ ] 性能优化
- [ ] 其他（请说明）

## 相关Issue
Closes #issue编号

## 测试
描述您如何测试了这些变更

## 截图（如适用）
添加截图展示变更效果

## 检查清单
- [ ] 代码遵循项目规范
- [ ] 已添加必要注释
- [ ] 已进行本地测试
- [ ] 无新的警告/错误
- [ ] 已更新文档
```

### 审查流程

1. **自动检查** - 确保代码格式正确
2. **维护者审查** - 等待维护者审查代码
3. **讨论反馈** - 根据反馈进行调整
4. **合并** - 审查通过后合并到主分支

### PR被接受后

- 您的贡献将被记录在 CHANGELOG.md 中
- 您的名字将被添加到致谢列表中
- 新版本发布时会包含您的变更

## 开发技巧

### 调试技巧

```javascript
// 使用console.time测量性能
console.time('init');
init();
console.timeEnd('init');

// 使用console.table查看数据
console.table([
    { selector: '.ad', found: $('.ad').length },
    { selector: '.main', found: $('.main').length }
]);

// 使用debugger断点
function resize() {
    debugger; // 代码会在这里暂停
    // ...
}
```

### 常用工具函数

```javascript
// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 安全执行
function safeExecute(fn) {
    try {
        return fn();
    } catch (e) {
        console.error('Error:', e);
        return null;
    }
}
```

## 获取帮助

如果您在贡献过程中遇到问题：

1. **查看文档** - 阅读 README.md 和 DOCUMENTATION.md
2. **搜索Issues** - 查看是否有类似问题
3. **提问** - 在Issue中提问，我们会尽快回复
4. **讨论** - 在Greasy Fork页面留言讨论

## 许可证

提交代码即表示您同意您的贡献将在项目的 [CC-BY-NC-3.0](https://creativecommons.org/licenses/by-nc/3.0/) 许可证下发布。

## 致谢

感谢您花时间为CSDN美化脚本做出贡献！每一个贡献都让这个项目变得更好。

---

如果您对本文档有任何建议，欢迎提交PR修改此文档！
