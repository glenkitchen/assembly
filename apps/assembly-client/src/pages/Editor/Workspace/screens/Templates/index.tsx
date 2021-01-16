import Collapse, { Panel } from 'rc-collapse';
import React from 'react';

export const Templates = () => {
  return (
    <>
      <Collapse>
        <Panel header="Layout"></Panel>
      </Collapse>
      <Collapse>
        <Panel header="Tables"></Panel>
      </Collapse>
      <Collapse>
        <Panel header="Forms"></Panel>
      </Collapse>
    </>
  );
};
