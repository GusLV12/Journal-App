import { Box, Drawer, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ({drawerWidth}) => {
  const {displayName} = useSelector(state => state.auth);
  return (
    <Box 
    component='nav'
    sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: {xs: 'block'},
          '&.MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component='div'
          >{displayName}</Typography>
        </Toolbar>
      </Drawer>

    </Box>
  )
}
