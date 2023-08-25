import { memo } from "react"





const Skills =({title,deg,degProgress})=>{
    
    return(
        <>
        <div  className="mt-3">
        <span>{title}</span> <span class="pull-right">{deg}</span>
                    <div className="progress mt-2">
                      <div className="progress-bar" role="progressbar" style={{width:degProgress}} ></div>
                    </div>
        </div>
        
        </>
    )
}

export default memo(Skills)