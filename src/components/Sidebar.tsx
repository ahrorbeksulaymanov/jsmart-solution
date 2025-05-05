import { NavLink } from "react-router-dom";
import { private_routes } from "../routes";

const Sidebar = () => {

  return (
    <aside className="flex-shrink-0 w-[250px] h-screen py-[41px] px-[21px] flex flex-col border-r-[0.5px] border-solid border-light-border bg-sidebar-bg">
        <NavLink to={'/'} className={"mb-[50px]"} >
          <h2 className="text-[30px] text-center font-bold leading-[133%] bg-gray-07 py-[30px] text-white">로고</h2>
        </NavLink>
      
      <nav className="flex flex-col gap-[10px]">
        {
          private_routes?.map((item) => (
            item.config.isMenu ?
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-07 font-bold border-[1px] border-solid border-black bg-white text-center py-3 ${isActive ? "active-menu" : ""
                  }`
                }
              >
                {item?.name}
              </NavLink> : undefined
          ))
        }
      </nav>
    </aside>
  );
};

export default Sidebar;
