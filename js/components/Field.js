import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FormConsumer } from './FormProvider';

export const fieldPropTypes = {
  errorMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

class Field extends PureComponent {
  render() {
    const { component: Component, name, label } = this.props;
    return (
      <FormConsumer>
        {( { value, onChange, errors }) => (
          <Component
            label={label}
            name={name}
            value={value[name]}
            errorMessage={errors[name]}
            onChange={value => onChange({ [name]: value })}
          />
        )}
      </FormConsumer>
    );
  }
}

Field.propTypes = {

};

export default Field;
