"use client";

import { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material/";
import ShowCard from "@/components/showcard";
import Loading from "@/components/Loading";

export default function TVShows() {
  interface Show {
    id: number;
    name: string;
    image?: { medium: string };
    rating?: { average: number };
    summary: string;
  }

  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();
        setShows(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching shows:", error);
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        TV Shows
      </Typography>
      <Grid container spacing={3}>
        {shows.map((show) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
            <ShowCard
              id={show.id}
              name={show.name}
              image={show.image?.medium}
              summary={show.summary}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
