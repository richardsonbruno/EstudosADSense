import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';

import {AdMobBanner, PublisherBanner, AdMobInterstitial, AdMobRewarded} from 'react-native-admob';

// import { Container } from './styles';

const App = () => {
  useEffect(() => {
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

    AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());
  }, []);

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 20}}>
      <StatusBar hidden />
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />

      <PublisherBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        onDidFailToReceiveAdWithError={this.bannerError}
        onAdMobDispatchAppEvent={this.adMobEvent}
      />
    </View>
  );
};

export default App;
