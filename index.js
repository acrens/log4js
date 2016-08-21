/**
 * Logger：输出日志内容，Appenders：内容输出到哪里，Layout：内容输出格式
 */
var log4js = require('log4js');

/**
 * appenders 配置日志输出类型，默认为 console 控制台输出
 */
// log4js.configure({
//     appenders: [{
//         type: 'file',
//         filename: 'log/default.log'
//     }]
// });

// 对日志的级别和类别进行过滤
log4js.configure({
    appenders: [{
        type: 'logLevelFilter',
        level: 'DEBUG', // 只输出权重大于或者等于 DEBUG 的日志
        category: 'category1', // 只输出 category1 类别
        appender: {
            type: 'file',
            filename: 'log/default.log'
        },
        layout: {
            type: 'pattern',
            pattern: '[%r] [%[%5.5p%]] - %m%n'
        }
    }]
});

var logger = log4js.getLogger('work');
var logger1 = log4js.getLogger('category1');

/**
 * 9 中日志级别，中间 7 中业务中会被使用
 * ALL: new Level(Number.MIN_VALUE, "ALL"),
 * TRACE: new Level(5000, "TRACE"),
 * DEBUG: new Level(10000, "DEBUG"),
 * INFO: new Level(20000, "INFO"),
 * WARN: new Level(30000, "WARN"),
 * ERROR: new Level(40000, "ERROR"),
 * FATAL: new Level(50000, "FATAL"),
 * MARK: new Level(9007199254740992, "MARK"), // 2^53
 * OFF: new Level(Number.MAX_VALUE, "OFF")
 */
logger.trace('Time：', new Date());
logger.debug('Time：', new Date());
logger.info('Time：', new Date());
logger.warn('Time：', new Date());
logger.error('Time：', new Date());
logger.fatal('Time：', new Date());
logger.mark('Time：', new Date());

logger1.trace('Time：', new Date());
logger1.debug('Time：', new Date());
logger1.info('Time：', new Date());
logger1.warn('Time：', new Date());
logger1.error('Time：', new Date());
logger1.fatal('Time：', new Date());
logger1.mark('Time：', new Date());
