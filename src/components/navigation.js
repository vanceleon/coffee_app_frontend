import React, { useState } from 'react';

export default function Navigation() {
  const checkLogin = login => {
    if (login) {
      return (
        <div className='navigationContainer'>
          <div>Create New Brew</div>
          <div>Create New Coffee</div>
          <div>Create New Brew</div>
        </div>
      );
    } else {
      return (
        <div className='navigationContainer'>
          <div>Create New Brew</div>
          <div>Create New Coffee</div>
          <div>Create New Brew</div>
        </div>
      );
    }
  };
}
