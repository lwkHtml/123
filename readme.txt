一、stringobj.indexof(str,index)

查找字符串第一次出现的位置，如果没有找到返回-1.(从0开始)

str：所要搜索的字符串（大小写敏感）
index:从什么位置开始搜索（可以省略，省略后从开头位置开始查找）

二、stringobj.substring(start,stop)

从某个位置开始到某个位置结束，截取字符串。

start:截取的开始位置，不能省略(非负数)。
stop：截取的结束位置（非负数，一般是截取字符串最后一个字符所在stringobj位置加1），可以省略（省略后将一直到整个字符串的结尾）

三、stringobj.substr(start,length)

从某个位置开始截取指定长度的字符串。

start:截取的开始位置（可以为负数，代表从后面开始，最后一个字符的位置为-1）
length:截取的字符长度。


四、Date 对象

var date = new Date();

getFullYear()
getMonth()
getDate()
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getTime()

setFullYear
setMonth()
setDate()
setHours()
setMinutes()
setSeconds()
setMilliseconds()
setTime();

toString()

五、escape() unescape()

escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。
不会对字母和数字以及 * @ - _ + . / 特殊符号进行编码，其他所有的字符都会被转义序列替换。

unescape() 函数可对通过 escape() 编码的字符串进行解码。


