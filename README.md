# insomnia-plugin-postman-export

_Update (May 2024): Recently, Postman seems to have added Insomnia import natively - https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-from-insomnia/. Though I haven't tested it yet. Nevertheless, this plugin probably won't be needed anymore._

* Adds 'Export as Postman Collection' option in Collection (Workspace) menu  
* Requests can be selected via regex or a csv of request ids (the filters don't work at folder levels currently)  
* See todo section in [main.js](https://github.com/Vyoam/insomnia-plugin-postman-export/blob/main/main.js) for limitations and enhancement plans. (Also have some todos listed [here](https://github.com/Vyoam/InsomniaToPostmanFormat/blob/main/convertJsonFile.js), some of which were done as part of the the rejected [PR](https://github.com/Kong/insomnia/pull/3827) but need to be added to the plugin also.)
* Based on https://github.com/Vyoam/InsomniaToPostmanFormat

https://insomnia.rest/plugins/insomnia-plugin-postman-export  
https://www.npmjs.com/package/insomnia-plugin-postman-export  

![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/7cb76dbd-d012-4fca-ab0d-e86615f33b11)

![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/335c1f60-f42c-476c-b065-bf7b4a4f3841)

![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/f8ef35c3-4184-4127-a18d-bc9a9ec695b8)
Note: request id can be copied from the settings dialog of the request.

![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/88b444a0-7de3-45cf-8aac-628a6118ed1f)

![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/24721240-576a-4739-aff5-df60890b929a)

###### For reference, Insomnia plugin locations:
MacOS: ~/Library/Application Support/Insomnia/plugins/  
Windows: %APPDATA%\Insomnia\plugins\  
Linux: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/  
Ref.: https://docs.insomnia.rest/insomnia/introduction-to-plugins#plugin-file-location
