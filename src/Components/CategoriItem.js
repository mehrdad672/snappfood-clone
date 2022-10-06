
const CategoriItem = (props) => {
    
    return <div className=' font-iran flex relative'>
        <div className='rounded-lg'>
            <img className='rounded-xl' src={props.imgurl}></img>
        </div>
        <div className=' absolute bottom-0 right-0 flex flex-row bg-white  rounded-tl-2xl rounded-br-2xl p-1  items-center justify-center space-x-2 px-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="#ff00a6"><path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"/></svg>
            <h1 className=''>{props.imgtag}</h1>
        </div>
    </div>
}
export default CategoriItem;