# job-finder
React Native based app that can view, save, and rate jobs based on location

## Tech Stacks
- React
    - [React Navigation](https://reactnavigation.org/): to control the flow of screens
        - Note: it will render all its screens by default
            - to disable this: pass {lazy: true} in the second object
            - Note: use this version in `package.json`
                - `"react-navigation": "1.0.0-beta.22",`
    - [React Native Elements](https://github.com/react-native-training/react-native-elements)
- React Native
    - AsyncStorage: to persist app data
    - Animated module: handles animation output
    - PanResponder: handles user gestures
    - Dimensions: retrive width and height
    - LayoutAnimation: for testing android layout animation
    - UIManager: for layout animation like a stack of cards bouncing up
- Redux
    - [Redux Persist](https://github.com/rt2zz/redux-persist): Persist and rehydrate a redux store.
    - redux-thunk
- [React Native Elements](https://github.com/react-native-training/react-native-elements)
- expo
    - [Facebook](https://docs.expo.io/versions/latest/sdk/facebook.html)
    - [Mapview](https://docs.expo.io/versions/latest/sdk/map-view.html)
    - [AppLoading](https://docs.expo.io/versions/latest/sdk/app-loading.html)
    - Permissions, Notifications: push notification
- qs(query string): create query string by using JS Object
- latlng-to-zip: convert geocode to zip code(US)
- lodash

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
