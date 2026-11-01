# Mental's Blog

## Install

```bash
$ gem install bundler
$ bundler install
```

## Build
```bash
# run a server via http://127.0.0.1:4000/
$ bundler exec jekyll serve
```

## Reading time

Every post automatically shows its estimated reading time beside the author and
date. It uses 400 Chinese characters or 200 English words per minute, combines
both for mixed-language posts, and rounds up to at least one minute. Navigation,
comments, footnotes, and code line numbers are excluded. No per-post metadata is
needed.

## Bilingual content

Chinese is the default language. English pages are published under `/en/`.
English post URLs add `/en` before the Chinese post path, for example
`/en/2026/11/01/agent-native-systems-conference/`.

To add an English translation for a post:

1. Add a stable `translation_key` to the Chinese post's front matter.
2. Create `_en_posts/<slug>.md` with the same `translation_key`, plus `title`,
   `date`, `author`, and any other post metadata. Use the same date and slug as
   the Chinese post so their URLs match apart from `/en`. The `lang: en` and
   `layout: post` values are supplied automatically.
3. Write the English content in that file. It will appear automatically on the
   English home, archive, search, and language switcher.

Example front matter:

```yaml
---
title: "English post title"
date: 2026-08-10 12:00:00 +0800
author: "mental2008"
translation_key: stable-post-key
tags:
  - AI Infrastructure
---
```
