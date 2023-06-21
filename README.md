# insomnia-plugin-postman-export

* Adds 'Export as Postman Collection' option in Collection (Workspace) menu  
* Requests can be selected via regex or a csv of request ids (the filters don't work at folder levels currently)  
* See todo section in [main.js](https://github.com/Vyoam/insomnia-plugin-postman-export/blob/main/main.js) for limitations and enhancement plans. (Also have some todos listed [here](https://github.com/Vyoam/InsomniaToPostmanFormat/blob/main/convertJsonFile.js), some of which were done as part of the the rejected [PR](https://github.com/Kong/insomnia/pull/3827) but need to be added to the plugin also.)
* Based on https://github.com/Vyoam/InsomniaToPostmanFormat

https://insomnia.rest/plugins/insomnia-plugin-postman-export  
https://www.npmjs.com/package/insomnia-plugin-postman-export  

![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/7cb76dbd-d012-4fca-ab0d-e86615f33b11)
![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/335c1f60-f42c-476c-b065-bf7b4a4f3841)
![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/f8ef35c3-4184-4127-a18d-bc9a9ec695b8)
![image](https://github.com/Vyoam/insomnia-plugin-postman-export/assets/1176140/88b444a0-7de3-45cf-8aac-628a6118ed1f)

###### For reference, Insomnia plugin locations:
MacOS: ~/Library/Application Support/Insomnia/plugins/  
Windows: %APPDATA%\Insomnia\plugins\  
Linux: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/  
Ref.: https://docs.insomnia.rest/insomnia/introduction-to-plugins#plugin-file-location
