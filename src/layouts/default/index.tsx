import Header from "@/components/header/header";
import useSideMenu from "@/stores/useSideMenu";
import React from "react";
import styled from "styled-components";
import { SIDE_MENU_CONTENT_WIDTH } from "@/layouts/constants";
import SideMenu from "../SideMenu";
import SideMenuContent from "../SideMenuContent";

type Props = {
  children: React.ReactElement;
};

const Content = styled.div`
  width: calc(100vh - ${SIDE_MENU_CONTENT_WIDTH});
  width: 100%;
  overflow-y: auto;

  -webkit-scrollbar: {
    display: none;
  }
`;

export default function Default({ children }: Props) {
  const isSideMenuOpen = useSideMenu((state) => state.isOpen);

  return (
    <>
      <div className="bg-[rgb(255,255,255)] text-black font-Jost scrollbar-thin z-0">
        <div className="flex">
          <div className="flex">
            <SideMenu />
            {isSideMenuOpen && <SideMenuContent />}
          </div>
          <Content>{children}</Content>
        </div>
      </div>
    </>
  );
}
