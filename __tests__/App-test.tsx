import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import NavigationRouter from '../src/Navigation';
import { MockedProvider } from '@apollo/client/testing';

it('App renders correctly', () => {
  const app = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <NavigationRouter/>
    </MockedProvider>
  );
  expect(app).toBeTruthy();
});
