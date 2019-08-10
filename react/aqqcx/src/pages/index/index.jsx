import { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';

export class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
        <Text>121113</Text>
      </View>);
  }
}