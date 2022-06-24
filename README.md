## cli-parse-json


## usage

```sh

$ echo '{"name":"abc","age":13,"address":{"city":"beijing","code":122345},"phones":["12345","67890"]}' | cli-parse-json '.name' 
=> abc

$ echo '{"name":"abc","age":13,"address":{"city":"beijing","code":122345},"phones":["12345","67890"]}' | cli-parse-json '.name.substring(0,1)' 
=> a

$ echo '{"name":"abc","age":13,"address":{"city":"beijing","code":122345},"phones":["12345","67890"]}' | cli-parse-json '.name.toUpperCase()' 
=> ABC

$ echo '{"name":"abc","age":13,"address":{"city":"beijing","code":122345},"phones":["12345","67890"]}' | cli-parse-json '.address.city' 
=> beijing

$ echo '{"name":"abc","age":13,"address":{"city":"beijing","code":122345},"phones":["12345","67890"]}' | cli-parse-json '.phones[1]' 
=> 67890

```