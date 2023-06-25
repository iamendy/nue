const Code = () => {
  return (
    <div className=" min-h-[270px] ">
      <div className="w-full absolute lg:w-[70%]">
        <div className="flex items-center h-9 bg-white/10 rounded-t-lg pl-3 space-x-2">
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
        </div>
        <div className="border-x-white/10 border-x pl-4 pb-4 pt-4 text-sm flex font-space-mono space-x-4">
          <div className="">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </div>
          <div>
            <p className="text-green-500">
              apiVersion: <span className="text-white">v1</span>
            </p>
            <p className="text-red">
              kind: <span className="text-white">Pod</span>
            </p>
            <p className="text-gray">metadata:</p>
            <p className="text-red">
              {" "}
              &nbsp; name:{" "}
              <span className="text-white">with node affinity</span>
            </p>
            <p className="text-red">spec:</p>
            <p className="text-red">&nbsp; affinity:</p>
            <p className="text-white">&nbsp; &nbsp; nodeAffinity:</p>
            <p className="text-white">
              &nbsp; &nbsp; &nbsp; requiredDuringScheduling
            </p>
            <p className="text-red">
              &nbsp; &nbsp; &nbsp; &nbsp; nodeSelectorTerms
            </p>
            <p className="text-green-500"> &nbsp; &nbsp; - matchExpressions:</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Code;
