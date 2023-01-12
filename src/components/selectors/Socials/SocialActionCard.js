
import style from "./SocailURLCard.module.css";
import { FaTrashAlt } from "react-icons/fa";

const SocailActionCard = ({ cardItem, handleDelete, handleChange, error, newIndex }) => {
  return (
    <>
      {cardItem?.map((item, index) => (
        <div className={`${style.main}`} key={item.id}>
          <div style={{ justifyContent: " space-between", display: "flex" }}>
            <div className=" flex">
              <img src={item.icon} className={`${style.iconStyle}`} />
              <p style={{ fontSize: "14px", marginTop: "3px" }}>{item.text}</p>
            </div>
            <div>
              <p className={style.deleteButton} onClick={() => handleDelete(item)}>
                <FaTrashAlt />
              </p>
            </div>
          </div>
          <div className={`${style.inputStyle}`}>
            <p className="pb-0">URL</p>
            <input
              className="border border-1"
              type="text"
              placeholder={item.url}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          {newIndex == index ? (
            <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default SocailActionCard;
