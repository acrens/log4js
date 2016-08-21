# log4js
node log4js preliminary use

# Log 搭配三剑客

### Logger
用于日志内容输出，日志分级：
``` javascript
ALL: new Level(Number.MIN_VALUE, "ALL"),
TRACE: new Level(5000, "TRACE"),
DEBUG: new Level(10000, "DEBUG"),
INFO: new Level(20000, "INFO"),
WARN: new Level(30000, "WARN"),
ERROR: new Level(40000, "ERROR"),
FATAL: new Level(50000, "FATAL"),
MARK: new Level(9007199254740992, "MARK"), // 2^53 JS 最大安全值
OFF: new Level(Number.MAX_VALUE, "OFF")
```

### Appenders
用于指定内容输出到哪里，使用详见 index.js configure appenders 配置，appenders：
``` md
DateFile：日志输出到文件，日志文件可以安特定的日期模式滚动；
SMTP：输出日志到邮件；
Mailgun：通过 Mailgun API 输出日志到 Mailgun；
levelFilter 可以通过 level 过滤；
[更多](https://github.com/nomiddlename/log4js-node/wiki/Appenders)
```

### Layout
用于指定内容输出格式，内置四种类型：
``` md
messagePassThrough：仅仅输出日志的内容；
basic：在日志的内容前面会加上时间、日志的级别和类别，通常日志的默认 layout；
colored/coloured：在 basic 的基础上给日志加上颜色，appender Console 默认使用的就是这个 layout；
pattern：这是一种特殊类型，可以通过它来定义任何你想要的格式。
```
