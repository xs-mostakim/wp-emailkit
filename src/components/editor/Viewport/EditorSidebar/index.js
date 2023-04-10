import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TbGridDots } from "react-icons/tb";
import { useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import { GrUndo, GrRedo } from "react-icons/gr";
import { Sidebar } from "../Sidebar";
import { BsEye } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { previewButton } from "../../../../rtk/features/Preview/PreviewSlice";
import { Toolbox } from "../Toolbox";
import TemplateList from "./TemplateList";
import TabBody from "./TabBody";


const tabElement = [
  { name: "Element", value: "1" },
  { name: "Template", value: "2" },
  { name: "Body", value: "3", disabled: true },
];

const tabItemList = [
  { id: "xyz", value: '1', component: <Toolbox /> },
  { id: "ubc", value: '2', component: <TemplateList /> },
  { id: "abc", value: '3', component: <h2>Editing Tools</h2> },
]


const EditorSidebar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");
  const [showStyleBar, setShowStyleBar] = useState(false);

  const { enabled, connectors, actions } = useEditor((state) => {
    /**
     * When user select any element after dragged, then it's style menu open.
     * And if user remove any dragged element, then widget menu open 
    */
    if (state.events.selected.size) setShowStyleBar(true)
    return {
      enabled: state.options.enabled,
    }
  });


  const handleStyleBar = () => {
    setShowStyleBar(!showStyleBar);
    setValue("1");
  };



  return (
    <Box className='editor-sidebar-container' style={{ display: true ? "block" : "none" }}>
      <div className='editor-sidebar-header'>
        <p className='widgets'>Widgets</p>
        <p className='toggle' onClick={handleStyleBar}>
          <TbGridDots />
        </p>
      </div>
      {showStyleBar ?
        <Sidebar /> :
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={(_, newValue) => setValue(newValue)}>
              {tabElement.map(item => <Tab key={item.value} label={<p className="tab-item-name">{item.name}</p>} value={item.value} disabled={item.disabled}/>)}
            </TabList>
          </Box>
          <div className='editor-sidebar-body'>
            {
              tabItemList.map(item => <TabPanel key={item.id} value={item.value}>{item.component}</TabPanel>)
            }
          </div>
        </TabContext>
      }

      <div className='editor-sidebar-footer'>
        <Tooltip title="Undo" placement="bottom">
          <button className='redo-undo' onClick={() => actions.history.undo()}>
            <GrUndo />
          </button>
        </Tooltip>
        <Tooltip title="Redo" placement="bottom">
          <button className='redo-undo' onClick={() => actions.history.redo()}>
            <GrRedo />
          </button>
        </Tooltip>
        <Tooltip title="preview" placement="bottom">
          <button onClick={() => dispatch(previewButton())}>
            <BsEye className='preview-btn' />
          </button>
        </Tooltip>
      </div>
    </Box>
  );
};

export default EditorSidebar


