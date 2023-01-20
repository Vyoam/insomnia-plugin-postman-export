# insomnia-plugin-postman-export

* Adds 'Export as Postman Collection' option in Collection (Workspace) menu  
* Requests can be selected via regex or a csv of request ids (the filters don't work at folder levels currently)  
* See todo section in [main.js](https://github.com/Vyoam/insomnia-plugin-postman-export/blob/main/main.js) for limitations and enhancement plans. (Also have some todos listed [here](https://github.com/Vyoam/InsomniaToPostmanFormat/blob/main/convertJsonFile.js), some of which were done as part of the the rejected [PR](https://github.com/Kong/insomnia/pull/3827) but need to be added to the plugin also.)
* Based on https://github.com/Vyoam/InsomniaToPostmanFormat

https://insomnia.rest/plugins/insomnia-plugin-postman-export  
https://www.npmjs.com/package/insomnia-plugin-postman-export  

## How to install

From insomnia go to `Preferences > Plugins` and paste "insomnia-plugin-postman-export" inside the textbox, then click "Install Plugin"

## How to use

From a collection click the dropdown menu, select "Export as Postman Collection" and follow the instructions
- Filter Option1
  - regex to match the collection's requests/folders
- Filter Option2
  - Request ID CSV (write something otherwise it will not let you proceed)
- Filter Option3
  - The path where to save the file (e.g. C:\Users\name\Desktop for windows)

###### For reference, Insomnia plugin locations:
MacOS: ~/Library/Application\ Support/Insomnia/plugins/  
Windows: %APPDATA%\Insomnia\plugins\  
Linux: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/  
