import React, { useState, useEffect } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import styled from "styled-components";

const SubMenu = ({ menuItem, sidebarOpen }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => sidebarOpen && setOpen((open) => !open);

  useEffect(() => {
    setOpen(false);
  }, [sidebarOpen]);

  return (
    <>
      <MenuTitle
        onClick={handleToggle}
        onKeyDown={(e) => {
          switch (e.key) {
            case " ":
            case "Enter":
              handleToggle();
              break;
            default:
          }
        }}
        role="button"
        tabIndex="0"
        aria-disabled="false"
      >
        <IconWrapper>{menuItem.icon}</IconWrapper>
        <Label>{menuItem.title}</Label>
        {menuItem.subNav && open ? (
          <RiArrowUpSFill />
        ) : menuItem.subNav ? (
          <RiArrowDownSFill />
        ) : null}
      </MenuTitle>

      {open && menuItem.subNav && (
        <CollapsibleMenu>
          {menuItem.subNav.map((item, index) => {
            return (
              <MenuTitle
                key={index}
                onKeyDown={(e) => {
                  switch (e.key) {
                    case " ":
                    case "Enter":
                      console.log("TODO route");
                      break;
                    default:
                  }
                }}
                role="button"
                tabIndex="0"
                aria-disabled="false"
              >
                <Label>{item.title}</Label>
              </MenuTitle>
            );
          })}
        </CollapsibleMenu>
      )}
    </>
  );
};

const CollapsibleMenu = styled.div`
  padding-left: 51px;
`;

const IconWrapper = styled.div`
  min-width: 51px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Label = styled.div`
  flex: 1 1 auto;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const MenuTitle = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;

  &:hover {
    border-radius: 4px;
    cursor: pointer;
    color: white;
    background-color: lightgrey;
  }
`;

export default SubMenu;
