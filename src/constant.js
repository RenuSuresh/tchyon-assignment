import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PaymentIcon from "@material-ui/icons/Payment";

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
