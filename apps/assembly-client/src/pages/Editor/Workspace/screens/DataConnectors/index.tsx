import Collapse, { Panel } from 'rc-collapse';
import React from 'react';

export const DataConnectors = () => {
  return (
    <>
      <Collapse>
        <Panel header="Connectors"></Panel>
      </Collapse>
      <Collapse>
        <Panel header="Assembly Cloud Data"></Panel>
      </Collapse>
      <Collapse>
        <Panel header="Generate Database"></Panel>
      </Collapse>
    </>
  );
};
