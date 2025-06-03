import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import type { RootState } from "app/redux/store";
import styles from "./_loading.module.scss";

interface FullPageLoadingProps {
  opacity?: number;
  target?: string;
}

const FullPageLoading: React.FC<FullPageLoadingProps> = (props) => {
  const {
    // isNotLoginScreen,
    opacity,
    target,
  } = props;

  const { totalLoadingProcess } = useSelector((state: RootState) => state.app);
  if (totalLoadingProcess === 0) {
    // This is no on-going loading, disable loading indicator
    return "";
  }
  // }

  let opacityNum = 0.3;
  if (opacity) {
    // allow caller to change opacity
    opacityNum = opacity;
  }

  const gridContent = document.querySelector(target ?? "#root");

  const backgroundColor = {
    backgroundColor: `rgba(225, 225, 225, ${opacityNum})`,
  };

  const loadingPanel = (
    <div style={backgroundColor} className={styles["lds-ellipsis"]}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );

  if (!gridContent) {
    return null;
  }
  return ReactDOM.createPortal(loadingPanel, gridContent);
};

export default FullPageLoading;
