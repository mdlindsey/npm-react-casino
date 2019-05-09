import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-casino';
export default () => {
  return (
    <main>
      <Table>
        <div style={{color: 'white', textAlign: 'center'}}>
          <h1>Demos</h1>
          <h2 style={{display: 'inline-block', paddingRight: 15}}><Link to="demo/poker">Poker</Link></h2>
          <h2 style={{display: 'inline-block', paddingLeft: 15}}><Link to="demo/pepper">Pepper</Link></h2>
        </div>
      </Table>
    </main>
  );
};
