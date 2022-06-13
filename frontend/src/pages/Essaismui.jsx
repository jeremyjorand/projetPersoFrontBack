import Buttonb from "@components/Buttonb";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import CancelIcon from "@mui/icons-material/Cancel";
import Chip from "@mui/material/Chip";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function Home(props) {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState("recents");
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      // primary: {
      //   main: "#0971f1",
      //   darker: "#053e85",
      // },
      but1: {
        main: "#2eb7f1",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Buttonb colors="error" text="gallery" size="small" />
      <Buttonb colors="success" text="admin" />
      <Buttonb colors="but1" text="WIM" size="large" />
      <Box width={300}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          color="but1"
        />
      </Box>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        color="but1"
      />
      <SvgIcon {...props}>
        <path d={CancelIcon} />
      </SvgIcon>
      <Chip icon={<CancelIcon />} label="Delete" />
      <Chip icon={<CloudDownloadIcon />} label="Telechargement" />
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">Error!</Alert>
        <Alert severity="warning">warning!</Alert>
        <Alert severity="info">Info!</Alert>
        <Alert severity="success">Success!</Alert>
      </Stack>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange2}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
      {/* installation du package supplementaire ()npm install --save material-ui-popup-state() */}
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <Button
              variant="contained"
              sx={{ width: "50%" }}
              {...bindTrigger(popupState)}
            >
              Dashboard
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
    </ThemeProvider>
  );
}
