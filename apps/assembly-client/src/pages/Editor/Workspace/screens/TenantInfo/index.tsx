import { Button } from '@assembly/common/components';
import Collapse, { Panel } from 'rc-collapse';
import React from 'react';

export const TenantInfo = () => {
  return (
    <>
      <Collapse>
        <Panel header="Tenant Info">
          <Button>Edit Tenant Name </Button>
        </Panel>
      </Collapse>
      <Collapse>
        <Panel header="Security"></Panel>
      </Collapse>
    </>
  );
};
