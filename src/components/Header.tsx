import LogoutButton from "./logoutButton";

const Header = () => {
  return (
    <header className="px-[28px] py-[15px] flex gap-5 justify-end items-center border-b-[0.5px] border-solid border-light-border">
        <span className="text-gray-08 font-bold text-[14px] leading-[114.286%]">홍길동</span>
        <LogoutButton />
    </header>
  );
};

export default Header;
