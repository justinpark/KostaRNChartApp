import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import Text from './Text';
import { fieldPropTypes } from './Field';

class InputField extends PureComponent {
  render() {
    const { onChange, errorMessage, value, label } = this.props;
    return [
      <Text key="input_field_label">{label}</Text>,
      <TextInput
        key="input_field_value"
        value={value}
        onChangeText={onChange}
      />,
      errorMessage && <Text key="input_field_error_label">{errorMessage}</Text>,
    ];
  }
}

InputField.propTypes = {
  ...fieldPropTypes,
};

export default InputField;
