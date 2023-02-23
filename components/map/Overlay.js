import React from "react";

const Overlay = (props) => {
  return (
    <div className="wrap">
      <div className="info">
        <div
          className="px-4 py-3 shadow-lg text-sm bg-[#F53354] relative font-medium text-center
         text-white rounded-full after:'' after:w-0 after:h-0 after:border-8 after:border-[#F53354] 
         after:absolute after:-bottom-4 after:left-1/2 after:translate-x-[-50%] after:border-r-transparent after:border-b-transparent after:border-l-transparent"
        >
          {props.data.title}
        </div>
        <div className="body">
          <div className="desc">
            {/* <div className="ellipsis">{props.data.address}</div> */}
            {/* <div className="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div> */}
            {/* <div>
              <a
                href="https://www.kakaocorp.com/main"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                홈페이지
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
