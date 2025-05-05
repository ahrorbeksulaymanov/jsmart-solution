import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { FormEvent, useState } from "react";

const LoginPage = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(false)

    const onFinish = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
        const password = (form.elements.namedItem("password") as HTMLInputElement)?.value;

        if (password === '12345' && email === "smart@jss21.com") {
            dispatch(setUser({ username: "홍길동" }));
        } else {
            setError(true)
        }
    };

    return (
        <div className="">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white w-full sm:max-w-[530px] max-w-[90%] sm:p-[60px] p-[30px] rounded-[5px] auth-form-shadow">
                    <h2 className="text-[36px] font-semibold text-center sm:mb-[30px] mb-[20px] text-gray-08">로그인</h2>
                    <form
                        onSubmit={onFinish}
                        onChange={() => setError(false)}
                        className="sm:space-y-[30px] space-y-[20px]"
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-05 mb-1">
                                이메일: <span className="text-gray-05">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="smart@jss21.com"
                                className={
                                    `w-full bg-gray-02 relative z-10 rounded-t-[2px] rounded-b-none px-5 py-[13px] focus:outline-none text-gray-08 border-b-[2.5px] border-solid mb-0  ${error ? "border-danger" : "border-gray-04 focus:border-blue-400"}`
                                }
                            />
                            {
                                error ?
                                    <span className="block w-max bg-danger text-white text-[12px] leading-normal py-1 px-[10px] rounded-[2px] slide-down">이메일을 다시 확인해주세요.</span> : ""
                            }
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-05 mb-1">
                            자동 로그인: <span className="text-gray-05">*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className={
                                    `w-full bg-gray-02 relative z-10 rounded-t-[2px] rounded-b-none px-5 py-[13px] focus:outline-none text-gray-08 border-b-[2.5px] border-solid mb-0  ${error ? "border-danger" : "border-gray-04 focus:border-blue-400"}`
                                }
                            />
                            {
                                error ?
                                    <span className="block w-max bg-danger text-white text-[12px] leading-normal py-1 px-[10px] rounded-[2px] slide-down">이메일을 다시 확인해주세요.</span> : ""
                            }                       
                            </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="mr-[6px] w-[18px] h-[18px] bg-white border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="text-sm text-gray-700 font-normal">자동 로그인</label>
                        </div>
                        
                        <button
                            type="submit"
                            className="text-[18px] font-bold w-full bg-gray-07 text-white py-[10px] px-[22px] rounded hover:bg-gray-08 transition cursor-pointer"
                        >
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;