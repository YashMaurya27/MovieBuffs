import React from 'react';
import './index.css';
import { Search, User, Menu } from 'react-feather';
import { Button } from 'antd';

export default function Topbar({
  setOpenDrawer,
  ...props
}) {
  return (
    <>
        <header className="header">
          <div className="header-logo">
            <Button type='text' block size='large' onClick={() => setOpenDrawer(true)}>
              <Menu />
            </Button>
            <h1>
              MovieBuffs
            </h1>
          </div>
          <div className="header-nav">
            <Button type='text' block size='large'>
              Home
            </Button>
            <Button type='text' block size='large'>
              Now Showing
            </Button>
            <Button type='text' block size='large'>
              Upcoming
            </Button>
            <Button type='text' block size='large'>
              About
            </Button>
          </div>
          <div className="header-search">
            <Button type='text' block size='large'>
              <Search />
            </Button>
            <Button type='text' block size='large'>
              <User />
            </Button>
          </div>
        </header>
    </>
  )
}
