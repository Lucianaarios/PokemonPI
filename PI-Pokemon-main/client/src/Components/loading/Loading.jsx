import style from './loading.module.css'


const Loading = () =>{
    return (
        <div className={style.container}>
          <div className={style['img-container']}>
            <img src='/assets/imgs/imgLoading.gif' alt="" />
          </div>
          <div >
            <h1 className={style.loading}>Loading...</h1>
          </div>
        </div>
      );
   
}

export default Loading