import React from 'react';

export const { Provider, Consumer: FormConsumer } = React.createContext('form');

export default class FormProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(updatedValue = {}) {
    this.setState(({ value }) => ({
      value: {
        ...value,
        ...updatedValue,
      },
    }));
  }

  reset() {
    this.setState({ value: {} });
  }

  render() {
    const { value } = this.state;
    return (
      <Provider
        value={{
          value,
          onChange: this.onChange,
          reset: this.reset,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
