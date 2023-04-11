import { useState, useEffect } from "react";
import { Editor, Frame, Element } from "@craftjs/core";
import { Viewport, RenderNode } from "../../../editor";
import { Container, Text } from "../../../selectors";
import { Button } from "../../../selectors/Button";
import { VideoBlock } from "../../../selectors/videoBlock";
import { SocialIcon } from "../../../selectors/Socials";
import { CustomeImage } from "../../../selectors/ImageBlock";
import { Divider } from "../../../selectors/Divider";
import { CountDownTimer } from "../../../selectors/Timer";
import { Column } from "../../../selectors/column";
import { ColumnOne } from "../../../selectors/column/ColumnOne";
import { ColumnTwo } from "../../../selectors/column/ColumnTwo";
import { ColumnThree } from "../../../selectors/column/ColumnThree";
import { ColumnFour } from "../../../selectors/column/ColumnFour";
import { ColumnFive } from "../../../selectors/column/ColumnFive";
import { ColumnSix } from "../../../selectors/column/ColumnSix";
import { ImageComponent } from "../../../selectors/ImageComponent";
import { CanvasContainer } from "../../../selectors/CanvasContainer";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { templatesFetchHander } from "../../../../rtk/features/templates/templateSlice";


const EditorContainer = () => {
    // const [draft, setDraft] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { templateList, currentTemplate } = useSelector(state => state.templates);

    const allEmailTemplates = [
        {
            "id": 271,
            "object": "{\"ROOT\":{\"type\":{\"resolvedName\":\"CanvasContainer\"},\"isCanvas\":true,\"props\":{\"flexDirection\":\"column\",\"alignItems\":\"flex-start\",\"justifyContent\":\"flex-start\",\"fillSpace\":\"no\",\"padding\":[\"0\",\"20\",\"0\",\"20\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"background\":{\"r\":255,\"g\":255,\"b\":255,\"a\":1},\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"shadow\":0,\"radius\":0,\"width\":\"600px\",\"minHeight\":\"300px\"},\"displayName\":\"Frame Container\",\"custom\":{\"displayName\":\"App\"},\"hidden\":false,\"nodes\":[\"m-zzrLbFlz\",\"Ic2k2g5KQ9\",\"JLsae6qTDq\",\"2arOPrxXtb\",\"ONzZYEdc8w\",\"xqV1WVz8ua\",\"obnevFqm77\",\"bxINH30oXX\"],\"linkedNodes\":{}},\"obnevFqm77\":{\"type\":{\"resolvedName\":\"Button\"},\"isCanvas\":false,\"props\":{\"width\":\"100px\",\"justifyContent\":\"center\",\"background\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"color\":{\"r\":255,\"g\":192,\"b\":203,\"a\":1},\"buttonStyle\":\"full\",\"text\":\"Button\",\"margin\":[\"5\",\"0\",\"5\",\"0\"],\"padding\":[\"5\",\"0\",\"5\",\"0\"],\"textAlign\":\"center\",\"fontSize\":\"15\",\"fontWeight\":\"500\",\"borderColor\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"textComponent\":{\"fontSize\":\"15\",\"textAlign\":\"center\",\"fontWeight\":\"500\",\"color\":{\"r\":92,\"g\":90,\"b\":90,\"a\":1},\"margin\":[0,0,0,0],\"padding\":[0,0,0,0],\"shadow\":0,\"text\":\"Text\"}},\"displayName\":\"Button\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}},\"xqV1WVz8ua\":{\"type\":{\"resolvedName\":\"Column\"},\"isCanvas\":true,\"props\":{\"background\":{\"r\":255,\"g\":255,\"b\":255,\"a\":1},\"flexDirection\":\"column\",\"alignItems\":\"flex-start\",\"justifyContent\":\"flex-start\",\"padding\":[\"0\",\"0\",\"0\",\"0\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"radius\":0,\"height\":\"200px\",\"width\":\"100%\",\"picture\":\"blob:http://email-kit.io/f5acce38-206e-4f23-9729-9c7276074400\"},\"displayName\":\"Column\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}},\"bxINH30oXX\":{\"type\":{\"resolvedName\":\"CountDownTimer\"},\"isCanvas\":false,\"props\":{\"justifyContent\":\"space-between\",\"padding\":[\"0\",\"0\",\"0\",\"0\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"background\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"color\":{\"r\":255,\"g\":255,\"b\":255,\"a\":1},\"width\":95,\"height\":\"auto\",\"fontSize\":\"30px\",\"textAlign\":\"center\",\"fontWeight\":\"500\"},\"displayName\":\"Timer\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}},\"ONzZYEdc8w\":{\"type\":{\"resolvedName\":\"Container\"},\"isCanvas\":true,\"props\":{\"flexDirection\":\"column\",\"alignItems\":\"flex-start\",\"justifyContent\":\"flex-start\",\"fillSpace\":\"no\",\"padding\":[\"0\",\"0\",\"0\",\"0\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"background\":{\"r\":128,\"g\":128,\"b\":128,\"a\":0.5},\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"shadow\":0,\"radius\":0,\"width\":\"50%\",\"height\":\"200px\"},\"displayName\":\"Container\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}},\"m-zzrLbFlz\":{\"type\":{\"resolvedName\":\"Button\"},\"isCanvas\":false,\"props\":{\"width\":\"100px\",\"justifyContent\":\"center\",\"background\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"color\":{\"r\":255,\"g\":192,\"b\":203,\"a\":1},\"buttonStyle\":\"full\",\"text\":\"Button\",\"margin\":[\"5\",\"0\",\"5\",\"0\"],\"padding\":[\"5\",\"0\",\"5\",\"0\"],\"textAlign\":\"center\",\"fontSize\":\"15\",\"fontWeight\":\"500\",\"borderColor\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"textComponent\":{\"fontSize\":\"15\",\"textAlign\":\"center\",\"fontWeight\":\"500\",\"color\":{\"r\":92,\"g\":90,\"b\":90,\"a\":1},\"margin\":[0,0,0,0],\"padding\":[0,0,0,0],\"shadow\":0,\"text\":\"Text\"}},\"displayName\":\"Button\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}},\"JLsae6qTDq\":{\"type\":{\"resolvedName\":\"Column\"},\"isCanvas\":true,\"props\":{\"background\":{\"r\":255,\"g\":255,\"b\":255,\"a\":1},\"flexDirection\":\"column\",\"alignItems\":\"flex-start\",\"justifyContent\":\"flex-start\",\"padding\":[\"0\",\"0\",\"0\",\"0\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"radius\":0,\"height\":\"200px\",\"width\":\"100%\"},\"displayName\":\"Column\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}},\"2arOPrxXtb\":{\"type\":{\"resolvedName\":\"CustomeImage\"},\"isCanvas\":true,\"props\":{\"flexDirection\":\"column\",\"alignItems\":\"flex-start\",\"justifyContent\":\"flex-start\",\"fillSpace\":\"no\",\"padding\":[\"0\",\"0\",\"0\",\"0\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"background\":{\"r\":78,\"g\":78,\"b\":78,\"a\":1},\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"shadow\":0,\"radius\":0,\"width\":\"100%\",\"minHeight\":\"200px\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\",\"height\":\"200px\"},\"displayName\":\"Image Container\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}},\"Ic2k2g5KQ9\":{\"type\":{\"resolvedName\":\"Container\"},\"isCanvas\":true,\"props\":{\"flexDirection\":\"column\",\"alignItems\":\"flex-start\",\"justifyContent\":\"flex-start\",\"fillSpace\":\"no\",\"padding\":[\"0\",\"0\",\"0\",\"0\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"background\":{\"r\":128,\"g\":128,\"b\":128,\"a\":0.5},\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"shadow\":0,\"radius\":0,\"width\":\"50%\",\"height\":\"200px\"},\"displayName\":\"Container\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}}}",
            "html": "<table style=\"font-family:monospace;width:100%;min-height:300px;max-width:600px\"><tbody> <tr style=\"justify-content: flex-start; flex-direction: column; align-items: flex-start; background: rgb(255, 255, 255); color: rgb(0, 0, 0); margin: 0px; box-shadow: none; border-radius: 0px;\"><td style=\"padding: 20px; align-items: flex-start; justify-content: flex-start; width: 600px; min-height: 300px;\"><table style=\"border-collapse: collapse; display: flex;\"><tbody style=\"border: 2px solid transparent; cursor: pointer;\"><tr><td style=\"width: 100px;\"><a href=\"#\" style=\"text-decoration: none; font-size: 15px;\"><p class=\"contentEditable\" contenteditable=\"false\" style=\"background: rgb(0, 0, 0); color: rgb(255, 192, 203); text-shadow: rgba(0, 0, 0, 0) 2px 2px 2px; text-align: center;\">Button</p></a></td></tr></tbody></table><table style=\"border-collapse: collapse; border-spacing: 0px; width: 100%;\"><tbody><tr><td><div class=\"flex\" style=\"position: relative; user-select: auto; justify-content: flex-start; flex-direction: column; align-items: flex-start; background: rgba(128, 128, 128, 0.5); color: rgb(0, 0, 0); box-shadow: none; border-radius: 0px; flex: unset; display: flex; width: 50%; height: 200px; box-sizing: border-box;\"><span></span></div><div class=\"__resizable_base__\" style=\"width: 100%; height: 100%; position: absolute; transform: scale(0, 0); left: 0px; flex: 0 1 0%;\"></div></td></tr></tbody></table><table style=\"width: 100%;\"><tbody><tr><td style=\"width: 100%; text-align: center; background: url(&quot;&quot;) center top / cover no-repeat rgb(255, 255, 255); border: 0px rgb(0, 0, 0);\"><div style=\"position: relative; user-select: auto; width: auto; height: auto; box-sizing: border-box;\"><p style=\"padding: 10px 20px; font-size: 15px; color: skyblue; font-weight: bold;\">No content here. <br>Drug content right now</p><span><div class=\"\" style=\"position: absolute; user-select: none; width: 100%; height: 10px; top: -5px; left: 0px; cursor: row-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 10px; height: 100%; top: 0px; right: -5px; cursor: col-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 100%; height: 10px; bottom: -5px; left: 0px; cursor: row-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 10px; height: 100%; top: 0px; left: -5px; cursor: col-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 20px; height: 20px; right: -10px; top: -10px; cursor: ne-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 20px; height: 20px; right: -10px; bottom: -10px; cursor: se-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 20px; height: 20px; left: -10px; bottom: -10px; cursor: sw-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 20px; height: 20px; left: -10px; top: -10px; cursor: nw-resize;\"></div></span></div><div class=\"__resizable_base__\" style=\"width: 100%; height: 100%; position: absolute; transform: scale(0, 0); left: 0px; flex: 0 1 0%;\"></div></td></tr></tbody></table><table style=\"border-collapse: collapse; width: 100%; min-height: 200px; background-size: 100% 100%; background-repeat: no-repeat; justify-content: flex-start; flex-direction: column; display: flex; align-items: flex-start; background-image: url(&quot;https://i.ibb.co/z628wYs/defualt.jpg&quot;); color: rgb(0, 0, 0); box-shadow: none;\"><tbody><tr style=\"width: 100%;\"><td style=\"display: flex; flex-direction: column; align-items: flex-start;\"></td></tr></tbody></table><table style=\"border-collapse: collapse; border-spacing: 0px; width: 100%;\"><tbody><tr><td><div class=\"flex\" style=\"position: relative; user-select: auto; justify-content: flex-start; flex-direction: column; align-items: flex-start; background: rgba(128, 128, 128, 0.5); color: rgb(0, 0, 0); box-shadow: none; border-radius: 0px; flex: unset; display: flex; width: 50%; height: 200px; box-sizing: border-box;\"><span></span></div><div class=\"__resizable_base__\" style=\"width: 100%; height: 100%; position: absolute; transform: scale(0, 0); left: 0px; flex: 0 1 0%;\"></div></td></tr></tbody></table><table style=\"width: 100%;\"><tbody><tr><td style=\"width: 100%; text-align: center; background: url(&quot;blob:http://email-kit.io/f5acce38-206e-4f23-9729-9c7276074400&quot;) center top / cover no-repeat rgb(255, 255, 255); border: 0px rgb(0, 0, 0);\"><div style=\"position: relative; user-select: auto; width: auto; height: auto; box-sizing: border-box;\"><p style=\"padding: 10px 20px; font-size: 15px; color: skyblue; font-weight: bold;\">No content here. <br>Drug content right now</p><span><div class=\"\" style=\"position: absolute; user-select: none; width: 100%; height: 10px; top: -5px; left: 0px; cursor: row-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 10px; height: 100%; top: 0px; right: -5px; cursor: col-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 100%; height: 10px; bottom: -5px; left: 0px; cursor: row-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 10px; height: 100%; top: 0px; left: -5px; cursor: col-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 20px; height: 20px; right: -10px; top: -10px; cursor: ne-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 20px; height: 20px; right: -10px; bottom: -10px; cursor: se-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 20px; height: 20px; left: -10px; bottom: -10px; cursor: sw-resize;\"></div><div class=\"\" style=\"position: absolute; user-select: none; width: 20px; height: 20px; left: -10px; top: -10px; cursor: nw-resize;\"></div></span></div><div class=\"__resizable_base__\" style=\"width: 100%; height: 100%; position: absolute; transform: scale(0, 0); left: 0px; flex: 0 1 0%;\"></div></td></tr></tbody></table><table style=\"border-collapse: collapse; display: flex;\"><tbody style=\"border: 2px solid transparent; cursor: pointer;\"><tr><td style=\"width: 100px;\"><a href=\"#\" style=\"text-decoration: none; font-size: 15px;\"><p class=\"contentEditable\" contenteditable=\"false\" style=\"background: rgb(0, 0, 0); color: rgb(255, 192, 203); text-shadow: rgba(0, 0, 0, 0) 2px 2px 2px; text-align: center;\">Button</p></a></td></tr></tbody></table><table style=\"width: 95%; font-weight: 500; background: rgb(0, 0, 0); color: rgb(255, 255, 255);\"><tbody style=\"border-collapse: collapse; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;\"><tr><td style=\"text-align: center; padding: 4px;\"><p>00</p><p>Days</p></td></tr><tr><td><p>00</p><p>Hours</p></td></tr><tr><td><p>19</p><p>Minutes</p></td></tr><tr><td><p>46</p><p>Seconds</p></td></tr></tbody></table></td></tr></tbody></table>",
            "date": "2023-04-11 03:59:44",
            "user": "Shariful"
        },
        {
            "id": 2192,
            "object": "{\"ROOT\":{\"type\":{\"resolvedName\":\"CanvasContainer\"},\"isCanvas\":true,\"props\":{\"flexDirection\":\"column\",\"alignItems\":\"flex-start\",\"justifyContent\":\"flex-start\",\"fillSpace\":\"no\",\"padding\":[\"0\",\"20\",\"0\",\"20\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"background\":{\"r\":255,\"g\":255,\"b\":255,\"a\":1},\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"shadow\":0,\"radius\":0,\"width\":\"600px\",\"minHeight\":\"300px\"},\"displayName\":\"Frame Container\",\"custom\":{\"displayName\":\"App\"},\"hidden\":false,\"nodes\":[\"O65JFEAx3_\",\"-5EsblEIjl\"],\"linkedNodes\":{}},\"O65JFEAx3_\":{\"type\":{\"resolvedName\":\"Button\"},\"isCanvas\":false,\"props\":{\"width\":\"100px\",\"justifyContent\":\"center\",\"background\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"color\":{\"r\":255,\"g\":192,\"b\":203,\"a\":1},\"buttonStyle\":\"full\",\"text\":\"Button\",\"margin\":[\"5\",\"0\",\"5\",\"0\"],\"padding\":[\"5\",\"0\",\"5\",\"0\"],\"textAlign\":\"center\",\"fontSize\":\"15\",\"fontWeight\":\"500\",\"borderColor\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"textComponent\":{\"fontSize\":\"15\",\"textAlign\":\"center\",\"fontWeight\":\"500\",\"color\":{\"r\":92,\"g\":90,\"b\":90,\"a\":1},\"margin\":[0,0,0,0],\"padding\":[0,0,0,0],\"shadow\":0,\"text\":\"Text\"}},\"displayName\":\"Button\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}},\"-5EsblEIjl\":{\"type\":{\"resolvedName\":\"Container\"},\"isCanvas\":true,\"props\":{\"flexDirection\":\"column\",\"alignItems\":\"flex-start\",\"justifyContent\":\"flex-start\",\"fillSpace\":\"no\",\"padding\":[\"0\",\"0\",\"0\",\"0\"],\"margin\":[\"0\",\"0\",\"0\",\"0\"],\"background\":{\"r\":128,\"g\":128,\"b\":128,\"a\":0.5},\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"shadow\":0,\"radius\":0,\"width\":\"50%\",\"height\":\"200px\"},\"displayName\":\"Container\",\"custom\":{},\"parent\":\"ROOT\",\"hidden\":false,\"nodes\":[],\"linkedNodes\":{}}}",
            "html": "<table style=\"font-family:monospace;width:100%;min-height:300px;max-width:600px\"><tbody> <tr style=\"justify-content: flex-start; flex-direction: column; align-items: flex-start; background: rgb(255, 255, 255); color: rgb(0, 0, 0); margin: 0px; box-shadow: none; border-radius: 0px;\" class=\"\"><td style=\"padding: 20px; align-items: flex-start; justify-content: flex-start; width: 600px; min-height: 300px;\"><table style=\"border-collapse: collapse; display: flex;\" class=\"\"><tbody style=\"border: 2px solid transparent; cursor: pointer;\"><tr><td style=\"width: 100px;\"><a href=\"#\" style=\"text-decoration: none; font-size: 15px;\"><p class=\"contentEditable\" contenteditable=\"false\" style=\"background: rgb(0, 0, 0); color: rgb(255, 192, 203); text-shadow: rgba(0, 0, 0, 0) 2px 2px 2px; text-align: center;\">Button</p></a></td></tr></tbody></table><table style=\"border-collapse: collapse; border-spacing: 0px; width: 100%;\"><tbody><tr><td><div class=\"flex\" style=\"position: relative; user-select: auto; justify-content: flex-start; flex-direction: column; align-items: flex-start; background: rgba(128, 128, 128, 0.5); color: rgb(0, 0, 0); box-shadow: none; border-radius: 0px; flex: unset; display: flex; width: 50%; height: 200px; box-sizing: border-box;\"><span></span></div><div class=\"__resizable_base__\" style=\"width: 100%; height: 100%; position: absolute; transform: scale(0, 0); left: 0px; flex: 0 1 0%;\"></div></td></tr></tbody></table></td></tr></tbody></table>",
            "date": "2023-04-11 09:34:50",
            "user": "admin"
        }
    ]

    useEffect(() => {
        const config = global.window?.parent?.emailKit?.config || {}
        setLoading(true)
        // for testing purpose set templateList
        if (!config.baseApi) {
            dispatch(templatesFetchHander(allEmailTemplates))
        }

        fetch(config.baseApi + "fetch-data/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': config.restNonce
            }
        })
            .then(res => res.json())
            .then(({ data }) => {
                // setDraft(data?.history || [])
                dispatch(templatesFetchHander(data?.history || []))
                setLoading(false)

            }).catch((error) => {
                setLoading(false)
            })
    }, []);

    console.log('curr', templateList[currentTemplate]?.user);

    return (
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
                        <Frame>
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

    );
};

export default EditorContainer;