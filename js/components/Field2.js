import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormConsumer } from './FormProvider';

export const fieldPropTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

class Field extends PureComponent {
  render() {
    const { component: Component , name, label } = this.props;
    return (
      <FormConsumer>
        {({ value, errors, onChange }) => (
          <Component
            errorMessage={errors[name]}
            label={label}
            name={name}
            value={value[name]}
            onChange={onChange}
          />
        )}
      </FormConsumer>
    );
  }
}

Field.propTypes = {

};

export default Field;
