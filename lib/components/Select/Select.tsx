import type React from 'react';

import type { NormalSelectProps } from './normal/NormalSelect';
import { NormalSelect } from './normal/NormalSelect';

type SelectProps = {
  type: 'normal';
} & NormalSelectProps;

export const Select: React.FC<SelectProps> = ({ type, ...props }) => {
  if (type === 'normal') {
    return <NormalSelect {...props} />;
  }
};
