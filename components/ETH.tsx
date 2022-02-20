function ETH(props) {
  return (
    <div className="relative">
      <div className="peer  cursor-pointer pr-0.5">
        <img className="h-4" src="eth_color.png" alt="eth" />
      </div>
      <div className="duration-300 translate-y-2 peer-hover:translate-y-0 absolute opacity-0 peer-hover:opacity-100 -bottom-10 bg-dark-base rounded text-gray-300 p-2 text-xs">
        Ethereum
      </div>
    </div>
  );
}

export default ETH;
