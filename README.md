# insomnia-plugin-postman-export

Adds 'Export as Postman Collection' option in Collection (Workspace) menu  
Requests can be selected via regex or a csv of request ids (the filters don't work at folder levels currently)  
See todo section in [main.js](https://github.com/Vyoam/insomnia-plugin-postman-export/blob/main/main.js) for limitations and enhancement plans. (Also have some todos listed [here](https://github.com/Vyoam/InsomniaToPostmanFormat/blob/main/convertJsonFile.js), some of which were done as part of the the rejected [PR](https://github.com/Kong/insomnia/pull/3827) but need to be added to the plugin also.)
Based on https://github.com/Vyoam/InsomniaToPostmanFormat

###### Appendix 1
MacOS: ~/Library/Application\ Support/Insomnia/plugins/  
Windows: %APPDATA%\Insomnia\plugins\  
Linux: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/  
