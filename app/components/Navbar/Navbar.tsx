import {
  Affix,
  Col,
  Drawer,
  Row,
  Space,
} from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import LoginHandler from "../LoginHandler/LoginHandler";
import './Navbar.scss';
import Logo from "../Logo/Logo";
import NavMenus, { MiniNavMenus } from "./NavMenus";
import dynamic from "next/dynamic";
const CurrencySwitch = dynamic(() => import('../CurrencySwitch/CurrencySwitch'), {
  ssr: false,
});

export const Navbar = ({
  menus,
  logo,
  smallLogo
}: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuSwitch = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Affix
        className="navbar_container py-2 px-5 md:px-10"
      >
        <Row className="navbar" justify={"space-between"} align={"middle"}>
          <Col lg={3} md={4} sm={0} xs={0}>
            <Logo src={logo} />
          </Col>
          <Col lg={0} md={0} sm={2} xs={3}>
            <Logo src={smallLogo} />
          </Col>
          <Col lg={13} md={0} sm={0} xs={0}>
            <NavMenus menus={menus} />
          </Col>
          <Col lg={8} sm={0} md={0} xs={0}>
            <Space size={"large"} style={{ float: "right" }}>
              <SearchBar />
              <CurrencySwitch />
              <LoginHandler />
            </Space>
          </Col>
          <Col lg={0} sm={14} md={16} xs={12}>
            <Space style={{ float: "right" }}>
              <SearchBar small />
            </Space>
          </Col>
          <Col
            md={2}
            sm={2}
            xs={2}
            lg={0}
            className="flex justify-end lg:hidden"
          >
            <div className="p-4 cursor-pointer !pe-0" onClick={menuSwitch}>
              <MenuOutlined className="text-xl" />
            </div>
          </Col>
        </Row>
      </Affix>
      <Drawer
        placement="right"
        open={menuOpen}
        onClose={menuSwitch}
        closable={false}
        className="menu-drawer"
        title={
          <Row justify={"space-between"} align={"middle"}>
            <Col lg={0} md={1} sm={2} xs={3}>
              <Logo src={smallLogo} />
            </Col>
            <Col>
              <Space size={'large'}>
                <CurrencySwitch />
                <LoginHandler />
                <CloseOutlined className="cursor-pointer text-xl text text-danger" onClick={menuSwitch} />
              </Space>
            </Col>
          </Row>

        }
      >
        <MiniNavMenus menus={menus} />
      </Drawer>
    </>
  );
};

export default Navbar;
