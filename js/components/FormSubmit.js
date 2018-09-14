import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormConsumer } from './FormProvider';

import { Button } from 'react-native-material-ui';
class FormSubmit extends PureComponent {
  render() {
    return (
      <FormConsumer>
        {({ submit }) => (
          <Button {...this.props} onPress={submit}/>
        )}
      </FormConsumer>
    );
  }
}

FormSubmit.propTypes = {

};

export default FormSubmit;
