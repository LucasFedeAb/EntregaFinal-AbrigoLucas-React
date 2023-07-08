import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={`${style.containerLoad}`}>
      <div className={`${style.loader}`}>
        <div className={`${style.block} ${style.b_1}`}></div>
        <div className={`${style.block} ${style.b_2}`}></div>
        <div className={`${style.block} ${style.b_3}`}> </div>
        <div className={`${style.block} ${style.b_4}`}> </div>
        <div className={`${style.block} ${style.b_5}`}> </div>
        <div className={`${style.block} ${style.b_6}`}> </div>
        <div className={`${style.block} ${style.b_7}`}> </div>
        <div className={`${style.block} ${style.b_8}`}> </div>
      </div>
    </div>
  );
};

export default Loading;
