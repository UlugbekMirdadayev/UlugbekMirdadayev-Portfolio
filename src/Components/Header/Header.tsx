import { FC } from "react";
import * as s from "./style";
import { NavLink } from "react-router-dom";

type Prop = {};

export const Header: FC<Prop> = () => {
  return (
    <s.Header>
      <div className="container">
        <s.Row>
          <s.Row>
            <s.Logo>
              <NavLink to={"/"}>
                <span>MIRDADAYEV</span>
              </NavLink>
            </s.Logo>
            <s.Navlinks>
              <NavLink to={"/works"}>Портфолио</NavLink>
              <NavLink to={"/about"}>Обо мне</NavLink>
              <NavLink to={"/news"}>Новости</NavLink>
              <NavLink to={"/contact"}>Контакты</NavLink>
            </s.Navlinks>
          </s.Row>
          <s.Contact href="tel:+998996572600">
            +998996572600
            <span>Свяжитесь со мной</span>
          </s.Contact>
        </s.Row>
      </div>
    </s.Header>
  );
};
