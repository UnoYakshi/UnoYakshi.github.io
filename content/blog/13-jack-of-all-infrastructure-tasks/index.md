+++
title = "13 Jack-of-All-Infrastructure Tasks"
subtitle = "Cases that might help you."
description = """
You never know when you'll need to setup  or debug a weird log error.
So let's dive a bit into the world of Architect/DevOps.
"""
date = 2025-09-14
draft = true
author = "Uno Yakshi"

[taxonomies]
tags = ["DevOps"]

[extra]
toc = true
#banner = "banner.webp"
#banner_pixels = true
toc_sidebar = true
disclaimer = """ \
1. I'm in no way an expert in Linux/Unix/POSIX systems. Hence, make proof checks.
2. Nor am I a DBMS guru.
3. Nor I know DevOps-foo.
4. Some tasks imply usage of terminal. It's Bash. Not zsh, or fish, or pure sh.
5. It's DevOps, not DevSecOps. Please, consider reading about Security practices, too.
6. The whole thing is more of a excercise to me than anything else.
"""
+++

# Intro
Fuh, disclaimers are over.
Time to get to business.


# Terminal Syntax Differences
> Explain difference between:
> - `t.sh`
> - `. t.sh`
> - `/t.sh`
> - `./t.sh`


# Bash-script Review
> Make a bash-script review, provide improvements.
> ```shell
> #!/bin/bash
>  
> file=$1
>  
> if [ -f $file ]
> then
>     echo "File exists"
> else
>     echo "File does not exist"
> fi
> ```

Shell-scripting (sh, bash, zsh, fish) is but an important skill in IT-career.
Some people love it, some are full of despise.
I definitely won't make a micro-service entirely made of bash-scripts.
But it has its uses. Small, self-contained, and somewhat isolated scripts close to your OS.

To save your time, here's how the enhanced script could look like:
```shell
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

file="${1:-}"

if [[ -z "$file" ]]; then
  echo "Usage: $0 <path-to-file>" >&2
  exit 2
fi

if [[ -f "$file" ]]; then
  echo "File exists: $file"
else
  echo "File does not exist: $file"
fi
```

Having a file structure like so:
```
./
├── file_exists.sh
└── nekoray-4.0.1-2024-12-12-debian-x64.deb*
```
and running `file_exists.sh` on another file gives us quite a predictable answer:
```
╰─ source ./file_exists.sh nekoray-4.0.1-2024-12-12-debian-x64.deb 
File exists
```

Great! It works!
But should we really follow «if it works, don't touch it» rule?
Not in this case.

Let's rename `nekoray-4.0.1-2024-12-12-debian-x64.deb` to something _cleaner_
(`nekoray 4.0.1.deb`, with a spacebar) and try again:
```
╰─ source ./file_exists.sh nekoray\ 4.0.1.deb
bash: [: nekoray: binary operator expected
File does not exist
```

{% alert(note=true) %}
BTW, in zsh, it worked just fine. Just saying.
{% end %}

There are 3 ways to solve it:
- NEVER use a spacebar in filenames, switch to `snake_case` --- that's what I use!
- add `IFS=$'\n\t'` --- internal field separator
- wrap `$file` with `"` in if-condition `if [ -f "$file" ]; then` --- will keep all the filename in the same syntax unit, no matter the spacebars
  - probably should work with other separators as well


# SQL DB debug process
> Client reports issues with MySQL. Simple queries are slow. Describe what you'll do.

I'll try to cover general approach instead of focusing on just MySQL.
Not to mention, I rarely worked with MySQL. I prefer PostgreSQL. But I digress.


# No Free Space "Bug"
> A server reports there is no free space, and you can't create new files, but `df -h` shows there is plenty. Describe potential problems.

Long story short, the problem is likely with inodes.
Inode is little meta-data for each file on your partition.

Check your inodes with ``


# Disk I/O Stats
> Is `iostat -x` enough to measure real load on a disk (hard drive, SSD, NVME, etc.)?

To answer that question, we need 2 things:
1. What defines the load on a disk at all?
2. What does `iostat -x` does?

{% alert(note=true) %}I/O = input/output{% end %}

W/o 101'ing how disks work:
- read and write speed --- <abbr title="Hyper Text Markup Language">I/O operationsper second</abbr>
- "concurrent" IOPS channels
- 


# SLA Design
> Клиент просит подобрать отказоустойчивое решение с SLA 99.9% для 7 сайтов (Nginx, PHP, MySQL, Redis, Memcached), статика занимает 10ТБ и будет расти до 50ТБ в течении года, каждая БД занимает 50ГБ. Предложите решение, опишите для клиента техническую реализацию.

# Choosing a DBMS
> Клиент просит подобрать сервер под базу данных для хранения логов всех действий на сайте и строить разнообразную аналитику по данным. Ожидаемый объем БД через 6 месяцев 900 ГБ. Опишите ваши рекомендации по выбору сервера и настройке БД для клиента?

# Nginx Path Block
> Расскажите, каким образом вы будете блокировать в Nginx запросы вида "GET /?[a-z]{16} HTTP/1.1"?

# The Heaviest SQL Query
> Какой из запросов MySQL самый тяжелый: https://xpaste.pro/p/t4q0Lsp0? Расскажите как вы его выявили?

# ss
> Что происходит на сервере: https://drive.google.com/file/d/1Cxkx6-428EQAX0-eiaq66H829ohnPp7q/view?usp=sharing
Опишите в формате ответа для клиента, если у вас есть предложения по оптимизации, также укажите их.

# ss
> Что происходит на сервере: https://drive.google.com/file/d/1fgJaftjv53xCN7vgiJOaQlbfWkUqPgyd/view?usp=share_link
Опишите в формате ответа для клиента, если у вас есть предложения по оптимизации, также укажите их.

# Dependencies
> Какие зависимости (явные и неявные) используются в этой роли: https://galaxy.southbridge.io/collections/aux/-/tree/master/roles/rhel_python_sub

- Python: 2.7, 3.5--3.8

# SQL
> Мы знаем что есть всего 7 записей с ticket_id=56412. Записей с ticket_id > 60000 нет, никаких символов перед 56412 нет. Как могла появиться разница в количестве? Опишите ваши действия.

- SELECT count(*) FROM tickets_messages WHERE ticket_id=56412; возвращает 5 записей
- SELECT count(*) FROM tickets_messages WHERE ticket_id like '%56412'; возвращает 7 записей
