import React, { useState } from "react";
import styled from "styled-components";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import SubMenu from "./SubMenu";
import { schema } from "./schema";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => setOpen((open) => !open);

  return (
    <Aside open={open}>
      <LogoWrapper>
        <Logo open={open} src="/vercel.svg" alt="Vercel Logo" />

        <ToggleIcon open={open}>
          {open ? (
            <IoIosArrowDropleftCircle size={24} onClick={handleToggle} />
          ) : (
            <IoIosArrowDroprightCircle size={24} onClick={handleToggle} />
          )}
        </ToggleIcon>
      </LogoWrapper>
      <nav>
        <div>
          {schema.map((menuItem, index) => (
            <SubMenu key={index} menuItem={menuItem} sidebarOpen={open} />
          ))}
        </div>
      </nav>
    </Aside>
  );
};

const Aside = styled.aside`
  width: ${({ open }) => (open ? "250px" : "80px")};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px 13px;
  overflow: hidden;
`;

const Logo = styled.img`
  position: absolute;
  left: ${({ open }) => !open && "-133px"};
  top: 0;
  width: 120px;
  height: 35px;
`;

const ToggleIcon = styled.div`
  position: absolute;
  right: ${({ open }) => open && "0"};
  top: 6px;
`;

const LogoWrapper = styled.div`
  position: relative;
  height: 35px;
  margin-bottom: 40px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Sidebar;
