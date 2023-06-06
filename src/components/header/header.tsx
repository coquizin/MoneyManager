import useScroll from "@/hooks/useOnScrolls";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SideSheet from "./components/sidesheet";
import { MenuToggle, MenuToggleSpan } from "./styles";
import { ArrowDown } from "@styled-icons/evaicons-solid";
import MenuProfile from "./components/menuProfile";
import { useCreateId } from "@/stores/useId";
import { useGetCostumer } from "@/services/consumers";

export default function Header() {
  const isScrolled = useScroll(0);

  const [showMenu, setShowMenu] = useState(false);
  const [showMenuUser, setShowMenuUser] = useState(false);
  const userId = useCreateId((state) => state.data.id);

  const user = useGetCostumer(userId);

  return (
    <>
      <header className=" px-4 max-w-[340px] ">
        <div className="flex items-center justify-center w-full h-16 px-2 text-sm md:h-24 md:px-4">
          <div className="grid items-center justify-between grid-cols-3 w-content-wrapper-max">
            <Link href={"/"} passHref>
              <div className="flex justify-center gap-2 cursor-pointer md:ml-0 justify-self-center md:justify-self-start md:max-w-fit">
                <Image
                  alt="logo iPets"
                  src="/assets/images/LogoPets.svg"
                  width={45}
                  className="min-w-max"
                  height={45}
                />
                {/* <div className="flex justify-center text-3xl font-medium text-yellow-500">
                    iPets
                  </div> */}
              </div>
            </Link>

            {Boolean(user.data) ||
              (user.isFetching && (
                <div className="relative flex items-center gap-4 justify-self-end">
                  <div
                    onClick={() => setShowMenuUser(!showMenuUser)}
                    className={`flex items-center gap-1 cursor-pointer group`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full">
                      {user.data?.avatar ? (
                        <Image
                          alt="foto de perfil"
                          src="/spanssets/images/profile.jpg"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-10 h-10 text-white uppercase bg-blue-900 rounded-full">
                          {user.data?.name?.slice(0, 2) as string}
                        </div>
                      )}
                    </div>
                    <ArrowDown
                      size={20}
                      className={`duration-200 text-secundary group-hover:translate-y-[2px] ${
                        showMenuUser && "rotate-180"
                      }`}
                    />
                  </div>
                  {showMenuUser && (
                    <MenuProfile
                      username={user.data?.name?.split(" ")[0] as string}
                      avatar={user.data?.avatar || ""}
                      isOpen={showMenuUser}
                      setShowMenu={setShowMenuUser}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </header>
    </>
  );
}
