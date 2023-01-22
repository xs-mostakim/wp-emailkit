
import { toast } from "react-toastify";
import { useEditor, useNode } from "@craftjs/core";
import { imageValidation } from "../../../../helpers/Validation";


export const FileUpload = ({ onChange, title, name }) => {
  const { actions: { setProp } } = useNode();

  const { enabled, actions: { setOptions } } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // Upload image after validation
  const handleChange = async (e) => {
    const image = e.target.files[0];

    if (!imageValidation(image)) {
      toast.error("Only jpg, jpeg, gif, png accepted");
    } else {
      const newFile = URL.createObjectURL(image);
      setProp((props) => (props[name] = newFile));
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <p style={{ fontSize: '14px', color: 'gray' }}>{title}</p>
        <input
          style={{ width: "230px", display: 'none' }}
          type="file"
          placeholder="Enter Actions"
          onChange={(e) => handleChange(e)}
          disabled={!enabled}
          id="actual-btn"
        />
        <label
          htmlFor="actual-btn"
          style={{ background: "#4896ED", padding: "5px 10px", color: 'white', fontSize: '12px' }}
        >
          Upload Image
        </label>
      </div>
    </>
  );
};

