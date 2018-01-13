# job-finder
React Native based app that can view, save, and rate jobs based on location

## Tech Stacks
- React
  - a
  - b
  - c
- React Native
    - a
    - b
    - c
- [React Native Elements](https://github.com/react-native-training/react-native-elements)


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
