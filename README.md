React native app

- npm install -g react-native-cli
- install Android Studio
- Add following paths to ~/.bash_profile
    - export ANDROID_HOME=$HOME/Library/Android/sdk
    - export PATH=$PATH:$ANDROID_HOME/emulator
    - export PATH=$PATH:$ANDROID_HOME/tools
    - export PATH=$PATH:$ANDROID_HOME/tools/bin
    - export PATH=$PATH:$ANDROID_HOME/platform-tools
- Create AVD device in Android Studio
- Added shortcut to see list of AVD and run AVD device
    - alias avd-list='cd ~/Android/Sdk/tools/bin && ./avdmanager list avd'
    - alias run-avd='cd ~/Android/Sdk/emulator && ./emulator -avd'
    - avd-list will short you list of AVD devices
    - run-avd [device_name] will start AVD device
- Run project 
    react-native run-android


Note AVD should be running before running run-android cmd 
