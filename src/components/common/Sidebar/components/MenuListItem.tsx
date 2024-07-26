import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "@/assets/icons/Icons";
import { SVGProps } from "react";

interface MenuListItemProps {
  label: string;
  link: string;
  icon: React.ElementType<SVGProps<SVGSVGElement>>;
}

export const MenuListItem = (props: MenuListItemProps) => {
  const { label, link, icon: Icon } = props;
  const location = useLocation();
  const isActiveLink = location.pathname === link;

  return (
    <Link
      to={link}
      className={`menu_list_item
      ${isActiveLink ? "active" : ""}`}
    >
      <div className="label-wrapper">
        {isActiveLink ? <Icon color="#FFFFFF" /> : <Icon color="#9197B3" />}
        <div className="label">
          {label}
          {label !== "Dashboard" ? (
            isActiveLink ? (
              <ArrowRight color="#FFFFFF" />
            ) : (
              <ArrowRight color="#9197B3" />
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
};
