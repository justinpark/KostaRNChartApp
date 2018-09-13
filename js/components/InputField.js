import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import Text from './Text';

class InputField extends PureComponent {
  render() {
    const { onChange, name, value, label } = this.props;
    return [
      <Text key="input_field_label">{label}</Text>,
      <TextInput
        key="input_field_value"
        value={value}
        onChangeText={value => onChange({ [name]: value })}
      />,
    ];
  }
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
