"use client";

import { useEffect, useState } from "react";

import { LS } from "@/lib/utils";
import { useDevice } from "@/hooks/utils";
import { DYNAMIC_ROUTES } from "@/lib/config";
import { SessionUserT, USER_TYPES } from "@/interface/global.types";

import { CV, Person, CalendarSecondary, Work } from "@/components/ui/icons";

import {
  BurgerButton,
  BurgerMenuAvatar,
  BurgerMenuListItem,
  BurgerMenuContainer,
  BurgerMenuLogoutButton,
} from "..";

type BurgerMenuT = {
  user: SessionUserT;
};

const BurgerMenu: React.FC<BurgerMenuT> = ({ user }) => {
  const device = useDevice();
  const [isOpen, setIsOpen] = useState(false);

  const isJobSeeker = user?.user_type === USER_TYPES.JOB_SEEKER;
  const isEmployer = user?.user_type === USER_TYPES.EMPLOYER;

  const profileUrl = isJobSeeker
    ? DYNAMIC_ROUTES.user_profile(user.id.toString())
    : isEmployer
    ? DYNAMIC_ROUTES.company_profile(user.id.toString())
    : "";

  const onToggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      LS.setBurgerMenuState(newState);
      return newState;
    });
  };

  useEffect(() => {
    const isOpened = LS.getBurgerMenuState();
    setIsOpen(isOpened);
  }, []);

  useEffect(() => {
    if (device !== "mobile" && device !== "tablet") {
      setIsOpen(false);
      LS.removeBurgerMenuState();
    }
  }, [device]);

  return (
    <>
      <BurgerButton isOpen={isOpen} onToggleMenu={onToggleMenu} />

      {isOpen && user && (
        <BurgerMenuContainer>
          <BurgerMenuAvatar />

          <div className="mt-4 flex flex-col gap-1 h-[calc(100%-64px)]">
            <ul className="flex flex-col">
              <BurgerMenuListItem setIsOpen={setIsOpen} href={profileUrl}>
                <Person />
                <span>პროფილი</span>
              </BurgerMenuListItem>

              <BurgerMenuListItem setIsOpen={setIsOpen}>
                <CalendarSecondary />
                <span>კალენდარი</span>
              </BurgerMenuListItem>

              {isJobSeeker && (
                <>
                  <BurgerMenuListItem setIsOpen={setIsOpen}>
                    <CV />
                    <span>ჩემი რეზიუმე</span>
                  </BurgerMenuListItem>

                  <BurgerMenuListItem setIsOpen={setIsOpen}>
                    <CV />
                    <span>გაგზავნილი რეზიუმეები</span>
                  </BurgerMenuListItem>

                  <BurgerMenuListItem setIsOpen={setIsOpen}>
                    <Work />
                    <span>განცხადების დამატება</span>
                  </BurgerMenuListItem>
                </>
              )}
            </ul>

            {user && <BurgerMenuLogoutButton setIsOpen={setIsOpen} />}
          </div>
        </BurgerMenuContainer>
      )}
    </>
  );
};

export default BurgerMenu;
