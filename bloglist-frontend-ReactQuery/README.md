# fullstackopen part5 bloglist frontEnd [_Testing React apps_](https://fullstackopen.com/en/part5)

Answers to [openfullstack.com](https://fullstackopen.com) course exercises from the University of Helsinki

# Exercises

## a. Login in frontend

- [Exercises 5.1.-5.4.](https://fullstackopen.com/en/part5/login_in_frontend#exercises-5-1-5-4)
  _Solution details: [5.1](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/d3f6906d1a7cc0463f424304a915175492474502) | [5.2](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/ce69f3f79c97c42e3ee801eab109140cd9acba25) | [5.3](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/04ba3d794af42b8acf71d11135c6431032d6618e) | [5.4](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/155424c69a6ff89bf0cad72cda7850fba86cca33)_

## b. props.children and proptypes

- [Exercises 5.5.-5.11.](https://fullstackopen.com/en/part5/props_children_and_proptypes#exercises-5-5-5-11)
  _Solution details: [5.5](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/71243daab1177ab11dbffb2d9aa7389d093177c2) | [5.6](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/683ab01d02b4c764cf33184159a1080ef1137787) | [5.7](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/78673c0ab7ff0d9f0017f4fbe0968fbeab78088d) | [5.8](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/7af452bbe6b23454ad3ca2754639c597beb54c04) | [5.9](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/b3fe0a1936ca422d5d9d6eacb0beaf46e03e1b9e) | [5.10](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/b49f9f2979f861111d5608feda9658412c2bf51f) | [5.11](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/7af452bbe6b23454ad3ca2754639c597beb54c04)_

- [Exercises Exercise 5.12.](https://fullstackopen.com/en/part5/props_children_and_proptypes#exercise-5-12)
  _Solution details: [5.12](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/f44c2e19e5b5bd604b86ae25f5796c7f220f3b14)_

## c. Testing React apps

- [Exercises 5.13.-5.16.](https://fullstackopen.com/en/part5/testing_react_apps#exercises-5-13-5-16)
  _Solution details: [5.13](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/a2b88d033fc0ab5a8d13c5821c4051e66e95fbd5) | [5.14](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/cca6587df6dcf85886a33a6565c93a75c3ec3758) | [5.15](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/06eb2a3c6dcb523614dc02841014aa8926834bb8) | [5.16](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/558dc11ca47fe4f96400f1a25e3b432224c6b9a9)_

  - Fixing test error with jest (`"Cannot use import statement outside a module" with Axios`): https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios
  - Was migrated the installation from the tool `Vite` to `react-scripts` for easily follow the steps and exercises of the course with the test section to use jest (test framework) with react-testing-library (with Vite was more complicated to do and I leave as some pending). The steps are very simple:

  1. Do a new installation: `npx create-react-app new_install && cd new_install`,
  2. Copy the content (except package.json) for vite installation to the new one (react-scripts),
  3. Rename src/main.jsx -> src/index.jsx (`ren src/main.jsx src/index.jsx`)
  4. Delete /index.html (`rm index.html`)
  5. Replace sections of the new package.json `dependencies` and `devDependencies` for the ald Vite package.json
  6. Reinstall de packages: `npm install`
  7. Run the app: `npm start` (in contrast to Vite's `npm run dev`) and now the `npm test` will run ok without extra configuration.
     _Note: Is possible to use still .jsx file extensions without problem (it is not necesary to change the extension to .js)_

## d. End to end testing

- [Exercises 5.17.-5.23.](https://fullstackopen.com/en/part5/end_to_end_testing#exercises-5-17-5-23)
  _Solution details: [5.17](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/39fdc8b57e04a2cbc718e69d4b86652834825f49) | [5.18](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/b5f81434369b81e3ffebd557786914aee99190f6) | [5.19](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/f71acbfe3623b53829fced259ea40ed4eba74d15) | [5.20](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/44a4a69cebfbf257b056035dba72d478a992f6f7) | [5.21](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/bcb4b3e5bf814d163d4d8fa347e6eb0e51e690b1) | [5.22](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/044b24d40ec223b7620443c397688e8b098efebe) | [5.23](https://github.com/patchamama/fullstackopen-part5-bloglist-frontend/commit/eac096b56b058563b2b5be55b00e4987e88416ef)_

## Pending

- Configure and test [jest](https://jestjs.io/) with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) in an Vite tools installation.
