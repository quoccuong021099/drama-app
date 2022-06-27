import MailIcon from "@mui/icons-material/Mail";
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import React from "react";

const DrawerHeaderStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  cursor: "pointer",
}));

const DrawerStyled = styled(MuiDrawer)(() => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  marginRight: "340px",
}));

export default function SidebarRight() {
  return (
    <DrawerStyled variant="permanent" anchor="right">
      <DrawerHeaderStyled>
        <Avatar
          alt="Quốc Cường"
          src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/279772589_715536229597578_5525815957839818557_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4URomd3mXZ0AX-F70Vs&_nc_ht=scontent.fdad3-5.fna&oh=00_AT_KRE4DUSelJwbTY2Ur-1SPFrEfmy6iXcUXwED4fPsQyg&oe=62BC5797"
        />
      </DrawerHeaderStyled>
      <Divider />
      <List sx={{ py: 0, width: "340px" }}>
        {[1, 2, 3].map((text) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={true}
              sx={{
                minHeight: 48,
                justifyContent: "center",
                m: 0.5,
                p: 2,
              }}
            >
              <MailIcon />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerStyled>
  );
}
