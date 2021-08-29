/*
todo...
* sync up this script with insomnia PR work: https://github.com/Kong/insomnia/pull/3827
* keep order; handle more types of data. Ref.: https://github.com/Vyoam/InsomniaToPostmanFormat/blob/main/convertJsonFile.js
* better error handling and presentation needed? ref.: when issues happen due to insomnia changes. e.g. https://github.com/Vyoam/insomnia-plugin-postman-export/issues/2
* enable standalone use as script; archive old repo
* use native insomnia file dialog?
* test and clean up. e.g. exported file name etc.
* recheck wrt prompts?
  https://github.com/search?q=context.app.dialog+insomnia&type=code
  https://github.com/search?q=context.app.prompt+insomnia&type=code
* above point but with a UI similar to the default export modal
* request/folder level export - addnl insomnia function exports needed
  FOR LARGE WORKSPACES, the experience is slow as of current flow.
  Direct request/folder level export will help solve it a bit... Tho not sure how much.
...
* update version, publish... ci/cd wrt dependencies needed?
* unit tests
* folder level filter?
* missing functionality
 */

/*
ref...

Add Support for Postman 2.1 Export (most but not all elements/cases) by Vyoam · Pull Request #3827 · Kong/insomnia
https://github.com/Kong/insomnia/pull/3827#issuecomment-883103420

Plugins - Insomnia
https://support.insomnia.rest/article/173-plugins

insomnia/packages/insomnia-app/app/plugins/context at develop · Kong/insomnia
https://github.com/Kong/insomnia/tree/develop/packages/insomnia-app/app/plugins/context

Semantic Versioning 2.0.0 | Semantic Versioning
https://semver.org/

release management - Semantic versioning for desktop applications - Software Engineering Stack Exchange
https://softwareengineering.stackexchange.com/questions/200002/semantic-versioning-for-desktop-applications

How does semantic versioning apply to programs without API? - Software Engineering Stack Exchange
https://softwareengineering.stackexchange.com/questions/255190/how-does-semantic-versioning-apply-to-programs-without-api

devhammed/insomnia-plugin-documenter: Export Insomnia workspace HTML documentation.
https://github.com/devhammed/insomnia-plugin-documenter

PoOwAa/insomnia-plugin-snippet-sync: Insomnia plugin to sync workspaces with GitLab project snippet
https://github.com/PoOwAa/insomnia-plugin-snippet-sync

techchrism/insomnia-plugin-valorant: Adds template tags to Insomnia with Valorant data
https://github.com/techchrism/insomnia-plugin-valorant

module.exports vs. export default in Node.js and ES6 - Stack Overflow
https://stackoverflow.com/questions/40294870/module-exports-vs-export-default-in-node-js-and-es6

Create npm account online
npm login
npm publish

 */

const fs = require('fs');

const path = require('path');
const mkdirp = require('mkdirp');
const slugify = require('slugify');
const untildify = require('untildify');

const postmanExport = require('./postman-export.js');

module.exports.workspaceActions = [{
  label: 'Export as Postman Collection',
  icon: 'fa-star',
  action: async (context, models) => {
    /*const ex = await context.data.export.insomnia({
      includePrivate: false,
      format: 'json',
      workspace: models.workspace,
    });

    fs.writeFileSync('/users/aamat/Desktop/export.json', ex);*/
	
	const outputPathConfigKey = `output_path_${models.workspace._id}`;

      try {

        let regexFilter = await context.app.prompt(
            'Regex Filter (Default matches all; ^$ matches none)',
            {
              submitName: 'OK',
              defaultValue: '.*'
            }
        );

        let workspaceIdsFilterCsv = await context.app.prompt(
            'Workspace Id Filter CSV (Leave blank to skip)',
            {
              submitName: 'OK',
              defaultValue: ''
            }
        );

        let outputPath = await context.app.prompt(
          'Output Path (e.g ~/Documents/My-Docs)',
          {
            submitName: 'Initiate (Please Wait for "All Done!")',
            defaultValue: await context.store.getItem(outputPathConfigKey)
          }
        );

        if (!outputPath.length) {
          outputPath = path.join(
            context.app.getPath('desktop'),
            `${slugify(models.workspace.name)}-API-Docs`
          );
        } else {
          outputPath = untildify(outputPath);
        }

        await context.store.setItem(outputPathConfigKey, outputPath);

        try {
          await mkdirp(outputPath);
        } catch (e) {
          await context.app.alert(
            'Something went wrong!',
            'Unable to create output folder.'
          );

          return;
        }

        try {
          const data = await context.data.export.insomnia({
            workspace: models.workspace,
            format: 'json',
            includePrivate: false
          });

          // filters to be applied on requests only, not the folders
          const filters = {
            nameRegex: new RegExp(regexFilter),
            workspaceIds: workspaceIdsFilterCsv.split(',')
          };

          fs.writeFileSync(path.join(outputPath, 'requests.postman_collection.json'), postmanExport.transformData(data, filters));
        } catch (_) {
          await context.app.alert(
            'Something went wrong!',
            'Unable to export workspace data.'
          );

          return;
        }

        await context.app.alert(
          'All Done!',
          `Your data has been saved at "${outputPath}"!`
        );
      } catch (_) {}
    }
	
}];
