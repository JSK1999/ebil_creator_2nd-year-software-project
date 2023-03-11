import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const BellowButtonSet = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <Button
        title="Route"
        icon={<Icon name="map" type="material" />}
        type="outline"
      />
      <Button
        title="Feedback"
        icon={<Icon name="comments" type="font-awesome" />}
        type="outline"
      />
      <Button
        title="Home"
        icon={<Icon name="home" type="material" />}
        type="outline"
      />
      <Button
        title="New Customer"
        icon={<Icon name="customer" type="entypo" />}
        type="outline"
      />
      <Button
        title="Notification"
        icon={<Icon name="topic" type="material-community" />}
        type="outline"
      />
    </View>
  );
};

export default BellowButtonSet;
