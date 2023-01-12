import React, { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/Axios";
import { Editor, Frame, Element } from "@craftjs/core";
import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { VideoBlock } from "../components/selectors/videoBlock";
import { SocialIcon } from "../components/selectors/Socials";
import { CustomeImage } from "../components/selectors/ImageBlock";
import { Divider } from "components/selectors/Divider";
import { CountDownTimer } from "components/selectors/Timer";
import { Column } from "components/selectors/column";
import { ColumnOne } from "components/selectors/column/ColumnOne";
import { ColumnTwo } from "components/selectors/column/ColumnTwo";
import { ColumnThree } from "components/selectors/column/ColumnThree";
import { ColumnFour } from "components/selectors/column/ColumnFour";
import { ColumnFive } from "components/selectors/column/ColumnFive";
import { ColumnSix } from "components/selectors/column/ColumnSix";
import { ImageComponent } from "components/selectors/ImageComponent";
import { TopTabPanel } from "../components/selectors/TabPannel/TopTabPanel";
import { CanvasContainer } from "components/selectors/CanvasContainer";
import { ToastContainer } from "react-toastify";
import toastCss from "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux'
import store from "../rtk/app/store"


const App = () => {
  const [showDraft, setShowDraft] = useState("");
  const [show, setShow] = useState(false);

  // Set Asynchronous function for Render Draft UI
  const isTrue = () => { setTimeout(() => { setShow(true) }, 500) };

  //GET DRAFT DATA FROM SERVER
  useEffect(() => {
    const fatchData = async () => {
      // await axiosInstance.get("emailkit/wp-json/Emailkit/v1/fetch-data/")
      await axiosInstance.get("data").then((res) => {
        const draft = res.data;
        setShowDraft(draft.object);
      });
    };
    fatchData();
    isTrue();
  }, [showDraft]);



  return (
    <Provider store={store}>
      <div className=" h-screen">
        <Editor
          resolver={{
            Container, Text, Button, CustomeImage, Divider, CountDownTimer,
            SocialIcon, VideoBlock, Column, ImageComponent, CanvasContainer, TopTabPanel,
            ColumnOne, ColumnTwo, ColumnThree, ColumnFour, ColumnFive, ColumnSix,
            // List,// TabBody,// TabPannel,
          }}
          enabled={false}
          onRender={RenderNode}
        >
          {/* Toast for show error and success alert */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnHover
            theme="light"
          />
          <Viewport>
            {show && (
              <Frame data={showDraft}>
                <Element
                  canvas
                  is={CanvasContainer}
                  width="600px"
                  minHeight="300px"
                  background={{ r: 255, g: 255, b: 255, a: 1 }}
                  color={{ r: 0, g: 0, b: 0, a: 1 }}
                  padding={["0", "20", "0", "20"]}
                  custom={{ displayName: "App" }}
                ></Element>
              </Frame>
            )}
          </Viewport>
        </Editor>
      </div>
    </Provider>
  );
};

export default App;