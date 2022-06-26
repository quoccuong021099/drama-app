import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import { Divider, Drawer, ListItemIcon } from "@mui/material";
import { Box } from "@mui/system";

const DrawerHeaderStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  cursor: "pointer",
}));

const DrawerStyled = styled(MuiDrawer)(() => ({
  width: 64,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

export default function HeaderCommon({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DrawerStyled variant="permanent">
      <DrawerHeaderStyled onClick={handleOpen}>
        <Avatar
          alt="Quốc Cường"
          src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/279772589_715536229597578_5525815957839818557_n.jpg?stp=c0.10.60.60a_cp0_dst-jpg_p60x60&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4URomd3mXZ0AX-F70Vs&_nc_ht=scontent.fdad3-5.fna&oh=00_AT_KRE4DUSelJwbTY2Ur-1SPFrEfmy6iXcUXwED4fPsQyg&oe=62BC5797"
        />
      </DrawerHeaderStyled>
      <Divider />
      <List sx={{ py: 0 }}>
        {[1, 2, 3].map((text, index) => (
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
      <div>
        <Drawer anchor="left" open={open} onClose={handleClose}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleClose}
            onKeyDown={handleClose}
          >
            <List>
              <ListItem>Your profile</ListItem>
              <Divider />
              {[1, 2, 3].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
    </DrawerStyled>
  );
}
