import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import * as Sentry from "@sentry/react-native";

import CalcWrapper from "CalcWrapper";
import MainStyles from "MainStyles";

const styles = MainStyles;

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

Sentry.configureScope(scope => {
  scope.setTag('bundleId', process.env.BUNDLE_ID);
});

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <CalcWrapper />
        </SafeAreaView>
      </View>
    );
  }
}

export default Sentry.wrap(App);