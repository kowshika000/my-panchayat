import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import CategoryIcon from "@mui/icons-material/Category";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import PublicIcon from "@mui/icons-material/Public";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RoomIcon from "@mui/icons-material/Room";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PersonPinIcon from "@mui/icons-material/PersonPin";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [subOpen, setSubOpen] = React.useState(false);
  const [locOpen, setLocOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickList = () => {
    setSubOpen(!subOpen);
    setLocOpen(false);
  };
  const handleOthers = () => {
    setLocOpen(!locOpen);
    setSubOpen(false);
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 300,
        height: "100vh",
        position: 'relative',
        overflow: 'auto',
        maxHeight: "100%",
        //    bgcolor: 'gray',
      }}
      //    className='bg-success'
      style={{ backgroundColor: "#94e0ed" }}
      className="navList"
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ForwardToInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Complaint" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Resident Data" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ManageSearchIcon />
        </ListItemIcon>
        <ListItemText primary="Master" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Tax Management" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleClickList}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Tax Collection" />
            {subOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={subOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemIcon>
                  <MapsHomeWorkIcon />
                </ListItemIcon>
                <ListItemText primary="House Tax Collection" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemIcon>
                  <WaterDropIcon />
                </ListItemIcon>
                <ListItemText primary="Water Tax Collection" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText primary="Expense" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleOthers}>
            <ListItemIcon>
              <EditLocationIcon />
            </ListItemIcon>
            <ListItemText primary="Others" />
            {locOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={locOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemIcon>
                  <PublicIcon />
                </ListItemIcon>
                <ListItemText primary="Country" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemIcon>
                  <EmojiFlagsIcon />
                </ListItemIcon>
                <ListItemText primary="State" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemIcon>
                  <PinDropIcon />
                </ListItemIcon>
                <ListItemText primary="District" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary="Block" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemIcon>
                  <MyLocationIcon />
                </ListItemIcon>
                <ListItemText primary="Gram Panchayat" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
