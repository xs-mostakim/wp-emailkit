import { useEditor } from "@craftjs/core";
import { MdOutlineDateRange } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { currentTemplateHandler } from "../../../../rtk/features/templates/templateSlice";

const TemplateList = () => {
  const dispatch = useDispatch();
  const { templateList, currentTemplate } = useSelector((state) => state.templates);

  const { actions } = useEditor();
  const handleTemplateClick = (index) => {
    console.log('actions', actions, templateList[index]?.object, templateList);
    dispatch(currentTemplateHandler(index));
    actions.deserialize(templateList[index]?.object);

  }
  return (
    <div className="template-list-container">
      {templateList.length === 0 && <h5 className="no-data-show">No templates yet.</h5>}
      {templateList.map((template, index) => <div onClick={() => handleTemplateClick(index)} key={template.id} className={`template-card-body ${currentTemplate === index ? 'active-template' : ''}`}>
        <div className="template-card-create-content">
          <MdOutlineDateRange size={18} />
          <span className="template-card-calender">Created at <span>27-03-2023</span></span>
        </div>
        <div className="template-card-content">
          <p className="template-card-heading">emailkit.io</p>
          <p className="template-card-main-content">Need fully optimized and plagiarism-free content for your WooCommerce pages? This AI content writer is ready for it. Use this template of GetGenie AI that can offer instantly optimized
          </p>
        </div>
      </div>)}
    </div>
  );
};

export default TemplateList;