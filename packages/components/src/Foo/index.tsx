import React, { type FC } from 'react';
import { Add } from '@lzx/utils';

const Foo: FC<{ title: string }> = (props) => (
  <div>
    <h4>{props.title}changeset</h4>
    <p>{Add(1, 2)}</p>
  </div>
);

export default Foo;
