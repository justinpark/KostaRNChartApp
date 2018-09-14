import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ListItem, Button, Avatar } from 'react-native-material-ui';
import { NavigationConsumer } from '../NavigationProvider';

class CoinTable extends PureComponent {
  render() {
    const { fetchCoins, coins } = this.props;

    return (
      <NavigationConsumer>
        {(navigation) => (
          <View>
            {coins.map(({ name, id, code, totalValue, currentValue }) => (
              <ListItem
                key={`coins_${id}`}
                leftElement={<Avatar text={code} />}
                centerElement={{
                  primaryText: name,
                  secondaryText: `${totalValue}| 현재 가격: ${currentValue}`,
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
