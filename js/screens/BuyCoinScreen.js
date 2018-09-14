import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

import PropTypes from 'prop-types';
import { Subheader, Button } from 'react-native-material-ui';

import ViewContainer from '../components/ViewContainer';
import Form, { FormConsumer } from '../components/FormProvider';
import InputField from '../components/InputField';
import Field from '../components/Field';
import FormSubmit from '../components/FormSubmit';
import Toast from '../containers/ToastContainer';

class BuyCoinScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  coinValidate(value, allValues) {
    let errors = {};
    if(Number(value['price']) < 0) {
      errors['price'] = '값이 잘못되었습니다.';
    }
    return errors;
  }

  handleSubmit({ price }) {
    const { updatePrice } = this.props;
    updatePrice(1, price);
  }

  render() {
    return (
      <Form
        value={{ price: '10', amount: '1' }}
        onSubmit={this.handleSubmit}
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
          <Toast />
        </ViewContainer>
      </Form>
    );
  }
}

BuyCoinScreen.propTypes = {

};

export default BuyCoinScreen;
