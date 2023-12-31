import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import { Page } from "./Page";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { EntryDescription } from "../components/entry/EntryDescription";
import { EntryImage } from "../components/entry/EntryImage";
import { useContext, useMemo } from "react";
import { CampaignContext } from "../context/CampaignContext";

const FETCH_ENTRY_QUERY = gql(`
    query FetchEntry($entryId: UUID!) {
        entry(entryId: $entryId) {
            id
            campaignId
            title
            entryTextRich
            createdAt
            lastModifiedAt
            createdBy
            lastModifiedBy
            entryTextSummary
            categoryId
          }
        }
`);

export const EntryPage = () => {
  const { entryId } = useParams();

  const { data, loading, error } = useQuery(FETCH_ENTRY_QUERY, {
    variables: { entryId },
  });

  const {campaign} = useContext(CampaignContext);

  const breadcrumbs = useMemo(() => {
    if (!campaign || !data?.entry) {
      return [{title: "Campaigns", href: "/"}];
    }

    return [{title: "Campaigns", href: "/"}, {title: campaign.title, href: `/campaigns/${campaign.id}`}, {title: data.entry.title, href: `/campaigns/${campaign.id}/entries/${data.entry.id}`}]
  }, [campaign, data?.entry])

  return (
    <Page requireAuthenticatedUser pageTitle={data?.entry.title ?? ""} breadcrumbs={breadcrumbs}>
      <Grid container spacing={2}>
        {(loading || !data) && (
          <Grid item xs={12} textAlign="center" justifyContent="center">
            <Skeleton variant="rectangular" width={280} height={120} />
          </Grid>
        )}
        {error && (
          <Grid item xs={12} textAlign="center" justifyContent="center">
            <Typography variant="h5">An error occurred</Typography>
          </Grid>
        )}
        {data && (
          <>
            <Grid item xs={12}>
              <Box mt={2} />
            </Grid>
            <Grid item xs={8}>
              <EntryDescription readonly={false} entry={data.entry} />
            </Grid>
            <Grid item xs={4}>
              <EntryImage entry={data.entry} />
            </Grid>
          </>
        )}
      </Grid>
    </Page>
  );
};
