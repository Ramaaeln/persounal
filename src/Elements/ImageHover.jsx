export default function ImageHover(){
    return(
        <span  
                key=''
                className=" 
                shadow-xl p-1 shadow-gray-900 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow hover:shadow-gray-900 drop-shadow-2xl shadow-inner
                 relative overflow-hidden cursor-pointer group 
                    hover:overflow-visible focus-visible:outline-none
                 "
                aria-describedby="tooltip-01"
                 
                 >

                <span
                        role="tooltip"
                        id="tooltip-01"
                        className="invisible  absolute font-sans top-full left-1/2 z-10 mt-3
                         w-fit -translate-x-1/2 rounded bg-slate-950 
                         p-2 text-sm text-white opacity-0 transition-all before:invisible before:absolute 
                         before:left-1/2 before:bottom-full 
                         before:z-10 before:mt-2 before:-ml-2 before:border-x-8 
                         before:border-b-8 before:border-x-transparent 
                         before:border-b-slate-950 before:opacity-0 
                         before:transition-all before:content-[''] 
                         group-hover:visible group-hover:block group-hover:opacity-100 
                         group-hover:before:visible group-hover:before:opacity-100"
                    >
                         tess
                    </span>
                </span>
    )
}