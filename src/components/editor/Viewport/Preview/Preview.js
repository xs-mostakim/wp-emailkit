import React from 'react';
import { Tooltip } from "@material-ui/core";
import { Box, Modal, Divider } from '@mui/material'
import { AiOutlineDesktop, AiOutlineTablet, AiOutlineMobile } from "react-icons/ai";
import { PreviewSize } from "./PreviewSizeOption"
import { ExitPreviewButton } from "../../../../rtk/features/Preview/PreviewSlice"
import { responsive } from "../../../../rtk/features/Preview/PreviewResonsiveSlice"
import { useSelector, useDispatch } from 'react-redux';


const ResponsiveOptions = [
  { id: 1, title: "Desktop", icon: AiOutlineDesktop, size: '1240px' },
  { id: 2, title: "Tablet", icon: AiOutlineTablet, size: '748px' },
  { id: 3, title: "Mobile", icon: AiOutlineMobile, size: '344px' },
]


export const Preview = ({ htmlData }) => {
  const dispatch = useDispatch()
  const Open = useSelector((state) => state.preview.value)
  const previewDrop = useSelector((state) => state.Responsive.value)

  const handleExitButton = () => { dispatch(ExitPreviewButton()) }
  const handleResponsiveOption = (item) => { dispatch(responsive(item.size)) }
  const htmlFromProps = htmlData.current;
  const outerData = htmlFromProps.outerHTML;

  return (
    <div>
      <Modal open={Open}>
        <Box sx={style}>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', width: '65%', justifyContent: 'end' }}>
              {ResponsiveOptions.map((item) => (
                <Tooltip key={item.id} title={item.title} placement="bottom">
                  <button onClick={() => handleResponsiveOption(item)}>
                    <item.icon style={iconStyle} />
                  </button>
                </Tooltip>
              ))}
              <PreviewSize />
            </div>
            <div style={{ width: '35%', display: 'flex', justifyContent: 'end', fontSize: "12px" }}>
              <button style={exitButton} onClick={handleExitButton}>Exit Preview</button>
            </div>
          </div>

          <Divider style={{ margin: '10px 0px' }} />

          <div style={headerBottom}></div>
          <div style={{ width: `${previewDrop}`, margin: '0 auto', boxShadow: "0px 0px 1px 0px black", paddingBottom: '10px', minHeight: '450px', }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0px 10px' }}>
              <div dangerouslySetInnerHTML={{ __html: outerData }} />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}


const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1310px',
  height: '550px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  overflowY: 'scroll'
};

const iconStyle = {
  fontSize: '32px',
  border: '1px solid black',
  padding: '5px',
  borderRadius: '50%',
  cursor: 'pointer',
  margin: '0px 5px'
}

const exitButton = {
  width: '100px',
  padding: '7px',
  color: 'black',
  border: '1px solid gray',
  borderRadius: '5px'
}
const headerBottom = {
  width: "100%",
  height: '20px',
  background: 'gray'
}
