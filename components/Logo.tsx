function Logo() {
  //logo
  return (
    <div className="w-fit">
      <img
        src="logo_word.png"
        className="hidden h-16 md:block"
        alt="nftcompass"
      />
      <img src="logo.png" className="block h-14 md:hidden" alt="nftcompass" />
    </div>
  )
}

export default Logo
