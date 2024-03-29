import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/logo.png";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navs = () => {
  const pathname = usePathname();
  // console.log(paths);
  const navs = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "projects",
      path: "/projects",
    },
    {
      name: "servives",
      path: "/services",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <Link href='/' className=' ms-2 md:me-24  sm:hidden'>
        <Image src={logo} className='w-32 me-3 logo' alt=' Logo' />
      </Link>
      <div>
        <ul className='sm:flex mt-10 sm:mt-0  '>
          {navs.map((currElm) => {
            return (
              <>
                <li className='mb-1 '>
                  <Link
                    className='block p-2 py-4 text-base font-sans capitalize text-white  '
                    href={currElm.path}
                  >
                    {currElm.name}
                  </Link>
                </li>
                <hr />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navs;
