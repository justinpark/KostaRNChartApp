import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

import PropTypes from 'prop-types';
import { Subheader, Button } from 'react-native-material-ui';

import ViewContainer from '../components/ViewContainer';
import FormProvider, { FormConsumer } from '../components/FormProvider';
import InputField from '../components/InputField';

class BuyCoinScreen extends PureComponent {
  render() {
    return (
      <FormProvider value={{ price: '10', amount: '1' }}>
        <ViewContainer>
          <Subheader>
            구매화면
          </Subheader>
          <FormConsumer>
            {({ value, onChange }) => (
              <InputField
                label={'가격'}
                name="price"
                value={value.price}
                onChange={onChange}
              />
            )}
          </FormConsumer>
          <FormConsumer>
            {({ value, onChange }) => (
              <InputField
                label={'수량'}
                name="amount"
                value={value.amount}
                onChange={onChange}
              />
            )}
          </FormConsumer>
          <Button raised text="구매" />
        </ViewContainer>
      </FormProvider>
    );
  }
}

BuyCoinScreen.propTypes = {

};

export default BuyCoinScreen;
