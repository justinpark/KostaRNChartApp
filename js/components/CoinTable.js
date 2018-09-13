import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ListItem, Button, Avatar } from 'react-native-material-ui';
import { NavigationConsumer } from '../NavigationProvider';

class CoinTable extends PureComponent {
  render() {
    const coins = [{
      id: 1,
      code: 'BTX',
      name: '비트코인',
      priceFormatted: '30만원',
    }, {
      id: 2,
      code: 'RPX',
      name: '리플',
      priceFormatted: '4백원',
    }, {
      id: 3,
      code: 'ETH',
      name: '이더리움',
      priceFormatted: '6만원',
    }];

    const { fetchCoins } = this.props;

    return (
      <NavigationConsumer>
        {(navigation) => (
          <View>
            {coins.map(({ name, id, code, priceFormatted }) => (
              <ListItem
                key={`coins_${id}`}
                leftElement={<Avatar text={code} />}
                centerElement={{
                  primaryText: name,
                  secondaryText: priceFormatted,
                }}
                rightElement={<Button primary raised text="구매" onPress={() => navigation.navigate('BuyModal')} />}
              />
            ))}
            <Button primary raised onPress={() => fetchCoins()} text="코인가져오기"/>
          </View>
        )}
      </NavigationConsumer>
    );
  }
}

CoinTable.propTypes = {

};

export default CoinTable;
