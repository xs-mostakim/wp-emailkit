import { useState, useEffect } from "react";
import { Editor, Frame, Element } from "@craftjs/core";
import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { VideoBlock } from "../components/selectors/videoBlock";
import { SocialIcon } from "../components/selectors/Socials";
import { CustomeImage } from "../components/selectors/ImageBlock";
import { Divider } from "../components/selectors/Divider";
import { CountDownTimer } from "../components/selectors/Timer";
import { Column } from "../components/selectors/column";
import { ColumnOne } from "../components/selectors/column/ColumnOne";
import { ColumnTwo } from "../components/selectors/column/ColumnTwo";
import { ColumnThree } from "../components/selectors/column/ColumnThree";
import { ColumnFour } from "../components/selectors/column/ColumnFour";
import { ColumnFive } from "../components/selectors/column/ColumnFive";
import { ColumnSix } from "../components/selectors/column/ColumnSix";
import { ImageComponent } from "../components/selectors/ImageComponent";
import { CanvasContainer } from "../components/selectors/CanvasContainer";
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux'
import store from "../rtk/app/store"



const App = () => {
    const [draft, setDraft] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const config = global.window?.parent?.emailKit?.config || {}
        setLoading(true)
        fetch(config.baseApi + "fetch-data/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': config.restNonce
            }
        })
            .then(res => res.json())
            .then(({ data }) => {
                setDraft(data?.history || [])
                setLoading(false)

            }).catch((error) => {
                setLoading(false)
            })
    }, []);





    return (
        <Provider store={store}>
            <div className="email-builder-editor-container h-screen" >
                <Editor
                    resolver={{
                        Container, Text, Button, CustomeImage, Divider, CountDownTimer,
                        SocialIcon, VideoBlock, Column, ImageComponent, CanvasContainer,
                        ColumnOne, ColumnTwo, ColumnThree, ColumnFour, ColumnFive, ColumnSix,
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
                        {!loading && (
                            <Frame data={draft[0]?.email_object || ''}>
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