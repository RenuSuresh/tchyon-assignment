import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PaymentIcon from "@material-ui/icons/Payment";
import PublicIcon from "@material-ui/icons/Public";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import SelectAllOutlinedIcon from "@material-ui/icons/SelectAllOutlined";
import FlashOnOutlinedIcon from "@material-ui/icons/FlashOnOutlined";

export const tooltipValue =
  "Onboard now start using any platform you like, instantly.";

export const sidebarMenu = [
  {
    value: "All",
    icons: <DashboardIcon />,
  },
  {
    value: "NEO Bank",
    icons: <AccountBalanceIcon />,
  },
  {
    value: "Cards",
    icons: <PaymentIcon />,
  },
];

export const bannerStepper = [
  {
    numberValue: "1.",
    value: "Discover financial platform",
    icon: <PublicIcon className={"iconSize"} />,
  },
  {
    numberValue: "2.",
    value: "Select your favourite",
    icon: <SelectAllOutlinedIcon className={"iconSize"} />,
  },
  {
    numberValue: "3.",
    value: "Get credential instantly",
    icon: <FlashOnOutlinedIcon className={"iconSize"} />,
  },
];
