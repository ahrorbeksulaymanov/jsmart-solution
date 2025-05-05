import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useState } from "react";

const LogoutButton = () => {
    
    const dispatch = useDispatch();
    const [showConfirm, setShowConfirm] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        setShowConfirm(false);
    };

    return (
        <>
            <button 
                className="cursor-pointer bg-gray-07 text-white py-[2.5px] px-4 rounded-[2px] text-[14px] font-bold leading-[114.286%]"
                onClick={() => setShowConfirm(true)}
            >
                로그아웃
            </button>
            {showConfirm && (
                <div onClick={() => setShowConfirm(false)} className="fixed top-0 left-0 w-full h-full flex justify-end items-start z-50">
                    <div onClick={(e) => e.stopPropagation()} className="mt-12 mr-6 bg-white shadow-md w-[200px] h-[1] slide-down">
                        <div className="h-[124px] flex justify-center items-center">
                            <p className="text-[10px] font-bold leading-[160%] text-center text-gray-800">
                                로그아웃 하시겠습니까?
                            </p>
                        </div>
                        <div className="flex">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="w-full leading-[160%] text-[10px] font-bold py-[5px] text-black cursor-pointer hover:bg-gray-02 border-[0.5px] border-solid border-light-border"
                            >
                                취소
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full leading-[160%] text-[10px] font-bold py-[5px] text-black cursor-pointer hover:bg-gray-02 border-[0.5px] border-l-[0] border-solid border-light-border"
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default LogoutButton;