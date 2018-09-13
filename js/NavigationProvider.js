import React from 'react';

export const { Provider, Consumer: NavigationConsumer } = React.createContext('navigation');

export default function NavigationProvider({ navigation, children }) {
  return (
    <Provider value={navigation}>
      {children}
    </Provider>
  );
}
