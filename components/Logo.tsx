function Logo(props) {
  //logo
  return (
    <div className="w-fit">
      <img
        src="logo_word.png"
        className="h-16 hidden md:block"
        alt="nftcompass"
      />
      <img src="logo.png" className="h-14 block md:hidden" alt="nftcompass" />
    </div>
  );
}

export default Logo;
