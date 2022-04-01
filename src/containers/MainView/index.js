import React from "react";
import DataRow from "../DataRow";
import { data } from "../../spotify";
import SettingsIcon from "@material-ui/icons/Settings";
import "./style.css";

function MainContainer() {
  return (
    <div className="main__row__container">
      <div className="settings--icon">
        <SettingsIcon
          style={{
            float: "right",
            fontSize: 35,
            color: "#fff",
          }}
          className="settings--icon"
        />
      </div>

      {data.map((item) => {
        return (
          <DataRow
            key={item.id}
            cards={item.cards}
            title={item.title}
            subtitle={item?.subtitle}
          />
        );
      })}
    </div>
  );
}

export default MainContainer;
