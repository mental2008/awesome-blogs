---
layout: post
title: "macOS 终端配置"
subtitle: "iTerm2 + Oh My Zsh + Powerlevel10k"
date: 2021-10-07 00:45:00
author: "mental2008"
header-style: text
mathjax: true
catalog: true
tags:
    - 终端配置
---

作为一个程序员，日常生活中少不了跟命令行打交道。因此，一个好看易用的终端，对于生产力的提升是巨大的。

这里分享下我在 macOS 系统上的终端配置方案。

## Prerequisite

### 安装 [Homebrew](https://github.com/Homebrew)

Homebrew 是 macOS 平台下的软件包管理工具，非常好用。

```bash
$ xcode-select --install
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
$ brew -v
```

### 安装 [Wget](https://www.gnu.org/software/wget/)

```bash
$ brew install wget
```

## [iTerm2](https://iterm2.com)

GitHub repo: [https://github.com/gnachman/iTerm2](https://github.com/gnachman/iTerm2)

iTerm2 用于替代 macOS 原生的 terminal，提供了更多特性。

### 常用功能/设置

**多窗口**

* 通过 `command + d` 新建水平方向的窗口，`command + shift + d` 新建垂直方向的窗口。

* 通过 `command + [` 和 `command + ]` 进行各窗口间的切换。

**使用 option + Right/Left Arrow 进行 word 的左右跳转**

这个快捷键在原生的 terminal 中是默认支持的，但在 iTerm2 中需要重新配置一下：「Preference」 => 「Profiles」 => 「Keys」 => 「Key Mappings」

| Keyboard Shortcut | Action                | Esc+ |
| ----------------- | --------------------- | ---- |
| option + Left     | Send Enscape Sequence | b    |
| option + Right    | Send Enscape Sequence | f    |

参考问题：[Using Alt/Cmd + Right/Left Arrow in iTerm](https://apple.stackexchange.com/questions/136928/using-alt-cmd-right-left-arrow-in-iterm)

**在新建 Tab 的时候保留当前的路径**

「Preference」 => 「Profiles」 => 「General」 => 「Working Directory」 => 「Reuse previous session's directory」

## [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)

在 macOS 中，默认已经安装了 zsh。`Oh My Zsh` 是基于 zsh 命令行的一个扩展工具集，提供了主题配置、插件机制等丰富的拓展功能。

```bash
$ sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

### [powerlevel10k](https://github.com/romkatv/powerlevel10k)

下载 powerlevel10k 主题，与 [powerlevel9k](https://github.com/Powerlevel9k/powerlevel9k) 相比，其在运行效率上有着明显的提升。

```bash
$ git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```
同时更新 `~/.zshrc` 文件中的变量 `ZSH_THEME`，使其生效：

```bash
ZSH_THEME=powerlevel10k/powerlevel10k
```

### 安装字体

下载并安装 [Hack Nerd Font](https://www.nerdfonts.com/font-downloads) （也可以选择一个自己偏好的字体），同时对终端配置进行修改：「Preferences」 => 「Profiles」 => 「Text」 => 「Font」

### 配置 powerlevel10k

以下是个人偏好的配置，可以根据自己的需求进行更改：

```bash
$ p10k configure
```

* Prompt Style: (3) Rainbow
* Character Set: (1) Unicode
* Show current time?: (2) 24-hour format
* Prompt Separators: (1) Angled
* Prompt Heads: (1) Sharp
* Prompt Tails: (1) Flat
* Prompt Height: (2) Two lines
* Prompt Connection: (2) Dotted
* Prompt Frame: (1) No frame
* Connection Color: (3) Dark
* Prompt Spacing: (2) Sparse
* Icons: (2) Many icons
* Prompt Flow: (1) Concise
* Enable Transient Prompt?: (y) Yes
* Instant Prompt Mode: (1) Verbose

终端的预览效果如下：

![](/img/macos-terminal/terminal.png)

### 插件

这里推荐一些好用的插件，可以集成到终端中配合使用。

添加的插件需要在 `~/.zshrc` 文件中修改 plugins 处的代码才能生效，例如：

```bash
plugins=(
	git
	github
	colorize
	colored-man-pages
	brew
	osx
	docker
	docker-compose
	autojump
	python
	autopep8
	zsh-autosuggestions
	zsh-syntax-highlighting
)
```

#### [autojump](https://github.com/wting/autojump)

实现目录间的快速跳转。

```bash
$ brew install autojump
```

#### [zsh-autosuggestion](https://github.com/zsh-users/zsh-autosuggestions)

基于历史记录，进行命令的推荐和补全。

```bash
$ git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

#### [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

对输入的命令提供高亮显示和语法检查。

```bash
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

#### [exa](https://github.com/ogham/exa)

用于替代原生的 `ls`，通过不同的颜色来更好地区分文件的类型及相关的元属性。

```bash
$ brew install exa
```

同时需要在 `~/.zshrc` 文件中加入 alias：

```bash
alias ls="exa"
```

## 参考资料

- [用「zsh」「oh my zsh」「powerlevel10k」，打造属于你的终端环境](https://www.jianshu.com/p/7162c4b7a438)
- [MacOS 终端工具、插件推荐](https://www.jianshu.com/p/c9040b4321ae)
