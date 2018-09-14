import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

import PropTypes from 'prop-types';
import { Subheader, Button } from 'react-native-material-ui';

import ViewContainer from '../components/ViewContainer';
import Form, { FormConsumer } from '../components/FormProvider';
import InputField from '../components/InputField';
import Field from '../components/Field';
import FormSubmit from '../components/FormSubmit';

class BuyCoinScreen extends PureComponent {
  coinValidate(value, allValues) {
    let errors = {};
    if(Number(value['price']) < 0) {
      errors['price'] = '값이 잘못되었습니다.';
    }
    return errors;
  }
  render() {
    return (
      <Form
        value={{ price: '10', amount: '1' }}
        onSubmit={(value) => console.log(value)}
        validate={this.coinValidate}
      >
        <ViewContainer>
          <Subheader>
            구매화면
          </Subheader>
          <Field
            label="가격"
            name="price"
            component={InputField}
          />
          <Field
            label="수량"
            name="amount"
            component={InputField}
          />
          <FormSubmit raised text="구매" />
        </ViewContainer>
      </Form>
    );
  }
}

BuyCoinScreen.propTypes = {

};

export default BuyCoinScreen;
