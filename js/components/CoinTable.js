import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ListItem, Button, Avatar } from 'react-native-material-ui';

class CoinTable extends PureComponent {
  render() {
    const { fetchCoins, coins } = this.props;

    return (
      <View>
        {coins && coins.map(({ name, id, code, priceFormatted }) => (
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
    );
  }
}

CoinTable.propTypes = {

};

export default CoinTable;
