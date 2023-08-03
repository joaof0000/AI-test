import { Header, Segment, Image, Icon, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader({ user, handleLogout }) {
  return (
    <Segment clearing style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <Grid columns={3}>
        <Grid.Column floated="left" textAlign="left">
          <Header as="h3">
            <Link to="/" style={{ color: "red", marginRight: "10px" }}>
              <Icon name="home" />
            </Link>
            <Link to={`/${user?.username}`} style={{ color: "white" }}>
              <Image
                src={
                  user?.photoUrl
                    ? user?.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
                avatar
                style={{ marginRight: "10px" }}
              />
              Hi there, Time to write a blog, {user?.username}
            </Link>
          </Header>
        </Grid.Column>
        <Grid.Column floated="right" textAlign="right">
          <Header as="h2">
            <Link to="" onClick={handleLogout} style={{ color: "red" }}>
              GoodBye
            </Link>
          </Header>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
