# job-finder
React Native based app that can view, save, and rate jobs based on location

## Tech Stacks
- React
    - react-navigation: to control the flow of screens
        - Note:it will render all its screens by default
        - to disable this: pass {lazy: true} as second object
    - b
    - c
- React Native
    - a
    - b
    - AsyncStorage: to persist information for our app
- [React Native Elements](https://github.com/react-native-training/react-native-elements)
- expo
    - [Facebook](https://docs.expo.io/versions/latest/sdk/facebook.html)
    - [Mapview](https://docs.expo.io/versions/latest/sdk/map-view.html)
    - [AppLoading](https://docs.expo.io/versions/latest/sdk/app-loading.html)

## Trouble Shootings
- unable to resolve module
    - check typos in name, export, import
    - [steps](https://github.com/facebook/react-native/issues/4968)
        1. rm -rf node_modules && npm install
        2. rm -fr $TMPDIR/react-*
        3. watchman watch-del-all
- debugger;
    - pause at this line
- this.props.xxxx is not a function
    - check spelling
    - check if the callback is passed in component's props
