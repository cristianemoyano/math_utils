import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

test('Todo', () => {
  const { getByDisplayValue } = render(<Home />);

});
