const fs = require('fs');   //경로를 표시하지 않는 것은 내장되어 있는 라이브러리를 가져오는 것
const {Console} = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('.stderr.log');

const logger = new Console({ stdout : output, stderr : errorOutput });
const count = 5;
logger.log('count : %d', count);
logger.error('count : ' + count);