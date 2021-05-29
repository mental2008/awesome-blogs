---
layout:     post
title:      "MacOS终端配置"
subtitle:   ""
date:       2020-12-27 23:30:00
author:     "mental2008"
header-img: "img/post-bg-u4.jpg"
catalog: true
tags:
    - 终端配置
---


# MacOS终端配置

在macos下，默认已经安装了zsh。


## Oh My Zsh

链接：https://github.com/ohmyzsh/ohmyzsh

安装方式：

| Method | Command |
| ----- | --- |
| curl | sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" |
| wget | sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" |


## powerlevel10k


字体下载：https://www.nerdfonts.com/


## 插件

添加的插件需要在 `~/.zshrc` 中修改 plugins 这行的代码才能生效，例如

plugins=(git autojump zsh-autosuggestions)

1. `autojump`

链接：https://github.com/wting/autojump


安装指令：
```bash
brew install autojump
```


2. `zsh-autosuggestion`



## 参考资料

- https://www.jianshu.com/p/7162c4b7a438
- https://www.jianshu.com/p/c9040b4321ae