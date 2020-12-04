import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Button, Grid, Paper, Card, Typography } from "@material-ui/core";

import PeopleIcon from "@material-ui/icons/People";
import DomainIcon from "@material-ui/icons/Domain";

import { Link } from "react-router-dom";

const DepartmentView = (props) => {
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={3}>
          <Card
            style={{
              backgroundColor: "#00c0ef",
              paddingTop: 10,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="h3"> 5</Typography>
                <Typography variant="p">Phòng ban</Typography>
              </Grid>
              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              style={{ color: "white", backgroundColor: "#3c8dbc" }}
            >
              <Typography variant="caption">Thông tin chi tiết</Typography>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            style={{
              backgroundColor: "#00c0ef",
              paddingTop: 10,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="h3"> 5</Typography>
                <Typography variant="p">Phòng ban</Typography>
              </Grid>
              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              style={{ color: "white", backgroundColor: "#3c8dbc" }}
            >
              <Typography variant="caption">Thông tin chi tiết</Typography>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            style={{
              backgroundColor: "#00c0ef",
              paddingTop: 10,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="h3"> 5</Typography>
                <Typography variant="p">Phòng ban</Typography>
              </Grid>
              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              style={{ color: "white", backgroundColor: "#3c8dbc" }}
            >
              <Typography variant="caption">Thông tin chi tiết</Typography>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            style={{
              backgroundColor: "#00c0ef",
              paddingTop: 10,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="h3"> 5</Typography>
                <Typography variant="p">Phòng ban</Typography>
              </Grid>
              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              style={{ color: "white", backgroundColor: "#3c8dbc" }}
            >
              <Typography variant="caption">Thông tin chi tiết</Typography>
            </Button>
          </Card>
        </Grid>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default DepartmentView;
