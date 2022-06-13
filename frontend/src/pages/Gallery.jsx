import WebsiteCard from "@components/WebsiteCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Home() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/projects").then(({ data }) => {
      setWebsites(data);
    });
  }, []);
  return (
    <Container>
      <Grid container>
        <h2>2203-JS</h2>
        {websites.map((website) => {
          return (
            <WebsiteCard
              key={website.id}
              link={website.link}
              title={website.title}
              thumbSrc={website.thumbSrc}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
