import { MdOutlineDateRange } from "react-icons/md";

const TemplateList = () => {


  return (
    <div className="template-list-container">
      {[1, 2, 3].map((template, index) => <div key={index} className="template-card-body">
        <div className="template-card-create-content">
          <MdOutlineDateRange size={18} />
          <span className="template-card-calender">Created at <span>27-03-2023</span></span>
        </div>
        <div className="template-card-content">
          <p className="template-card-heading">emailkit.io</p>
          <p className="template-card-main-content">The features of GetGenie.AI at a glance:Need fully optimized and plagiarism-free content for your WooCommerce pages? This AI content writer is ready for it. Use this template of GetGenie AI that can offer instantly optimized
          </p>
        </div>
      </div>)}
    </div>
  );
};

export default TemplateList;